import { Component, OnInit } from '@angular/core';
import { Agent } from './agent';
import { Router } from '@angular/router';
// import { LoginService } from '../login.service';
import { LocalStorageService } from 'ngx-webstorage';
import { MatDialog } from '@angular/material';
import { NotificationComponent } from './notification/notification.component';
import { ToastrService } from 'ngx-toastr';
import 'ngx-toastr/toastr.css';
import { NotificationModel } from './notificationModel';
import { TicketsService } from '../tickets.service';
import { NotificationService } from './notification.service';


@Component({
  selector: 'app-console-ui',
  templateUrl: './console-ui.component.html',
  styleUrls: ['./console-ui.component.css']
})
export class ConsoleUIComponent implements OnInit {

  agentDetails: Agent;
  agentEmail;
  httpHeader;
  token;
  notificationCount = 0;
  // recentNotifications: NotificationModel[] = [];


  constructor(
    private service: TicketsService,
    private router: Router,
    // private loginService: LoginService,
    private localStorage: LocalStorageService,
    private notificationService: NotificationService,
    public dialog: MatDialog,
    private toast: ToastrService
  )
  { }

  ngOnInit() {

    this.agentEmail = this.localStorage.retrieve("email");//this.loginService.getAgentEmail();
    this.notificationService.startHubConnection(this.agentEmail);
    this.notificationService.newNotification().subscribe(data => {
      if(data) {
        // this.recentNotifications.push(data);
        // this.toast.info(data.title);
        this.notificationCount += 1;
      }
    })
    // console.log("Retrieved Email", this.agentEmail);
    this.service.GetAgentDetails(this.agentEmail).subscribe(data => {
      this.agentDetails = data;
      // console.log(this.agentDetails);
    });
  }

  showNotifications() {
    this.notificationCount = 0;
  }

  // openDialog(): void {
  //   const dialogRef = this.dialog.open(NotificationComponent, {
  //     width: '50%',
  //     height: '70%',
  //     data: { notification: this.mockNotifications }
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //   });
  // }

  logOut() {
    console.log("Log out");
    this.localStorage.store('token', null);
    this.localStorage.store('email', null);
    this.router.navigate(['/userlogin/login']);
  }
}
