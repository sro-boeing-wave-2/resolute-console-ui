import { Component, OnInit } from '@angular/core';
import { TicketsService } from '../../../tickets.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-opentickets',
  templateUrl: './opentickets.component.html',
  styleUrls: ['../tickets.component.css']
})
export class OpenticketsComponent implements OnInit {

  displayedColumns: string[] = ['subject', 'source', 'status', 'priority'];
  openTickets = [];
  numberOfTickets = {};
  TicketId;

  constructor(private service : TicketsService, private router : Router) { }

  ngOnInit() {
    this.service.getOpenTickets().subscribe(data => this.openTickets = data.json());
    this.service.getCount().subscribe(data => {this.numberOfTickets = data.json();});
  }

  onClick(element) {
    console.log(element.ticketId);
    this.router.navigate(['/console/tickets/view', element.ticketId]);
  }

}
