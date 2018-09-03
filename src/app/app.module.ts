import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routingComponents, AppRoutingModule, RoutingComponents } from './app-routing.module';
import { SignupService } from './signup.service';
import { LoginService } from './login.service';
import { MaterialModule } from './material';
import { TicketsService } from './tickets.service';
import { NewTicketComponent } from './new-ticket/new-ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    RoutingComponents,
    NewTicketComponent,
  ],
  providers: [SignupService, LoginService, TicketsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
