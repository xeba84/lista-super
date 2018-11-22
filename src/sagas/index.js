/* eslint-disable */
import { delay } from 'redux-saga';
import { put, all, takeLatest, call } from 'redux-saga/effects';
import { LOAD_BASE_PRODUCTS, LOADING_DATA, API_LOAD_BASE_PRODUCTS} from '../constants/actionTypes';
import { getAllProducts, sleep, allProducts } from '../api/productsApi';
import { loadProducts } from './apiCalls';

//With action parameter! => change src->index.js to pass parameter
function* loadBaseProducts1(action) {
  yield put({ type: LOADING_DATA, payload: {isLoading:true} })
  yield delay(3000)
  yield put({ type: LOAD_BASE_PRODUCTS, payload: action.payload.products })
  yield put({ type: LOADING_DATA, payload: {isLoading:false} })
}

function* loadBaseProducts2() {
  yield put({ type: LOADING_DATA, payload: {isLoading:true} })
  
  //yield sleep(3000);
  //yield call(sleep,3000);
  //const products = allProducts;
  
  const products = yield call(getAllProducts);
  
  //const products = yield call(loadProducts);
  
  yield put({ type: LOAD_BASE_PRODUCTS, payload: products })
  yield put({ type: LOADING_DATA, payload: {isLoading:false} })
}


function* callLoadBaseProducts() {
  yield takeLatest(API_LOAD_BASE_PRODUCTS, loadBaseProducts2)
}

export default function* rootSaga() {
  yield all([
    //loadBaseProducts(),
    callLoadBaseProducts()
  ])
}