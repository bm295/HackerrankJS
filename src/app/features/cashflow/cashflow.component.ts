import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ErpDataService } from '../../core/services/erp-data.service';

@Component({
  selector: 'app-cashflow',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './cashflow.component.html',
  styleUrl: './cashflow.component.css'
})
export class CashflowComponent {
  readonly snapshot = inject(ErpDataService).cashflow;
}
