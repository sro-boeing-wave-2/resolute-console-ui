import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TicketsService } from '../../tickets.service';
import { Ticket, TicketDetailsModal } from '../../ticket';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { PopUpComponent } from '../pop-up/pop-up.component';


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
  constructor(private service: TicketsService, private route: ActivatedRoute, public dialog: MatDialog) { }

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


  //Opening and closing of the Modal


  openDialog(): void {
    const dialogRef = this.dialog.open(PopUpComponent, {
      width: '30%',
      data:{
        id: this.TicketById.id,
        comment: this.commentValue,
        userId: this.TicketById.userid
      },

    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
