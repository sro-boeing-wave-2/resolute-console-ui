import { Component, OnInit } from '@angular/core';
import { TicketsService } from '../../tickets.service';
import { queryParams } from '../../queryparams';

@Component({
  selector: 'app-recent-tickets',
  templateUrl: './recent-tickets.component.html',
  styleUrls: ['./recent-tickets.component.css']
})
export class RecentTicketsComponent implements OnInit {

  agentOpenTickets;
  queryParams: queryParams = {
    status: "open",
    priority: "",
    page: null,
  }

  constructor(private ticketService: TicketsService) { }

  ngOnInit() {
    this.ticketService.getTicketsByFilter(this.queryParams).subscribe(data => {
      this.agentOpenTickets = data;
    })
  }

}
