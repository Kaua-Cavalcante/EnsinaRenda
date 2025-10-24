import { Component } from '@angular/core';

@Component({
  selector: 'app-course-content',
  standalone: true,
  imports: [],
  templateUrl: './course-content.component.html',
  styleUrl: './course-content.component.css'
})
export class CourseContentComponent {
  Completed: boolean = false;
  NextLesson: boolean = false;

  toggleCompleted() {
    if (this.Completed) {
      this.NextLesson = true;
    } else {
      this.Completed = true;
    }
  }
}
