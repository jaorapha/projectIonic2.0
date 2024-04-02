import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutOrangeBlackPageRoutingModule } from './about-orange-black-routing.module';

import { AboutOrangeBlackPage } from './about-orange-black.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutOrangeBlackPageRoutingModule
  ],
  declarations: [AboutOrangeBlackPage]
})
export class AboutOrangeBlackPageModule {}
