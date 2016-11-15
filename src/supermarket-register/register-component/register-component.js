export default class RegisterComponent {

    constructor(RegisterService) {
        this.RegisterService = RegisterService;
        this.productList = '';
        this.totalCost = 0;
        this.totalCostWithTax = 0;
    }

    getPrices() {
        //parse product list
        //loop through product list calculate total cost before tax.
        //calculate tax
        let totalCost = this.productList.split(';').reduce((runningTotal, currentProductId) => {
            let currentProduct = this.RegisterService.get(this.currentProductId);
            return currentProduct.price + runningTotal
        }, 0);
        
        this.totalCost = totalCost;
    }

    isProductListValid() {
        return this.productList.length > 0;
    }

}
