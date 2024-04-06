import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutTheWitcherPage } from './about-the-witcher.page';

const routes: Routes = [
  {
    path: '',
    component: AboutTheWitcherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutTheWitcherPageRoutingModule {}
