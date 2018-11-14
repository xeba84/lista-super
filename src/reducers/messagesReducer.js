import { SHOW_INFO_MESSAGE, SHOW_ERROR_MESSAGE, SHOW_WARN_MESSAGE } from '../constants/actionTypes';

const initialState = { infoMessage: "", warnMessage: "", errorMessage: "" };

const messagesReducer = (state = initialState, action) => {  
  switch (action.type) {    
    case SHOW_INFO_MESSAGE:
      return { ...state, infoMessage: action.payload.message };
    case SHOW_WARN_MESSAGE:
      return { ...state, warnMessage: action.payload.message };
    case SHOW_ERROR_MESSAGE:
      return { ...state, errorMessage: action.payload.message };
    default:
      return state;
  }
};

export default messagesReducer;