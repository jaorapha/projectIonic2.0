import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutRockyPage } from './about-rocky.page';

const routes: Routes = [
  {
    path: '',
    component: AboutRockyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutRockyPageRoutingModule {}
