import { NgIf } from "@angular/common";
import { Component, Input } from '@angular/core';
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
  @Input() lesson: any;
  @Input() selectedLesson: any = null;
  completed = false;
  message = '';


  constructor(
    private courseService: CourseService,
    private lessonService: LessonService
  ) { }

  async ngOnInit() {
    this.courseService.selectedLesson$.subscribe((lesson) => {
      this.selectedLesson = lesson;
      this.completed = lesson ? this.courseService.isLessonCompleted(lesson.id) : false; // reseta botão
      this.message = '';
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


}
