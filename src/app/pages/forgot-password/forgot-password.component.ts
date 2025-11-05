import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { FooterService } from '../../services/footer.service';
import { HeaderService } from '../../services/header.service';
import { FooterComponent } from '../../shared/footer/footer.component';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, FormsModule, CommonModule],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  email: string = '';
  loading: boolean = false;
  message: string = '';
  errorMessage: string = '';

  constructor(
    private HeaderService: HeaderService, 
    private FooterService: FooterService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.HeaderService.updateHeader({
      showLogin: true,
      showRegister: true,
      showNavigation: false
    })

    this.FooterService.updateFooter({
      showGoTop: false
    });
  }

  async onSubmit() {
    // Reset messages
    this.errorMessage = '';
    this.message = '';

    if (!this.email || this.email.trim() === '') {
      this.errorMessage = 'Informe um e-mail válido.';
      return;
    }

    this.loading = true;
    try {
      const res: any = await this.authService.requestPasswordReset(this.email.trim());
      this.message = res?.mensagem ?? 'E-mail enviado com sucesso!';
    } catch (err: any) {
      console.error('Erro ao solicitar reset de senha:', err);
      // Tenta extrair mensagem do erro do backend, caso exista
      this.errorMessage = err?.error?.mensagem || 'Erro ao enviar o e-mail. Tente novamente mais tarde.';
    } finally {
      this.loading = false;
    }
  }
}
