import { NgIf } from "@angular/common";
import { Component, Input } from '@angular/core';
import { Router } from "@angular/router";
import { CourseService } from '../../../../services/course.service';
import { LessonService } from "../../../../services/lesson.service";

@Component({
  selector: 'app-course-content',
  standalone: true,
  imports: [NgIf],
  templateUrl: './course-content.component.html',
  styleUrl: './course-content.component.css'
})
export class CourseContentComponent {
  @Input() selectedLesson: any = null;
  @Input() lesson: any;
  completed = false;
  message = '';
  moduleCompleted = false;
  loadingProva = false;

  constructor(
    private courseService: CourseService,
    private lessonService: LessonService,
    private router: Router
  ) { }

  async ngOnInit() {
    this.courseService.selectedLesson$.subscribe((lesson) => {
      this.selectedLesson = lesson;
      this.completed = lesson ? this.courseService.isLessonCompleted(lesson.id) : false; // reseta botão
      this.message = '';
      this.checkModuleCompletion()
    });
  }

  toggleCompleted() {
    if (!this.selectedLesson) return;

    if (this.completed) return;

    this.lessonService.completeLesson(this.selectedLesson.id).subscribe({
      next: (res) => {
        if (res?.sucesso) {
          this.message = res.mensagem || 'Aula concluida com sucesso!';
          this.completed = true;
          this.courseService.markLessonAsCompleted(this.selectedLesson.id);
        }
      },
      error: (err) => {
        console.error('Erro ao concluir a aula:', err);
        this.message = 'Erro ao concluir aula. Tente novamente.'
      }
    });
  }

  checkModuleCompletion() {
    if (!this.selectedLesson?.moduleId) {
      console.warn('⚠️ Aula sem moduleId:', this.selectedLesson);
      return
    }
    const moduleCompleted = this.courseService.isModuleCompleted(this.selectedLesson.moduleId);
    console.log('🔍 Módulo', this.selectedLesson.moduleId, 'completo?', moduleCompleted);

    this.moduleCompleted = moduleCompleted;
  }
}
