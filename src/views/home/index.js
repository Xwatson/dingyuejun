/**
 * Created by xwatson on 2016/12/8.
 */

import React from 'react'

import {
    View,
    StyleSheet,
    Image,
    Text,
    ScrollView,
    TouchableHighlight
} from 'react-native'
import Swiper from 'react-native-swiper'
import Util from '../../utils/util'
import MovieCard from '../../component/MovieCard'
import { get } from '../../utils/http'

const ms = [{
    id:1,
    title:'aaaa',
    images:{small: 'http://img3.doubanio.com\/view\/movie_poster_cover\/lpst\/public\/p2397337958.jpg'},
    star:45,
    score:4.5
},{
    id:2,
    title:'bbbb',
    images:{small: 'http://img3.doubanio.com\/view\/movie_poster_cover\/lpst\/public\/p2397337958.jpg'},
    star:30,
    score:7.5
},{
    id:3,
    title:'cccc',
    images:{small: 'http://img3.doubanio.com\/view\/movie_poster_cover\/lpst\/public\/p2397337958.jpg'},
    star:50,
    score:8.8
},{
    id:4,
    title:'cccc',
    images:{small: 'http://img3.doubanio.com\/view\/movie_poster_cover\/lpst\/public\/p2397337958.jpg'},
    star:25,
    score:9.9
},{
    id:5,
    title:'cccc',
    images:{small: 'http://img3.doubanio.com\/view\/movie_poster_cover\/lpst\/public\/p2397337958.jpg'},
    star:35,
    score:3.5
}]


export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        movies: []
    }
    componentDidMount() {
        /*get('http://www.baidu.com',{},function (data) {
            console.log(data)
        })*/
        this.setState({movies:ms});
    }
    componentWillReceiveProps() {
        this.setState({movies:ms});
        console.log(this.state.movies)
    }
    render() {
        let _ms = this.state.movies;
        return (
            <ScrollView style={styles.mainView} title="首页">
                <Swiper height={150} showsButtons={false} autoplay={true}
                        activeDot={<View style={{backgroundColor: 'rgba(255,255,255,0.8)', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}>
                    <TouchableHighlight style={{flex: 1}}>
                        <View style={styles.slide}>
                            <Image style={styles.image} source={require('../../../images/day1.png')}></Image>
                            <Text style={styles.slideText}>Day1: Timer</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight style={{flex: 1}}>
                        <View style={styles.slide}>
                            <Image style={styles.image} source={require('../../../images/day2.png')}></Image>
                            <Text style={styles.slideText}>Day2: Weather</Text>
                        </View>
                    </TouchableHighlight>
                </Swiper>
                <View style={styles.movieList}>
                    <MovieCard movies={ms} />
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        marginTop:20
    },
    mainView: {
        marginTop: 2
    },
    swiper:{

    },
    slide: {
        flex: 1,
        height:150,
        justifyContent: 'center',
        alignItems: 'center'
    },
    slideText:{
        position:"absolute",
        bottom: 0,
        paddingTop:5,
        paddingBottom:5,
        backgroundColor:"rgba(255,255,255,0.5)",
        width: Util.size.width,
        textAlign:"center",
        fontSize: 12
    },
    image:{
        width: Util.size.width,
        alignSelf: 'stretch',
    },
    movieList: {
        flexDirection: "row",
        flexWrap:"wrap",
        width: Util.size.width
    }
})