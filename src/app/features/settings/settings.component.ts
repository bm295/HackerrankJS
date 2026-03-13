import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  standalone: true,
  template: `<section class="card"><h2>Settings</h2><p>Placeholder cho cấu hình rule engine, menu, và tích hợp hệ thống.</p></section>`,
  styles: ['.card{background:#fff;border:1px solid #e5e7eb;border-radius:12px;padding:16px;}']
})
export class SettingsComponent {}
