import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TicketsService } from '../../tickets.service';
import { FormBuilder } from '@angular/forms';
import { queryParams } from '../../queryparams';

export interface Sources {
  source: string
}

export interface PriorityLevel {
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

  queryParams: queryParams = {
    status: "",
    source: "",
    priority: "",
    page: 10,
    size: 10
  }

  //Form entries
  filterForm = this.formbuilder.group({
    sources: [''],
    priorityLevel: [''],
  });

  //Menu options
  sources: Sources[] = [
    { source: 'twitter' },
    { source: 'chat' },
  ]

  priorityLevel: PriorityLevel[] = [
    { priority: 'high' },
    { priority: 'medium' },
    { priority: 'low' }
  ]

  httpOptions;

  constructor(private router: Router, private service: TicketsService, private formbuilder: FormBuilder) {

    //Links for tabs
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
        label: 'Unassigned',
        path: '/console/tickets/due',
        count: 'due'
      }
    ];
  }

  ngOnInit() {
    const httpHeaders = this.service.gethttpHeader();
    this.service.getCount().subscribe(data => { this.numberOfTickets = data.json(); });
    this.service.updateModel(this.queryParams);
  }

  onSubmit() {
    this.queryParams.source = this.filterForm.value['sources'];
    this.queryParams.priority = this.filterForm.value['priorityLevel'];
    this.service.updateModel(this.queryParams);
  }
}
