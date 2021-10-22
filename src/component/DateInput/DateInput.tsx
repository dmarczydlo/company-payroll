import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

const DateInput = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date as Date)}
      dateFormat='yyyy/MM/dd'
    />
  );
};

export default DateInput;
