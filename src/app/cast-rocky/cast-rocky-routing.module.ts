import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CastRockyPage } from './cast-rocky.page';

const routes: Routes = [
  {
    path: '',
    component: CastRockyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CastRockyPageRoutingModule {}
