import { Component, OnInit } from '@angular/core';
import { Agent } from './agent';
import { TicketsService } from '../tickets.service';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { LocalStorageService } from 'ngx-webstorage';

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

  constructor(private service: TicketsService, private router: Router, private loginService: LoginService, private localStorage: LocalStorageService) { }

  ngOnInit() {
    this.agentEmail = this.localStorage.retrieve("email");//this.loginService.getAgentEmail();
    console.log("Retrieved Email", this.agentEmail);
    this.service.GetAgentDetails(this.agentEmail).subscribe(data => {
      this.agentDetails = data.json();
      console.log(this.agentDetails);
    });
  }

  logOut() {
    console.log("Log out");
    this.token = null;
    this.localStorage.store('token', this.token);
    this.router.navigate(['/userlogin/login']);
  }
}
