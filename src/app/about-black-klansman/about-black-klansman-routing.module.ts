import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutBlackKlansmanPage } from './about-black-klansman.page';

const routes: Routes = [
  {
    path: '',
    component: AboutBlackKlansmanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutBlackKlansmanPageRoutingModule {}
