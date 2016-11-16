import { assert } from 'chai';

import RegisterService from './register.service.js';

let service;

describe('RegisterService', function() {

    beforeEach(function() {
        let initialProducts = {
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
        }
        service = new RegisterService(initialProducts);
    });

    it('should contain 3 Products after initialization', function () {
        assert.equal(Object.keys(service.products).length, 3);
    });

    it('should return a product by id', function () {
        let {name, price} = service.get('YRT6-72AS-K736-L4AR');
        assert.equal(name, "Pop");
        assert.equal(price, 163);
    });

    it('should be case insensitive and return a product by id', function () {
        let product = service.get('yrT6-72as-k736-l4ar');
        assert.equal(product.name, "Pop");
        assert.equal(product.price, 163);
    });

});