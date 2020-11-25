import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListTechsComponent } from './components/list-techs/list-techs.component';

const routes: Routes = [
  { path: 'lista-de-tecnologias', component: ListTechsComponent },
  { path: '', redirectTo: 'lista-de-tecnologias' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TechsRoutingModule {}
