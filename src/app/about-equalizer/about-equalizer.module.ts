import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutEqualizerPageRoutingModule } from './about-equalizer-routing.module';

import { AboutEqualizerPage } from './about-equalizer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutEqualizerPageRoutingModule
  ],
  declarations: [AboutEqualizerPage]
})
export class AboutEqualizerPageModule {}
