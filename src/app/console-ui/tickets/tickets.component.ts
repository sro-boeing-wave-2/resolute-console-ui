import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TicketsService } from '../../tickets.service';
import { FormBuilder } from '@angular/forms';

export interface Sources {
  value: number,
  source: string
}
export interface PriorityLevel {
  value: number,
  priority: string
}

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})

export class TicketsComponent implements OnInit {

  navLinks = [];
  numberOfTickets = {};
  filteredTickets;

  filterForm = this.formbuilder.group({
    sources: [''],
    priorityLevel: [''],
  });


  sources: Sources[] = [
    { value: 0, source: 'twitter' },
    { value: 1, source: 'chat' },
  ]

  priorityLevel: PriorityLevel[] = [
    { value: 0, priority: 'high' },
    { value: 1, priority: 'medium' },
    { value: 2, priority: 'low' }
  ]

  constructor(private router: Router, private service: TicketsService, private formbuilder: FormBuilder) {
    this.navLinks = [
      {
        label: 'All Tickets',
        path: '/console/tickets/all',
        count: 'total'
      }, {
        label: 'Open',
        path: '/console/tickets/open',
        count: 'open'
      }, {
        label: 'Closed',
        path: '/console/tickets/closed',
        count: 'closed'
      }, {
        label: 'Due',
        path: '/console/tickets/due',
        count: 'due'
      }
    ];

  }
  ngOnInit() {
    this.service.getCount().subscribe(data => { this.numberOfTickets = data.json(); });
  }

  onSubmit() {
    this.service.getByFilter(this.filterForm.value).subscribe(data => console.log(data));
  }
}
