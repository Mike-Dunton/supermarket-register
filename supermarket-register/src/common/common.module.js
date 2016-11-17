import angular from 'angular';

import PennyToDollar from './filter/penny-to-dollar';

export default angular
    .module('main.app.common', [])
    .filter({PennyToDollar})
    .name;