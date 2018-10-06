import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NotificationModel } from '../notificationModel';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  notifications: NotificationModel[];

  constructor(public dialogRef: MatDialogRef<NotificationComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.notifications = data.dataKey;
    console.log(this.notifications);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    console.log(this.data);
    // this.notificationService.newNotification().subscribe(data => {
    //   if (this.notifications == null) {
    //     this.notifications = [];
    //   }
    //   this.notifications.push(data);
    //   console.log("Notifications: " + data);
    console.log(this.notifications);
    // });
  }

}
