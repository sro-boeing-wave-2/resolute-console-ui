import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TicketsService } from '../../tickets.service';
import { FormBuilder } from '@angular/forms';
import { queryParams } from '../../queryparams';
import { PaginationTicketModel, PageRange } from './ticketModelForPagination';

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
  PaginationTicket: PaginationTicketModel;
  Pages = 14;
  isPreviousDisabled;
  isNextDisabled;
  pageRange: PageRange;
  currentPage = 9;

  queryParams: queryParams = {
    status: "",
    source: "",
    priority: "",
    page: 1,
    size: 20
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
    this.service.getCount().subscribe(data => { this.numberOfTickets = data;});
    this.service.updateModel(this.queryParams);
    // this.service.getByFilter(this.queryParams).subscribe(data => {
    //   this.PaginationTicket = data;
    //   this.Pages = this.PaginationTicket.Pages;
    // })
    this.pageRange = this.getPageRange(this.Pages, this.currentPage);
    this.isPreviousDisabled = true;
    if (this.Pages == 1)
      this.isNextDisabled = true;
    else
      this.isNextDisabled = false;
  }

  onSubmit() {
    this.queryParams.source = this.filterForm.value['sources'];
    this.queryParams.priority = this.filterForm.value['priorityLevel'];
    this.service.updateModel(this.queryParams);
  }

  previousPage() {
    this.service.getModel().subscribe(data => this.queryParams = data);
    if (this.queryParams.page > 1) {
      this.isNextDisabled = false;
      this.queryParams.page -= 1;
      this.service.updateModel(this.queryParams);
      if (this.queryParams.page == 1) this.isPreviousDisabled = true;
    }
    console.log(this.queryParams);
  }

  nextPage() {
    this.service.getModel().subscribe(data => this.queryParams = data);
    if (this.queryParams.page < this.Pages) {
      this.isPreviousDisabled = false;
      this.queryParams.page += 1;
      this.service.updateModel(this.queryParams);
      if(this.queryParams.page == this.Pages) this.isNextDisabled = true;
    }
    console.log(this.queryParams);
  }

  getPageRange(Pages, currentPage) {
    // Pages = 10;
    // currentPage = 10;
    let pageRange = new PageRange();

    if(Pages < 6) {
      pageRange.startPage = 1;
      pageRange.endPage = Pages;
    } else
    {
      if(currentPage <= 3) {
        pageRange.startPage = 1;
        pageRange.endPage = 5;
      } else
      if(currentPage + 2 >= Pages) {
        pageRange.startPage = Pages - 4;
        pageRange.endPage = Pages;
      } else
      {
        pageRange.startPage = currentPage - 2;
        pageRange.endPage = currentPage + 2;
      }
    }

    console.log(pageRange.startPage);
    console.log(pageRange.endPage);
    return pageRange;
  }

}
