import {combineReducers} from '@reduxjs/toolkit';
import album from './Album/reducer'

const rootReducer = combineReducers({
  album,
});

export default rootReducer;
