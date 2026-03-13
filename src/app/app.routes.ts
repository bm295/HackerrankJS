import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { CrmComponent } from './features/crm/crm.component';
import { OrdersComponent } from './features/orders/orders.component';
import { OperationsComponent } from './features/operations/operations.component';
import { CashflowComponent } from './features/cashflow/cashflow.component';
import { ReportsComponent } from './features/reports/reports.component';
import { SettingsComponent } from './features/settings/settings.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'crm', component: CrmComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'operations', component: OperationsComponent },
  { path: 'cashflow', component: CashflowComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'settings', component: SettingsComponent }
];
