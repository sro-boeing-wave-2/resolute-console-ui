import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';


import { DxPieChartModule } from 'devextreme-angular';
import { DxChartModule, DxSelectBoxModule } from 'devextreme-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoutingComponents } from './app-routing.module';
import { MaterialModule } from './material';
import { TicketsService } from './tickets.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PopUpComponent } from './console-ui/pop-up/pop-up.component';
// import { RequestInterceptor } from './auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    PopUpComponent
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
    MatInputModule,
    MatDialogModule
    DxPieChartModule,
    DxChartModule,
    DxSelectBoxModule
  ],
  entryComponents: [PopUpComponent
  ],
  providers: [
    TicketsService
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: RequestInterceptor,
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
