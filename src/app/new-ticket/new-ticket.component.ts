import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TicketsService } from '../tickets.service';

import { Router } from '@angular/router';
import { HomepageComponent } from '../homepage/homepage.component';

@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.component.html',
  styleUrls: ['./new-ticket.component.css']
})
export class NewTicketComponent implements OnInit {

  noteForm = this.fb.group({
    // Userid: [''],
    Description: ['']
  });


   onSubmit() {
    this.service.addNewTicket(this.noteForm.value).subscribe(result=>this.route.navigate(["/tickets"]));
  }

  constructor(private fb: FormBuilder, private service : TicketsService, private route : Router) { }

  ngOnInit() {
  }

}
