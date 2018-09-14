import { Component, OnInit } from '@angular/core';
import { ticketstatus } from '../analytics-classes/ticketstatus';
import {CsatScoreService} from '../csat-score.service';
import {  enableProdMode } from '@angular/core';

if(!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@Component({
  selector: 'app-tickets-piechart',
  templateUrl: './tickets-piechart.component.html',
  styleUrls: ['./tickets-piechart.component.css'],
  providers: [CsatScoreService]
})
export class TicketsPiechartComponent implements OnInit {

  pieChartdata : ticketstatus[];

  constructor( service: CsatScoreService) {
    console.log(this.pieChartdata);
      service.getInitialTicketStatus()
      .subscribe((price) => {this.pieChartdata = price;console.log(this.pieChartdata);});
  }

  customizeLabel(arg) {
      return arg.valueText + " (" + arg.percentText + ")";
  }

  ngOnInit() {
  }

}
