import { Injectable, computed, signal } from '@angular/core';
import {
  AuditLogItem,
  CashflowSnapshot,
  Customer,
  OperationTask,
  Order,
  OrderStatus,
  UserRole
} from '../models/erp.models';

@Injectable({ providedIn: 'root' })
export class ErpDataService {
  readonly activeRole = signal<UserRole>('Manager');

  readonly customers = signal<Customer[]>([
    {
      id: 'C-001',
      name: 'Blue Ocean Logistics',
      type: 'Company',
      leadStatus: 'Quoted',
      owner: 'Lan',
      lastContactAt: '2026-03-10',
      overdueReceivable: 0
    },
    {
      id: 'C-002',
      name: 'Minh Retail',
      type: 'Company',
      leadStatus: 'Won',
      owner: 'Khoa',
      lastContactAt: '2026-03-12',
      overdueReceivable: 8000000
    },
    {
      id: 'C-003',
      name: 'Nguyen Phuong',
      type: 'Individual',
      leadStatus: 'Contacted',
      owner: 'Lan',
      lastContactAt: '2026-03-08',
      overdueReceivable: 0
    }
  ]);

  readonly orders = signal<Order[]>([
    {
      id: 'SO-001',
      customerId: 'C-002',
      quotationNo: 'QT-112',
      amount: 60000000,
      status: 'Confirmed',
      dueDate: '2026-03-16',
      createdBy: 'Khoa',
      approved: false,
      paidAmount: 10000000
    },
    {
      id: 'SO-002',
      customerId: 'C-001',
      quotationNo: 'QT-120',
      amount: 18000000,
      status: 'In Progress',
      dueDate: '2026-03-15',
      createdBy: 'Lan',
      approved: true,
      paidAmount: 6000000
    },
    {
      id: 'SO-003',
      customerId: 'C-003',
      quotationNo: 'QT-121',
      amount: 9000000,
      status: 'Delivered',
      dueDate: '2026-03-11',
      createdBy: 'Lan',
      approved: true,
      paidAmount: 3000000
    }
  ]);

  readonly operationTasks = signal<OperationTask[]>([
    { id: 'T-001', orderId: 'SO-001', title: 'Call customer', assignee: 'Trang', status: 'Doing', dueDate: '2026-03-14' },
    { id: 'T-002', orderId: 'SO-001', title: 'Prepare package', assignee: 'Dat', status: 'Todo', dueDate: '2026-03-15' },
    { id: 'T-003', orderId: 'SO-002', title: 'Issue invoice', assignee: 'Linh', status: 'Blocked', dueDate: '2026-03-13' },
    { id: 'T-004', orderId: 'SO-003', title: 'Confirm delivery', assignee: 'Trang', status: 'Done', dueDate: '2026-03-11' }
  ]);

  readonly auditLogs = signal<AuditLogItem[]>([
    {
      id: 'A-001',
      actor: 'Khoa',
      action: 'Created order',
      entity: 'SO-001',
      at: '2026-03-12 09:10'
    }
  ]);

  readonly dashboardKpis = computed(() => {
    const orders = this.orders();
    const tasks = this.operationTasks();
    return {
      monthlyRevenue: orders.reduce((total, order) => total + order.paidAmount, 0),
      processingOrders: orders.filter((order) => ['Confirmed', 'In Progress'].includes(order.status)).length,
      overdueOrders: orders.filter((order) => order.status !== 'Paid' && new Date(order.dueDate) < new Date('2026-03-13')).length,
      overloadedStaff: this.detectOverloadedStaff(tasks),
      newCustomers: this.customers().filter((customer) => customer.leadStatus === 'Lead' || customer.leadStatus === 'Contacted').length
    };
  });

  readonly cashflow = computed<CashflowSnapshot>(() => {
    const orders = this.orders();
    const overdueReceivables = this.customers().reduce((sum, customer) => sum + customer.overdueReceivable, 0);
    const expectedIncoming = orders.reduce((sum, order) => sum + (order.amount - order.paidAmount), 0);
    return {
      expectedIncoming,
      expectedOutgoing: 24000000,
      overdueReceivables,
      upcomingPayables: 9000000
    };
  });

  readonly roleMenus = computed(() => {
    const role = this.activeRole();
    const common = ['dashboard', 'crm', 'orders'];
    if (role === 'Admin' || role === 'Manager') {
      return [...common, 'operations', 'cashflow', 'reports', 'settings'];
    }
    if (role === 'Operations') return ['dashboard', 'orders', 'operations'];
    if (role === 'Accountant') return ['dashboard', 'orders', 'cashflow', 'reports'];
    return common;
  });

  setRole(role: UserRole): void {
    this.activeRole.set(role);
  }

  advanceOrderStatus(orderId: string): void {
    this.orders.update((orders) =>
      orders.map((order) => {
        if (order.id !== orderId) return order;
        const next = this.nextStatus(order.status);
        this.writeAudit(`Updated status`, order.id, order.status, next);
        return { ...order, status: next };
      })
    );
  }

  approveOrder(orderId: string): void {
    this.orders.update((orders) =>
      orders.map((order) => {
        if (order.id !== orderId) return order;
        this.writeAudit('Approved order', order.id, order.approved ? 'approved' : 'pending', 'approved');
        return { ...order, approved: true };
      })
    );
  }

  canAutoApprove(order: Order): boolean {
    return order.amount <= 50000000;
  }

  private nextStatus(status: OrderStatus): OrderStatus {
    if (status === 'Draft') return 'Confirmed';
    if (status === 'Confirmed') return 'In Progress';
    if (status === 'In Progress') return 'Delivered';
    if (status === 'Delivered') return 'Paid';
    return 'Paid';
  }

  private detectOverloadedStaff(tasks: OperationTask[]): number {
    const byAssignee = tasks.reduce<Record<string, number>>((acc, task) => {
      if (task.status !== 'Done') {
        acc[task.assignee] = (acc[task.assignee] ?? 0) + 1;
      }
      return acc;
    }, {});
    return Object.values(byAssignee).filter((count) => count >= 2).length;
  }

  private writeAudit(action: string, entity: string, before: string, after: string): void {
    this.auditLogs.update((logs) => [
      {
        id: `A-${logs.length + 1}`,
        actor: this.activeRole(),
        action,
        entity,
        before,
        after,
        at: new Date().toISOString().slice(0, 16).replace('T', ' ')
      },
      ...logs
    ]);
  }
}
