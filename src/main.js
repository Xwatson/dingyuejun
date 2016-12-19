/**
 * Created by xwatson on 2016/12/11.
 */
import React, {Component} from 'react'

import {
    View,
    StyleSheet,
    Image,
    Text,
    TabBarIOS,
    NavigatorIOS
} from 'react-native';

import HomeRouter from './routers/homeRouter';
import Movie from './views/movie';
import Discovery from './views/discovery';
import My from './views/my';
import Icon from 'react-native-vector-icons/Ionicons';
const HOME_TAB = 'homeTab';
const Movie_TAB = 'movieTab';
const Discovery_TAB = 'discoveryTab';
const My_TAB = 'myTab';
export default class Main extends Component {
    constructor() {
        super();
        this.state = {
            selectedTab: HOME_TAB,
            notifCount: 0,
            presses: 0,
        };
    }

    setTab = (tabId) => {
        this.setState({selectedTab: tabId})
    }

    _addNavigator = (component, title) => {
        var data = null;
        if(title === '首页'){
            data = this.state.data;
        }
        return <NavigatorIOS
            style={{flex:1}}
            barTintColor='#FFF'
            titleTextColor="#666"
            tintColor="#666"
            translucent={false}
            initialRoute={{
          component: component,
          title: title,
          passProps:{
            data: data
          }
        }}
        />;
    }

    _renderContent = (page) => {
        let renderView;
        switch (page) {
            case HOME_TAB:
                renderView = <HomeRouter />;
                break;
            default:
                renderView = <HomeRouter />;
                break;
        }
        return (
            <View style={styles.pageView}>
                {renderView}
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <TabBarIOS
                    tintColor="#11a984"
                    barTintColor="#FFFFFF">
                    <Icon.TabBarItem
                        title="首页"
                        iconName="ios-home-outline"
                        selectedIconName="ios-home"
                        selected={this.state.selectedTab === HOME_TAB}
                        onPress={() => this.setTab(HOME_TAB)}>
                        {this._renderContent(HOME_TAB)}
                    </Icon.TabBarItem>
                    <Icon.TabBarItem
                        title="影音"
                        iconName="ios-videocam-outline"
                        selectedIconName="ios-videocam"
                        selected={this.state.selectedTab === Movie_TAB}
                        onPress={() => this.setTab(Movie_TAB)}>
                        {this._addNavigator(Movie,'影音')}
                    </Icon.TabBarItem>
                    <Icon.TabBarItem
                        title="发现"
                        iconName="ios-compass-outline"
                        selectedIconName="ios-compass"
                        selected={this.state.selectedTab === Discovery_TAB}
                        onPress={() => this.setTab(Discovery_TAB)}>
                        {this._addNavigator(Discovery,'发现')}
                    </Icon.TabBarItem>
                    <Icon.TabBarItem
                        title="我的"
                        iconName="ios-person-outline"
                        selectedIconName="ios-person"
                        selected={this.state.selectedTab === My_TAB}
                        onPress={() => this.setTab(My_TAB)}>
                        {this._addNavigator(My,'我的')}
                    </Icon.TabBarItem>
                </TabBarIOS>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    pageView: {
        flex: 1,
    },
    tabContent: {
        flex: 1,
        alignItems: 'center',
    },
    tabText: {
        margin: 50,
    }
});