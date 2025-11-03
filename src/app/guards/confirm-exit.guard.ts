import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { AssessmentTestComponent } from '../pages/course/components/assessment-test/assessment-test.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmExitGuard implements CanDeactivate<AssessmentTestComponent> {
  canDeactivate(component: AssessmentTestComponent): boolean {
    // You could consult the component for unsaved state, but for now always ask
    return window.confirm('Tem certeza que quer sair da prova? Todo o progresso será perdido.');
  }
}
