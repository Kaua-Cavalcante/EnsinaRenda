import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-aside-modules',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aside-modules.component.html',
  styleUrl: './aside-modules.component.css'
})
export class AsideModulesComponent {
  lessons = [
    { title: '1. Boas-vindas e visão geral', selected: false },
    { title: '2. Fundamentos essenciais', selected: true },
    { title: '3. Técnicas avançadas', selected: false },
    { title: '4. Análise de casos reais', selected: false },
    { title: '5. Resumo e recursos adicionais', selected: false }
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

}
