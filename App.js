import React from 'react';
import {
  ApplicationProvider,
} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { default as theme } from './src/styles/custom-theme.json';
import AppNavigator from './src/AppNavigator';

const App = () => (
  <>
    <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
      <AppNavigator />
    </ApplicationProvider>
  </>
);

export default App; 