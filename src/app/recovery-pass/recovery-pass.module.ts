import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { RecoveryPassRoutingModule } from './recovery-pass-routing.module';
import { RecoveryPassComponent } from './recovery-pass.component';

@NgModule({
  declarations: [
    RecoveryPassComponent
  ],
  imports: [
    CommonModule,
    RecoveryPassRoutingModule,
    SharedModule
  ]
})
export class RecoveryPassModule { }
