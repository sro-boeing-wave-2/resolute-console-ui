import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resolution-time',
  templateUrl: './resolution-time.component.html',
  styleUrls: ['./resolution-time.component.css']
})
export class ResolutionTimeComponent implements OnInit {

  private time;
  constructor() { }

  ngOnInit() {
    this.time = Date.now();
  }

}
