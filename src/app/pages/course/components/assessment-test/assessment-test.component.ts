import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../../../../services/course.service';

@Component({
  selector: 'app-assessment-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './assessment-test.component.html',
  styleUrl: './assessment-test.component.css'
})
export class AssessmentTestComponent implements OnInit {
  moduleId: string | null = null;
  loading = true;
  error = '';
  test: any = null;
  answers: Record<number, number> = {};

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      const id = params.get('idModulo');
      if (id) {
        this.moduleId = id;
        this.loadTest(id);
      } else {
        // No id provided — try default behavior or show message
        this.error = 'ID do módulo não fornecido.';
        this.loading = false;
      }
    });
  }

  loadTest(id: string) {
    this.loading = true;
    this.error = '';
    this.courseService.getGeneratedTest(id).subscribe({
      next: (res: any) => {
        try {
          const payloadStr = res?.provaGerada;
          if (!payloadStr) {
            this.error = 'Prova não encontrada.';
            this.loading = false;
            return;
          }

          // provaGerada is a JSON string according to the API sample
          this.test = JSON.parse(payloadStr);
        } catch (e) {
          console.error('Erro ao parsear provaGerada:', e);
          this.error = 'Erro ao processar a prova.';
        }
        this.loading = false;
      },
      error: (err) => {
        console.error('Erro ao buscar prova gerada:', err);
        this.error = err?.error?.message || 'Erro ao carregar a prova.';
        this.loading = false;
      }
    });
  }

  submitAnswers() {
    console.log('Respostas:', this.answers);
    // scoring can be implemented later: compare this.answers with test.questoes[].resposta_correta
  }

}
