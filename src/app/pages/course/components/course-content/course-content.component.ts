import { NgIf } from "@angular/common";
import { Component, Input } from '@angular/core';
import { CourseService } from '../../../../services/course.service';

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
  completed: boolean = false;
  nextLesson: boolean = false;

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.courseService.selectedLesson$.subscribe((lesson) => {
      this.selectedLesson = lesson;
    });
  }

  toggleCompleted() {
    if (this.completed) {
      this.nextLesson = true;
    } else {
      this.completed = true;
    }
  }
}
