import React from 'react';
import { StatusBar } from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider as StoreProvider} from 'react-redux';
import {store, persistor} from './src/state/store';
import {PersistGate} from 'redux-persist/integration/react';

import AppNavigator from './src/navigation/AppNavigator';
import Colors from './src/config/colors'
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {

  return (
    <SafeAreaProvider>
      <StoreProvider store={store}>
        <PersistGate persistor={persistor}>
          <PaperProvider>
            <StatusBar backgroundColor={Colors.headerBackground} />
            <AppNavigator />
          </PaperProvider>
        </PersistGate>
      </StoreProvider>
    </SafeAreaProvider>
  );
};

export default App;
