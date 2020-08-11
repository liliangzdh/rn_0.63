/**
 * Created by liliang on 2020/8/10
 */
import React, {Component} from 'react';
import {Text, View, StyleSheet, Button, SafeAreaView} from 'react-native';

export default class Second extends Component {
    isMount: boolean;

    componentDidMount() {
        this.isMount = true;
    }

    componentWillUnmount() {
        this.isMount = false;
    }

    render() {
        return (
            <SafeAreaView style={{flex: 1}}>
                <Text>hello world second</Text>
                <Button title={'点击2'} onPress={() => {
                    this.props.navigation.navigate('Home');
                }}/>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({});
