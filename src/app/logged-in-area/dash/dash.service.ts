import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dashboard } from 'src/app/interfaces/dashboard.interface';
import { ApiService } from 'src/app/shared/services/api.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashService {

  API_URL = environment.API_URL;

  constructor(
    private api: ApiService  
  ) { }

  getDash(dataInicial: string, dataFinal: string, login: string): Observable<Dashboard> {
    return this.api.get(`${this.API_URL}/dashboard?fim=${dataFinal}&inicio=${dataInicial}&login=${login}`);
  }
}
