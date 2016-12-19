/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React,{Component} from 'react'
import {
    AppRegistry,
    StyleSheet,
    Navigator,
    Text,
    View
} from 'react-native';
import SplashPage from './src/Splash';
export default class dingyuejun extends Component {
  render() {
      var defaultName = 'Splash';
      var defaultComponent = SplashPage;
      return (
          <Navigator
              initialRoute={{ name: defaultName, component: defaultComponent }}
              configureScene={(route) => {
        return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
      }}
              renderScene={(route, navigator) => {
        let Component = route.component;
        return <Component {...route.params} navigator={navigator} />
      }} />
      );
  }
}

AppRegistry.registerComponent('dingyuejun', () => dingyuejun);
