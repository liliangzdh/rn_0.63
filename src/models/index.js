/**
 * Created by liliang on 2020/8/11
 */
const fetchTest = async () => {
    const res = await fetch(
        'https://www.zhihu.com/api/v3/oauth/sms/supported_countries'
    );
    const data = await res.json();
    console.log(1212,data);
    return data;
};
const app = {
    namespace: 'app',
    state: {
        dd: 'da',
        user: {nickname: ''},
    },
    reducers: {
        save(state, {payload}) {
            console.log(13333,state,payload);
            return {...state,...payload};
        },
        hello(state, {nickName}) {
            console.log(17,'----------',arguments);
            console.log(state);
            //修改用户名
            state.user.nickname = nickName;
            return {
                ...state,
            };
        },
    },
    effects: {
        *zhihu(_, { call, put }) {
            const res = yield call(fetchTest);
            yield put({
                type: 'save',
                payload: {
                    content: res.data,
                },
            });
        },
    },
    subscriptions: {
        setup({ dispatch }) {
            dispatch({ type: 'home/zhihu' })
        },
    },
};

export default app;
