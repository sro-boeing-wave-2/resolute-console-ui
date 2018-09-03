import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DragDropAgentComponent } from './drag-drop-agent/drag-drop-agent.component';
import { DragDropUserComponent } from './drag-drop-user/drag-drop-user.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TicketsComponent } from './tickets/tickets.component';
import { IndividualTicketComponent } from './individual-ticket/individual-ticket.component';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

//This is my case
const routes: Routes = [
  { path: '', component: LandingPageComponent, pathMatch: 'full' },
  { path: 'signin', component: LoginPageComponent},
  { path: 'signup', component: SignUpComponent},
  { path: 'uploadagentcsv', component: DragDropAgentComponent},
  { path: 'uploadusercsv', component: DragDropUserComponent},
  { path: '', component: HomepageComponent, pathMatch: 'full'},
  { path: 'home', component: HomepageComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'tickets', component: TicketsComponent },
  { path: 'tickets/view/:id', component: IndividualTicketComponent },
  { path: 'newticket', component: NewTicketComponent },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [LoginPageComponent, LandingPageComponent, SignUpComponent, DragDropAgentComponent, DragDropUserComponent];
export const routingComponents = [HomepageComponent, DashboardComponent, TicketsComponent, IndividualTicketComponent, NewTicketComponent, PageNotFoundComponent];
