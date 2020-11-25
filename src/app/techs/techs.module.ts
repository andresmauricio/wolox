import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechsRoutingModule } from './techs-routing.module';
import { ListTechsComponent } from './components/list-techs/list-techs.component';


@NgModule({
  declarations: [ListTechsComponent],
  imports: [
    CommonModule,
    TechsRoutingModule
  ]
})
export class TechsModule { }
