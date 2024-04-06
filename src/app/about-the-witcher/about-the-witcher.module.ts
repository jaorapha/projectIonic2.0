import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutTheWitcherPageRoutingModule } from './about-the-witcher-routing.module';

import { AboutTheWitcherPage } from './about-the-witcher.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutTheWitcherPageRoutingModule
  ],
  declarations: [AboutTheWitcherPage]
})
export class AboutTheWitcherPageModule {}
