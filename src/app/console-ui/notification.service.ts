import { Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';
import { BehaviorSubject } from 'rxjs';
import { NotificationModel } from './notificationModel';
import { Ticket } from '../ticket';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private _hubConnection: HubConnection;
  private notificationList: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  constructor() { }

  startHubConnection(email: string) {
    this._hubConnection = new HubConnectionBuilder().withUrl("http://13.126.8.255/notification/notifications").build();
    this._hubConnection
      .start().then(_ => {
        this._hubConnection.invoke('Config', email).then(_ => {
          console.log(`Configured connection for ${email}`);
        });
      });
    this._hubConnection.on("ReceiveNotification", (payload: string) => {
      this.notificationList.next(payload);
      console.log(payload);
    });
  }

  newNotification() {
    return this.notificationList.asObservable();
  }
}
