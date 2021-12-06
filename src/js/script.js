// require('es6-promise').polyfill();
require('nodelist-foreach-polyfill');
require('formdata-polyfill');

window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    //test
    let test_func = require('./parts/test_file');
    test_func();

    //working script

    //header
    let addMobilemenu = require('./parts/header');

        let humburger = document.querySelector('.header__humburger'),
            humburger_class = 'header__humburger_close',
            menu = document.querySelector('.header__menu'),
            menu_class = 'header__menu_mini';
        addMobilemenu(humburger, humburger_class, menu, menu_class);

    //slider
    let runSlider = require('./parts/slider');

        let slide = document.getElementsByClassName('slider__slide');
        runSlider(slide, 'slider__slide_active', 5000);
});

