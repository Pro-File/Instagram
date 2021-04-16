import {combineReducers} from 'redux';
import postReducer from './Posts/postReducer';
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage';
// import {storage} from 'redux-persist/lib/storage/session'; //Session Storage

const persistConfig = {
    key: 'root',
    storage,
    whitelist : ["posts"],
}

var rootReducer = combineReducers({
    posts: postReducer,
})



export default persistReducer(persistConfig,rootReducer);