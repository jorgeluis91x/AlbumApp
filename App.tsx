import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
// import {Provider as StoreProvider} from 'react-redux';
import {store} from 'store';
import RNBootSplash from 'react-native-bootsplash';
import {ThemeProvider} from 'styled-components/native';

// UI
import AppNavigator from 'navigation/AppNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';

// Uncomment line 16 when doing tests
// LogBox.ignoreAllLogs(true);

// RNBootSplash.hide({ fade: true });

const App = () => {
  React.useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await RNBootSplash.hide({fade: true});
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaProvider>
      {/* <StoreProvider store={store}> */}
      <PaperProvider>
        <ThemeProvider>
          <AppNavigator />
        </ThemeProvider>
      </PaperProvider>
      {/* </StoreProvider> */}
    </SafeAreaProvider>
  );
};

export default App;
