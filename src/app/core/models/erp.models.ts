export type UserRole = 'Admin' | 'Sales' | 'Operations' | 'Accountant' | 'Manager';

export type LeadStatus = 'Lead' | 'Contacted' | 'Quoted' | 'Won' | 'Lost';
export type OrderStatus = 'Draft' | 'Confirmed' | 'In Progress' | 'Delivered' | 'Paid';
export type TaskStatus = 'Todo' | 'Doing' | 'Done' | 'Blocked';

export interface Customer {
  id: string;
  name: string;
  type: 'Company' | 'Individual';
  leadStatus: LeadStatus;
  owner: string;
  lastContactAt: string;
  overdueReceivable: number;
}

export interface Order {
  id: string;
  customerId: string;
  quotationNo: string;
  amount: number;
  status: OrderStatus;
  dueDate: string;
  createdBy: string;
  approved: boolean;
  paidAmount: number;
}

export interface OperationTask {
  id: string;
  orderId: string;
  title: string;
  assignee: string;
  status: TaskStatus;
  dueDate: string;
}

export interface CashflowSnapshot {
  expectedIncoming: number;
  expectedOutgoing: number;
  overdueReceivables: number;
  upcomingPayables: number;
}

export interface AuditLogItem {
  id: string;
  actor: string;
  action: string;
  entity: string;
  before?: string;
  after?: string;
  at: string;
}
