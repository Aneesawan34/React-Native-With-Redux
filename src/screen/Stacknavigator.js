import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import * as screens from './index';

const StackNavigator = createStackNavigator(
  {
    Testone: {
      screen: screens.Testone,
      navigationOptions: () => ({
        headerShown: false,
      }),
    },
    Testtwo: {
      screen: screens.Testtwo,
      navigationOptions: () => ({
        headerShown: false,
      }),
    },
  },
  {
    initialRouteName: 'Testone',
  },
);

const AppContainer = createAppContainer(StackNavigator);

export default class Stacknavigator extends Component {
  render() {
    return <AppContainer />;
  }
}
