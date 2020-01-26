/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Stacknavigator from './src/screen/Stacknavigator';
import {Provider} from 'react-redux';
import {store, persister} from './src/Redux/Store';
import {PersistGate} from 'redux-persist/integration/react';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persister}>
          <Stacknavigator />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
