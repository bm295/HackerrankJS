import { Component } from '@angular/core';

@Component({
  selector: 'app-buttons-grid',
  imports: [],
  templateUrl: './buttons-grid.component.html',
  styleUrl: './buttons-grid.component.css'
})
export class ButtonsGridComponent {
  protected values = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

  protected rotate(): void {
    this.values = ['4', '1', '2', '7', '5', '3', '8', '9', '6'];
  }
}
