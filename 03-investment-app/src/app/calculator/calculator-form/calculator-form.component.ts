import { Component, EventEmitter, inject, output, Output, signal } from '@angular/core';
import { NewCalculation } from './new-calculation.entity';

@Component({
  selector: 'app-calculator-form',
  templateUrl: './calculator-form.component.html',
  styleUrl: './calculator-form.component.css'
})
export class CalculatorFormComponent {
  calculate = output<NewCalculation>()

  initialInvestment = signal(0);
  annualInvestment = signal(0);
  expectedReturn = signal(6);
  duration = signal(10);

  onSubmit() {
    this.calculate.emit({
      initialInvestment: this.initialInvestment(),
      annualInvestment: this.annualInvestment(),
      expectedReturn: this.expectedReturn(),
      duration: this.duration(),
    });
    this.initialInvestment.set(0)
    this.annualInvestment.set(0)
    this.expectedReturn.set(6)
    this.duration.set(10)
  }
}
