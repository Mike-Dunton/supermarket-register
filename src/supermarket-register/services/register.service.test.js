import { assert } from 'chai';

import RegisterService from './register.service.js';

let service;

describe('RegisterService', function() {

    beforeEach(function() {
        let initialProducts = {
            "A12T-4GH7-QPL9-3N4M" : {
                name: "Cereal",
                price: 3.46
            },
            "E5T6-9UI3-TH15-QR88" : {
                name: "Chicken",
                price: 8.18
            },
            "YRT6-72AS-K736-L4AR" : {
                name: "Pop",
                price: 1.63
            }
        }
        service = new RegisterService(initialProducts);
    });

    it('should contain empty todos after initialization', function () {
        assert.equal(Object.keys(service.products).length, 3);
    });
});