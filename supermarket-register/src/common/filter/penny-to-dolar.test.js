import { assert } from 'chai';

import PennyToDollar from './penny-to-dollar';

describe('PennyToDollar', function() {
    let filter;
    beforeEach(function() {
        filter = new PennyToDollar();
    });

    it('should return -229.28 when passed -22928', function () {
        assert.equal(filter(-22928), -229.28);
    });

    it('should return 229.28 when passed 22928', function () {
        assert.equal(filter(22928), 229.28);
    });

    it('should return 1.00 when passed 100', function () {
        assert.equal(filter(100), 1.00);
    });


    it('should return 0.99 when passed 99', function () {
        assert.equal(filter(99), 0.99);
    });

    it('should return 0.10 when passed 10', function () {
        assert.equal(filter(100), 1.00);
    });

    it('should return 0 when passed undefined', function () {
        assert.equal(filter(), 0);
    });
    
    it('should return 0 when passed 0', function () {
        assert.equal(filter(0), 0);
    });

});