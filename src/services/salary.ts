import {
  lastDayOfMonth,
  isWeekend,
  subDays,
  addMonths,
  format,
  nextWednesday,
} from 'date-fns';

export interface ISalary {
  regular: string;
  bonus: string;
}

export class SalaryService {
  constructor(
    private readonly normalBonusDay: number,
    private readonly repetition: number
  ) {}

  private findLastWorkingDay(date: Date, lastDateHasBeenDefined = false): Date {
    let lastWorkingDay = lastDateHasBeenDefined ? date : lastDayOfMonth(date);

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
      format(addMonths(regularDate, 1), `yyyy-MM-${this.normalBonusDay}`)
    );

    if (isWeekend(nextBonusDate)) {
      nextBonusDate = nextWednesday(nextBonusDate);
    }

    return nextBonusDate;
  }

  public getSalaries(startDate: Date): ISalary[] {
    const plan = [] as ISalary[];
    [...Array(this.repetition)].forEach((_, i) => {
      const regularDate = this.findLastWorkingDay(addMonths(startDate, i));

      plan.push({
        regular: format(regularDate, 'yyyy-MM-dd'),
        bonus: format(this.findBonusDate(regularDate), 'yyyy-MM-dd'),
      });
    });

    return plan;
  }
}
