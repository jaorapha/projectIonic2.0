import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageUserPage } from './page-user.page';

const routes: Routes = [
  {
    path: '',
    component: PageUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageUserPageRoutingModule {}
