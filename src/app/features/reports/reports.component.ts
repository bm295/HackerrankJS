import { Component, inject } from '@angular/core';
import { ErpDataService } from '../../core/services/erp-data.service';

@Component({
  selector: 'app-reports',
  standalone: true,
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css'
})
export class ReportsComponent {
  readonly logs = inject(ErpDataService).auditLogs;
}
