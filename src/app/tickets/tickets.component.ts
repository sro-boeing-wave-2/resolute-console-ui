import { Component, OnInit } from '@angular/core';
import { TicketsService } from '../tickets.service';
import { Ticket } from '../ticket';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  displayedColumns: string[] = ['subject', 'source', 'status', 'priority'];
  allTickets = [];
  openTickets = [];
  closedTickets = [];
  dueTickets = [];
  numberOfTickets = {};
  constructor(private service : TicketsService, private router : Router, public dialog: MatDialog) { }
  TicketId;
  ngOnInit() {
    this.service.getAllTickets().subscribe(data => {
      this.allTickets = data.json();
      console.log(this.allTickets);
    });
    this.service.getOpenTickets().subscribe(data => this.openTickets = data.json());
    this.service.getClosedTickets().subscribe(data => this.closedTickets = data.json());
    this.service.getDueTickets().subscribe(data => this.dueTickets = data.json());
    this.service.getCount().subscribe(data => {this.numberOfTickets = data.json();
      console.log(this.numberOfTickets);
    });
  }

  onClick(element) {
    console.log(element.ticketId);
    this.router.navigate(['/tickets/view', element.ticketId]);
  }

}
