import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { queryParams } from './queryparams';
import { Subject } from 'rxjs';
import { LoginService } from './login.service';
import { Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { TicketDetailsModal } from './ticket';
import { Agent } from './console-ui/agent';
import { EndUser } from './console-ui/enduser';

@Injectable({
  providedIn: 'root'
})

export class TicketsService {

  private _url: string = "http://35.221.125.153/tickets";
  // http://35.221.125.153:8083/api/Tickets

  private UserDetailUrl: string = "http://35.221.125.153/endusers/query?Name=";
  private _ticketStatusUpdateUrl: string = "http://35.221.125.153/status";
  private _ticketPriorityUpdateUrl: string = "http://35.221.125.153/priority";
  private _ticketCommentUpdateUrl: string = "http://35.221.125.153/updateComment";
  private agentUrl = "http://35.221.125.153/agents/query?Email=";

  // http://172.23.238.239:5000/api/Tickets
  // /assets/mockdata/tickets.json
  // http://35.189.155.116:8083/
  // ----------------------------------------

  token;

  constructor(private http: HttpClient, private loginService: LoginService) { }

  // gethttpHeader() {
  //   const myheaders = new Headers();
  //   myheaders.append('Content-Type', 'application/json');
  //   myheaders.append('agentId', '1');
  //   myheaders.append('departmentId', '1');
  //   let httpOptions = new RequestOptions({
  //     headers: myheaders
  //   });
  //   console.log(httpOptions);
  //   return httpOptions;
  // }

  private querys = new Subject<queryParams>();

  getModel() {
    var k = this.querys.asObservable();
    // console.log(k);
    return k;
  }

  updateModel(queryParams: queryParams) {
    // console.log(queryParams);
    this.querys.next(queryParams);
  }

  // getUserDetailsById() {
  //   var a = this.http.get(this.UserDetailUrl);
  //   // console.log(a);
  //   return a;
  // }

  getById(id) {
    // const headers = this.gethttpHeader();
    return this.http.get<TicketDetailsModal>(`${this._url}/detail/${id}`);
  }

  getByFilter(queryParams: queryParams) {
    // const headers = this.gethttpHeader();
    // console.log(queryParams);
    if (queryParams != null) {
      //change url
      // console.log(this._url + '/filter?status=' + queryParams.status + '&source=' + queryParams.source + '&priority=' + queryParams.priority);
      return this.http.get(this._url + '/filter?status=' + queryParams.status + '&source=' + queryParams.source + '&priority=' + queryParams.priority);
    } else {
      // console.log(this._url + '/filter');

      //change url
      return this.http.get(`${this._url}/filter`);
    }
  }

  getCount() {
    // const headers = this.gethttpHeader();
    var countOfTickets = this.http.get(`${this._url}/count`)
    return countOfTickets;
  }

  addNewTicket(ticket) {
    // const headers = this.gethttpHeader();
    // console.log(ticket);
    // console.log(this._url);
    return this.http.post(this._url, ticket);
  }

  getAllTickets() {
    // const headers = this.gethttpHeader();
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

  updateIndividualTicketComment(ticketId, comment, createdBy){
    console.log("Comment Data: " + comment);
    var ticketCommentData = {'ticketid': ticketId, 'comment': comment, 'Createdby': createdBy};
    console.log(ticketCommentData);
    return this.http.put(this._ticketCommentUpdateUrl, ticketCommentData).subscribe(result => {
      // console.log('huhu');
    });
  }

  GetAgentDetails(agentEmail) {
    return this.http.get<Agent>(`${this.agentUrl}%22${agentEmail}%22`);
  }

  GetUserDetails(username) {
    return this.http.get<EndUser>(`${this.UserDetailUrl}%22${username}%22`);
  }
}

  // gethttpHeader() {
  //   this.loginService.getTokenForComponents().subscribe(data => {
  //     this.token = data['token'];
  //   });
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       'Authorization': `Bearer ${this.token}`
  //     })
  //   }
  //   return httpOptions;
  // }


  // getOpenTickets() {
  //   return this.http.get(this._url + '/status/open');
  //   // return this.http.get<Ticket[]>(this._url)
  //   //  .pipe(map(res => res.filter((ticket) => ticket.status === 0)));
  // }

  // getClosedTickets() {
  //   return this.http.get(this._url + '/status/close');
  //   // return this.http.get<Ticket[]>(this._url)
  //   //  .pipe(map(res => res.filter((ticket) => ticket.status === 1)));
  // }

  // getDueTickets() {
  //   return this.http.get(this._url + '/status/due');
  //   // return this.http.get<Ticket[]>(this._url)
  //   //  .pipe(map(res => res.filter((ticket) => ticket.status === 2)));
  //}
