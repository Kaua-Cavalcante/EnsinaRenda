import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { COURSE_DATA } from '../../../assets/data/course-data';
import { CourseService } from '../../services/course.service';
import { HeaderService } from '../../services/header.service';
import { AsideModulesComponent } from './components/aside-modules/aside-modules.component';
import { LessonHeaderComponent } from './components/lesson-header/lesson-header.component';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [AsideModulesComponent, LessonHeaderComponent, CommonModule, RouterModule, RouterOutlet],
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  modules = COURSE_DATA;
  selectedLesson: any = null;
  IsAsideVisible: boolean = true;
  showAssessment: boolean = false;

  constructor(
  private HeaderService: HeaderService,
  private router: Router,
  public courseService: CourseService
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showAssessment = event.url.includes('/course/prova');
      }
    });
  }

  async ngOnInit() {
    this.HeaderService.updateHeader({
      showLogin: false,
      showRegister: false,
      showNavigation: false
    });

    await this.courseService.loadCompletedLessons();

    const lastLesson = this.courseService.getLastLesson();

    if (lastLesson) {
      this.selectedLesson = lastLesson;
      this.courseService.selectLesson(lastLesson);
    } else {
      // Se não houver, seleciona a primeira aula do primeiro módulo
      const firstLesson = this.modules[0]?.lessons[0];
      if (firstLesson) {
        this.selectedLesson = firstLesson;
        this.courseService.selectLesson(firstLesson);
      }
    }

    // Inicializa o estado baseado na URL atual
    this.showAssessment = this.router.url.includes('/course/prova');
  }

  onLessonSelected(lesson: any) {
    this.selectedLesson = lesson;
    this.courseService.selectLesson(lesson);
  }


  toggleAside() {
    this.IsAsideVisible = !this.IsAsideVisible;
  }

  onTestSelected(isTest: boolean) {
    if (isTest) {
      this.router.navigate(['/course/prova']);
    } else {
      this.router.navigate(['/course']);
    }
  }
}
