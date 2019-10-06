import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RutinaPage } from './rutina.page';
import { MenuModule } from '../utils/menu/menu.module';
import { RoutineBlockModule } from '../utils/routine-block/routine-block.module';

const routes: Routes = [
  {
    path: '',
    component: RutinaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuModule,
    RoutineBlockModule,
    RouterModule.forChild(routes),
  ],
  declarations: [RutinaPage]
})
export class RutinaPageModule {}
