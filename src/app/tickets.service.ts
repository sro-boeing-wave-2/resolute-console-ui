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

  private _url: string = "http://13.126.8.255/tickets";
  // http://35.221.125.153:8083/api/Tickets

  private UserDetailUrl: string = "http://13.126.8.255/endusers/query?Name=";
  // private _ticketStatusUpdateUrl: string = "http://13.126.8.255/status";
  // private _ticketPriorityUpdateUrl: string = "http://13.126.8.255/priority";
  // private updateTicketUrl: string = "http://13.126.8.255/tickets/{id}?status=""&priority="your value"
  private _ticketCommentUpdateUrl: string = "http://13.126.8.255/updateComment";
  private agentUrl = "http://13.126.8.255/agents/query?Email=";
  private getIntentUrl = "http://13.126.8.255/intent/getIntent";
  private postSolutionUrl ="http://13.126.8.255/solution";

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

  getRecentTickets(queryParams) {
    return this.http.get<modelForGetTicketsByFilter>(this._url + '/filter?status=' + queryParams.status + '&priority=' + queryParams.priority + '&pageNumber=1' + '&pageSize=' + 6);
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
    return this.http.put(`${this._url}/${ticketData.TicketId}?status=${ticketData.Status}&priority=`, ticketData);
  }

  updateIndividualTicketPriority(ticketId, selectedPriority){
    var ticketData = {'TicketId': ticketId, 'Priority': selectedPriority};
    console.log(ticketData);
    return this.http.put(`${this._url}/${ticketData.TicketId}?status=&priority=${ticketData.Priority}`, ticketData);
  }

  updateIndividualTicketComment(ticketId, comment, createdBy){
    console.log("Comment Data: " + comment);
    var ticketCommentData = {'ticketid': ticketId, 'comment': comment, 'Createdby': createdBy};
    console.log(ticketCommentData);
    return this.http.put(this._ticketCommentUpdateUrl, ticketCommentData).subscribe(result => {
      // console.log('huhu');
    });
  }

  getIntentValue(){
    return this.http.get<string[]>(this.getIntentUrl);
  }

  GetAgentDetails(agentEmail) {
    return this.http.get<Agent>(`${this.agentUrl}%22${agentEmail}%22`);
  }

  GetUserDetails(username) {
    return this.http.get<EndUser>(`${this.UserDetailUrl}%22${username}%22`);
  }

  postSolution(submittingData) {
    return this.http.post(this.postSolutionUrl, submittingData);
  }

}
