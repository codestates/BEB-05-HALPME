import { combineReducers, createStore } from 'redux'
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import accountReducer from './accountReducer';
import postReducer from './postReducer';

const persistConfig = {
    key: 'root',
    storage,
}

let rootReducer = combineReducers({
    account: accountReducer,
    posts: postReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer);	// redux-persist

let store = createStore(persistedReducer)

export default store