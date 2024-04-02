import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutLacasaPage } from './about-lacasa.page';

const routes: Routes = [
  {
    path: '',
    component: AboutLacasaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutLacasaPageRoutingModule {}
