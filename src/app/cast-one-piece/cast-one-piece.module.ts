import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CastOnePiecePageRoutingModule } from './cast-one-piece-routing.module';

import { CastOnePiecePage } from './cast-one-piece.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CastOnePiecePageRoutingModule
  ],
  declarations: [CastOnePiecePage]
})
export class CastOnePiecePageModule {}
