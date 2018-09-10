import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TicketsService } from '../../tickets.service';

export interface Options {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-individual-ticket',
  templateUrl: './individual-ticket.component.html',
  styleUrls: ['./individual-ticket.component.css']
})

export class IndividualTicketComponent implements OnInit {

  TicketById;
  UserName;
  httpOptions;

  selectedStatusValue: string;
  selectedPriorityValue: string;

  statuses: Options[] = [
    {value: 'open', viewValue: 'Open'},
    {value: 'closed', viewValue: 'Closed'},
    {value: 'onhold', viewValue: 'On Hold'}
  ];

  priorities: Options[] = [
    {value: 'high', viewValue: 'High'},
    {value: 'medium', viewValue: 'Medium'},
    {value: 'low', viewValue: 'Low'}
  ];

  constructor(private service: TicketsService, private route: ActivatedRoute) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.call(id);
    this.userDataCall();
  }

  call(id) {
    this.service.getById(id).subscribe(data => {
      this.TicketById = data.json();
    });
  }

  userDataCall() {
    this.service.getUserDetailsById().subscribe(data => {
      this.UserName = data.json();
      console.log(this.UserName);
    })
  }

  updateStatus(){
    this.service.updateIndividualTicketStatus(this.TicketById.ticketId,this.selectedStatusValue);
  }

  updatePriority(){
    this.service.updateIndividualTicketPriority(this.TicketById.ticketId,this.selectedStatusValue);
  }
}
