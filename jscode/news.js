import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

var News = React.createClass({
    show: function (title) {
        alert(title);
    },
    render: function () {
        var newsArray = [];
        for (var i in this.props.news) {
            var newsText = (
                <Text key={i} numberOfLines={2} style={styles.contentText} onPress={this.show.bind(this,this.props.news[i])}>
                    {this.props.news[i]}
                </Text>
            );
            newsArray.push(newsText);
        }
        return (<View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.titleText}>今日要闻</Text>
            </View>
            {newsArray}
        </View>)
    }
});

var styles = StyleSheet.create({
    container: {
        marginLeft: 5,
        marginTop: 10,
    },
    title: {
        height: 20,
        justifyContent: "center",
    },
    titleText: {
        color: "red",
        fontWeight: "bold",
        fontSize: 20,
    },
    contentText: {
        fontSize: 16,
        marginTop: 10,
    }
});
module.exports = News;