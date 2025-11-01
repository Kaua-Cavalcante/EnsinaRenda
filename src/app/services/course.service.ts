import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { COURSE_DATA } from '../../assets/data/course-data';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private modules = COURSE_DATA;
  private selectedLessonSource = new BehaviorSubject<any>(null);
  selectedLesson$ = this.selectedLessonSource.asObservable();
  
  constructor() { }

  getModules() {
    return this.modules;
  }

  selectLesson(lesson: any) {
    if (!lesson) return;
    this.selectedLessonSource.next(lesson);
    this.saveLastLesson(lesson.id);
  }

  // Salva a última aula no localStorage
  saveLastLesson(lessonId: number) {
    localStorage.setItem('lastLessonId', lessonId.toString());
  }

  // Recupera a última aula do localStorage
  getLastLesson() {
    const lastLessonId = localStorage.getItem('lastLessonId');
    if (lastLessonId) {
      for (const module of this.modules) {
        const found = module.lessons.find(
          (lesson: any) => lesson.id === Number(lastLessonId)
        );
        if (found) return found;
      }
    }

    // Se nenhuma aula salva, retorna a primeira
    return this.modules[0].lessons[0];
  }
}
