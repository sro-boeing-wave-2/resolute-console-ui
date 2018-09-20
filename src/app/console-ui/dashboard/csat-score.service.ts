import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { csatDescription, csatScoreVsDate } from './analytics-classes/csat-score';
import { ticketstatus } from './analytics-classes/ticketstatus';
import { AnalyticsData } from './analytics-classes/AnalyticsData';

@Injectable({
  providedIn: 'root'
})
export class CsatScoreService {
  private baseUrl =  'http://localhost:3000';

  private analyticsUrl: string = "http://35.221.125.153:8083/api/Tickets/analytics";

  constructor(private httpClient: HttpClient) { }

  // getInitialCsatStatus() {
  //   return this.httpClient.get<csatScoreVsDate[]>(`${this.baseUrl}/api/csatscore`);
  // }
  // getCsatMetaData(){
  //   return this.httpClient.get<csatDescription[]>(`${this.baseUrl}/api/csatmeta`)
  // }
  // getInitialTicketStatus(){
  //   return this.httpClient.get<ticketstatus[]>(`${this.baseUrl}/api/ticketstatus`);
  // }

  getAnalyticsData() {
    return this.httpClient.get<AnalyticsData>(this.analyticsUrl);
  }
}
