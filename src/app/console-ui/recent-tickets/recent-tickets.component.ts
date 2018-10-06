import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TicketsService } from '../../tickets.service';
import { queryParams } from '../../queryparams';
import { Ticket } from '../../ticket';
import { LocalStorageService } from 'ngx-webstorage';
import { NotificationService } from '../notification.service';
import { NotificationModel } from '../notificationModel';

@Component({
  selector: 'app-recent-tickets',
  templateUrl: './recent-tickets.component.html',
  styleUrls: ['./recent-tickets.component.css']
})
export class RecentTicketsComponent implements OnInit {

  agentOpenTickets: NotificationModel[];
  queryParams: queryParams = {
    status: "open",
    priority: "",
    page: 1,
  }
  numberOfTickets;
  httpOptions;
  tabIndex = 0;
  agentEmail;

  constructor(private ticketService: TicketsService, private router: Router, private localStorage: LocalStorageService, private notificationService: NotificationService) { }

  ngOnInit() {
    this.ticketService.getTicketCount().subscribe(data => {this.numberOfTickets = data});
    // this.ticketService.getRecentTickets(this.queryParams).subscribe(data => {
    //   this.agentOpenTickets = data.tickets;
    //   console.log(this.agentOpenTickets);
    // })

    this.agentEmail = this.localStorage.retrieve("email");//this.loginService.getAgentEmail();
    this.notificationService.startHubConnection(this.agentEmail);
    this.notificationService.newNotification().subscribe(data => {
      if(data) {
        if(this.agentOpenTickets.length < 7)
        {
          this.agentOpenTickets.unshift(data);
          console.log(data);
        }
        else
        {
          this.agentOpenTickets.unshift(data);
          this.agentOpenTickets.pop();
        }
      }
    })
  }

  routeToTicketDetails(ticket) {
    console.log(ticket.ticketId);
    this.router.navigate(['/console/tickets/view', ticket.ticketId]);
  }
}
