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
import {createStore} from 'redux';
import {reducer} from './src/Redux/Reducer';
const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Stacknavigator />
      </Provider>
    );
  }
}

export default App;
