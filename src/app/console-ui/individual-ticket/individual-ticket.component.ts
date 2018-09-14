import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TicketsService } from '../../tickets.service';
import { Ticket, TicketDetailsModal } from '../../ticket';

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

  selectedStatusValue: string ;
  selectedPriorityValue: string ;
  commentValue: string;
  TicketById: TicketDetailsModal;
  UserName;
  constructor(private service: TicketsService, private route: ActivatedRoute) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    console.log(id);
    this.call(id);
  }

  call(id) {
    let u = this.service.getById(id).subscribe(data => {
      this.TicketById = data.json();
    });
    console.log(u);
  }

  updateStatus(){
    this.service.updateIndividualTicketStatus(this.TicketById.id,this.selectedStatusValue);
  }

  updatePriority(){
    this.service.updateIndividualTicketPriority(this.TicketById.id,this.selectedPriorityValue);
  }

  updateCommentValue(){
    console.log("Comment field value: " + this.commentValue);
    this.service.updateIndividualTicketComment(this.TicketById.id, this.commentValue, this.TicketById.userid);
  }

  statuses: Options[] = [
    {value: "open", viewValue: 'Open'},
    {value: "closed", viewValue: 'Closed'},
    {value: "due", viewValue: 'Due'}
  ];

  priorities: Options[] = [
    {value: "high", viewValue: 'High'},
    {value: "medium", viewValue: 'Medium'},
    {value: "low", viewValue: 'Low'}
  ];
}
