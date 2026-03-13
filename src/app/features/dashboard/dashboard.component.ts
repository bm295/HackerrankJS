import { Component, computed, inject } from '@angular/core';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { ErpDataService } from '../../core/services/erp-data.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  private readonly erp = inject(ErpDataService);

  readonly kpis = this.erp.dashboardKpis;
  readonly orders = this.erp.orders;
  readonly tasks = this.erp.operationTasks;
  readonly delayedTasks = computed(() => this.tasks().filter((task) => task.status !== 'Done'));
}
