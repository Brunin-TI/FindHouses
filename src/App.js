import React from 'react';
import { ThemeProvider } from 'styled-components';
import { StatusBar } from 'react-native';
import { theme } from './styles/theme';
import { HomeScreen } from './screens';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar translucent backgroundColor={theme.colors.backgroundDark} />
      <HomeScreen />
    </ThemeProvider>
  );
};
export default App;
