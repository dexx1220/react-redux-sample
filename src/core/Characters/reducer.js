import { createReducer } from '../../common/utils';

export const INITIAL_STATE = {
  character: {}
}

const reducers = {
  'CHARACTER.SUCCESS': getCharacter
}

function getCharacter(state, payload) {
  return {
    ...state,
    character: payload
  }
}

export default createReducer(INITIAL_STATE, reducers);
