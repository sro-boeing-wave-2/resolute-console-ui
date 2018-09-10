import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { queryParams } from './queryparams';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  private _url: string = "http://172.23.238.239:8083/api/Tickets";
  private UserDetailUrl: string ="http://172.23.238.225:5001/api/endusers/query?Name=%22syed%22";
  private _ticketStatusUpdateUrl: string = "";
  private _ticketPriorityUpdateUrl: string = "";


  // ----------------LINKS-------------------
  // http://172.23.238.239:5000/api/Tickets
  // /assets/mockdata/tickets.json
  // http://35.189.155.116:8083/
  // ----------------------------------------

  constructor(private http: Http) { }

  private querys = new Subject<queryParams>();

  getModel() {
    return this.querys.asObservable();
  }

  updateModel(queryParams: queryParams) {
    console.log(queryParams);
    this.querys.next(queryParams);
  }

  getUserDetailsById() {
    var a = this.http.get(this.UserDetailUrl);
    console.log(a);
    return a;
  }

  getById(id) {
    return this.http.get(this._url + '/detail/' + id);
  }

  getByFilter(queryParams: queryParams) {
    console.log(queryParams);
    if (queryParams != null) {
      console.log(queryParams.status);
      console.log(queryParams.source);
      console.log(queryParams.priority);
      console.log(this._url + '/filter?status=' + queryParams.status + '&source=' + queryParams.source + '&priority=' + queryParams.priority);
      return this.http.get(this._url + '/filter?status=' + queryParams.status + '&source=' + queryParams.source + '&priority=' + queryParams.priority);
    } else {
      console.log(this._url + '/filter');
      return this.http.get(this._url + '/filter');
    }
  }

  getCount() {
    var countOfTickets = this.http.get(this._url + '/count');
    return countOfTickets;
  }

  addNewTicket(ticket) {
    console.log(ticket);
    console.log(this._url);
    return this.http.post(this._url, ticket);
  }

  getAllTickets() {
    return this.http.get(this._url);
  }

  updateIndividualTicketStatus(ticketId:number, selectedStatus:string){
    return this.http.post(this._ticketStatusUpdateUrl, ticketId, selectedStatus);
  }

  updateIndividualTicketPriority(ticketId:number, selectedPriority:string){
    return this.http.post(this._ticketPriorityUpdateUrl, ticketId, selectedPriority);
  }
}



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
  // }
