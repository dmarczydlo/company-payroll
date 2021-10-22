import { Button } from 'component/Button';
import { DateInput } from 'component/DateInput';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from 'theme';
import { WrapperStyled } from 'page/Home/Home.styled';
const Home = () => (
  <ThemeProvider theme={defaultTheme}>
    <WrapperStyled>
      <DateInput /> <Button title='Click me' />{' '}
    </WrapperStyled>
  </ThemeProvider>
);

export default Home;
