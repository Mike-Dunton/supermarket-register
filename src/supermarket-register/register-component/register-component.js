export default class RegisterComponent {

    constructor(RegisterService) {
        this.RegisterService = RegisterService;
        this.productList = '';
        this.taxRate = .0825;
        this.totalCost = 0;
        this.totalCostWithTax = 0;
    }

    getTotals() {
        let totalCost = this.productList.split(';').reduce((runningTotal, currentProductId) => {
            let currentProduct = this.RegisterService.get(currentProductId);
            if(currentProduct) {
                return currentProduct.price + runningTotal;
            } else {
                return runningTotal;
            }            
        }, 0);
        
        this.totalCost = totalCost;
        this.totalCostWithTax = totalCost + (totalCost * this.taxRate);
    }

    isProductListValid() {
        if (typeof this.productList === 'string') {
            return this.productList.length > 0;
        } else {
            return false
        }
        
    }

}
