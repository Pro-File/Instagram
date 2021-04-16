import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import {persistStore} from 'redux-persist';


var middleware = [thunk];
var store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(...middleware),

));

export const presistor = persistStore(store);

export default store;