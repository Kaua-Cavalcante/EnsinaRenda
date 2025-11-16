import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { COURSE_DATA } from '../../assets/data/course-data';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private modules = COURSE_DATA;
  private selectedLessonSource = new BehaviorSubject<any>(null);
  selectedLesson$ = this.selectedLessonSource.asObservable();

  private completedLessons: number[] = [];
  private apiUrl = `${environment.apiUrl}/v1/aluno/aulas`;
  // Estado compartilhado para indicar geração de prova em andamento
  private generatingSubject = new BehaviorSubject<boolean>(false);
  generating$ = this.generatingSubject.asObservable();
  
  constructor(private http: HttpClient, private authService: AuthService) { }

  getModules() {
    return COURSE_DATA;
  }

  selectLesson(lesson: any) {
    this.selectedLessonSource.next(lesson);
  }

  async loadCompletedLessons(): Promise<void> {
    try {
      const token = this.authService.getToken();
      const response: any = await this.http.get(this.apiUrl, {
        headers: { Authorization: `Bearer ${token}` }
      }).toPromise();

      if (response?.sucesso && response.moduloAulas) {
        // filtra todos os IDs de aulas concluídas (status = true)
        this.completedLessons = response.moduloAulas
          .flatMap((mod: any) => mod.aulas)
          .filter((a: any) => a.status)
          .map((a: any) => Number(a.id));
      } else {
        this.completedLessons = [];
      }
    } catch (error) {
      console.error('Erro ao carregar status das aulas:', error);
      this.completedLessons = [];
    }
  }

  // Retorna se uma aula foi concluída
  isLessonCompleted(id: number): boolean {
    return this.completedLessons.includes(id);
  }

  // Marca aula como concluída
  markLessonAsCompleted(id: number) {
    if (!this.completedLessons.includes(id)) {
      this.completedLessons.push(id)
    }
  }

  isModuleCompleted(moduleId: number): boolean {
    const module = this.modules.find((m) => m.id === moduleId);
    if (!module) return false;
    return module.lessons.every((l: any) => this.isLessonCompleted(l.id));
  }

  generateTest(idModulo: string) {
    const token = this.authService.getToken();
    if (!token) {
      console.error('Token não encontrado');
      throw new Error('Usuário não autenticado');
    }
    
    const url = `${environment.apiUrl}/v1/prova/gerar`;
    return this.http.post(url, { idModulo }, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
  }

  // Busca a prova gerada para um módulo
  getGeneratedTest(idModulo: string) {
    const token = this.authService.getToken();
    if (!token) {
      console.error('Token não encontrado');
      throw new Error('Usuário não autenticado');
    }

    const url = `${environment.apiUrl}/v1/prova/gerada/${idModulo}`;
    return this.http.get(url, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
  }

  // Envia a prova respondida para correção
  submitAnsweredTest(idModulo: string, provaRespondida: string) {
    const token = this.authService.getToken();
    if (!token) {
      console.error('Token não encontrado');
      throw new Error('Usuário não autenticado');
    }

    const url = `${environment.apiUrl}/v1/prova/corrigir`;
    const body = {
      idModulo,
      provaRespondida
    };

    return this.http.post(url, body, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
  }

  // Busca a prova corrigida para um módulo (exibe feedbacks)
  getCorrectedTest(idModulo: string) {
    const token = this.authService.getToken();
    if (!token) {
      console.error('Token não encontrado');
      throw new Error('Usuário não autenticado');
    }

    const url = `${environment.apiUrl}/v1/prova/corrigida/${idModulo}`;
    return this.http.get(url, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
  }

  // Permite componentes acionarem o overlay/global loading de geração de prova
  setGenerating(flag: boolean) {
    this.generatingSubject.next(flag);
  }

  // Busca a média final do usuário
  getFinalAverage() {
    const token = this.authService.getToken();
    if (!token) {
      console.error('Token não encontrado');
      throw new Error('Usuário não autenticado');
    }

    const url = `${environment.apiUrl}/v1/media/final`;
    return this.http.get(url, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
  }

  getLastLesson() {
    if (this.completedLessons.length === 0) return null;

    const lastCompletedId = Math.max(...this.completedLessons);
    const nextLessonId = lastCompletedId + 1;

    for (const module of this.modules) {
      for (const lesson of module.lessons) {
        if (lesson.id === nextLessonId) {
          return lesson;
        }
      }
    }

    for (const module of this.modules) {
      for (const lesson of module.lessons) {
        if (lesson.id === lastCompletedId) {
          return lesson;
        }
      }
    }

    return null;
  }
}
