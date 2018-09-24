import { Component, OnInit } from '@angular/core';
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
  allTickets;

  queryParams: queryParams;

  constructor(private service : TicketsService, private router : Router) { }

  ngOnInit() {
    this.service.getByFilter(this.queryParams = {
      status: "",
      source: "",
      priority: "",
      page: 1,
      sortBy: "subject",
      sortOrder: false
    }).subscribe(tickets => {
      this.allTickets = tickets;
      // console.log(this.allTickets);
    });
    this.service.getModel().subscribe((data) => {
      this.queryParams = data;
      data.status = "";
      // console.log(data);
      this.service.getByFilter(data).subscribe(tickets => {
        this.allTickets = tickets;
        // console.log(this.allTickets);
      });
    });
  }

  onClick(element) {
    console.log(element.ticketId);
    this.router.navigate(['/console/tickets/view', element.ticketId]);
  }

  changeSortBy(sortby) {
    console.log("Hi");
    this.queryParams.sortBy = sortby;
    this.queryParams.sortOrder = !this.queryParams.sortOrder;
    console.log(this.queryParams);
    this.service.updateModel(this.queryParams);
  }

}
