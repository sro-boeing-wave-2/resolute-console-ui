import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { TicketsService } from '../../../tickets.service';
import { Router } from '@angular/router';
import { queryParams } from '../../../queryparams';

@Component({
  selector: 'app-alltickets',
  templateUrl: './alltickets.component.html',
  styleUrls: ['../tickets.component.css']
})

export class AllticketsComponent implements OnInit {

  displayedColumns: string[] = ['subject', 'source', 'status', 'priority'];
  allTickets = [];
  TicketId;
  httpOptions;

  queryParams: queryParams;

  constructor(private service : TicketsService, private router : Router) { }

  ngOnInit() {
    this.service.getByFilter(this.queryParams = {
      status: "",
      source: "",
      priority: "",
      page: 10,
      size: 10
    }).subscribe(tickets => {
      this.allTickets = tickets.json();
      console.log(this.allTickets);
    });
    this.service.getModel().subscribe((data) => {
      data.status = "";
      console.log(data);
      this.service.getByFilter(data).subscribe(tickets => {
        this.allTickets = tickets.json();
        console.log(this.allTickets);
      });
    });
  }

  onClick(element) {
    console.log(element.ticketId);
    this.router.navigate(['/console/tickets/view', element.ticketId]);
  }

}
