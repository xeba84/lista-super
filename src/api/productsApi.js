const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

const allProducts = ["Pan", "Leche", "Azucar", "Huevos"];

const getAllProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(allProducts);
      }, 500);
    });
};


class ProductServiceApi {

    static getProducts() {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(allProducts);
          }, 1500);
        });
      }   
}
export { ProductServiceApi, getAllProducts, sleep, allProducts };