import { combineReducers } from 'redux';
import number from './number';
import title from './title';

// combineReducer で 1つの Reducer にまとめる
export default combineReducers({
  number,
  title,
});
