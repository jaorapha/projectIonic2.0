import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutEqualizerPage } from './about-equalizer.page';

const routes: Routes = [
  {
    path: '',
    component: AboutEqualizerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutEqualizerPageRoutingModule {}
