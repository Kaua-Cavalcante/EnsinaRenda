import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../../../../services/course.service';

@Component({
  selector: 'app-assessment-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './assessment-test.component.html',
  styleUrl: './assessment-test.component.css'
})
export class AssessmentTestComponent implements OnInit, OnDestroy {
  @ViewChildren('questionGroup') questionGroups!: QueryList<ElementRef>;
  moduleId: string | null = null;
  loading = true;
  error = '';
  test: any = null;
  answers: Record<number, number> = {};
  submitting: boolean = false;
  submitResult: any = null;
  correctedTest: any = null;
  attemptedSubmit: boolean = false;
  validationMessage: string = '';
  private _validationTimeout: any = null;
  totalQuestions: number = 0;
  correctAnswers: number = 0;
  scorePercentage: number = 0;
  finalAverage: number | null = null;
  finalMessage: string = '';
  finalPassed: boolean | null = null;
  showFinalModal: boolean = false;

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

  private focusFirstUnanswered(num: number) {
    // small timeout so view is stable before querying elements
    setTimeout(() => {
      if (!this.questionGroups || this.questionGroups.length === 0) return;
      const groups = this.questionGroups.toArray();
      for (const g of groups) {
        const el = g.nativeElement as HTMLElement;
        const dataNum = el.getAttribute('data-num') ?? (el.dataset ? el.dataset['num'] : null);
        if (String(dataNum) === String(num)) {
          try {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          } catch (e) { /* ignore */ }

          // focus the first radio input inside this question group
          const input = el.querySelector('input[type="radio"]') as HTMLElement | null;
          if (input && typeof (input as any).focus === 'function') {
            (input as any).focus();
          } else {
            // fallback: focus the container
            try { el.focus(); } catch (e) { /* ignore */ }
          }
          break;
        }
      }
    }, 50);
  }

  ngOnDestroy(): void {
    if (this._validationTimeout) {
      clearTimeout(this._validationTimeout);
      this._validationTimeout = null;
    }
  }

