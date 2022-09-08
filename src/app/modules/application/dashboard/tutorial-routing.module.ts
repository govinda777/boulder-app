import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TutorialComponent } from './tutorial.component';

import { DashboardTemplateComponent } from './template/items.component';
import { DashboardCardComponent } from './card/items.component';
import { DashboardDetailComponent } from './detail/items.component';

const routes: Routes = [
  {
    path: '', component: TutorialComponent, children: [
      {
        path: '',
        loadChildren: () => import('../dashboard/00-main/exercice.module')
          .then(mod => mod.ExerciceModule)
      },
      { path: 'card', component: DashboardCardComponent },
      { path: 'detail', component: DashboardDetailComponent },
      { path: 'template', component: DashboardTemplateComponent },

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
