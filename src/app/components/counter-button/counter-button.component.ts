import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter-button',
  imports: [],
  templateUrl: './counter-button.component.html',
  styleUrl: './counter-button.component.css'
})
export class CounterButtonComponent {
  @Input() count = 0;

  protected increment(): void {
    this.count += 1;
  }
}
