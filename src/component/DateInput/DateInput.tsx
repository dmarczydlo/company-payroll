import React, { ChangeEvent, useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

interface IDateInputProperty {
  onChange(e: any): void;
  startDate: Date;
}

const DateInput = ({ onChange, startDate }: IDateInputProperty) => {
  return (
    <DatePicker
      selected={startDate}
      onChange={onChange}
      dateFormat='yyyy/MM/dd'
    />
  );
};

export default DateInput;
