/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/parts/header.js":
/*!********************************!*\
  !*** ./src/js/parts/header.js ***!
  \********************************/
/***/ (function(module) {

//humburger - document.querySelector('.клас елемента який клікається')
//humburger_class - 'клас для humburger який його змінює'
//menu - document.querySelector('.клас ul з меню сайту')
//menu_class - 'клас для menu який його змінює'
function addMobilemenu(humburger, humburger_class, menu, menu_class) {
  humburger.addEventListener('click', function () {
    humburger.classList.toggle(humburger_class);
    menu.classList.toggle(menu_class);
  });
}

module.exports = addMobilemenu;

/***/ }),

/***/ "./src/js/parts/modalWindow.js":
/*!*************************************!*\
  !*** ./src/js/parts/modalWindow.js ***!
  \*************************************/
/***/ (function(module) {

//btn_open - id кнопки визову форми
//btn_close - id кнопки закриття форми
//forms_block - id елемент-обгортки в якому містяться всі форми
//form - елемент- id обготрки однієї конкретної форми
function useModalWindow(class_btn_open, id_btn_close, id_forms_block, id_form) {
  var btn_open = document.querySelectorAll(class_btn_open),
      btn_close = document.getElementById(id_btn_close),
      forms_block = document.getElementById(id_forms_block),
      form = document.getElementById(id_form);
  btn_open.forEach(function (item) {
    if (item && btn_close && forms_block && form) {
      item.addEventListener('click', function () {
        forms_block.style.display = 'block';
        form.style.display = 'block';
      });
      btn_close.addEventListener('click', function () {
        forms_block.style.display = 'none';
        form.style.display = 'none';
      });
    }
  });
}

module.exports = useModalWindow;

/***/ }),

/***/ "./src/js/parts/product_swiper_options.js":
/*!************************************************!*\
  !*** ./src/js/parts/product_swiper_options.js ***!
  \************************************************/
/***/ (function(module) {

function product_swiper_options() {
  var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true
  });
  var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    thumbs: {
      swiper: swiper
    }
  });
}

module.exports = product_swiper_options;

/***/ }),

/***/ "./src/js/parts/slider.js":
/*!********************************!*\
  !*** ./src/js/parts/slider.js ***!
  \********************************/
/***/ (function(module) {

//slide - обгортка одного конкретного слайду(<div></div>), що входить до слайдера (повторюваний елемент)
//slideClass - клас slide із зміною властивості для display з none на block, при присвоєнні цього класу блок із слайдом відображається коли всі інші , які не мають цюго класу не відображаются
//slideTime - час через який змінюється один слайд на інший
function runSlider(slide, slideClass, slideTime) {
  if (slide[0] && slideClass[0]) {
    function slideImg() {
      var i = 0;
      var id = setInterval(frame, slideTime);

      function frame() {
        if (i == slide.length - 1) {
          slide[0].classList.add(slideClass);
          slide[slide.length - 1].classList.remove(slideClass);
          i = 0;
        } else {
          i++;
          slide[i - 1].classList.remove(slideClass);
          slide[i].classList.add(slideClass);
        }
      }
    }

    slideImg();
  }
}

module.exports = runSlider;

/***/ }),

/***/ "./src/js/parts/test_file.js":
/*!***********************************!*\
  !*** ./src/js/parts/test_file.js ***!
  \***********************************/
/***/ (function(module) {

function test_func() {
  console.log('test JS');
}

module.exports = test_func;

/***/ }),

/***/ "./node_modules/nodelist-foreach-polyfill/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/nodelist-foreach-polyfill/index.js ***!
  \*********************************************************/
/***/ (function() {

if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}


/***/ }),

/***/ "./node_modules/formdata-polyfill/formdata.min.js":
/*!********************************************************!*\
  !*** ./node_modules/formdata-polyfill/formdata.min.js ***!
  \********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*! formdata-polyfill. MIT License. Jimmy W?rting <https://jimmy.warting.se/opensource> */
