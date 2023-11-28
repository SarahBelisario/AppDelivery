import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {  HttpClientModule } from '@angular/common/http';
import { TermosPageRoutingModule } from './termos-routing.module';

import { TermosPage } from './termos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TermosPageRoutingModule,
    HttpClientModule
  ],
  declarations: [TermosPage]
})
export class TermosPageModule {}
