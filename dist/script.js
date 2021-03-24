/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/lib/core.js":
/*!****************************!*\
  !*** ./src/js/lib/core.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// (() => {
//   const $ = function (selector) {
//     const elements = document.querySelectorAll(selector);
//     const obj = {};
//     obj.hide = () => {
//       elements.forEach(elem => {
//         elem.style.display = 'none';
//       });
//       return obj;
//     };
//     obj.show = () => {
//       elements.forEach(elem => {
//         elem.style.display = '';
//       });
//       return obj;
//     };
//     return obj;
//   };
//   window.$ = $;
// })();
const $ = function (selector) {
  return new $.prototype.init(selector);
};

$.prototype.init = function (selector) {
  if (!selector) {
    //Если не будет передан селектор, то вернется пустой объект. This в данном случае будет пустым объектом.
    return this;
  } //Если у того селектора, который передан, есть свойство tagName, то это будет HTML-элемент


  if (selector.tagName) {
    this[0] = selector;
    this.length = 1;
    return this;
  }

  Object.assign(this, document.querySelectorAll(selector));
  this.length = document.querySelectorAll(selector).length;
  return this;
};

$.prototype.init.prototype = $.prototype;
window.$ = $;
/* harmony default export */ __webpack_exports__["default"] = ($);

/***/ }),

/***/ "./src/js/lib/lib.js":
/*!***************************!*\
  !*** ./src/js/lib/lib.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./src/js/lib/core.js");
/* harmony import */ var _modules_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/display */ "./src/js/lib/modules/display.js");
/* harmony import */ var _modules_classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/classes */ "./src/js/lib/modules/classes.js");
/* harmony import */ var _modules_handlers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/handlers */ "./src/js/lib/modules/handlers.js");
/* harmony import */ var _modules_attribute__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/attribute */ "./src/js/lib/modules/attribute.js");
/* harmony import */ var _modules_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/actions */ "./src/js/lib/modules/actions.js");






