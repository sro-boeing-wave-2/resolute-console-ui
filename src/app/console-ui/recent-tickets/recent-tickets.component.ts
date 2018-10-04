import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TicketsService } from '../../tickets.service';
import { queryParams } from '../../queryparams';
import { Ticket } from '../../ticket';

@Component({
  selector: 'app-recent-tickets',
  templateUrl: './recent-tickets.component.html',
  styleUrls: ['./recent-tickets.component.css']
})
export class RecentTicketsComponent implements OnInit {

  agentOpenTickets: Ticket[];
  queryParams: queryParams = {
    status: "open",
    priority: "",
    page: 1,
  }
  numberOfTickets;
  httpOptions;
  tabIndex = 0;

  constructor(private ticketService: TicketsService, private router: Router) { }

  ngOnInit() {
    this.ticketService.getTicketCount().subscribe(data => {this.numberOfTickets = data});
    this.ticketService.getRecentTickets(this.queryParams).subscribe(data => {
      this.agentOpenTickets = data.tickets;
      console.log(this.agentOpenTickets);
    })
  }

  routeToTicketDetails(ticket) {
    console.log(ticket.ticketId);
    this.router.navigate(['/console/tickets/view', ticket.ticketId]);
  }
}