  isUnanswered(num: number): boolean {
    return this.answers[num] === undefined || this.answers[num] === null;
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
    if (!this.moduleId || !this.test) return;

    // mark that user attempted to submit — used to display unanswered highlights
    this.attemptedSubmit = true;

    // Validation: ensure the user answered all questions
    const questionNums: number[] = (this.test.questoes || []).map((q: any) => q.numQuestao);
    const firstMissing = questionNums.find((n) => this.answers[n] === undefined || this.answers[n] === null);
    if (firstMissing !== undefined) {
      // show transient validation toast and focus
      this.validationMessage = `Por favor responda a pergunta ${firstMissing}.`;
      // clear any previous timeout
      if (this._validationTimeout) {
        clearTimeout(this._validationTimeout);
      }
      this._validationTimeout = setTimeout(() => {
        this.validationMessage = '';
        this._validationTimeout = null;
      }, 4000);

      // focus the first unanswered question
      this.focusFirstUnanswered(firstMissing);
      return;
    }

    // build provaRespondida object
    const provaRespondidaObj: any = {
      titulo_prova: this.test.titulo_prova || this.test.titulo || null,
      questoes_respondidas: (this.test.questoes || []).map((q: any) => ({
        numQuestao: q.numQuestao,
        enunciado: q.enunciado,
        opcoes: q.opcoes,
        resposta_usuario: typeof this.answers[q.numQuestao] === 'number' ? this.answers[q.numQuestao] : null
      }))
    };

    const bodyStr = JSON.stringify(provaRespondidaObj, null, 2);

  // clear any previous validation error and prepare sending
  // user provided all answers so remove the attempted highlight
  this.attemptedSubmit = false;
  this.error = '';
  this.submitting = true;
  this.submitResult = null;

    this.courseService.submitAnsweredTest(this.moduleId, bodyStr).subscribe({
      next: (res: any) => {
        this.submitResult = res;
        // after submitting, try fetching the corrected test (feedback)
        if (this.moduleId) {
          this.courseService.getCorrectedTest(this.moduleId).subscribe({
            next: (corrRes: any) => {
              try {
                const corrStr = corrRes?.provaCorrigida;
                if (corrStr) {
                  // API returns provaCorrigida as a JSON string
                  this.correctedTest = JSON.parse(corrStr);

                  // Attach corrected feedback to each question in the current test
                  if (this.test && Array.isArray(this.test.questoes) && this.correctedTest && Array.isArray(this.correctedTest.questoes_corrigidas)) {
                    const map = new Map<number, any>();
                    for (const cq of this.correctedTest.questoes_corrigidas) {
                      map.set(Number(cq.numQuestao), cq);
                    }

                    for (const q of this.test.questoes) {
                      const corr = map.get(Number(q.numQuestao));
                      // attach under a non-conflicting property
                      (q as any).corrected = corr ?? null;
                    }
                  }
                } else {
                  this.correctedTest = null;
                }
                // Calculate score and scroll to top
                this.calculateScore();
                this.scrollToTop();
                // Fetch final average from backend and show final message if available
                console.log('Chamando getFinalAverage...');
                this.courseService.getFinalAverage().subscribe({
                  next: (avgRes: any) => {
                    console.log('Resposta getFinalAverage:', avgRes);
                    try {
                      // Try common numeric field names for average (ignore backend message text)
                      let val: any = null;
                      if (avgRes) {
                        // support responses where the value is nested (e.g. { resultadoFinal: { media: 75 } })
                        const containers = [avgRes, avgRes.resultadoFinal].filter(Boolean);
                        for (const container of containers) {
                          val = container.porcentagemMedia;
                          if (val === undefined || val === null) {
                            for (const k of Object.keys(container)) {
                              const v = container[k];
                              if (typeof v === 'number') { val = v; break; }
                              if (typeof v === 'string' && !isNaN(parseFloat(v))) { val = parseFloat(v); break; }
                            }
                          }
                          if (val !== undefined && val !== null) break;
                        }
                      }

                      const parsed = typeof val === 'string' ? parseFloat(val) : val;
                      console.log('Valor extraído da média final:', parsed);
                      this.finalAverage = parsed !== undefined && parsed !== null && !isNaN(parsed) ? parsed : null;

                      if (this.finalAverage !== null) {
                        // Always use custom messages based on average, never backend message
                        if (this.finalAverage >= 70) {
                          this.finalMessage = 'Parabéns! Sua média final é suficiente para aprovação.';
                          this.finalPassed = true;
                        } else {
                          this.finalMessage = 'Sua média final ainda está abaixo de 70%. Considere refazer as provas para melhorar sua média.';
                          this.finalPassed = false;
                        }

                        // show modal when we have average and message
                        this.showFinalModal = true;
                        console.log('Modal aberto:', { finalAverage: this.finalAverage, finalPassed: this.finalPassed, showFinalModal: this.showFinalModal });
                      }
                    } catch (e) {
                      console.error('Erro ao processar média final:', e);
                      this.finalAverage = null;
                      this.finalMessage = '';
                      this.finalPassed = null;
                    }
                  },
                  error: (err) => {
                    console.error('Erro ao buscar média final:', err);
                    this.finalAverage = null;
                    this.finalMessage = '';
                    this.finalPassed = null;
                  }
                });
              } catch (e) {
                console.error('Erro ao parsear prova corrigida:', e);
                this.correctedTest = null;
              }
            },
            error: (err) => {
              console.error('Erro ao buscar prova corrigida:', err);
              this.correctedTest = null;
            }
          });
        }
      },
      error: (err) => {
        console.error('Erro ao enviar prova respondida:', err);
        this.submitResult = { error: err?.error || err };
      },
      complete: () => {
        this.submitting = false;
      }
    });
  }

  private calculateScore(): void {
    if (!this.correctedTest || !Array.isArray(this.correctedTest.questoes_corrigidas)) {
      this.totalQuestions = 0;
      this.correctAnswers = 0;
      this.scorePercentage = 0;
      return;
    }

    const questions = this.correctedTest.questoes_corrigidas;
    this.totalQuestions = questions.length;
    this.correctAnswers = 0;

    for (const q of questions) {
      if (q.resposta_usuario === q.resposta_correta) {
        this.correctAnswers++;
      }
    }

    this.scorePercentage = this.totalQuestions > 0 ? (this.correctAnswers / this.totalQuestions) * 100 : 0;
  }

  private scrollToTop(): void {
    try {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (e) {
      // fallback para navegadores antigos
      document.documentElement.scrollTop = 0;
    }
  }

}
