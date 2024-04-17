import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CastEqualizerPageRoutingModule } from './cast-equalizer-routing.module';

import { CastEqualizerPage } from './cast-equalizer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CastEqualizerPageRoutingModule
  ],
  declarations: [CastEqualizerPage]
})
export class CastEqualizerPageModule {}
