import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CalculatorFormComponent } from './calculator-form/calculator-form.component';
import { CalculatorResultsComponent } from './results/results.component';
import { CalculatorComponent } from './calculator.component';

@NgModule({
  declarations: [CalculatorComponent, CalculatorFormComponent, CalculatorResultsComponent],
  imports: [CommonModule, FormsModule],
  exports: [CalculatorComponent]
})
export class CalculatorModule { }
