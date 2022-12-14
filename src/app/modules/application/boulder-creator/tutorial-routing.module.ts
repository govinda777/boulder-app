import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TutorialComponent } from './tutorial.component';

import { DashboardTemplateComponent } from './template/items.component';
import { DashboardCardComponent } from './card/items.component';
import { DashboardDetailComponent } from './detail/items.component';
import { ListComponent } from './list/items.component';

const routes: Routes = [
  {
    path: '', component: TutorialComponent, children: [
      {
        path: '',
        loadChildren: () => import('../boulder-creator/00-main/exercice.module')
          .then(mod => mod.ExerciceModule)
      },
      { path: 'card', component: DashboardCardComponent },
      { path: 'detail', component: DashboardDetailComponent },
      { path: 'template', component: DashboardTemplateComponent },
      { path: 'list', component: ListComponent },
      {
        path: 'form',
        loadChildren: () => import('./form/module')
          .then(mod => mod.ExerciceModule)
      },
      {
        path: '',
        redirectTo: '/bootstrap/alerts',
        pathMatch: 'full'
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorialRoutingModule { }
