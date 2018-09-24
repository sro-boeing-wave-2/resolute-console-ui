import { Component, OnInit } from '@angular/core';
import { TicketsService } from '../../tickets.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  numberOfTickets;
  httpOptions;

  constructor(private service : TicketsService, private router : Router) { }

  ngOnInit() {
    this.service.getCount().subscribe(data => {this.numberOfTickets = data});
  }

  onClick(status : string) {
    console.log(status);
    this.router.navigate(['/console/tickets/' + status]);
  }
}

