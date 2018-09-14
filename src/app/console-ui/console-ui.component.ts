import { Component, OnInit } from '@angular/core';
import { Agent } from './agent';
import { TicketsService } from '../tickets.service';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

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

  constructor(private service: TicketsService, private router: Router, private loginService: LoginService) { }

  ngOnInit() {
    this.agentEmail = this.loginService.getAgentEmail();
    this.service.GetAgentDetails(this.agentEmail).subscribe(data => {
      this.agentDetails = data.json();
      console.log(this.agentDetails);
    });
  }

  logOut() {
    console.log("Log out");
    this.token = null;
    this.loginService.updateToken(this.token);
    this.router.navigate(['/userlogin']);
  }
}
