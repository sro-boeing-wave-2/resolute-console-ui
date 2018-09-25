import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  userImage;

  constructor(private router: Router, private service: TicketsService, private route: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    console.log(id);
    this.call(id);
  }

  call(id) {
    let u = this.service.getTicketById(id).subscribe(data => {
      this.TicketById = data;
      console.log(this.TicketById.userid);
      this.service.GetUserDetails(this.TicketById.name).subscribe(data => {
        this.userImage = data;
        console.log(this.userImage);
      })
    });
    console.log(u);
  }

  back(){
    this.router.navigate(['/console/tickets/all'])
  }

  updateStatus(){
    console.log(this.selectedStatusValue);
    this.service.updateIndividualTicketStatus(this.TicketById.id,this.selectedStatusValue).subscribe();
  }

  updatePriority(){
    this.service.updateIndividualTicketPriority(this.TicketById.id,this.selectedPriorityValue).subscribe();
  }

  statuses: Options[] = [
    {value: "open", viewValue: 'Open'},
    {value: "close", viewValue: 'Closed'},
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
