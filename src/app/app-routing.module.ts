import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeMainComponent } from './modules/general/home-main/home-main.component';

import { HomeComponent } from './modules/general/home/home.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';

const routes: Routes = [

  { path: '', component: HomeMainComponent, },

  { path: 'ori', component: HomeComponent, },

  {
    path: 'httpclient',
    loadChildren: () => import('./modules/application/items/items.module')
      .then(mod => mod.ItemsModule)
  },  
  {
    path: 'about',
    loadChildren: () => import('./modules/general/about/about.module')
      .then(mod => mod.AboutModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/general/login/login.module')
      .then(mod => mod.LoginModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./modules/general/signup/signup.module')
      .then(mod => mod.SignupModule)
  },

  {
    path: 'bootstrap',
    loadChildren: () => import('./modules/application/bootstrap/tutorial.module')
      .then(mod => mod.TutorialModule)
  },
  {
    path: 'components',
    loadChildren: () => import('./modules/application/components/tutorial.module')
      .then(mod => mod.TutorialModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/application/dashboard/tutorial.module')
      .then(mod => mod.TutorialModule)
  },
  {
    path: 'boulder-creator',
    loadChildren: () => import('./modules/application/boulder-creator/tutorial.module')
      .then(mod => mod.TutorialModule)
  },
  {
    path: 'forms',
    loadChildren: () => import('./modules/application/forms/tutorial.module')
      .then(mod => mod.TutorialModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./modules/application/services/tutorial.module')
      .then(mod => mod.TutorialModule)
  },

  {
    path: 'contact',
    loadChildren: () => import('./modules/general/contact/contact.module')
      .then(mod => mod.ContactModule)
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }