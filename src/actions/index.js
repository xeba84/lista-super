import { 
    ADD_NEW_PRODUCT, REMOVE_NEW_PRODUCT, 
    SHOW_INFO_MESSAGE, LOADING_DATA, SHOW_WARN_MESSAGE,
    LOAD_BASE_PRODUCTS, API_LOAD_BASE_PRODUCTS, 
    CHANGE_ROUTE,
    LOGIN_USER_REQUEST, LOGIN_USER_RESPONSE, API_LOGIN_USER, LOGOUT_USER, } from '../constants/actionTypes';

//PRODUCTS
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

//MESSAGES
export const showInfoMessage = message => ({
    type: SHOW_INFO_MESSAGE,
    payload: {message: message}
});
export const showWarnMessage = message => ({
    type: SHOW_WARN_MESSAGE,
    payload: {message: message}
});
export const setLoadingData = isLoading => ({
    type: LOADING_DATA,
    payload: {isLoading: isLoading}
});

//ROUTING
export const changeRoute = path => ({
    type: CHANGE_ROUTE,
    payload: {path: path}
});

//LOGIN
export const loginUserRequest = (user, pass) => ({
    type: LOGIN_USER_REQUEST,
    payload: {isRequesting: true, user, pass}
});
export const loginUserResponse = (loginUserData) => ({
    type: LOGIN_USER_RESPONSE,
    payload: {isRequesting: false, loginUserData}
});
export const apiLoginUser = (user, pass) => ({
    type: API_LOGIN_USER,
    payload: {user, pass}
});
export const logoutUser = () => ({
    type: LOGOUT_USER
});
