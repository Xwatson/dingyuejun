/**
 * Created by xwatson on 2016/12/14.
 */
import React, {PropTypes} from 'react'

import {
    View,
    StyleSheet,
    Image,
    Text,
    TouchableHighlight
} from 'react-native'
import Util from '../utils/util'
import Stars from '../component/Stars'
// 豆瓣电影原图大小
const DOUBAN_IMG = {
    width: 300,
    height: 439
}
const IMG_WIDTH =  Util.size.width/4
export default class MovieCard extends React.Component {
    static propTypes = {
        movies: PropTypes.array
    }

    render() {
        let _m = this.props.movies;
        return (
            <View style={styles.touchBoxContainer}>
                {
                    _m.map(function (item, i) {
                        return (
                            <TouchableHighlight key={'movie-card-'+i} style={styles.touchBox}>
                                <View style={styles.cardContainer}>
                                    <Image style={{width:IMG_WIDTH,height:DOUBAN_IMG.height/DOUBAN_IMG.width*IMG_WIDTH}} source={{uri:item.images.small}}></Image>
                                    <Text style={styles.text}>{item.title}</Text>
                                    <Stars style={styles.text} star={item.star} score={item.score} />
                                </View>
                            </TouchableHighlight>
                        )
                    })
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    touchBox:{
        width: Util.size.width/3,
        height:Util.size.width/2.2,
    },
    touchBoxContainer:{
        flex: 1,
        flexDirection: "row",
        flexWrap:"wrap",
        width: Util.size.width
    },
    card: {
        flexDirection: "row",
    },
    cardContainer:{
        alignItems:"center",
        justifyContent:"flex-start",
        width: Util.size.width/3,
    },
    text:{
        width: IMG_WIDTH,
    }
})
