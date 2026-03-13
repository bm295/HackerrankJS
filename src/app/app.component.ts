import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ErpDataService } from './core/services/erp-data.service';
import { UserRole } from './core/models/erp.models';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  readonly erp = inject(ErpDataService);
  readonly roles: UserRole[] = ['Admin', 'Sales', 'Operations', 'Accountant', 'Manager'];

  changeRole(role: UserRole): void {
    this.erp.setRole(role);
  }
}
