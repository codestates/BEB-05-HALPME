import { combineReducers, createStore } from 'redux'
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';	// redux-persist

import reducer from './reducers'

const persistConfig = {
    key: 'root',
    storage,
} // redux-persist

// let rootReducer = combineReducers({
//     reducer
// })

const persistedReducer = persistReducer(persistConfig, reducer);	// redux-persist

let store = createStore(persistedReducer)

export default store