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
  openTickets;
  TicketId;
  httpOptions;
  queryParams: queryParams;

  constructor(private service: TicketsService, private router: Router) { }

  ngOnInit() {
    this.service.getByFilter(this.queryParams = {
      status: "open",
      source: "",
      priority: "",
      page: 10,
      size: 10
    }).subscribe(tickets => {
      this.openTickets = tickets;
    });
    this.service.getModel().subscribe((data) => {
      data.status = "open";
      this.service.getByFilter(data).subscribe(tickets => {
        this.openTickets = tickets;
      });
    });
  }

  onClick(element) {
    console.log(element.ticketId);
    this.router.navigate(['/console/tickets/view', element.ticketId]);
  }

}
