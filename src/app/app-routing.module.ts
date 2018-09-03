import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TicketsComponent } from './tickets/tickets.component';
import { IndividualTicketComponent } from './individual-ticket/individual-ticket.component';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
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

export const RoutingComponents = [HomepageComponent, DashboardComponent, TicketsComponent, IndividualTicketComponent, NewTicketComponent, PageNotFoundComponent];
