import ReduxThunk from 'redux-thunk';
import { compose, createStore, applyMiddleware } from 'redux';
import CombineReducers from './AppReducers';
import {persistStore} from 'redux-persist';

const middleware = [];
middleware.push(ReduxThunk);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const AppStore = createStore(CombineReducers, composeEnhancers(applyMiddleware(...middleware)));
export const persistor = persistStore(AppStore);