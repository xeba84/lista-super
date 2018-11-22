import { 
    ADD_NEW_PRODUCT, REMOVE_NEW_PRODUCT, 
    SHOW_INFO_MESSAGE, LOADING_DATA,
    LOAD_BASE_PRODUCTS, API_LOAD_BASE_PRODUCTS } from '../constants/actionTypes';

export const apiLoadBaseProducts = products => ({
    type: API_LOAD_BASE_PRODUCTS,
    payload: {products}
});

export const loadBaseProducts = products => ({
    type: LOAD_BASE_PRODUCTS,
    payload: {products}
});

export const addProduct = product => ({
    type: ADD_NEW_PRODUCT,
    payload: {newProduct: product}
});
export const removeProduct = index => ({
    type: REMOVE_NEW_PRODUCT,
    payload: {indexProduct: index}
});

export const showInfoMessage = message => ({
    type: SHOW_INFO_MESSAGE,
    payload: {message: message}
});

export const setLoadingData = isLoading => ({
    type: LOADING_DATA,
    payload: {isLoading: isLoading}
});
