import {
  lastDayOfMonth,
  isWeekend,
  subDays,
  addMonths,
  format,
  nextWednesday,
} from 'date-fns';

interface ISalary {
  regular: string;
  bonus: string;
}

export class SalaryService {
  private findLastWorkingDay(
    startDate: Date,
    lastDateHasBeenDefined = false
  ): Date {
    let lastWorkingDay = lastDateHasBeenDefined
      ? startDate
      : lastDayOfMonth(startDate);

    if (isWeekend(lastWorkingDay)) {
      lastWorkingDay = this.findLastWorkingDay(
        subDays(lastWorkingDay, 1),
        true
      );
    }

    return lastWorkingDay;
  }

  private findBonusDate(regularDate: Date): Date {
    let nextBonusDate = new Date(
      format(addMonths(regularDate, 1), 'yyyy-MM-15')
    );

    if (isWeekend(nextBonusDate)) {
      nextBonusDate = nextWednesday(nextBonusDate);
    }

    return nextBonusDate;
  }

  public getSalaries(n: number, startDate: Date): ISalary[] {
    const plan = [] as ISalary[];
    [...Array(n)].forEach((_, i) => {
      const regularDate = this.findLastWorkingDay(addMonths(startDate, i));
      const salary = {
        regular: format(regularDate, 'yyyy-MM-dd'),
        bonus: format(this.findBonusDate(regularDate), 'yyyy-MM-dd'),
      };
      plan.push(salary);
    });

    return plan;
  }
}
