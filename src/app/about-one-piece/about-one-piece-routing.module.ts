import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutOnePiecePage } from './about-one-piece.page';

const routes: Routes = [
  {
    path: '',
    component: AboutOnePiecePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutOnePiecePageRoutingModule {}
