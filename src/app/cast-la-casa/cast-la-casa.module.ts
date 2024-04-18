import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CastLaCasaPageRoutingModule } from './cast-la-casa-routing.module';

import { CastLaCasaPage } from './cast-la-casa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CastLaCasaPageRoutingModule
  ],
  declarations: [CastLaCasaPage]
})
export class CastLaCasaPageModule {}
