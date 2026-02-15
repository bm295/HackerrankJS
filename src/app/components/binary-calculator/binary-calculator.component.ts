import { Component } from '@angular/core';

@Component({
  selector: 'app-binary-calculator',
  imports: [],
  templateUrl: './binary-calculator.component.html',
  styleUrl: './binary-calculator.component.css'
})
export class BinaryCalculatorComponent {
  protected expression = '';

  protected appendDigit(digit: '0' | '1'): void {
    this.expression += digit;
  }

  protected clear(): void {
    this.expression = '';
  }

  protected appendOperator(operator: '+' | '-' | '*' | '/'): void {
    if (!this.expression || /[+\-*/]$/.test(this.expression)) {
      return;
    }

    this.expression += operator;
  }

  protected evaluate(): void {
    const matches = this.expression.match(/^([01]+)([+\-*/])([01]+)$/);

    if (!matches) {
      return;
    }

    const [, leftBinary, operator, rightBinary] = matches;
    const left = Number.parseInt(leftBinary, 2);
    const right = Number.parseInt(rightBinary, 2);

    let result = 0;

    switch (operator) {
      case '+':
        result = left + right;
        break;
      case '-':
        result = left - right;
        break;
      case '*':
        result = left * right;
        break;
      case '/':
        result = Math.floor(left / right);
        break;
      default:
        return;
    }

    this.expression = result.toString(2);
  }
}
