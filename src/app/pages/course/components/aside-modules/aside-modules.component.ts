import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  constructor(private courseService: CourseService) {}

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
}
