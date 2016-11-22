import * as sinon from 'sinon';

import RegisterComponent from './register-component.js';
import RegisterService from '../services/register.service.js';
import { DEFAULT_PRODUCTS } from '../supermarket-register.constants.js';

let component;
let mockRegisterService;

describe('RegisterComponent with mocked service (unit test)', function() {

    beforeEach(function() {
        let RegisterServiceInstance = new RegisterService(DEFAULT_PRODUCTS);
        mockRegisterService = sinon.mock(RegisterServiceInstance);
        component = new RegisterComponent(RegisterServiceInstance);
    });

    afterEach(function() {
       mockRegisterService.restore();
    });

    it('should get cost for 0 products when no products are  input', function () {
        mockRegisterService
            .expects('get')
            .never();

        component.productList = '';
        component.getTotals();

        mockRegisterService.verify();
    });

    it('should get cost for 1 product when one product is input', function () {
        mockRegisterService
            .expects('get')
            .once()
            .withArgs('asd');


        component.productList = 'asd';
        component.getTotals();

        mockRegisterService.verify();
    });

});