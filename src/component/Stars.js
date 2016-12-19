/**
 * Created by xwatson on 2016/12/16.
 */
import React, {PropTypes} from 'react'

import {
    View,
    StyleSheet,
    Image,
    Text,
    TouchableHighlight
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Util from '../utils/util'
export default class Stars extends React.Component {
    static propTypes = {
        score: PropTypes.number.isRequired,
        setScore: PropTypes.func
    }
    _setScore() {

    }
    render() {
        return (
            <Text style={styles.text}>
                <Icon size={10} name="star" color="#e09015"></Icon>
                <Icon size={10} name="star" color="#e09015"></Icon>
                <Text style={styles.starHalf}>
                    <Icon size={10} name="star-half" color="#e09015"></Icon>
                    <Icon size={10} name="star" color="#ccc"></Icon>
                </Text>
                <Icon size={10} name="star" color="#ccc"></Icon>
                <Icon size={10} name="star" color="#ccc"></Icon>
            </Text>
        )
    }
}

const styles = StyleSheet.create({
    container: {

    },
    text:{
        width: Util.size.width/4,
    },
    starHalf: {
        paddingLeft:10,
        width:10,
        position:'absolute',
        left:10,
        top:0
    }
})
