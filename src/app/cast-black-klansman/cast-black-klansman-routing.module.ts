import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CastBlackKlansmanPage } from './cast-black-klansman.page';

const routes: Routes = [
  {
    path: '',
    component: CastBlackKlansmanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CastBlackKlansmanPageRoutingModule {}
