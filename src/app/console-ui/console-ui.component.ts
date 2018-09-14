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
  httpHeader;
  token;

  constructor(private service: TicketsService, private router: Router, private loginService: LoginService) { }

  ngOnInit() {
    this.service.GetAgentDetails().subscribe(data => this.agentDetails = data.json());
  }

  logOut() {
    console.log("Log out");
    this.token = [];
    this.loginService.updateToken(this.token);
    this.router.navigate(['/userlogin']);
  }
}
