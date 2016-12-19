'use strict';
import React,{Component} from 'react'
import {
  View,
  StyleSheet,
  Image,
  Text,
} from 'react-native';

import main from './main';

export default class SplashPage extends Component {
  componentWillMount() {
    var { navigator } = this.props;
    setTimeout(() => {
      navigator.replace({
        name: 'main',
				component: main,
      });
    }, 200);
  }
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../images/hello_page_bg.png')} style={styles.backgroundImage}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
    marginTop: 20,
		flex: 1,
	},
	backgroundImage: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		width: null,
		height: null,
		backgroundColor: 'transparent',
		resizeMode: 'cover',
	},
});
