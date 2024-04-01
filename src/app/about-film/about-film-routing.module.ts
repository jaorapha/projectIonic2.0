import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutFilmPage } from './about-film.page';

const routes: Routes = [
  {
    path: '',
    component: AboutFilmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutFilmPageRoutingModule {}
