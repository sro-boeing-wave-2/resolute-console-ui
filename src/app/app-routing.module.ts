import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { LandingPageComponent } from './user-login/landing-page/landing-page.component';
import { LoginPageComponent } from './user-login/login-page/login-page.component';
import { SignUpComponent } from './user-login/sign-up/sign-up.component';
import { DragDropUserComponent } from './user-login/drag-drop-user/drag-drop-user.component';
import { DragDropAgentComponent } from './user-login/drag-drop-agent/drag-drop-agent.component';

import { ConsoleUIComponent } from './console-ui/console-ui.component';
import { DashboardComponent } from './console-ui/dashboard/dashboard.component';
import { HomepageComponent } from './console-ui/homepage/homepage.component';
import { IndividualTicketComponent } from './console-ui/individual-ticket/individual-ticket.component';
import { NewTicketComponent } from './console-ui/new-ticket/new-ticket.component';
import { PageNotFoundComponent } from './console-ui/page-not-found/page-not-found.component';
import { TicketsComponent } from './console-ui/tickets/tickets.component';
import { AllticketsComponent } from './console-ui/tickets/alltickets/alltickets.component';
import { ClosedticketsComponent } from './console-ui/tickets/closedtickets/closedtickets.component';
import { OpenticketsComponent } from './console-ui/tickets/opentickets/opentickets.component';
import { DueticketsComponent } from './console-ui/tickets/duetickets/duetickets.component';
import { GamificationComponent } from './console-ui/dashboard/gamification/gamification.component';

const routes: Routes = [
  { path: '', redirectTo: 'userlogin', pathMatch: 'full' },
  { path: 'userlogin',
    component: UserLoginComponent,
    children: [
      { path: '', redirectTo: 'landing', pathMatch: 'full' },
      { path : 'landing', component: LandingPageComponent },
      { path : 'signup', component: SignUpComponent },
      { path : 'login', component: LoginPageComponent },
      { path : 'addusers', component: DragDropUserComponent },
      { path : 'addagents', component: DragDropAgentComponent },
    ]
  },
  { path: 'console',
    component: ConsoleUIComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomepageComponent},
      { path: 'dashboard', component: DashboardComponent },
      {
        path: 'tickets',
        component: TicketsComponent,
        children: [
          { path: '', redirectTo: 'all', pathMatch: 'full' },
          { path: 'all', component: AllticketsComponent },
          { path: 'open', component: OpenticketsComponent },
          { path: 'closed', component: ClosedticketsComponent },
          { path: 'due', component: DueticketsComponent }
        ]},
      { path: 'tickets/view/:id', component: IndividualTicketComponent },
      { path: 'newticket', component: NewTicketComponent },
    ]},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [
  ConsoleUIComponent,
  DashboardComponent,
  HomepageComponent,
  IndividualTicketComponent,
  NewTicketComponent,
  PageNotFoundComponent,
  TicketsComponent,
  AllticketsComponent,
  ClosedticketsComponent,
  OpenticketsComponent,
  DueticketsComponent,
  GamificationComponent,

  UserLoginComponent,
  DragDropAgentComponent,
  DragDropUserComponent,
  LoginPageComponent,
  LandingPageComponent,
  SignUpComponent
];
