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
  selector: 'app-signup',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterLink, FormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  nome: string = '';
  email: string = '';
  senha: string = '';
  confirmarSenha: string = '';
  dataNascimento: string = '';

  showPassword: boolean = false;
  senhasNaoCoincidem: boolean = false;

  constructor(
    private HeaderService: HeaderService,
    private FooterService: FooterService,
    private authService: AuthService,
    private router: Router
  ) { }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  private formatarDataNascimento(dataISO: string): string {
    if (!dataISO) return '';
    const partes = dataISO.split('-');
    if (partes.length !== 3) return dataISO; // fallback em caso de erro
    return `${partes[2]}/${partes[1]}/${partes[0]}`;
  }

  async onSubmit() {
    this.senhasNaoCoincidem = this.senha !== this.confirmarSenha;

    if (this.senhasNaoCoincidem) {
      alert('As senhas não coincidem.');
      return;
    }

    const dataFormatada = this.formatarDataNascimento(this.dataNascimento);

    try {
      await this.authService.cadastrar(this.nome, this.email, this.senha, dataFormatada);
      alert('Cadastro realizado com sucesso!');
      // Após o cadastro bem-sucedido, redireciona para o login
      this.router.navigate(['/login']);
    } catch (error: any) {
      console.error('Erro ao cadastrar:', error);
    }
  }

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
}
