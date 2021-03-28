import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { LoggedInAreaRoutingModule } from './logged-in-area-routing.module';
import { LoggedInAreaComponent } from './logged-in-area.component';


@NgModule({
  declarations: [
    LoggedInAreaComponent,
  ],
  imports: [
    CommonModule,
    LoggedInAreaRoutingModule,
    SharedModule
  ],
})
export class LoggedInAreaModule { }
