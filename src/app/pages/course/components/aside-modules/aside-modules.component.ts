import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-aside-modules',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aside-modules.component.html',
  styleUrl: './aside-modules.component.css'
})
export class AsideModulesComponent {
  @Output() testSelected = new EventEmitter<boolean>();
  lessons = [
    { title: '1. Boas-vindas e visão geral', selected: false, completed: true, test: false },
    { title: '2. Fundamentos essenciais', selected: true, completed: false, test: false },
    { title: '3. Técnicas avançadas', selected: false, completed: false, test: false },
    { title: '4. Análise de casos reais', selected: false, completed: false, test: false },
    { title: '5. Resumo e recursos adicionais', selected: false, completed: false, test: false },
    { title: '6. Avaliação final', selected: false, completed: false, test: true }
  ];

  modules = [
    { title: 'Módulo 1: Introdução ao curso', lessons: this.lessons, progress: 100 },
    { title: 'Módulo 2: Conceitos básicos', lessons: this.lessons, progress: 38 },
    { title: 'Módulo 3: Tópicos avançados', lessons: this.lessons, progress: 0 },
    { title: 'Módulo 4: Estudo de caso', lessons: this.lessons, progress: 0 },
    { title: 'Módulo 5: Conclusão e próximos passos', lessons: this.lessons, progress: 0 }
  ];

  openedIndex: number | null = null;

  toggleLessons(index: number) {
    this.openedIndex = this.openedIndex === index ? null : index;
  }

  onLessonClick(lesson: any) {
    this.testSelected.emit(lesson.test);
  }
}
