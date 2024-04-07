import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageUserPageRoutingModule } from './page-user-routing.module';

import { PageUserPage } from './page-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageUserPageRoutingModule
  ],
  declarations: [PageUserPage]
})
export class PageUserPageModule {}
