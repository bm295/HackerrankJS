import { Component, computed, inject } from '@angular/core';
import { ErpDataService } from '../../core/services/erp-data.service';

@Component({
  selector: 'app-operations',
  standalone: true,
  templateUrl: './operations.component.html',
  styleUrl: './operations.component.css'
})
export class OperationsComponent {
  private readonly erp = inject(ErpDataService);
  readonly todoTasks = computed(() => this.erp.operationTasks().filter((t) => t.status === 'Todo'));
  readonly doingTasks = computed(() => this.erp.operationTasks().filter((t) => t.status === 'Doing'));
  readonly blockedTasks = computed(() => this.erp.operationTasks().filter((t) => t.status === 'Blocked'));
}
