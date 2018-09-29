import { LOGIN, LOGOUT, FAILED_LOGIN } from './types/types';
import axios from 'axios';

const login = (username, password) => async (dispatch, getState) => {
  await axios
    .post('http://localhost:8080/users/login', {
      username,
      password
    })
    .then(response => {
      dispatch({
        type: LOGIN,
        payload: response.status
      });
    })
    .catch(() => {
      dispatch({
        type: FAILED_LOGIN,
        payload: ''
      });
    });
};

const logout = () => {
  return {
    type: LOGOUT,
    payload: ''
  };
};

export { login, logout };
