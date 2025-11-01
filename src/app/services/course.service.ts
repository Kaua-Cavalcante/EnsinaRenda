import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { COURSE_DATA } from '../../assets/data/course-data';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private modules = COURSE_DATA;
  private selectedLessonSource = new BehaviorSubject<any>(null);
  selectedLesson$ = this.selectedLessonSource.asObservable();

  private completedLessons: number[] = [];
  private apiUrl = 'http://localhost:8081/v1/aluno/aulas';
  
  constructor(private http: HttpClient, private authService: AuthService) { }

  getModules() {
    return this.modules;
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
