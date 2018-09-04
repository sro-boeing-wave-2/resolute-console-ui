import { Component, OnInit } from '@angular/core';
import { TicketsService } from '../../../tickets.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-closedtickets',
  templateUrl: './closedtickets.component.html',
  styleUrls: ['../tickets.component.css']
})
export class ClosedticketsComponent implements OnInit {

  displayedColumns: string[] = ['subject', 'source', 'status', 'priority'];
  closedTickets = [];
  numberOfTickets = {};
  TicketId;

  constructor(private service : TicketsService, private router : Router) { }

  ngOnInit() {
    this.service.getClosedTickets().subscribe(data => this.closedTickets = data.json());
    this.service.getCount().subscribe(data => {this.numberOfTickets = data.json();});
  }

  onClick(element) {
    console.log(element.ticketId);
    this.router.navigate(['/console/tickets/view', element.ticketId]);
  }

}
