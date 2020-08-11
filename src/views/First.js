/**
 * Created by liliang on 2020/8/10
 */
import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class First extends Component {
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
        <Text>hello world121</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
