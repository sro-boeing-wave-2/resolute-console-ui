import { Pipe, PipeTransform, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketsService } from '../../tickets.service';
import { Ticket, TicketDetailsModal } from '../../ticket';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { LocalStorageService } from 'ngx-webstorage';
import { DomSanitizer } from "@angular/platform-browser";

export interface Options {
  value: string;
  viewValue: string;
}

@Pipe({name: "safe"})
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@Component({
  selector: 'app-individual-ticket',
  templateUrl: './individual-ticket.component.html',
  styleUrls: ['./individual-ticket.component.css']
})
export class IndividualTicketComponent implements OnInit {
  ConnectionId: string;
  Type: string;
  Email: string;
  selectedStatusValue: string ;
  selectedPriorityValue: string ;
  commentValue: string;
  TicketById: TicketDetailsModal;
  UserName;
  chatHubUrl: string;
  agentDetails:TicketsService;
  userImage;

  constructor(private router: Router, private service: TicketsService, private route: ActivatedRoute, public dialog: MatDialog, private localStorage: LocalStorageService) { }

  ngOnInit() {

    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    console.log(id);
    this.call(id);
    this.ConnectionId = "chonnect";
    this.Type = "agent";
    this.Email = "emailagentka";
    this.chatHubUrl = `http://172.23.238.235:4200?connectionId=${this.ConnectionId}&type=${this.Type}&email=${this.Email}`;
    console.log(this.chatHubUrl);

  }

  call(id) {
    let u = this.service.getById(id).subscribe(data => {
      this.TicketById = data;
      console.log(this.TicketById.userid);
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
