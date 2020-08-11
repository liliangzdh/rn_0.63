/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
// import App from './App';
import App from './src/index';
import 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => App);
