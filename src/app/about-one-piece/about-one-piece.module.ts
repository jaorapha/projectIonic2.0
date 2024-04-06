import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutOnePiecePageRoutingModule } from './about-one-piece-routing.module';

import { AboutOnePiecePage } from './about-one-piece.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutOnePiecePageRoutingModule
  ],
  declarations: [AboutOnePiecePage]
})
export class AboutOnePiecePageModule {}