;(function(){var h;function l(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}var m="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function n(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var q=n(this);function r(a,b){if(b)a:{var c=q;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&m(c,a,{configurable:!0,writable:!0,value:b})}}
r("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}function c(f,g){this.A=f;m(this,"description",{configurable:!0,writable:!0,value:g})}if(a)return a;c.prototype.toString=function(){return this.A};var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
r("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=q[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&m(d.prototype,a,{configurable:!0,writable:!0,value:function(){return u(l(this))}})}return a});function u(a){a={next:a};a[Symbol.iterator]=function(){return this};return a}
function v(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:l(a)}}var w;if("function"==typeof Object.setPrototypeOf)w=Object.setPrototypeOf;else{var y;a:{var z={a:!0},A={};try{A.__proto__=z;y=A.a;break a}catch(a){}y=!1}w=y?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var B=w;function C(){this.m=!1;this.j=null;this.v=void 0;this.h=1;this.u=this.C=0;this.l=null}
function D(a){if(a.m)throw new TypeError("Generator is already running");a.m=!0}C.prototype.o=function(a){this.v=a};C.prototype.s=function(a){this.l={D:a,F:!0};this.h=this.C||this.u};C.prototype.return=function(a){this.l={return:a};this.h=this.u};function E(a,b){a.h=3;return{value:b}}function F(a){this.g=new C;this.G=a}F.prototype.o=function(a){D(this.g);if(this.g.j)return G(this,this.g.j.next,a,this.g.o);this.g.o(a);return H(this)};
function I(a,b){D(a.g);var c=a.g.j;if(c)return G(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.g.return);a.g.return(b);return H(a)}F.prototype.s=function(a){D(this.g);if(this.g.j)return G(this,this.g.j["throw"],a,this.g.o);this.g.s(a);return H(this)};
function G(a,b,c,d){try{var e=b.call(a.g.j,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.g.m=!1,e;var f=e.value}catch(g){return a.g.j=null,a.g.s(g),H(a)}a.g.j=null;d.call(a.g,f);return H(a)}function H(a){for(;a.g.h;)try{var b=a.G(a.g);if(b)return a.g.m=!1,{value:b.value,done:!1}}catch(c){a.g.v=void 0,a.g.s(c)}a.g.m=!1;if(a.g.l){b=a.g.l;a.g.l=null;if(b.F)throw b.D;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function J(a){this.next=function(b){return a.o(b)};this.throw=function(b){return a.s(b)};this.return=function(b){return I(a,b)};this[Symbol.iterator]=function(){return this}}function K(a,b){b=new J(new F(b));B&&a.prototype&&B(b,a.prototype);return b}function L(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};e[Symbol.iterator]=function(){return e};return e}
r("Array.prototype.entries",function(a){return a?a:function(){return L(this,function(b,c){return[b,c]})}});
if("undefined"!==typeof Blob&&("undefined"===typeof FormData||!FormData.prototype.keys)){var M=function(a,b){for(var c=0;c<a.length;c++)b(a[c])},N=function(a){return a.replace(/\r?\n|\r/g,"\r\n")},O=function(a,b,c){if(b instanceof Blob){c=void 0!==c?String(c+""):"string"===typeof b.name?b.name:"blob";if(b.name!==c||"[object Blob]"===Object.prototype.toString.call(b))b=new File([b],c);return[String(a),b]}return[String(a),String(b)]},P=function(a,b){if(a.length<b)throw new TypeError(b+" argument required, but only "+
a.length+" present.");},Q="object"===typeof globalThis?globalThis:"object"===typeof window?window:"object"===typeof self?self:this,R=Q.FormData,S=Q.XMLHttpRequest&&Q.XMLHttpRequest.prototype.send,T=Q.Request&&Q.fetch,U=Q.navigator&&Q.navigator.sendBeacon,V=Q.Element&&Q.Element.prototype,W=Q.Symbol&&Symbol.toStringTag;W&&(Blob.prototype[W]||(Blob.prototype[W]="Blob"),"File"in Q&&!File.prototype[W]&&(File.prototype[W]="File"));try{new File([],"")}catch(a){Q.File=function(b,c,d){b=new Blob(b,d||{});
Object.defineProperties(b,{name:{value:c},lastModified:{value:+(d&&void 0!==d.lastModified?new Date(d.lastModified):new Date)},toString:{value:function(){return"[object File]"}}});W&&Object.defineProperty(b,W,{value:"File"});return b}}var escape=function(a){return a.replace(/\n/g,"%0A").replace(/\r/g,"%0D").replace(/"/g,"%22")},X=function(a){this.i=[];var b=this;a&&M(a.elements,function(c){if(c.name&&!c.disabled&&"submit"!==c.type&&"button"!==c.type&&!c.matches("form fieldset[disabled] *"))if("file"===
c.type){var d=c.files&&c.files.length?c.files:[new File([],"",{type:"application/octet-stream"})];M(d,function(e){b.append(c.name,e)})}else"select-multiple"===c.type||"select-one"===c.type?M(c.options,function(e){!e.disabled&&e.selected&&b.append(c.name,e.value)}):"checkbox"===c.type||"radio"===c.type?c.checked&&b.append(c.name,c.value):(d="textarea"===c.type?N(c.value):c.value,b.append(c.name,d))})};h=X.prototype;h.append=function(a,b,c){P(arguments,2);this.i.push(O(a,b,c))};h.delete=function(a){P(arguments,
1);var b=[];a=String(a);M(this.i,function(c){c[0]!==a&&b.push(c)});this.i=b};h.entries=function b(){var c,d=this;return K(b,function(e){1==e.h&&(c=0);if(3!=e.h)return c<d.i.length?e=E(e,d.i[c]):(e.h=0,e=void 0),e;c++;e.h=2})};h.forEach=function(b,c){P(arguments,1);for(var d=v(this),e=d.next();!e.done;e=d.next()){var f=v(e.value);e=f.next().value;f=f.next().value;b.call(c,f,e,this)}};h.get=function(b){P(arguments,1);var c=this.i;b=String(b);for(var d=0;d<c.length;d++)if(c[d][0]===b)return c[d][1];
return null};h.getAll=function(b){P(arguments,1);var c=[];b=String(b);M(this.i,function(d){d[0]===b&&c.push(d[1])});return c};h.has=function(b){P(arguments,1);b=String(b);for(var c=0;c<this.i.length;c++)if(this.i[c][0]===b)return!0;return!1};h.keys=function c(){var d=this,e,f,g,k,p;return K(c,function(t){1==t.h&&(e=v(d),f=e.next());if(3!=t.h){if(f.done){t.h=0;return}g=f.value;k=v(g);p=k.next().value;return E(t,p)}f=e.next();t.h=2})};h.set=function(c,d,e){P(arguments,2);c=String(c);var f=[],g=O(c,
d,e),k=!0;M(this.i,function(p){p[0]===c?k&&(k=!f.push(g)):f.push(p)});k&&f.push(g);this.i=f};h.values=function d(){var e=this,f,g,k,p,t;return K(d,function(x){1==x.h&&(f=v(e),g=f.next());if(3!=x.h){if(g.done){x.h=0;return}k=g.value;p=v(k);p.next();t=p.next().value;return E(x,t)}g=f.next();x.h=2})};X.prototype._asNative=function(){for(var d=new R,e=v(this),f=e.next();!f.done;f=e.next()){var g=v(f.value);f=g.next().value;g=g.next().value;d.append(f,g)}return d};X.prototype._blob=function(){var d="----formdata-polyfill-"+
Math.random(),e=[],f="--"+d+'\r\nContent-Disposition: form-data; name="';this.forEach(function(g,k){return"string"==typeof g?e.push(f+escape(N(k))+('"\r\n\r\n'+N(g)+"\r\n")):e.push(f+escape(N(k))+('"; filename="'+escape(g.name)+'"\r\nContent-Type: '+(g.type||"application/octet-stream")+"\r\n\r\n"),g,"\r\n")});e.push("--"+d+"--");return new Blob(e,{type:"multipart/form-data; boundary="+d})};X.prototype[Symbol.iterator]=function(){return this.entries()};X.prototype.toString=function(){return"[object FormData]"};
V&&!V.matches&&(V.matches=V.matchesSelector||V.mozMatchesSelector||V.msMatchesSelector||V.oMatchesSelector||V.webkitMatchesSelector||function(d){d=(this.document||this.ownerDocument).querySelectorAll(d);for(var e=d.length;0<=--e&&d.item(e)!==this;);return-1<e});W&&(X.prototype[W]="FormData");if(S){var Y=Q.XMLHttpRequest.prototype.setRequestHeader;Q.XMLHttpRequest.prototype.setRequestHeader=function(d,e){Y.call(this,d,e);"content-type"===d.toLowerCase()&&(this.B=!0)};Q.XMLHttpRequest.prototype.send=
function(d){d instanceof X?(d=d._blob(),this.B||this.setRequestHeader("Content-Type",d.type),S.call(this,d)):S.call(this,d)}}T&&(Q.fetch=function(d,e){e&&e.body&&e.body instanceof X&&(e.body=e.body._blob());return T.call(this,d,e)});U&&(Q.navigator.sendBeacon=function(d,e){e instanceof X&&(e=e._asNative());return U.call(this,d,e)});Q.FormData=X};})();


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
// require('es6-promise').polyfill();
__webpack_require__(/*! nodelist-foreach-polyfill */ "./node_modules/nodelist-foreach-polyfill/index.js");

__webpack_require__(/*! formdata-polyfill */ "./node_modules/formdata-polyfill/formdata.min.js");

window.addEventListener('DOMContentLoaded', function () {
  'use strict'; //test

  var test_func = __webpack_require__(/*! ./parts/test_file */ "./src/js/parts/test_file.js");

  test_func(); //working script
  //header

  var addMobilemenu = __webpack_require__(/*! ./parts/header */ "./src/js/parts/header.js");

  var humburger = document.querySelector('.header__humburger'),
      humburger_class = 'header__humburger_close',
      menu = document.querySelector('.header__menu'),
      menu_class = 'header__menu_mini';
  addMobilemenu(humburger, humburger_class, menu, menu_class); //slider head page

  var runSlider = __webpack_require__(/*! ./parts/slider */ "./src/js/parts/slider.js");

  var slide = document.getElementsByClassName('slider__slide');
  runSlider(slide, 'slider__slide_active', 5000);
  console.log(slide); //modalWindows

  var useModalWindow = __webpack_require__(/*! ./parts/modalWindow */ "./src/js/parts/modalWindow.js");

  useModalWindow('.order_btn-openform', 'order_closeForm', 'forms_wrapper', 'order_form');
  useModalWindow('.buy_btn-openform', 'buy_closeForm', 'forms_wrapper', 'buy_form');
  useModalWindow('.rent_btn-openform', 'rent_closeForm', 'forms_wrapper', 'rent_form'); //product-page

  var product_swiper_options = __webpack_require__(/*! ./parts/product_swiper_options */ "./src/js/parts/product_swiper_options.js");

  product_swiper_options();
});
}();
/******/ })()
;
//# sourceMappingURL=bundle.js.map