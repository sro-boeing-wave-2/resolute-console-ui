import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { queryParams } from './queryparams';
import { Subject } from 'rxjs';
import { LoginService } from './login.service';
import { Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { TicketDetailsModal, modelForGetTicketsByFilter, Ticket } from './ticket';
import { Agent } from './console-ui/agent';
import { EndUser } from './console-ui/enduser';

@Injectable({
  providedIn: 'root'
})

export class TicketsService {

  private _url: string = "http://35.221.88.74/tickets";
  private _UserDetailUrl: string = "http://35.221.88.74/endusers/query?Name=";
  private _ticketStatusUpdateUrl: string = "http://35.221.88.74/status";
  private _ticketPriorityUpdateUrl: string = "http://35.221.88.74/priority";
  private _agentUrl = "http://35.221.88.74/agents/query?Email=";
  private getIntentUrl = "http://35.221.88.74/intent/getIntent";


  token;

  constructor(private http: HttpClient, private loginService: LoginService) { }

  private querys = new Subject<queryParams>();

  getQueryParamsModel() {
    var k = this.querys.asObservable();
    return k;
  }

  updateQueryParamsModel(queryParams: queryParams) {
    console.log("update successful");
    this.querys.next(queryParams);
  }

  getById(id) {
    return this.http.get<Ticket>(`${this._url}/detail/${id}`);
  }

  getTicketsByFilter(queryParams: queryParams) {
    if (queryParams != null) {
      console.log(queryParams.page);
      console.log(this._url + '/filter?status=' + queryParams.status + '&priority=' + queryParams.priority + '&pageNumber=' + queryParams.page + '&pageSize=' + 10);
      return this.http.get<modelForGetTicketsByFilter>(this._url + '/filter?status=' + queryParams.status + '&priority=' + queryParams.priority + '&pageNumber=' + queryParams.page + '&pageSize=' + 10);
    } else {
      return this.http.get<modelForGetTicketsByFilter>(`${this._url}/filter?all`);
    }
  }

  getTicketCount() {
    var countOfTickets = this.http.get(`${this._url}/count`)
    return countOfTickets;
  }

  addNewTicket(ticket) {
    return this.http.post(this._url, ticket);
  }

  getAllTickets() {
    return this.http.get(this._url);
  }

  updateIndividualTicketStatus(ticketId, selectedStatus) {
    var ticketData = { 'TicketId': ticketId, 'Status': selectedStatus };
    console.log(ticketData);
    return this.http.put(this._ticketStatusUpdateUrl, ticketData);
  }

  updateIndividualTicketPriority(ticketId, selectedPriority){
    var ticketPriorityData = {'TicketId': ticketId, 'Priority': selectedPriority};
    console.log(ticketPriorityData);
    return this.http.put(this._ticketPriorityUpdateUrl, ticketPriorityData);
  }

  getIntentValue(){
    return this.http.get<string[]>(this.getIntentUrl);
  }

  GetAgentDetails(agentEmail) {
    return this.http.get<Agent>(`${this._agentUrl}%22${agentEmail}%22`);
  }

  GetUserDetails(username) {
    return this.http.get<EndUser>(`${this._UserDetailUrl}%22${username}%22`);
  }
}
