import { Injectable } from '@angular/core';
import { NewCalculation } from './calculator-form/new-calculation.entity';
import { CalculatorResult } from './results/results.entity';

@Injectable({ providedIn: 'root' })
export class CalculatorService {
  calculateInvestmentResults({
    annualInvestment,
    duration,
    expectedReturn,
    initialInvestment
  }: NewCalculation): CalculatorResult[] {
    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }

    return annualData;
  }
}
