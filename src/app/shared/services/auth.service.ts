import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Sessao } from 'src/app/interfaces/sessao.interface';

@Injectable({
  providedIn: 'root'
})
export class   AuthService {

  token: string;
  sessao: Sessao;
  
  constructor(
    private router: Router,
  ) { }

  getToken(): string {
    const sessao: Sessao = JSON.parse(localStorage.getItem('sessao'));
    if(sessao?.token) {
      this.token = sessao.token;
      return this.token;
    }

    return null;
  }

  setSessao(sessao: Sessao) {
    this.sessao = sessao;
    localStorage.setItem('sessao', JSON.stringify(this.sessao));

  }

  getSessao() {

    if(this.sessao) {
      return this.sessao;
    }

    const sessao = localStorage.getItem('sessao');
    if(sessao) {
      this.sessao = JSON.parse(sessao);
      return this.sessao;
    }

    return null;
  }

  isLoggedIn(): boolean {
    return this.getSessao() && this.getToken() ? true : false;
  }

  getAuthorizationHeaderValue(): string {
    return this.token;
  }

  logout() {
    this.sessao = undefined;
    this.token = undefined;
    localStorage.clear();
    this.router.navigate(['/home']);
  }

}
