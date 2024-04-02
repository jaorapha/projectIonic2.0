import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutOrangeBlackPage } from './about-orange-black.page';

const routes: Routes = [
  {
    path: '',
    component: AboutOrangeBlackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutOrangeBlackPageRoutingModule {}
