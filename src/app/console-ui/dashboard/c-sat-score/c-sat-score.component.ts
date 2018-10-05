import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy, ElementRef, Input, OnChanges, ViewChild } from '@angular/core';
import * as d3 from 'd3';
import { csatDescription, csatScoreVsDate } from '../analytics-classes/csat-score';
import { CsatScoreService } from '../csat-score.service';
import { Csat } from '../analytics-classes/AnalyticsData';
import { DatePipe } from '@angular/common'
import { JsonHubProtocol } from '@aspnet/signalr';

@Component({
  selector: 'app-c-sat-score',
  templateUrl: './c-sat-score.component.html',
  styleUrls: ['./c-sat-score.component.css'],
  providers: [DatePipe]
})
export class CSatScoreComponent implements OnInit {

  types: string[] = ["line", "stackedline", "fullstackedline"];
  csatData: Csat[];
  csatMetaData: csatDescription[];

  constructor(service: CsatScoreService, private datepipe: DatePipe) {
    service.getAnalyticsData().subscribe(data => {
      this.csatData = data.analyticscsat;
      this.csatData.forEach(element => {
        element.date = this.datepipe.transform(element.date, 'dd-mm-yy');
      });
      this.csatData = this.csatData.reverse().slice(1, 8).reverse();
      console.log(JSON.stringify( data.analyticscsat));
    })
    // service.getCsatMetaData()
    //   .subscribe(csatMetaData => {
    this.csatMetaData = [{
      value: "csatscore",
      name: "CustomerSatisfaction"
    }];
    // console.log(this.csatData);
  }

  customizeTooltip(arg) {
    return {
      text: arg.valueText
    }
  }

  ngOnInit() { }

}
