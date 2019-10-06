import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutineBlockComponent } from './routine-block.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    RoutineBlockComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    RoutineBlockComponent
  ]
})
export class RoutineBlockModule { }
