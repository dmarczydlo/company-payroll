import React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../../theme';
function Home() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div>Home</div>
    </ThemeProvider>
  );
}

export default Home;
