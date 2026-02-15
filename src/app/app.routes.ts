import { Routes } from '@angular/router';
import { BinaryCalculatorComponent } from './components/binary-calculator/binary-calculator.component';
import { ButtonsGridComponent } from './components/buttons-grid/buttons-grid.component';
import { CounterButtonComponent } from './components/counter-button/counter-button.component';

export const routes: Routes = [
  { path: '', redirectTo: 'binary-calculator', pathMatch: 'full' },
  { path: 'binary-calculator', component: BinaryCalculatorComponent },
  { path: 'buttons-grid', component: ButtonsGridComponent },
  { path: 'counter-button', component: CounterButtonComponent }
];
