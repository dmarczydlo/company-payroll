import { Button } from 'component/Button';
import { DateInput } from 'component/DateInput';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from 'theme';
import { WrapperStyled } from 'page/Home/Home.styled';
import { SalaryService } from 'services/salary';
const Home = () => {
  const salaryService = new SalaryService();
  return (
    <ThemeProvider theme={defaultTheme}>
      <WrapperStyled>
        <DateInput />{' '}
        <Button
          title='Click me'
          onClick={() => {
            const data = salaryService.getSalaries(10, new Date());
            console.log(data);
          }}
        />
      </WrapperStyled>
    </ThemeProvider>
  );
};

export default Home;
