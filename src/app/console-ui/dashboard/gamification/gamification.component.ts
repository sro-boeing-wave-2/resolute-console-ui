import { Component, OnInit } from '@angular/core';
import { TicketsService } from '../../../tickets.service';

export interface mostTickets {
  image_url: string;
  agentName: string;
  department: string;
  numberOfTickets: number;
  badge_url: string;
}

// export interface leastTime {
//   image_url: string;
//   agentName: string;
//   department: string;
//   resolutionTime: number;
// }

export interface GamificationData {
  mostTickets: mostTickets;
  // leastTime: leastTime;
}

const ELEMENT_DATA: GamificationData[] = [
  {mostTickets: {image_url: "../../../../assets/images/def_user.png", agentName: "Agent 1", department: "Analytics",
    numberOfTickets: 50, badge_url: "../../../../assets/images/gold.jpg"}},
  {mostTickets: {image_url: "../../../../assets/images/def_user.png", agentName: "Agent 2", department: "Logistics",
    numberOfTickets: 30, badge_url: "../../../../assets/images/silver.jpg"}},
  {mostTickets: {image_url: "../../../../assets/images/def_user.png", agentName: "Agent 3", department: "IT",
    numberOfTickets: 20, badge_url: "../../../../assets/images/bronze.jpg"}}
];

// , leastTime: {image_url: "../../../../assets/images/def_user.png", agentName: "Agent 1", department: "1", resolutionTime: 23}
// , leastTime: {image_url: "../../../../assets/images/def_user.png", agentName: "Agent 2", department: "2", resolutionTime: 22}
// , leastTime: {image_url: "../../../../assets/images/def_user.png", agentName: "Agent 3", department: "3", resolutionTime: 21}
@Component({
  selector: 'app-gamification',
  templateUrl: './gamification.component.html',
  styleUrls: ['./gamification.component.css']
})
export class GamificationComponent implements OnInit {

  displayedColumns: string[] = ['Most Tickets'];
  // , 'Least Resolution Time'
  dataSource = ELEMENT_DATA;
  constructor(private service: TicketsService) { }

  ngOnInit() {
  }

}
