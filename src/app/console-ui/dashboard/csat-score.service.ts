import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { csatDescription, csatScoreVsDate } from './analytics-classes/csat-score';
import { ticketstatus } from './analytics-classes/ticketstatus';
import { AnalyticsData } from './analytics-classes/AnalyticsData';
import { GamificationModel } from './analytics-classes/GamificationModel';

@Injectable({
  providedIn: 'root'
})
export class CsatScoreService {
  // private baseUrl =  'http://localhost:3000';

  private analyticsUrl: string = "http://13.126.8.255/Tickets/analytics";
  private gamificationUrl: string = "http://13.126.8.255/Tickets/leaderboard";

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

  getGamificationData() {
    return this.httpClient.get<GamificationModel[]>(this.gamificationUrl);
  }
}
