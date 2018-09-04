import { Component, OnInit } from '@angular/core';
import { TicketsService } from '../../../tickets.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alltickets',
  templateUrl: './alltickets.component.html',
  styleUrls: ['../tickets.component.css']
})
export class AllticketsComponent implements OnInit {

  displayedColumns: string[] = ['subject', 'source', 'status', 'priority'];
  allTickets = [];
  TicketId;

  constructor(private service : TicketsService, private router : Router) { }

  ngOnInit() {
    this.service.getAllTickets().subscribe(data => {
      this.allTickets = data.json();
      console.log(this.allTickets);
    });
  }

  onClick(element) {
    console.log(element.ticketId);
    this.router.navigate(['/console/tickets/view', element.ticketId]);
  }

}
