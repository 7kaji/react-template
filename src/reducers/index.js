import { combineReducers } from 'redux';
import number from './Number';
import title from './Title';

// combineReducer で 1つの Reducer にまとめる
export default combineReducers({
  number,
  title,
});
