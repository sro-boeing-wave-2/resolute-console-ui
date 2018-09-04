import { Component, OnInit } from '@angular/core';
import { TicketsService } from '../../../tickets.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-duetickets',
  templateUrl: './duetickets.component.html',
  styleUrls: ['../tickets.component.css']
})
export class DueticketsComponent implements OnInit {

  displayedColumns: string[] = ['subject', 'source', 'status', 'priority'];
  dueTickets = [];
  numberOfTickets = {};
  TicketId;

  constructor(private service : TicketsService, private router : Router) { }

  ngOnInit() {
    this.service.getDueTickets().subscribe(data => this.dueTickets = data.json());
    this.service.getCount().subscribe(data => {this.numberOfTickets = data.json();});
  }

  onClick(element) {
    console.log(element.ticketId);
    this.router.navigate(['/console/tickets/view', element.ticketId]);
  }

}
