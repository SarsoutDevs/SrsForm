import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormLoginComponent } from './form-login/form-login.component';
import { FormInscriptionComponent } from './form-inscription/form-inscription.component';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { AppelPageTwoComponent } from './appel-page-two/appel-page-two.component';
import { PageThreeComponent } from './page-three/page-three.component';

const routes: Routes = [
  {path:'' , component:FormLoginComponent},
  {path:'login' , component:FormLoginComponent},
  {path:'register' , component:FormInscriptionComponent},
  {path:'page1' , component:PageOneComponent},
  {path:'page2' , component:AppelPageTwoComponent},
  {path:'page3' , component:PageThreeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
