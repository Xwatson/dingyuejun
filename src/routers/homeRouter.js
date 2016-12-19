/**
 * Created by xwatson on 2016/12/11.
 */


import React, {Component} from 'react'

import {
    Navigator,
    View,
    StyleSheet,
    Image,
    Text,
} from 'react-native';

import Home from '../views/home';

export default class HomeRouter extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{ name: 'home', component: Home }}
                configureScene={(route) => {
        return Navigator.SceneConfigs.HorizontalSwipeJump;
      }}
                renderScene={(route, navigator) => {
        let Component = route.component;
        return <Component {...route.params} navigator={navigator} />
      }}/>
        );
    }
}
