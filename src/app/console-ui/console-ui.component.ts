import { Component, OnInit } from '@angular/core';
import { Agent } from './agent';
import { TicketsService } from '../tickets.service';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { LocalStorageService } from 'ngx-webstorage';
import { PushNotificationService } from './push-notification.service';

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

  constructor(
    private service: TicketsService,
    private router: Router,
    private loginService: LoginService,
    private localStorage: LocalStorageService,
    private pushService: PushNotificationService
  ) {
    this.pushService.requestPermission();
  }

  ngOnInit() {
    this.agentEmail = this.localStorage.retrieve("email");//this.loginService.getAgentEmail();
    // console.log("Retrieved Email", this.agentEmail);
    this.service.GetAgentDetails(this.agentEmail).subscribe(data => {
      this.agentDetails = data;
      // console.log(this.agentDetails);
    });
  }

  onClick() {
    this.notify();
  }

  logOut() {
    console.log("Log out");
    this.localStorage.store('token', null);
    this.localStorage.store('email', null);
    this.router.navigate(['/userlogin/login']);
  }

  notify() {
    let data: Array<any> = [];
    data.push({
      'title': 'New Ticket',
      'alertContent': 'This is the new ticket'
    });
    console.log("data pushed");
    // this.pushService.generateNotification(data);
  }
}
