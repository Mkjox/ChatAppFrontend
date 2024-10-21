import React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './navigation/AppNavigator';
import store from './store';
import { ThemeProvider } from './context/ThemeContext';

function App(): React.JSX.Element {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <SafeAreaProvider>
          <AppNavigator />
        </SafeAreaProvider>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
