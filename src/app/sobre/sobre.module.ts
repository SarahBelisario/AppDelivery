import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {  HttpClientModule } from '@angular/common/http';
import { SobrePageRoutingModule } from './sobre-routing.module';

import { SobrePage } from './sobre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SobrePageRoutingModule,
    HttpClientModule
  ],
  declarations: [SobrePage]
})
export class SobrePageModule {}
