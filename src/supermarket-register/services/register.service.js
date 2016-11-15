export default class RegisterService {

    constructor(initialProducts) {
        this.products = initialProducts;
    }

    get(productId) {
        return this.products[productId];
    }

    getAll() {
        return this.products;
    }

}