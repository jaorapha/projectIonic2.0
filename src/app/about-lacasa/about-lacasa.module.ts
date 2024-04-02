import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutLacasaPageRoutingModule } from './about-lacasa-routing.module';

import { AboutLacasaPage } from './about-lacasa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutLacasaPageRoutingModule
  ],
  declarations: [AboutLacasaPage]
})
export class AboutLacasaPageModule {}
