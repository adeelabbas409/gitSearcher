import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import SearchReducer from "./search/search.reducer";


const persistConfig = {
  key:'search',
  storage,
  whitelist: ['searchReducer'],
}

const AppReducers = combineReducers({
  searchReducer: SearchReducer
});

export default persistReducer(persistConfig, AppReducers);