/**
 * Created by liliang on 2020/8/10
 */
import React, {Component} from 'react';
import {Text, View, StyleSheet, Button, SafeAreaView} from 'react-native';
import {connect} from 'react-redux';


@connect((state) => {
    console.log(10,state);
    return {app: state.app}
})
export default class First extends Component {
    isMount: boolean;

    componentDidMount() {
        this.isMount = true;

    }

    componentWillUnmount() {
        this.isMount = false;
    }

    render() {
        console.log(14, this.props.app);
        return (
            <SafeAreaView>
                <Text>hello world121</Text>
                <Button
                    title={'点击'}
                    onPress={() => {
                        this.props.dispatch({type:"app/hello",nickName:'nihao'});
                    }}/>

                <Text>昵称:{this.props.app.user.nickname}</Text>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({});
