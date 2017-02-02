(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.t = t;
exports.nt = nt;
exports.msgid = msgid;
exports.gettext = gettext;
exports.ngettext = ngettext;
function t(strings) {
    for (var _len = arguments.length, exprs = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        exprs[_key - 1] = arguments[_key];
    }

    if (strings && strings.reduce) {
        return strings.reduce(function (r, s, i) {
            return r + s + (exprs[i] || '');
        }, '');
    }
    return strings;
}

function nt() {
    return function (strings) {
        for (var _len2 = arguments.length, exprs = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            exprs[_key2 - 1] = arguments[_key2];
        }

        if (strings && strings.reduce) {
            return strings.reduce(function (r, s, i) {
                return r + s + (exprs[i] || '');
            }, '');
        }
        return strings;
    };
}

function msgid(strings) {
    for (var _len3 = arguments.length, exprs = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        exprs[_key3 - 1] = arguments[_key3];
    }

    if (strings && strings.reduce) {
        return strings.reduce(function (r, s, i) {
            return r + s + (exprs[i] || '');
        }, '');
    }
    return strings;
}

function gettext(text) {
    return text;
}

function ngettext(str) {
    return str;
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_c_3po__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_c_3po___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_c_3po__);
function _tag_ngettext(n, args) {
    return args[+(n != 1)];
}



const view = (hours, minutes, seconds) => {
    const hoursTxt = _tag_ngettext(hours, [`${hours} hour`, `${hours} hours`]);
    const minutesTxt = _tag_ngettext(minutes, [`${minutes} minute`, `${minutes} minutes`]);
    const secondsTxt = _tag_ngettext(seconds, [`${seconds} second`, `${seconds} seconds`]);

    return `
    <ul>
        <li>${'Choose locale'}</li>
        <li><a href="/">en</a></li>
        <li><a href="/uk">uk</a></li>
    </ul>
    <h1>${'webpack with c-3po localization demo'}</h1>
    <h2>${'Current time is'}</h2>
    <h3>${hoursTxt} ${minutesTxt} ${secondsTxt}</h3>
    `;
};
/* harmony export (immutable) */ __webpack_exports__["view"] = view;


if (typeof document !== 'undefined') {
    const content = document.getElementById('content');
    setInterval(() => {
        const date = new Date();
        content.innerHTML = view(date.getHours(), date.getMinutes(), date.getSeconds());
    }, 1000);
}

/* harmony default export */ __webpack_exports__["default"] = () => {
    const date = new Date();
    const viewStr = view(date.getHours(), date.getMinutes(), date.getSeconds());

    return `<!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>c-3po with webpack demo</title>
        </head>
        <style>
            li { display: inline; margin: 0, padding: 0 }
            ul { margin: 0; padding: 0 }
        </style>
        
        <body>
        <div id="content">${viewStr}</div>
        <script src='./app.js' type='text/javascript'></script>
        </body>
    </html>`;
};

/***/ })
/******/ ]);
});