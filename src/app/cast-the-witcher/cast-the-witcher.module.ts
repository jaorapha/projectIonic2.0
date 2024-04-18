import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CastTheWitcherPageRoutingModule } from './cast-the-witcher-routing.module';

import { CastTheWitcherPage } from './cast-the-witcher.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CastTheWitcherPageRoutingModule
  ],
  declarations: [CastTheWitcherPage]
})
export class CastTheWitcherPageModule {}
