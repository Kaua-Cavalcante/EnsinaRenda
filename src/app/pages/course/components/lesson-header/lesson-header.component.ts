import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lesson-header',
  standalone: true,
  imports: [],
  templateUrl: './lesson-header.component.html',
  styleUrls: ['./lesson-header.component.css']
})
export class LessonHeaderComponent {
  @Input() isAsideVisible: boolean = true;
  @Input() currentLessonTitle: string = '';
  @Output() toggleAside = new EventEmitter<void>();

  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  onToggleAside() {
    this.toggleAside.emit();
  }
}
