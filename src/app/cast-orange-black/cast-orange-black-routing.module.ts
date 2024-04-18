import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CastOrangeBlackPage } from './cast-orange-black.page';

const routes: Routes = [
  {
    path: '',
    component: CastOrangeBlackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CastOrangeBlackPageRoutingModule {}
