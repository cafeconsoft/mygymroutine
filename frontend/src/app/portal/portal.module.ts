import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PortalPage } from './portal.page';
import { MenuModule } from '../utils/menu/menu.module';

const routes: Routes = [
  {
    path: '',
    component: PortalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PortalPage]
})
export class PortalPageModule {}
