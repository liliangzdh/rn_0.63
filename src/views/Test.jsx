/**
 * Created by liliang on 2020/8/11
 */
import React, {Component} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

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
            <View>
                <Text>hello world second</Text>
                <Button title={'点击2'} onPress = {()=>{
                    this.props.navigation.navigate('Home');
                }}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({});
