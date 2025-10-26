import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { HeaderService } from '../../services/header.service';
import { AsideModulesComponent } from './components/aside-modules/aside-modules.component';
import { LessonHeaderComponent } from './components/lesson-header/lesson-header.component';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [AsideModulesComponent, LessonHeaderComponent, CommonModule, RouterModule],
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  constructor(
    private HeaderService: HeaderService,
    private router: Router
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showAssessment = event.url.includes('/course/prova');
      }
    });
  }

  ngOnInit() {
    this.HeaderService.updateHeader({
      showLogin: false,
      showRegister: false,
      showNavigation: false
    });
    // Inicializa o estado baseado na URL atual
    this.showAssessment = this.router.url.includes('/course/prova');
  }

  IsAsideVisible: boolean = true;
  showAssessment: boolean = false;

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
