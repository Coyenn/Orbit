import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import HomeScreen from './src/Sites/Home';
import Bottom from './src/Components/Bottom';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

export default () => (
  <ApplicationProvider {...eva} theme={eva.dark}>
    <IconRegistry icons={EvaIconsPack} />
    <HomeScreen />
    <Bottom />
  </ApplicationProvider>
);
