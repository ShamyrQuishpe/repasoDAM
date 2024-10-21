import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  private currentInput: string = '';
  private operation: string = '';
  private previousInput: string = '';
  public result: string = '';

  appendNumber(num: string) {
    this.currentInput += num;
    this.result = this.currentInput;
  }

  setOperation(op: string) {
    if (this.currentInput === '') return;
    if (this.previousInput !== '') {
      this.calculateResult();
    }
    this.operation = op;
    this.previousInput = this.currentInput;
    this.currentInput = '';
  }

  calculateResult() {
    let computation: number;
    const prev = parseFloat(this.previousInput);
    const current = parseFloat(this.currentInput);
    if (isNaN(prev) || isNaN(current)) return;

    switch (this.operation) {
      case '+':
        computation = prev + current;
        break;
      case '-':
        computation = prev - current;
        break;
      case '*':
        computation = prev * current;
        break;
      case '/':
        computation = prev / current;
        break;
      default:
        return;
    }
    this.result = computation.toString();
    this.currentInput = '';
    this.previousInput = '';
    this.operation = '';
  }

  clear() {
    this.currentInput = '';
    this.previousInput = '';
    this.operation = '';
    this.result = '';
  }
}


