/**
 * Created by liliang on 2020/8/10
 */
import React from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Drawer from '../views/Drawer';
import Home from '../views/Home';
import First from '../views/First';
import Second from '../views/Second';

const MainNavigator = createStackNavigator();


const Tab = createBottomTabNavigator();


function mainTab() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#e91e63',
                inactiveTintColor: '#999',
            }}>
            <Tab.Screen
                name="First"
                component={First}
                options={{
                    tabBarLabel: '首页',
                    tabBarIcon: ({focused}) => {
                        return <Image style={{width: 20, height: 20}}
                                      source={focused ? require('../images/tab/home_jy.png') : require('../images/tab/home_xx.png')}/>
                    }
                }}
            />
            <Tab.Screen
                name="Second"
                component={Second}
                options={{
                    tabBarLabel: '学习',
                    tabBarIcon: ({focused}) => {
                        return <Image style={{width: 20, height: 20}}
                                      source={focused ? require('../images/tab/lean_jy.png') : require('../images/tab/lean_xx.png')}/>
                    }
                }}
            />
            <Tab.Screen
                name="Three"
                component={Second}
                options={{
                    tabBarLabel: '我的',
                    tabBarIcon: ({focused}) => {
                        return <Image style={{width: 20, height: 20}}
                                      source={focused ? require('../images/tab/wd-jy.png') : require('../images/tab/wd-xx.png')}/>
                    }
                }}
            />
        </Tab.Navigator>
    );
}


function Main() {
    return (
        <MainNavigator.Navigator>
            <MainNavigator.Screen
                name="MainTab"
                component={mainTab}
                options={
                    {
                        headerShown: false,
                    }
                }/>
            <MainNavigator.Screen name="Home" component={Home}/>
        </MainNavigator.Navigator>
    )
}


const RootDrawer = createDrawerNavigator();
const App = () => {
    return (
        <NavigationContainer>
            <RootDrawer.Navigator
                initialRouteName="Main"
                drawerContent={(props) => {
                    return <Drawer {...props}/>
                }}>
                <RootDrawer.Screen name="Main" component={Main}/>
            </RootDrawer.Navigator>
        </NavigationContainer>
    );
};

export default App;
