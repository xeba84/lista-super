import { LOGIN_USER_REQUEST, LOGIN_USER_RESPONSE, LOGOUT_USER } from '../constants/actionTypes';
import { NOT_LOGGED } from './../constants/answerTypes';

const loginUserData = { status: NOT_LOGGED };
const initialState = { isRequesting: false, user: "", pass: "", loginUserData }

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
      return {
        ...state,
        isRequesting: true,
        user: action.payload.user,
        pass: action.payload.pass,
      };
    case LOGIN_USER_RESPONSE:
      return {
        ...state,
        isRequesting: false,
        loginUserData: action.payload.loginUserData,
      };
    case LOGOUT_USER:
      return { ...state, initialState };
    default:
      return state;
  }
};

export { loginReducer };
