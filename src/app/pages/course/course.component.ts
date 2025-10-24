import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderService } from '../../services/header.service';
import { AsideModulesComponent } from './components/aside-modules/aside-modules.component';
import { CourseContentComponent } from "./components/course-content/course-content.component";
import { LessonHeaderComponent } from './components/lesson-header/lesson-header.component';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [AsideModulesComponent, LessonHeaderComponent, CommonModule, CourseContentComponent],
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  constructor(private HeaderService: HeaderService) { }

  ngOnInit() {
    this.HeaderService.updateHeader({
      showLogin: false,
      showRegister: false,
      showNavigation: false
    })
  }

  IsAsideVisible: boolean = true;

  toggleAside() {
    this.IsAsideVisible = !this.IsAsideVisible;
  }
}
