import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { sha256 } from '../utils/hash.util';
import { isTokenExpired } from '../utils/jwt.util';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.apiUrl}/v1/aluno`;

  constructor(private http: HttpClient) { }

  // Cadastro
  async cadastrar(nome: string, email: string, senha: string, dataNascimento: string) {
    const emailHash = await sha256(email);
    const senhaHash = await sha256(senha);

    const body = {
      nome,
      email: emailHash,
      senha: senhaHash,
      data_nascimento:dataNascimento
    };

    return this.http.post(this.apiUrl, body).toPromise();
  }

  // Login
  async login(email: string, senha: string) {
    const emailHash = await sha256(email);
    const senhaHash = await sha256(senha);

    const body = { email: emailHash, senha: senhaHash };

    try {
      const response: any = await this.http.post(`${this.apiUrl}/auth`, body).toPromise();

      // Salva o token retornado pelo backend
      if (response?.token) {
        localStorage.setItem('token', response.token);
      } else if (response?.accessToken) {
        localStorage.setItem('token', response.accessToken);
      } else {
        console.warn('Nenhum token retornado pela API.');
      }

      return response;
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      throw error;
    }
  }

  // Verifica se há token salvo
  isLoggedIn(): boolean { 
    const token = localStorage.getItem('token');
    if (!token) return false;

    if (isTokenExpired(token)) {
      this.logout(); // Remove o token expirado
      return false;
    }

    return true;
  }

  // Envia solicitação de redefinição de senha para o backend
  // Body esperado: { "email": "user@example.com" }
  async requestPasswordReset(email: string) {
    const body = { email };
    return this.http.post(`${environment.apiUrl}/v1/reset/senha`, body).toPromise();
  }

  // Atualiza a senha do usuário usando o token recebido por e-mail
  // Body esperado: { token: string, senha: string(hashed) }
  async updatePassword(token: string, senhaHash: string) {
    const body = { token, senha: senhaHash };
    return this.http.put(`${this.apiUrl}/senha`, body).toPromise();
  }

  // Obtém o token salvo
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Remove o token ao sair
  logout(): void {
    localStorage.removeItem('token');
  }
}
