import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

var Header = React.createClass({
    render: function () {
        return <View style={styles.flex}>
            <Text style={styles.font}>
                <Text style={styles.font_1}>网易</Text>
                <Text style={styles.font_2}>新闻</Text>
                <Text style={styles.font_3}>有态度</Text>
            </Text>
        </View>
    }
});

var styles = StyleSheet.create({
    flex: {
        height: 40,
        marginTop: 25,
        borderBottomWidth: 1,
        borderBottomColor: "gray",
        alignItems: "center",
    },
    font: {
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center",
    },
    font_1: {
        color: "red",
    },
    font_2: {
        color: "white",
        backgroundColor: "red",
    },
    font_3: {
        color: "black",
    },
});
//导出模块
module.exports = Header;