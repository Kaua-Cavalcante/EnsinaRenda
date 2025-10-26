import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FooterService } from '../../services/footer.service';
import { HeaderService } from '../../services/header.service';
import { FooterComponent } from '../../shared/footer/footer.component';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterLink, FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  senha: string = '';
  showPassword: boolean = false;
  loading: boolean = false;
  
  constructor(
    private HeaderService: HeaderService, 
    private FooterService: FooterService,
    private authService: AuthService,
    private router: Router
  ) { }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  async onSubmit() {
    if (!this.email || !this.senha) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    this.loading = true;

    try {
      const response = await this.authService.login(this.email, this.senha);

      // Verifica se o token foi salvo e redireciona
      if (response?.token || response?.accessToken) {
        this.router.navigate(['/course']);
      } else {
        alert('Falha no login. Por favor, tente novamente.');
      }
    } catch (error: any) {
      console.error('Erro ao fazer login:', error);
      alert('Falha no login. Verifique suas credenciais e tente novamente.');
    } finally {
      this.loading = false;
    }
  }

  ngOnInit() {
    // Se já estiver logado, redireciona direto
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/course']);
      return;
    }

    this.HeaderService.updateHeader({
      showLogin: true,
      showRegister: true,
      showNavigation: false
    })

    this.FooterService.updateFooter({
      showGoTop: false
    });
  }
}
