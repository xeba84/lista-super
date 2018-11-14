import { ADD_NEW_PRODUCT, REMOVE_NEW_PRODUCT} from '../constants/actionTypes';

const sortProductList = (a, b) => (a < b) ? -1 : 1;

const productsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_NEW_PRODUCT:
      const { newProduct } = action.payload;
      return [...state, newProduct].sort(sortProductList);
    case REMOVE_NEW_PRODUCT:
      const { indexProduct } = action.payload;      
      return [...state.slice(0, indexProduct), ...state.slice(indexProduct+1)].sort(sortProductList);
    default:
      return state;
  }
};

export default productsReducer;