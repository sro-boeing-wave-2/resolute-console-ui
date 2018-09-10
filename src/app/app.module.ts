import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoutingComponents } from './app-routing.module';
import { MaterialModule } from './material';
import { TicketsService } from './tickets.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserLoginComponent } from './user-login/user-login.component';
import { SignUpComponent } from './user-login/sign-up/sign-up.component';
import { LoginPageComponent } from './user-login/login-page/login-page.component';
import { LandingPageComponent } from './user-login/landing-page/landing-page.component';
import { DragDropAgentComponent } from './user-login/drag-drop-agent/drag-drop-agent.component';
import { DragDropUserComponent } from './user-login/drag-drop-user/drag-drop-user.component';


@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    UserLoginComponent,
    SignUpComponent,
    LoginPageComponent,
    LandingPageComponent,
    DragDropAgentComponent,
    DragDropUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MatSidenavModule,
    MatCardModule,
    MatExpansionModule,
    MatInputModule
  ],
  entryComponents: [
  ],
  providers: [TicketsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
