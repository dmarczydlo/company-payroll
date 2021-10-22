import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface IDateInputProps {
  onChange(e: any): void;
  startDate: Date;
}

const DateInput = ({ onChange, startDate }: IDateInputProps) => {
  return (
    <DatePicker
      selected={startDate}
      onChange={onChange}
      dateFormat='yyyy-MM-dd'
    />
  );
};

export default DateInput;
