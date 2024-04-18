import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CastThePlataformPageRoutingModule } from './cast-the-plataform-routing.module';

import { CastThePlataformPage } from './cast-the-plataform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CastThePlataformPageRoutingModule
  ],
  declarations: [CastThePlataformPage]
})
export class CastThePlataformPageModule {}
