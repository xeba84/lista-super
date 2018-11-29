import { LOGIN, LOGOUT } from '../constants/actionTypes';

const initialState = {isLogged: false, user: "", pass: ""}

const loginReducer = (state = initialState, action) => {
  switch (action.type) {    
    case LOGIN:
      return { ...state,  isLogged: true, user: action.payload.user, pass: action.payload.pass};
      case LOGOUT:
      return { ...state,  initialState };
    default:
      return state;
  }
};

export { loginReducer };
