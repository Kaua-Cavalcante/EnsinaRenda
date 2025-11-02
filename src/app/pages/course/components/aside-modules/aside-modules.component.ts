import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { COURSE_DATA } from '../../../../../assets/data/course-data';
import { CourseService } from '../../../../services/course.service';

@Component({
  selector: 'app-aside-modules',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aside-modules.component.html',
  styleUrl: './aside-modules.component.css'
})
export class AsideModulesComponent implements OnInit {
  @Input() modules: any[] = COURSE_DATA;
  @Output() lessonSelected = new EventEmitter<any>();

  openedIndex: number = 0;
  selectedLessonId: number | null = null;
  generatingTest: boolean = false;

  constructor(private courseService: CourseService, private router: Router) {}

  async ngOnInit() {
    this.modules = this.courseService.getModules();

    await this.courseService.loadCompletedLessons();

    const firstLesson = this.modules[0]?.lessons[0];
    if (firstLesson) {
      this.selectedLessonId = firstLesson.id;
      this.lessonSelected.emit(firstLesson);
      this.courseService.selectLesson(firstLesson);
    }
  }

  toggleLessons(index: number) {
    this.openedIndex = this.openedIndex === index ? -1 : index;
  }

  onLessonClick(lesson: any) {
    this.selectedLessonId = lesson.id;
    this.lessonSelected.emit(lesson);
    this.courseService.selectLesson(lesson);
  }

  isLessonCompleted(id: number): boolean {
    return this.courseService.isLessonCompleted(id);
  }

  isModuleCompleted(module: any): boolean {
    if (!module.lessons?.length) return false;
    return module.lessons.every((lesson: any) =>
      this.courseService.isLessonCompleted(lesson.id)
    );
  }

  finishModule(module: any) {
    if (this.generatingTest) return; // prevent duplicate clicks

    if (!module?.id) {
      console.warn('Módulo sem id:', module);
      return;
    }

    this.generatingTest = true;

    this.courseService.generateTest(String(module.id)).subscribe({
      next: (res: any) => {
        // Ajuste conforme formato de resposta da API
        if (res?.sucesso || res?.success) {
          // navega para a prova que será renderizada dentro do layout /course
          this.router.navigate(['/course/prova']);
        } else {
          const msg = res?.mensagem || res?.message || 'Erro ao gerar prova.';
          alert(msg);
        }
      },
      error: (err: any) => {
        console.error('Erro ao gerar prova:', err);
        alert('Erro ao gerar prova. Tente novamente.');
      },
      complete: () => {
        this.generatingTest = false;
      }
    });
  }
}
