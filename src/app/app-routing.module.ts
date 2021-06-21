import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { EducationComponent } from './components/education/education.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { WorkComponent } from './components/work/work.component';

const routes: Routes = [
  {
    path: 'home', component:LandingPageComponent, pathMatch: 'full'
  },
  {
    path: 'work', component:WorkComponent, pathMatch: 'full'
  },
  {
    path: 'edu', component:EducationComponent, pathMatch: 'full'
  },
  {
    path: 'contact', component:ContactComponent, pathMatch: 'full'
  },
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
