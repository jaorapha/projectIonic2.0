import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CastOrangeBlackPageRoutingModule } from './cast-orange-black-routing.module';

import { CastOrangeBlackPage } from './cast-orange-black.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CastOrangeBlackPageRoutingModule
  ],
  declarations: [CastOrangeBlackPage]
})
export class CastOrangeBlackPageModule {}
