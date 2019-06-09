import * as constants from '../constants';

const initialState = {
  data: [],
};

const fullProgramReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.RECIEVE_FULLPROGRAM:
      return {
        ...state,
        data: action.fullProgram,
      };
    default:
      return state;
  }
};

export default fullProgramReducer;
