import React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from 'theme';
import { Button } from 'component/Button';
import { DateInput } from 'component/DateInput';
import { WrapperStyled } from 'page/Home/Home.styled';
import { useGenerateSalaryScheduler } from 'hooks/useGenerateSalaryScheduler';
import { useSetDate } from 'hooks/useSetDate';
const Home = () => {
  const { generateSalary, salarySchedule } = useGenerateSalaryScheduler(12, 15);
  const { setDataAfterChange, startDate } = useSetDate();

  return (
    <ThemeProvider theme={defaultTheme}>
      <WrapperStyled>
        <DateInput
          startDate={startDate}
          onChange={(date) => setDataAfterChange(date)}
        />{' '}
        <Button title='Click me' onClick={() => generateSalary(startDate)} />
      </WrapperStyled>
      {salarySchedule && <div>{JSON.stringify(salarySchedule)}</div>}
    </ThemeProvider>
  );
};

export default Home;
