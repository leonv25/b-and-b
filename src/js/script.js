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
            menu_class_open = 'header__menu_mini';
        addMobilemenu(humburger, humburger_class, menu, menu_class_open);

    //slider head page
    let runSlider = require('./parts/slider');

        let slide = document.getElementsByClassName('slider__slide');
        runSlider(slide, 'slider__slide_active', 10000);
    
    //modalWindows
    let useModalWindow = require('./parts/modalWindow');
        useModalWindow('.order_btn-openform', 'order_closeForm', 'forms_wrapper', 'order_form');
        useModalWindow('.buy_btn-openform', 'buy_closeForm', 'forms_wrapper', 'buy_form');
        useModalWindow('.rent_btn-openform', 'rent_closeForm', 'forms_wrapper', 'rent_form');
    
    //current date for the form
    let currentDate = require('./parts/current_date');
    currentDate('input#date');

    //product-page
    let product_swiper_options = require('./parts/product_swiper_options');
        product_swiper_options();
    
    //viewer for img
    let viewer_imgs = require('./parts/viewer');
        viewer_imgs('.gallery', '.cards__background-img_gallery');
        viewer_imgs('.company', '.cards__background-img_gallery');


});

