import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutBlackKlansmanPageRoutingModule } from './about-black-klansman-routing.module';

import { AboutBlackKlansmanPage } from './about-black-klansman.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutBlackKlansmanPageRoutingModule
  ],
  declarations: [AboutBlackKlansmanPage]
})
export class AboutBlackKlansmanPageModule {}
