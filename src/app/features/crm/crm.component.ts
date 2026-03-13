import { Component, computed, inject } from '@angular/core';
import { ErpDataService } from '../../core/services/erp-data.service';

@Component({
  selector: 'app-crm',
  standalone: true,
  templateUrl: './crm.component.html',
  styleUrl: './crm.component.css'
})
export class CrmComponent {
  private readonly erp = inject(ErpDataService);

  readonly customers = this.erp.customers;
  readonly wonCustomers = computed(() => this.customers().filter((c) => c.leadStatus === 'Won').length);
}
