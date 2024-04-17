import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CastEqualizerPage } from './cast-equalizer.page';

const routes: Routes = [
  {
    path: '',
    component: CastEqualizerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CastEqualizerPageRoutingModule {}
