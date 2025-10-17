import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-lesson-header',
  standalone: true,
  imports: [],
  templateUrl: './lesson-header.component.html',
  styleUrls: ['./lesson-header.component.css']
})
export class LessonHeaderComponent {
  @Output() toggleAside = new EventEmitter<void>();
  @Input() isAsideVisible: boolean = true;

  onToggleAside() {
    this.toggleAside.emit();
  }
}
