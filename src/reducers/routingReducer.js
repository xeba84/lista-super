import { CHANGE_ROUTE } from '../constants/actionTypes';

const changeRouteReducer = (state = "/", action) => {
    switch (action.type) {
        case CHANGE_ROUTE:
            return { ...state, currentPath: action.payload.path };
        default:
            return state;
    }
};

export { changeRouteReducer };