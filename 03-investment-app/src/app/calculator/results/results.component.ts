import { Component, input, Input } from '@angular/core';
import { CalculatorResult } from './results.entity';

@Component({
  selector: 'app-calculator-results',
  templateUrl: './results.component.html',
  styleUrl: './results.component.css'
})
export class CalculatorResultsComponent {
  results = input<CalculatorResult[]>([]);
}
