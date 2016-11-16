export default class RegisterService {

    constructor(initialProducts) {
        this.products = initialProducts;
    }

    get(productId) {
        return this.products[productId.toUpperCase()];
    }

    getAll() {
        return this.products;
    }

}