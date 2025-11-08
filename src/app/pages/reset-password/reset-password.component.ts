import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterService } from '../../services/footer.service';
import { HeaderService } from '../../services/header.service';
import { FooterComponent } from '../../shared/footer/footer.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { sha256 } from '../../utils/hash.util';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, FormsModule, RouterLink, CommonModule],
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  senha: string = '';
  confirmarSenha: string = '';
  loading = false;
  message: string | null = null;
  errorMessage: string | null = null;
  token: string | null = null;

  constructor(
    private HeaderService: HeaderService,
    private FooterService: FooterService,
    private route: ActivatedRoute,
    private router: Router,
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

    // Pega token da query string (ex: /reset?token=...)
    this.token = this.route.snapshot.queryParamMap.get('token');
  }

  async onSubmit() {
    this.message = null;
    this.errorMessage = null;

    if (!this.token) {
      this.errorMessage = 'Token de redefinição não encontrado.';
      return;
    }

    if (!this.senha || !this.confirmarSenha) {
      this.errorMessage = 'Preencha os campos de senha.';
      return;
    }

    if (this.senha !== this.confirmarSenha) {
      this.errorMessage = 'As senhas não conferem.';
      return;
    }

    // Opcional: validar requisitos mínimos de senha
    if (this.senha.length < 6) {
      this.errorMessage = 'A senha deve ter ao menos 6 caracteres.';
      return;
    }

    this.loading = true;
    try {
      const senhaHash = await sha256(this.senha);
      const res: any = await this.authService.updatePassword(this.token, senhaHash);
      this.message = res?.mensagem ?? 'Senha redefinida com sucesso.';

      // Navega para login após sucesso (aguarda 1.5s para o usuário ver a mensagem)
      setTimeout(() => this.router.navigate(['/login']), 1500);
    } catch (err: any) {
      console.error('Erro ao redefinir senha:', err);
      this.errorMessage = err?.error?.mensagem || 'Erro ao redefinir a senha. Tente novamente.';
    } finally {
      this.loading = false;
    }
  }
}
