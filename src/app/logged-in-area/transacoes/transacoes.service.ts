import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api.service';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TransacoesService {

  API_URL = environment.API_URL;

  constructor(
    private api: ApiService
  ) { }

  getTransacoes(login: string): Observable<any>{
    console.log('ENTREI GET TRANSACOES');
    return this.api.get(`${this.API_URL}/lancamentos/planos-conta?login=${login}`);
  }
}
