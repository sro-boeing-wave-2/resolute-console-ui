import { Component, OnInit } from '@angular/core';
import { TicketsService } from '../../../tickets.service';
import { Router } from '@angular/router';
import { queryParams } from '../../../queryparams';

@Component({
  selector: 'app-duetickets',
  templateUrl: './duetickets.component.html',
  styleUrls: ['../tickets.component.css']
})
export class DueticketsComponent implements OnInit {

  displayedColumns: string[] = ['subject', 'source', 'status', 'priority'];
  dueTickets;
  TicketId;
  httpOptions;
  queryParams: queryParams;

  constructor(private service: TicketsService, private router: Router) { }

  ngOnInit() {
    // this.queryParams.status = "due";
    // this.queryParams.source = "";
    // this.queryParams.priority = "";
    this.service.getByFilter(this.queryParams = {
      status: "due",
      source: "",
      priority: "",
      page: 1,
      sortBy: "subject",
      sortOrder: false
    }).subscribe(tickets => {
      this.dueTickets = tickets;
    });
    this.service.getModel().subscribe((data) => {
      data.status = "due";
      // console.log(data);
      this.service.getByFilter(data).subscribe(tickets => {
        this.dueTickets = tickets;
        // console.log(this.dueTickets);
      });
    });
  }

  onClick(element) {
    console.log(element.ticketId);
    this.router.navigate(['/console/tickets/view', element.ticketId]);
  }

  changeSortBy(sortby) {
    this.service.getModel().subscribe((data) => {
      data.sortBy = sortby;
      data.sortOrder = !data.sortOrder;
      this.service.updateModel(data);
      console.log(data);
    })
  }

}
