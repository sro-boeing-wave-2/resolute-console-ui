import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TicketsService } from '../../tickets.service';
import { FormBuilder } from '@angular/forms';
import { queryParams } from '../../queryparams';
import { PaginationTicketModel, PageRange, PageRangeArray } from './ticketModelForPagination';

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
  TotalPages = 10;
  isPreviousDisabled;
  isNextDisabled;
  pageRange = new PageRange();
  pageRangeArray = new PageRangeArray();
  currentPageNo;

  queryParams: queryParams = {
    status: "",
    source: "",
    priority: "",
    page: 1,
    sortBy: "subject",
    sortOrder: false
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
    this.pageRangeArray = this.getPageRange(1);
    this.isPreviousDisabled = true;
    if (this.TotalPages == 1)
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
      this.getPageRange(this.queryParams.page);
      if (this.queryParams.page == 1) this.isPreviousDisabled = true;
    }
    console.log(this.queryParams);
  }

  nextPage() {
    this.service.getModel().subscribe(data => this.queryParams = data);
    if (this.queryParams.page < this.TotalPages) {
      this.isPreviousDisabled = false;
      this.queryParams.page += 1;
      this.service.updateModel(this.queryParams);
      this.getPageRange(this.queryParams.page);
      if(this.queryParams.page == this.TotalPages) this.isNextDisabled = true;
    }
    console.log(this.queryParams);
  }

  getPageRange(currentPage) {
    // this.currentPageNo = currentPage;
    this.currentPageNo = currentPage;
    this.queryParams.page = currentPage;
    if(this.queryParams.page == 1) this.isPreviousDisabled = true; else this.isPreviousDisabled = false;
    if(this.queryParams.page == this.TotalPages) this.isNextDisabled = true; else this.isNextDisabled = false;
    this.service.updateModel(this.queryParams);
    console.log(this.queryParams);
    let Pages = this.TotalPages;
    // currentPage = 10;
    // let pageRange = new PageRange();
    // let pageRangeArray = new PageRangeArray();

    if(Pages < 6) {
      this.pageRange.startPage = 1;
      this.pageRange.endPage = Pages;
    } else
    {
      if(currentPage <= 3) {
        this.pageRange.startPage = 1;
        this.pageRange.endPage = 5;
      } else
      if(currentPage + 1 >= Pages) {
        this.pageRange.startPage = Pages - 4;
        this.pageRange.endPage = Pages;
      } else
      {
        this.pageRange.startPage = currentPage - 2;
        this.pageRange.endPage = currentPage + 2;
      }
    }

    console.log(this.pageRange.startPage);
    console.log(this.pageRange.endPage);

    if(this.TotalPages > 5 )
    {
      for(let index = 0; index<5; index++) {
        this.pageRangeArray.pageNo[index] = this.pageRange.startPage++;
      }
    } else {
      for(let index = 0; index<this.TotalPages; index++) {
        this.pageRangeArray.pageNo[index] = this.pageRange.startPage++;
      }
    }
    console.log(this.pageRangeArray);
    return this.pageRangeArray;
  }

}
