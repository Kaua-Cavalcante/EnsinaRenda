import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { COURSE_DATA } from '../../../assets/data/course-data';
import { CourseService } from '../../services/course.service';
import { HeaderService } from '../../services/header.service';
import { AsideModulesComponent } from './components/aside-modules/aside-modules.component';
import { CourseContentComponent } from './components/course-content/course-content.component';
import { LessonHeaderComponent } from './components/lesson-header/lesson-header.component';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [AsideModulesComponent, LessonHeaderComponent, CommonModule, RouterModule, CourseContentComponent],
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
    private courseService: CourseService
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showAssessment = event.url.includes('/course/prova');
      }
    });
  }

  ngOnInit() {
    // Busca a última aula acessada (ou a primeira se não houver)
    const lastLesson = this.courseService.getLastLesson();
    this.courseService.selectLesson({ ...lastLesson });

    this.HeaderService.updateHeader({
      showLogin: false,
      showRegister: false,
      showNavigation: false
    });
    // Inicializa o estado baseado na URL atual
    this.showAssessment = this.router.url.includes('/course/prova');
  }

  onLessonSelected(lesson: any) {
    this.courseService.selectLesson({ ...lesson });
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
