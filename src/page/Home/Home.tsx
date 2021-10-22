import React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from 'theme';
import { Button } from 'component/Button';
import { DateInput } from 'component/DateInput';
import { WrapperStyled } from 'page/Home/Home.styled';
import { useGenerateSalaryScheduler } from 'hooks/useGenerateSalaryScheduler';
import { useSetDate } from 'hooks/useSetDate';
import { Table } from 'component/Table';
import { useExportToCSV } from 'hooks/useExportCSV';
import { ISalary } from 'services/salary';
const Home = () => {
  const { generateSalary, salarySchedule } = useGenerateSalaryScheduler(12, 15);
  const { setDataAfterChange, startDate } = useSetDate();
  const { generateData } = useExportToCSV<ISalary>('export');

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
        <Button
          disabled={salarySchedule.length === 0}
          title='Export to CSV'
          onClick={() => generateData(salarySchedule)}
        ></Button>
      </WrapperStyled>
      <Table src={salarySchedule} />
    </ThemeProvider>
  );
};

export default Home;
