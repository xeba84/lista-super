import { ADD_NEW_PRODUCT, REMOVE_NEW_PRODUCT, LOAD_BASE_PRODUCTS} from '../constants/actionTypes';

const sortProductList = (a, b) => (a < b) ? -1 : 1;

const initialState = {list: [], new: ""}

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case ADD_NEW_PRODUCT:
      const { newProduct } = action.payload;
      return { list: [...state.list, newProduct].sort(sortProductList), new: newProduct };
    
    case REMOVE_NEW_PRODUCT:
      const { indexProduct } = action.payload;      
      return { list: [...state.list.slice(0, indexProduct), ...state.list.slice(indexProduct+1)].sort(sortProductList), new:""  }
    
    case LOAD_BASE_PRODUCTS:
      return { list: action.payload, new: "" };
    
    default:
      return state;
  }
};

export default productsReducer;