import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DragDropAgentComponent } from './drag-drop-agent/drag-drop-agent.component';
import { DragDropUserComponent } from './drag-drop-user/drag-drop-user.component';

//This is my case
const routes: Routes = [
  { path: '', component: LandingPageComponent, pathMatch: 'full' },
  { path: 'signin', component: LoginPageComponent},
  { path: 'signup', component: SignUpComponent},
  { path: 'uploadagentcsv', component: DragDropAgentComponent},
  { path: 'uploadusercsv', component: DragDropUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginPageComponent, LandingPageComponent, SignUpComponent, DragDropAgentComponent, DragDropUserComponent];
