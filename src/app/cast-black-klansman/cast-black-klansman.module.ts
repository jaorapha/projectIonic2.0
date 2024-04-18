import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CastBlackKlansmanPageRoutingModule } from './cast-black-klansman-routing.module';

import { CastBlackKlansmanPage } from './cast-black-klansman.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CastBlackKlansmanPageRoutingModule
  ],
  declarations: [CastBlackKlansmanPage]
})
export class CastBlackKlansmanPageModule {}
