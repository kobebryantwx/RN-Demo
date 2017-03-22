/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

var Header = require("./jscode/header");
var News = require("./jscode/news");


var BaseProject = React.createClass({
    render: function () {
        var news = ["1.sasasasasa", "2.sasaseqeqewqsasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasa"];
        return (
            <View >
                <Header/>
                <News news={news}/>
            </View>)
    }
    //     return
    //<View style={styles.container}>
    // <View style={styles.left}>
    // <Text >
    // 酒店
    // </Text>
    // </View>
    // <View style={styles.midView}>
    // <View style={styles.position}>
    // <Text > 海外酒店</Text>
    // </View>
    // <View style={[styles.position, {marginTop: 10}]}>
    // <Text > 特价酒店</Text>
    // </View>
    // </View>
    // <View style={styles.midView}>
    // <View style={styles.position}>
    // <Text > 团购</Text>
    // </View>
    // <View style={[styles.position, {marginTop: 10}]}>
    // <Text> 民宿.住宿</Text>
    // </View>
    // </View>
    // </View>
    // ;
    // }
});

var styles = StyleSheet.create({
    /*
     flex:数字。1：组件可以撑满父组件剩余空间（相当于权重weight）
     flexDirection 排列方向：row横向，column竖向
     justifyContent 主轴方向
     alignItems 交叉轴方向
     */
    container: {
        height: 100,
        margin: 30,
        flexDirection: "row",
    },
    left: {
        flex: 1,
        backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center",
    },
    midView: {
        flex: 1,
        marginLeft: 10,
        flexDirection: "column",
    },
    position: {
        flex: 1,
        backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center",
    },
});

AppRegistry.registerComponent('AwesomeProject', () => BaseProject);
