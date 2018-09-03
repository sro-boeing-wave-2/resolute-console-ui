import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { Ticket } from './ticket';
import {Http} from '@angular/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  private _url: string = "http://172.23.238.239:5000/api/Tickets";

  // ----------------LINKS-------------------
    // http://172.23.238.239:5000/api/Tickets
    // /assets/mockdata/tickets.json
    // http://35.189.155.116:8083/
  // ----------------------------------------

  constructor(private http: Http) { }

  getById(id) {
    var k = this.http.get(this._url + '/detail/' + id);
    return k;
  }

  getAllTickets() {
    return this.http.get(this._url);
  }

  getOpenTickets() {
    return this.http.get(this._url + '/status/open');
    // return this.http.get<Ticket[]>(this._url)
    //  .pipe(map(res => res.filter((ticket) => ticket.status === 0)));
  }

  getClosedTickets() {
    return this.http.get(this._url + '/status/close');
    // return this.http.get<Ticket[]>(this._url)
    //  .pipe(map(res => res.filter((ticket) => ticket.status === 1)));
  }

  getDueTickets() {
    return this.http.get(this._url + '/status/due');
    // return this.http.get<Ticket[]>(this._url)
    //  .pipe(map(res => res.filter((ticket) => ticket.status === 2)));
  }

  getCount() {
    var countOfTickets = this.http.get(this._url + '/count');
    return countOfTickets;
  }

  addNewTicket(ticket) {
    return this.http.post(this._url, ticket);
  }
}
