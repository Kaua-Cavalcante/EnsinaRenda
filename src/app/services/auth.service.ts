import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { sha256 } from '../utils/hash.util';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = "http://localhost:8081/v1/aluno";

  constructor(private http: HttpClient) { }

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

  async login(email: string, senha: string) {
    const emailHash = await sha256(email);
    const senhaHash = await sha256(senha);

    const body = { email: emailHash, senha: senhaHash };

    return this.http.post(`${this.apiUrl}/login`, body).toPromise();
  }
}
