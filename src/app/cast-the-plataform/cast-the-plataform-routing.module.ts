import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CastThePlataformPage } from './cast-the-plataform.page';

const routes: Routes = [
  {
    path: '',
    component: CastThePlataformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CastThePlataformPageRoutingModule {}
