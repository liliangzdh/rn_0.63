/**
 * Created by liliang on 2020/8/11
 */
import React from 'react';
import { createLogger } from 'redux-logger';
import * as models from './models';
import { dva, Model } from './models/dva';
import App from './router/index';

const initState = {};
let STATE: any = {};
Object.values(models).forEach(i => {
    STATE[i.namespace] = i.state;
});



const app = dva({
    initialState: initState,
    models: Object.values(models),
    onError(e: any) {
        console.log('onError', e);
    },
});

const AppComponet = app.start(<App/>);
export default AppComponet;

