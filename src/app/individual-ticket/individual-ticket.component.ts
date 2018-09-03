import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TicketsComponent } from '../tickets/tickets.component';
import { TicketsService } from '../tickets.service';
import { Ticket } from '../ticket';

@Component({
  selector: 'app-individual-ticket',
  templateUrl: './individual-ticket.component.html',
  styleUrls: ['./individual-ticket.component.css']
})
export class IndividualTicketComponent implements OnInit {

  TicketById;
  constructor(private service : TicketsService, private route : ActivatedRoute) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
this.call(id)

  }

  call(id)
  {
    this.service.getById(id).subscribe(data => {
      this.TicketById = data.json();
    });

  }
}