/* harmony default export */ __webpack_exports__["default"] = (_core__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/js/lib/modules/actions.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/actions.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.html = function (content) {
  for (let i = 0; i < this.length; i += 1) {
    if (content) {
      this[i].innerHTML = content;
    } else {
      return this[i].innerHTML;
    }
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.eq = function (i) {
  const swap = this[i]; //Делаем из объекта массив ключей и полностью очищаем его

  const objLength = Object.keys(this).length;

  for (let i = 0; i < objLength; i += 1) {
    delete this[i];
  } //Добавляем в массив нужный нам элемент


  this[0] = swap;
  this.length = 1;
  return this;
}; //Получить номер элемента по порядку среди всех его соседей у одного родителя


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.index = function () {
  //Получаем родителя искомого элемента
  const parent = this[0].parentNode; //Получаем детей в виде HTML-коллекции и преобразуем её в обычный массив с помощью спред-оператора

  const childs = [...parent.children];

  const findMyIndex = item => {
    //this[0] здесь является this, на который кликнули, который передался селектором в объект $ и превратился там в this[0] в ф. init
    return item === this[0];
  };

  return childs.findIndex(findMyIndex);
}; //Нахождение определенных элементов по селектору среди уже выбранных


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.find = function (selector) {
  let numberOfItems = 0;
  let counter = 0;
  const copyObj = Object.assign({}, this);

  for (let i = 0; i < copyObj.length; i += 1) {
    const arr = copyObj[i].querySelectorAll(selector);

    if (arr.length === 0) {
      continue;
    }

    for (let j = 0; j < arr.length; j += 1) {
      this[counter] = arr[j];
      counter += 1;
    }

    numberOfItems += arr.length;
  }

  this.length = numberOfItems;
  const objOldLength = Object.keys(this).length;

  for (let i = numberOfItems; i < objOldLength; i += 1) {
    delete this[i];
  }

  return this;
}; //Определение ближайшего блока по заданному селектору (closest с дополнением)


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.closest = function (selector) {
  let counter = 0;

  for (let i = 0; i < this.length; i += 1) {
    //внутри каждого элемента мы находим ближайший к нему по указанному селектору, если его нет, то подставляем сам элемент
    if (this[i].closest(selector) === null) {
      this[i] = this[i];
    } else {
      this[i] = this[i].closest(selector);
    }

    counter++;
  }

  const objLength = Object.keys(this).length;

  for (let j = counter; j < objLength; j += 1) {
    delete this[j];
  }

  return this;
}; //Метод получения всех соседних элементов, не включая сам элемент


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.siblings = function () {
  let numberOfItems = 0;
  let counter = 0;
  const copyObj = Object.assign({}, this);

  for (let i = 0; i < copyObj.length; i += 1) {
    //Обращаемся к родителю всего блока и получаем всех детей
    const arr = copyObj[i].parentNode.children;

    for (let j = 0; j < arr.length; j += 1) {
      if (copyObj[i] === arr[j]) {
        continue;
      }

      this[counter] = arr[j];
      counter += 1;
    }

    numberOfItems += arr.length - 1;
  }

  this.length = numberOfItems;
  const objOldLength = Object.keys(this).length;

  for (let i = numberOfItems; i < objOldLength; i += 1) {
    delete this[i];
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/attribute.js":
/*!*****************************************!*\
  !*** ./src/js/lib/modules/attribute.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.getAttr = function (attrName) {
  if (!attrName) {
    return this;
  }

  let arr = [];

  for (let i = 0; i < this.length; i += 1) {
    arr.push(this[i].getAttribute(attrName));
  }

  return arr;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.setAttr = function (attrName, value) {
  if (!attrName || !value) {
    return this;
  }

  for (let i = 0; i < this.length; i += 1) {
    this[i].setAttribute(attrName, value);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggleAttr = function (attrName, value) {
  if (!attrName) {
    return this;
  }

  for (let i = 0; i < this.length; i += 1) {
    if (this[i].hasAttribute(attrName)) {
      this[i].removeAttribute(attrName);
    } else {
      this[i].setAttribute(attrName, value);
    }
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removeAttr = function (attrName) {
  if (!attrName) {
    return this;
  }

  for (let i = 0; i < this.length; i += 1) {
    if (this[i].hasAttribute(attrName)) {
      this[i].removeAttribute(attrName);
    }
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/classes.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/classes.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.addClass = function (...classNames) {
  for (let i = 0; i < this.length; i += 1) {
    if (!this[i].classList) {
      continue;
    }

    this[i].classList.add(...classNames);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removeClass = function (...classNames) {
  for (let i = 0; i < this.length; i += 1) {
    if (!this[i].classList) {
      continue;
    }

    this[i].classList.remove(...classNames);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggleClass = function (...classNames) {
  for (let i = 0; i < this.length; i += 1) {
    if (!this[i].classList) {
      continue;
    }

    this[i].classList.toggle(classNames);
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/display.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/display.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.show = function () {
  for (let i = 0; i < this.length; i += 1) {
    if (!this[i].style) {
      continue;
    }

    this[i].style.display = '';
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.hide = function () {
  for (let i = 0; i < this.length; i += 1) {
    if (!this[i].style) {
      continue;
    }

    this[i].style.display = 'none';
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggle = function () {
  for (let i = 0; i < this.length; i += 1) {
    if (!this[i].style) {
      continue;
    }

    if (this[i].style.display === 'none') {
      this[i].style.display = '';
    } else {
      this[i].style.display = 'none';
    }
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/handlers.js":
/*!****************************************!*\
  !*** ./src/js/lib/modules/handlers.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.on = function (eventName, callback) {
  if (!eventName || !callback) {
    return this;
  }

  for (let i = 0; i < this.length; i += 1) {
    this[i].addEventListener(eventName, callback);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.off = function (eventName, callback) {
  if (!eventName || !callback) {
    return this;
  }

  for (let i = 0; i < this.length; i += 1) {
    this[i].removeEventListener(eventName, callback);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.click = function (handler) {
  for (let i = 0; i < this.length; i += 1) {
    if (handler) {
      this[i].addEventListener('click', handler);
    } else {
      this[i].click();
    }
  }

  return this;
};

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/lib */ "./src/js/lib/lib.js");


Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('.active').on('click', sayHello);
Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('.active').off('click', sayHello);

function sayHello() {
  console.log('Hello');
}

Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('button').click(function () {
  Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('div').eq(2).toggleClass('active');
}); // $('div').getAttr('data');
// console.log($('button').html('Hello'));
// $('div').click(function(){
//   console.log($(this).index());
// });
//Внутри третьего дива найти все, которые подходят под селектор more
// console.log($('div').eq(2).find('.more'));
//
// console.log($('.some').closest('.findmeö').addClass('fkjkjf'));

console.log(Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('.more').eq(0).siblings());

/***/ })

/******/ });
//# sourceMappingURL=script.js.map