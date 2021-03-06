import { combineReducers } from 'redux';
import dataReducer from './dataReducer';

const rootReducer = combineReducers({
  appData: dataReducer
});

export default rootReducer;
