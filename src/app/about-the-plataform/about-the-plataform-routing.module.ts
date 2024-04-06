import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutThePlataformPage } from './about-the-plataform.page';

const routes: Routes = [
  {
    path: '',
    component: AboutThePlataformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutThePlataformPageRoutingModule {}
