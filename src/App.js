import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { HomeScreen } from './screens';
import StoryBook from '../storybook';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <HomeScreen />
    </ThemeProvider>
  );
};
export default App;
