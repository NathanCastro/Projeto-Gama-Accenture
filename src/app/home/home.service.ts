import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { UsuarioDto } from '../interfaces/usuariodto.interface';
import { ApiService } from '../shared/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  API_URL = environment.API_URL;

  constructor(
    private api: ApiService
  ) { }

  criarUsuario(usuario: UsuarioDto): Observable<UsuarioDto> {
    return this.api.post(`${this.API_URL}/usuarios`, usuario);
  }
}
