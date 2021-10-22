import { useState } from 'react';

interface IUseSetDate {
  startDate: Date;
  setDataAfterChange(date: Date): void;
}
export const useSetDate = (): IUseSetDate => {
  const [startDate, setStartDate] = useState(new Date());

  const setDataAfterChange = (date: Date) => {
    setStartDate(date as Date);
  };

  return { setDataAfterChange, startDate };
};
