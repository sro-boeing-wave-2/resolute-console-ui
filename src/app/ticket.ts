export interface Ticket {
  ticketId: number;
  subject: string;
  description: string;
  agentid: number;
  departmentid: number;
  source: number;
  priority: number;
  status: number;
  sla: number;
  createdOn: Date;
  createdBy: string;
  updatedOn: Date;
  updatedBy: string;
  userid: number;
  customerid: number;
}
