import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CastLaCasaPage } from './cast-la-casa.page';

const routes: Routes = [
  {
    path: '',
    component: CastLaCasaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CastLaCasaPageRoutingModule {}
