import { Component, OnInit } from '@angular/core';
import { Agent } from './agent';
import { TicketsService } from '../tickets.service';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { LocalStorageService } from 'ngx-webstorage';
import { Message } from 'primeng/api';

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
  msgs: Message[] = [];

  constructor(
    private service: TicketsService,
    private router: Router,
    private loginService: LoginService,
    private localStorage: LocalStorageService,
  ) {
  }

  ngOnInit() {
    this.agentEmail = this.localStorage.retrieve("email");//this.loginService.getAgentEmail();
    // console.log("Retrieved Email", this.agentEmail);
    this.service.GetAgentDetails(this.agentEmail).subscribe(data => {
      this.agentDetails = data;
      // console.log(this.agentDetails);
    });
  }

  displayMessage() {
    console.log("notify");
    this.msgs.push({ severity: "success", summary: "Hello"});
  }

  logOut() {
    console.log("Log out");
    this.localStorage.store('token', null);
    this.localStorage.store('email', null);
    this.router.navigate(['/userlogin/login']);
  }
}
