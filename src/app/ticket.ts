export interface modelForGetTicketsByFilter {
  pages: number;
  hasNext: boolean;
  hasPrevious: boolean;
  tickets: Ticket[];
}

export interface Ticket {
  ticketId: string;
  intent: string;
  description: string;
  agentEmailId: string;
  priority: string;
  status: number;
  createdOn: Date;
  updatedOn: Date;
  updatedBy: string;
  userEmailId: string;
  userName: string;
  userImageUrl: string;
}

// export interface Comment {
//   commentId: number;
//   comment: string;
//   createdOn: Date;
//   createdBy: string;
//   updatedOn: Date;
//   updatedBy: string;
// }

export interface TicketDetailsModal {
  name: string;
  id: number;
  status: number;
  priority: string;
  subject: string;
  description: string;
  userid: number;
  connectionid: string;
  email:string;
  agentname: string;
}

