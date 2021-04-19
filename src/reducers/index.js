import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import searchResults from './searchReducers';
import searchData from './statsReducer';
import navHeader from './navReducer'

const rootReducer = combineReducers({
  results: dataReducer,
  text: searchResults,
  data: searchData,
  header: navHeader
});

export default rootReducer;
