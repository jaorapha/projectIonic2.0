import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CastOnePiecePage } from './cast-one-piece.page';

const routes: Routes = [
  {
    path: '',
    component: CastOnePiecePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CastOnePiecePageRoutingModule {}
