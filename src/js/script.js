// require('es6-promise').polyfill();
require('nodelist-foreach-polyfill');
require('formdata-polyfill');

window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    let test_func = require('./parts/test_file');

    test_func();

});

