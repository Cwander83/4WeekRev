import API from '../../api/API';
import * as constants from '../constants';

export const recieveFullProgram = fullProgram => ({
  type: constants.RECIEVE_FULLPROGRAM,
  fullProgram,
});

export const callingFullProgram = () => {
  return dispatch => {
    API.fullProgram()
      .then(response => response.json())
      .then(fullProgram => dispatch(recieveFullProgram(fullProgram)))
      .then(data => console.log(data));
  };
};
