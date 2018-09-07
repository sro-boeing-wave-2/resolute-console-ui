export interface Ticket {
  ticketId: number;
  subject: string;
  description: string;
  agentid: number;
  departmentid: number;
  source: string;
  priority: string;
  status: number;
  sla: number;
  createdOn: Date;
  createdBy: string;
  updatedOn: Date;
  updatedBy: string;
  userid: number;
  customerId: number;
  comment: Comment[];
}

export interface Comment {
  id: number;
  comment: string;
  createdOn: Date;
  createdBy: string;
  updatedOn: Date;
  updatedBy: string;
}
