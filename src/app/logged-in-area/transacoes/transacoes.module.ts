import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TransacoesRoutingModule } from './transacoes-routing.module';
import { TransacoesComponent } from './transacoes.component';



@NgModule({
  declarations: [TransacoesComponent],
  imports: [
    CommonModule,
    TransacoesRoutingModule,
  ]
})
export class TransacoesModule { }
