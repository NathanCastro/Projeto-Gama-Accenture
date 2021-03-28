import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Conta } from 'src/app/interfaces/conta.interface';
import { Dashboard } from 'src/app/interfaces/dashboard.interface';
import { Lancamento } from 'src/app/interfaces/lancamento.interface';
import { AuthService } from 'src/app/shared/services/auth.service';

import { DashService } from './dash.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent implements OnInit {

  contaBanco: Conta;
  contaCredito: Conta;
  lancamentos: Array<Lancamento>;

  filtroDataInicial = "2020-01-01";
  filtroDataFinal = "2021-12-31";
  
  constructor(
    private dashService: DashService,
    private authService: AuthService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.loadDashData();
  }



  loadDashData() {
    this.dashService.getDash(
      this.filtroDataFinal, 
      this.filtroDataInicial, 
      this.authService.getSessao().usuario.login)
      .subscribe(
        response => this.onSuccessGetDash(response),
        error => this.onErrorGetDash(error),
      )
  }

  onSuccessGetDash(response: Dashboard) {
    this.contaBanco = response.contaBanco;
    this.contaCredito = response.contaCredito;
    this.lancamentos = [...response.contaCredito.lancamentos, ...response.contaBanco.lancamentos];
  }

  onErrorGetDash(error: any) {
    this.toastr.error('Erro ao obter informações','Erro');
  }
}
