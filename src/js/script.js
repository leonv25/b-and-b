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

    //slider head page
    let runSlider = require('./parts/slider');

        let slide = document.getElementsByClassName('slider__slide');
        runSlider(slide, 'slider__slide_active', 5000);
        console.log(slide);
    
    //modalWindows
    let useModalWindow = require('./parts/modalWindow');
        useModalWindow('.order_btn-openform', 'order_closeForm', 'forms_wrapper', 'order_form');
        useModalWindow('.buy_btn-openform', 'buy_closeForm', 'forms_wrapper', 'buy_form');
        useModalWindow('.rent_btn-openform', 'rent_closeForm', 'forms_wrapper', 'rent_form');
    
    //product-page
    let product_swiper_options = require('./parts/product_swiper_options');
        product_swiper_options();
    


});

