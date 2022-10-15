import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { ContactDetailPageComponent } from './pages/contact-detail-page/contact-detail-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePAgeComponent } from './pages/home-page/home-page.component';
import { LoginPAgeComponent } from './pages/login-page/login-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'home'
  },
  {
    path:'login',
    component: LoginPAgeComponent
  },
  {
    path:'home',
    component: HomePAgeComponent,
    children:[
      {
        path:'rutaHija',
        component: HomePAgeComponent

      }
    ],
    canActivate:[AuthGuard]
  },
  {
    path: 'contacts',
    component: ContactPageComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'contacts/:id',
    component: ContactDetailPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
