import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CastTheWitcherPage } from './cast-the-witcher.page';

const routes: Routes = [
  {
    path: '',
    component: CastTheWitcherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CastTheWitcherPageRoutingModule {}
