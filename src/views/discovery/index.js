/**
 * Created by xwatson on 2016/12/11.
 */
import React, {Component} from 'react'

import {
    View,
    StyleSheet,
    Image,
    Text,
} from 'react-native';

export default class Discovery extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>发现</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:20
    }
})