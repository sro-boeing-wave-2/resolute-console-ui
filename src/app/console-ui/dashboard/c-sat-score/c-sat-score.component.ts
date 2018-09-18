import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy, ElementRef, Input, OnChanges, ViewChild } from '@angular/core';
import * as d3 from 'd3';
import { csatDescription, csatScoreVsDate } from '../analytics-classes/csat-score';
import { CsatScoreService } from '../csat-score.service';

@Component({
  selector: 'app-c-sat-score',
  templateUrl: './c-sat-score.component.html',
  styleUrls: ['./c-sat-score.component.css']
})
export class CSatScoreComponent implements OnInit {

  types: string[] = ["line", "stackedline", "fullstackedline"];
  countriesInfo: csatScoreVsDate[];
  energySources: csatDescription[];

  constructor(service: CsatScoreService) {
    service.getInitialCsatStatus()
      .subscribe(csatData => this.countriesInfo = csatData.reverse().slice(-9, -1).reverse());
    service.getCsatMetaData()
      .subscribe(csatMetaData => this.energySources = csatMetaData);
  }

  customizeTooltip(arg) {
    return {
      text: arg.valueText
    }
  }

  ngOnInit() { }

}
