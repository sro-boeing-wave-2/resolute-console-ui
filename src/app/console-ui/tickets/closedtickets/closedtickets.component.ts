import { Component, OnInit } from '@angular/core';
import { TicketsService } from '../../../tickets.service';
import { Route, Router } from '@angular/router';
import { queryParams } from '../../../queryparams';

@Component({
  selector: 'app-closedtickets',
  templateUrl: './closedtickets.component.html',
  styleUrls: ['../tickets.component.css']
})
export class ClosedticketsComponent implements OnInit {

  displayedColumns: string[] = ['subject', 'source', 'status', 'priority'];
  closedTickets = [];
  TicketId;
  httpOptions;
  queryParams: queryParams;

  constructor(private service: TicketsService, private router: Router) { }

  ngOnInit() {
    // this.queryParams.status = "close";
    // this.queryParams.source = "";
    // this.queryParams.priority = "";
    this.service.getByFilter(this.queryParams = {
      status: "close",
      source: "",
      priority: "",
      page: 10,
      size: 10
    }).subscribe(tickets => {
      this.closedTickets = tickets.json();
    });
    this.service.getModel().subscribe((data) => {
      data.status = "close";
      console.log(data);
      this.service.getByFilter(data).subscribe(tickets => {
        this.closedTickets = tickets.json();
        console.log(this.closedTickets);
      });
    });
  }

  onClick(element) {
    console.log(element.ticketId);
    this.router.navigate(['/console/tickets/view', element.ticketId]);
  }

}
