import { useCallback, useState } from 'react';
import { ISalary, SalaryService } from 'services/salary';

interface IUseGenerateSalaryScheduler {
  generateSalary(startDate: Date): void;
  salarySchedule: ISalary[];
}
export const useGenerateSalaryScheduler = (
  repetition: number,
  normalBonusDay: number
): IUseGenerateSalaryScheduler => {
  const [salarySchedule, setSalarySchedule] = useState<ISalary[]>([]);

  const salaryService = new SalaryService(repetition, normalBonusDay);
  const generateSalary = useCallback(
    (startDate: Date) => {
      setSalarySchedule(salaryService.getSalaries(startDate));
    },
    [salarySchedule]
  );

  return { generateSalary, salarySchedule };
};
