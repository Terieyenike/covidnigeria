import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import searchResults from './searchReducers';
import searchData from './statsReducer';

const rootReducer = combineReducers({
  results: dataReducer,
  text: searchResults,
  data: searchData,
});

export default rootReducer;
