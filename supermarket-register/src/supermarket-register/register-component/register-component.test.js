import * as sinon from 'sinon';

import RegisterComponent from './register-component.js';
import RegisterService from '../services/register.service.js';

let component;
let mockRegisterService;

describe('RegisterComponent with mocked service (unit test)', function() {

    beforeEach(function() {
        let initialProducts = [];
        let RegisterServiceInstance = new RegisterService(initialProducts);
        mockRegisterService = sinon.mock(RegisterServiceInstance);
        component = new RegisterComponent(RegisterServiceInstance);
    });

    afterEach(function() {
       mockRegisterService.restore();
    });

    it('should getTotals for 0 products', function () {
        mockRegisterService
            .expects('get')
            .never();

        component.productList = '';
        component.getTotals();

        mockRegisterService.verify();
    });

});