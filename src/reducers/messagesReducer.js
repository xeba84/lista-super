import { SHOW_INFO_MESSAGE, SHOW_ERROR_MESSAGE, SHOW_WARN_MESSAGE, LOADING_DATA } from '../constants/actionTypes';

const popUpInitialState = { infoMessage: "", warnMessage: "", errorMessage: "" };
const loadingInitialState = { isLoadingData: false };

const popUpMessageReducer = (state = popUpInitialState, action) => {  
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

const loadingMessageReducer = (state = loadingInitialState, action) => {
  switch (action.type) {    
    case LOADING_DATA:
      return { ...state,  isLoadingData: action.payload.isLoading };
    default:
      return state;
  }
};

export { popUpMessageReducer, loadingMessageReducer };