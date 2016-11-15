import angular from 'angular';
import uirouter from 'angular-ui-router';

import { routing } from './supermarket-register.config.js';
import { DEFAULT_PRODUCTS } from './supermarket-register.constants.js';

import RegisterService from './services/register.service';
import RegisterComponent from './register-component/register-component';
import template from './register-component/register-component.tpl.html';

export default angular
    .module('main.app.supermarket-register', [uirouter])
    .config(routing)
    .component('registerComponent', { controller: RegisterComponent, template })
    .service('RegisterService', RegisterService)
    .constant('initialProducts', DEFAULT_PRODUCTS)
    .name;