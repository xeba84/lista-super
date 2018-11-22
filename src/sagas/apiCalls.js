import { ProductServiceApi } from '../api/productsApi';

export const loadProducts = () =>{
    return ProductServiceApi.getProducts().then(res => res);
}