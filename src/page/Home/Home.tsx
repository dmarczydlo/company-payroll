import React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from 'theme';
import { Button } from 'component/Button';
import { DateInput } from 'component/DateInput';
import { WrapperStyled } from 'page/Home/Home.styled';
import { useGenerateSalaryScheduler } from 'hooks/useGenerateSalaryScheduler';
import { useSetDate } from 'hooks/useSetDate';
import { Table } from 'component/Table';
const Home = () => {
  const { generateSalary, salarySchedule } = useGenerateSalaryScheduler(12, 15);
  const { setDataAfterChange, startDate } = useSetDate();

  return (
    <ThemeProvider theme={defaultTheme}>
      <WrapperStyled>
        <DateInput
          startDate={startDate}
          onChange={(date) => setDataAfterChange(date)}
        />
        <Button
          title='Generate plan'
          onClick={() => generateSalary(startDate)}
        />
        <Button title='Export to CSV' onClick={() => {}}></Button>
      </WrapperStyled>
      <Table src={salarySchedule} />
    </ThemeProvider>
  );
};

export default Home;
