import { Component, OnInit } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { TicketsService } from '../tickets.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  numberOfTickets;
  // numberOfOpenTickets;
  // numberOfClosedTickets;
  // numberOfDueTickets;

  constructor(private service : TicketsService, private router : Router) { }

  ngOnInit() {
    this.getcount();
    // this.service.getOpenTickets().subscribe(data => this.numberOfOpenTickets = data.length);
    // this.service.getClosedTickets().subscribe(data => this.numberOfClosedTickets = data.length);
    // this.service.getDueTickets().subscribe(data => this.numberOfDueTickets = data.length);
  }

  getcount()
  {
    this.service.getCount().subscribe(data => {this.numberOfTickets = data.json()});
  }

  onClick() {
    this.router.navigate(['/tickets']);
  }
}

