import { DateInput } from 'component/DateInput';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from 'theme';
function Home() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <DateInput />
    </ThemeProvider>
  );
}

export default Home;
