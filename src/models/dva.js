import React from 'react';
import {Provider, connect} from 'react-redux';
import {
    Reducer,
    Action,
    ReducersMapObject,
    Dispatch,
} from 'redux';
import { createLogger } from 'redux-logger';

let {create} = require('dva-core');
export {connect};

export interface Options {
    models: Model[];
    extraReducers: any;
    initialState: any;
    onError: (e: any) => void;
    onAction: any[];

    onReducer(reducer: any): (state: any, action: any) => any
}

export function dva(options: Options) {

    // redux 日志
    options.onAction = [createLogger()];

    const app = create(options);
    options.models.forEach((model: Model) => app.model(model));
    app.start();
    const store = app._store;
    app.getStore = () => store;
    app.start = (container: any) => () => <Provider store={store}>{container}</Provider>;
    return app;
}

export interface EffectsCommandMap {
    put: any;
    call: Function;
    select: Function;
    take: Function;
    cancel: Function;

    [key: string]: any;
}

export interface EffectsMapObject {
    [key: string]: Effect | EffectWithType;
}

export interface ReducerEnhancer {
    (reducer: Reducer<any>): void;
}

export interface SubscriptionAPI {
    dispatch: Dispatch<any>;
}

export type ActionWithPayload = { action: Action, payload: any };
export type EffectType = 'takeEvery' | 'takeLatest' | 'watcher' | 'throttle';
export type EffectWithType = [Effect, { type: EffectType }];
export type Effect = (action: ActionWithPayload, effects: EffectsCommandMap) => void;
export type ReducersMapObjectWithEnhancer = [ReducersMapObject, ReducerEnhancer];
export type Subscription = (api: SubscriptionAPI, done: Function) => void;

export interface SubscriptionsMapObject {
    [key: string]: Subscription;
}

export interface Model {
    namespace: string;
    state?: any;
    reducers?: ReducersMapObject | ReducersMapObjectWithEnhancer;
    effects?: EffectsMapObject;
    subscriptions?: SubscriptionsMapObject;
}
