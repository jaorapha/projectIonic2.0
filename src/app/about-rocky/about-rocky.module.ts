import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutRockyPageRoutingModule } from './about-rocky-routing.module';

import { AboutRockyPage } from './about-rocky.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutRockyPageRoutingModule
  ],
  declarations: [AboutRockyPage]
})
export class AboutRockyPageModule {}
