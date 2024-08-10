import { Component, inject, signal } from '@angular/core';
import { NewCalculation } from './calculator-form/new-calculation.entity';
import { CalculatorService } from './calculator.service';
import { CalculatorResult } from './results/results.entity';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
})
export class CalculatorComponent {
  private calculatorService = inject(CalculatorService);

  results = signal<CalculatorResult[]>([]);

  handleSubmit(data: NewCalculation) {
    const r = this.calculatorService.calculateInvestmentResults(data)
    this.results.set(r)
  }
}
