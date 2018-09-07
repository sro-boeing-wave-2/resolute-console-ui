import { Component, OnInit } from '@angular/core';
import { TicketsService } from '../../../tickets.service';
import { Router } from '@angular/router';
import { queryParams } from '../../../queryparams';

@Component({
  selector: 'app-opentickets',
  templateUrl: './opentickets.component.html',
  styleUrls: ['../tickets.component.css']
})
export class OpenticketsComponent implements OnInit {

  displayedColumns: string[] = ['subject', 'source', 'status', 'priority'];
  openTickets = [];
  TicketId;
  queryParams: queryParams;

  constructor(private service: TicketsService, private router: Router) { }

  ngOnInit() {
    this.service.getByFilter(this.queryParams = {
      status: "open",
      source: "",
      priority: ""
    }).subscribe(tickets => {
      this.openTickets = tickets.json();
    });
    this.service.getModel().subscribe((data) => {
      data.status = "open";
      this.service.getByFilter(data).subscribe(tickets => {
        this.openTickets = tickets.json();
      });
    });
  }

  onClick(element) {
    console.log(element.ticketId);
    this.router.navigate(['/console/tickets/view', element.ticketId]);
  }

}
