import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProgresoPage } from './progreso.page';
import { MenuModule } from '../utils/menu/menu.module';

const routes: Routes = [
  {
    path: '',
    component: ProgresoPage
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
  declarations: [ProgresoPage]
})
export class ProgresoPageModule {}
