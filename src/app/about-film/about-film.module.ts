import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutFilmPageRoutingModule } from './about-film-routing.module';

import { AboutFilmPage } from './about-film.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutFilmPageRoutingModule
  ],
  declarations: [AboutFilmPage]
})
export class AboutFilmPageModule {}
