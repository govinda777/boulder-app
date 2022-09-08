import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoulderCreatorComponent } from './component';

const routes: Routes = [
  { path: '', component: BoulderCreatorComponent, children: [] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
