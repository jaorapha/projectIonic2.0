import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutThePlataformPageRoutingModule } from './about-the-plataform-routing.module';

import { AboutThePlataformPage } from './about-the-plataform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutThePlataformPageRoutingModule
  ],
  declarations: [AboutThePlataformPage]
})
export class AboutThePlataformPageModule {}
