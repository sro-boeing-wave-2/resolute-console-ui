import { Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';
import { BehaviorSubject } from 'rxjs';
import { NotificationModel } from './notificationModel';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private _hubConnection: HubConnection;
  private notificationList: BehaviorSubject<NotificationModel> = new BehaviorSubject<NotificationModel>(null);

  constructor() { }

  startHubConnection(email: string) {
    this._hubConnection = new HubConnectionBuilder().withUrl("http://172.23.238.235:5000/notifications").build();
    this._hubConnection
      .start().then(_ => {
        this._hubConnection.invoke('Config', email).then(_ => {
          console.log(`Configured connection for ${email}`);
        });
      });
    this._hubConnection.on("ReceiveNotification", (payload: NotificationModel) => {
      this.notificationList.next(payload);
      console.log(payload);
    });
  }

  newNotification() {
    return this.notificationList.asObservable();
  }
}
