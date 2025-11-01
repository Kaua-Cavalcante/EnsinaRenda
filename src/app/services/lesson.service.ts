import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LessonService {
  private apiUrl = 'http://localhost:8081/v1/aluno/aula';

  constructor(private http: HttpClient, private authService: AuthService) { }

  completeLesson(idAula: number): Observable<any> {
    const token = this.authService.getToken();

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    const body = { idAula: idAula.toString() };

    return this.http.post(this.apiUrl, body, { headers });
  }
}
