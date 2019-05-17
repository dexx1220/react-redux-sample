import { combineReducers } from 'redux';
import characters from '../../core/Characters/reducer'

const rootReducer = combineReducers({
  characters
});

export default rootReducer;
