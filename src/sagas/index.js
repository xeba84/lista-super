/* eslint-disable */
import { delay } from 'redux-saga';
import { put, all, takeLatest, call } from 'redux-saga/effects';
import { 
  LOAD_BASE_PRODUCTS, LOADING_DATA, API_LOAD_BASE_PRODUCTS,
  LOGIN_USER_REQUEST, LOGIN_USER_RESPONSE, API_LOGIN_USER, 
  SHOW_WARN_MESSAGE, 
} from '../constants/actionTypes';
import { OK } from './../constants/answerTypes';
import { getAllProducts, sleep, allProducts } from '../api/productsApi';
import { loginUser } from '../api/loginImedApi';
import { loadProducts } from './apiCalls';

function* loadBaseProductsSaga2() {
  yield put({ type: LOADING_DATA, payload: {isLoading:true} })  
  //yield sleep(3000);
  //yield call(sleep,3000);
  //const products = allProducts;  
  const products = yield call(getAllProducts);  
  //const products = yield call(loadProducts);  
  yield put({ type: LOAD_BASE_PRODUCTS, payload: products })
  yield put({ type: LOADING_DATA, payload: {isLoading:false} })
}

function* loginUserSaga(action) {
  yield put({ type: LOGIN_USER_REQUEST, payload: action.payload })  
  const loginUserData = yield call(loginUser, action.payload.user, action.payload.pass);
  yield put({ type: LOGIN_USER_RESPONSE, payload: {loginUserData: loginUserData} })
  if (loginUserData.status !== OK){
    yield put({ type: SHOW_WARN_MESSAGE, payload: {message: loginUserData.message + " -> " + loginUserData.addInfo} })
  }  
}


function* watchLoadBaseProducts() {
  yield takeLatest(API_LOAD_BASE_PRODUCTS, loadBaseProductsSaga2)
}
function* watchLoginUser() {
  yield takeLatest(API_LOGIN_USER, loginUserSaga)
}

export default function* rootSaga() {
  yield all([
    watchLoadBaseProducts(),
    watchLoginUser(),
  ])
}