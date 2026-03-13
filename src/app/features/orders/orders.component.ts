import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ErpDataService } from '../../core/services/erp-data.service';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {
  readonly erp = inject(ErpDataService);

  next(orderId: string): void {
    this.erp.advanceOrderStatus(orderId);
  }

  approve(orderId: string): void {
    this.erp.approveOrder(orderId);
  }
}
