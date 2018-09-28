import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NotificationModel } from '../notificationModel';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} }
  ]
})
export class NotificationComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<NotificationComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    // this.notificationService.newNotification().subscribe(data => {
    //   if (this.notifications == null) {
    //     this.notifications = [];
    //   }
    //   this.notifications.push(data);
    //   console.log("Notifications: " + data);
    console.log(this.data.dataKey);
    // });
  }

}
