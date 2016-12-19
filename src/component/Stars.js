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
import Icon from 'react-native-vector-icons/Ionicons'
import Util from '../utils/util'
export default class Stars extends React.Component {
    static propTypes = {
        star: PropTypes.number.isRequired,
        score: PropTypes.number.isRequired,
        setScore: PropTypes.func
    }
    _setScore(star) {
        let aBit = star%10
        let aTen = parseInt(star/10)
        let icons = [];
        for (let i=0;i<aTen;i++) {
            icons.push(<Icon size={13} key={"star-"+Math.random()*1000} name="ios-star" color="#e09015"></Icon>)
        }
        for(let i=0;i<5-aTen;i++){
            if (aBit==5) {
                icons.push(<Icon size={13} key={"star-"+Math.random()*1000} name="md-star-half" color="#e09015"></Icon>)
                aBit=0;
            }else {
                icons.push(<Icon size={13} key={"star-"+Math.random()*1000} name="ios-star-outline" color="#ccc"></Icon>)
            }
        }
        return icons.map(function (item) {
            return item
        })
    }
    render() {
        return (
            <Text style={styles.text}>
                {this._setScore(this.props.star)}
                <Text style={{color:'#e09015',fontSize:12}}> {this.props.score}</Text>
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
