import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CastRockyPageRoutingModule } from './cast-rocky-routing.module';

import { CastRockyPage } from './cast-rocky.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CastRockyPageRoutingModule
  ],
  declarations: [CastRockyPage]
})
export class CastRockyPageModule {}
