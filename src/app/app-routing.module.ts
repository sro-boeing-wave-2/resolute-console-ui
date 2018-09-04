import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

const routes: Routes = [
  { path: '', redirectTo: 'console', pathMatch: 'full' },
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
  DueticketsComponent
];
