import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
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

  nomeValido(): boolean {
    return this.nome.trim().split(' ').length >= 2;
  }

  emailValido(): boolean {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(this.email);
  }

  dataNascimentoValida(): boolean {
    if (!this.dataNascimento) return false;
    const hoje = new Date();
    const dataNasc = new Date(this.dataNascimento);
    const idade = hoje.getFullYear() - dataNasc.getFullYear();
    const jaFezAniversario = hoje.getMonth() > dataNasc.getMonth() ||
      (hoje.getMonth() === dataNasc.getMonth() && hoje.getDate() >= dataNasc.getDate());

    const idadeFinal = jaFezAniversario ? idade : idade - 1;
    return dataNasc <= hoje && idadeFinal >= 15;
  }

  private formatarDataNascimento(dataISO: string): string {
    if (!dataISO) return '';
    const partes = dataISO.split('-');
    if (partes.length !== 3) return dataISO; // fallback em caso de erro
    return `${partes[2]}/${partes[1]}/${partes[0]}`;
  }

  async onSubmit(form: NgForm) {
    if (!form.valid) {
      alert("Por favor, preencha todos os campos corretamente.");
      return;
    }

    if (!this.nomeValido()) {
      alert("Informe seu nome completo (nome e sobrenome).");
      return;
    }

    if (!this.emailValido()) {
      alert("Informe um e-mail válido.");
      return;
    }

    if (!this.dataNascimentoValida()) {
      alert("Informe uma data de nascimento válida. Você deve ter pelo menos 15 anos.");
      return;
    }

    if (this.senha !== this.confirmarSenha) {
      alert("As senhas não coincidem.");
      return;
    }

    try {
      const dataFormatada = this.formatarDataNascimento(this.dataNascimento);
      await this.authService.cadastrar(this.nome, this.email, this.senha, dataFormatada);
      alert("Cadastro realizado com sucesso!");
      this.router.navigate(['/login']);
    } catch (error: any) {
      console.error("Erro ao cadastrar:", error);
      alert("Falha no cadastro. Por favor, tente novamente.");
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
