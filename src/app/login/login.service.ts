import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { Login } from '../interfaces/login.interface';
import { Sessao } from '../interfaces/sessao.interface';
import { ApiService } from '../shared/services/api.service';
import { AuthService } from '../shared/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  API_URL = environment.API_URL;

  constructor(
    private api: ApiService,
    private authService: AuthService
    ) { }

  login(login: Login): Observable<Sessao> {
    return this.api.post(`${this.API_URL}/login`, login)
      .pipe(
        tap(response => {
          this.authService.setSessao(response);
        }) 
      )
  }
}
