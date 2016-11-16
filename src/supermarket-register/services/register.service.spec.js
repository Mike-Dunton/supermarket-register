'use strict';

describe('RegisterService', function () {

    var register;

    beforeEach(angular.mock.module('main'));

    beforeEach(angular.mock.module(function ($provide) {
        $provide.constant('initialProducts', {
            "A12T-4GH7-QPL9-3N4M" : {
                name: "Cereal",
                price: 346
            },
            "E5T6-9UI3-TH15-QR88" : {
                name: "Chicken",
                price: 818
            },
            "YRT6-72AS-K736-L4AR" : {
                name: "Pop",
                price: 163
            }
        });
    }));

    beforeEach(angular.mock.inject(function (_RegisterService_) {
        register = _RegisterService_;
    }));

    it('should contain three products after initialization', function() {
        expect(Object.keys(register.products).length).toBe(3);
    });

    it('should return a product by id', function () {
        let product = register.get('YRT6-72AS-K736-L4AR');
        expect(product.name).toBe("Pop");
        expect(product.price).toBe(163);
    
    });

});
