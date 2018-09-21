import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TicketsService } from '../../tickets.service';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {

  constructor(private service: TicketsService, public dialogRef: MatDialogRef<PopUpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  save(){
    this.dialogRef.close("IT WAS SAVED");
    this.service.updateIndividualTicketComment(this.data.id, this.data.comment, this.data.userId);
    console.log("huhu")
  }

  // updateCommentValue(){
  //   console.log(this.data.id);

  //   this.service.updateIndividualTicketComment(this.data.id, this.data.comment, this.data.userid);
  // }


}
