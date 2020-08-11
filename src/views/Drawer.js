/**
 * Created by liliang on 2020/8/10
 */
import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

export default class Drawer extends Component {
    render() {
        return (
            <DrawerContentScrollView>
                <Text>侧滑菜单</Text>
            </DrawerContentScrollView>
        );
    }
}
