"use strict";
(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 0;
}

button,
i {
  cursor: pointer;
}

#Navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
}

#brand {
  padding: 0;
}

#logo {
  width: 80px;
}

#nav-list {
  display: flex;
  list-style: none;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
  justify-content: center;
  font-size: 1.2rem;
}

.nav a {
  text-decoration: none;
  cursor: pointer;
  color: #333;
  transition: color 0.3s ease; /* Smooth color transition */
}

.nav a:hover {
  color: #555;
}

/* Footer */
footer {
  background-color: #f9f9f9;
  padding: 20px;
  text-align: left;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
}

footer p {
  margin: 0;
}

#meals {
  display: flex;
  flex-wrap: wrap;
  padding: 5%;
  justify-content: space-between;
}

.meal-card {
  width: 30%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease; /* Smooth transform transition */
}

.meal-card:hover {
  transform: translateY(-5px);
}

.meal-thumbnail,
.meal-thumbnail img {
  width: 100%;
  height: 200px; /* Fixed height for consistency */
  object-fit: cover; /* Maintain aspect ratio */
  border-radius: 12px 12px 0 0;
}

.meal-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px;
}

.likeButton {
  color: #3498db;
}

.meal-description {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
}

.meal-name {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
}

.like-count {
  margin-left: auto;
}

/* Popup */
#popup {
  overflow-y: auto;
  position: fixed;
  background-color: #fff8e1;
  top: 10%;
  left: 10%;
  right: 10%;
  bottom: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border-radius: 16px;
}

#popup-header {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.8rem;
  font-weight: 700;
}

#popup-thumbnail {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

#popup-close {
  font-size: 2.5rem;
  cursor: pointer;
  color: #777;
  transition: color 0.3s ease;
}

#popup-close:hover {
  color: #555;
}

#popup-thumb {
  width: 40%;
  margin: 0 auto;
}

#popup-desc {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  width: 100%;
  padding: 0 10%;
}

#popup-desc div {
  display: flex;
  align-items: center;
  gap: 2%;
}

#popup-responses {
  width: 100%;
  padding: 0 10%;
}

.header {
  margin: 0 auto;
  display: flex;
  justify-content: center;
}

#popup-add-response {
  width: 100%;
  padding: 0 10%;
}

.popup-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 50%;
}

.form-submit {
  width: fit-content;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  padding: 10px;
  border: none;
  border-radius: 8px;
  background-color: #3498db;
  color: #fff;
  transition: background-color 0.3s ease;
}

.form-submit:hover {
  background-color: #2575b2;
}

.meal-comment {
  padding: 12px;
  font-size: 1.2rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-weight: 600;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,4DAA4D;EAC5D,SAAS;EACT,UAAU;AACZ;;AAEA;;EAEE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,WAAW;EACX,aAAa;AACf;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,eAAe;EACf,SAAS;EACT,WAAW;EACX,uBAAuB;EACvB,iBAAiB;AACnB;;AAEA;EACE,qBAAqB;EACrB,eAAe;EACf,WAAW;EACX,2BAA2B,EAAE,4BAA4B;AAC3D;;AAEA;EACE,WAAW;AACb;;AAEA,WAAW;AACX;EACE,yBAAyB;EACzB,aAAa;EACb,gBAAgB;EAChB,0BAA0B;EAC1B,6BAA6B;AAC/B;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,aAAa;EACb,eAAe;EACf,WAAW;EACX,8BAA8B;AAChC;;AAEA;EACE,UAAU;EACV,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,wCAAwC;EACxC,yBAAyB;EACzB,mBAAmB;EACnB,gBAAgB;EAChB,+BAA+B,EAAE,gCAAgC;AACnE;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;;EAEE,WAAW;EACX,aAAa,EAAE,iCAAiC;EAChD,iBAAiB,EAAE,0BAA0B;EAC7C,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;EACT,aAAa;AACf;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,SAAS;EACT,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;AACnB;;AAEA,UAAU;AACV;EACE,gBAAgB;EAChB,eAAe;EACf,yBAAyB;EACzB,QAAQ;EACR,SAAS;EACT,UAAU;EACV,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,aAAa;EACb,yCAAyC;EACzC,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,WAAW;EACX,2BAA2B;AAC7B;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,UAAU;EACV,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,2DAA2D;EAC3D,SAAS;EACT,WAAW;EACX,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,OAAO;AACT;;AAEA;EACE,WAAW;EACX,cAAc;AAChB;;AAEA;EACE,cAAc;EACd,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,WAAW;EACX,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,gBAAgB;EAChB,eAAe;EACf,aAAa;EACb,YAAY;EACZ,kBAAkB;EAClB,yBAAyB;EACzB,WAAW;EACX,sCAAsC;AACxC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,yBAAyB;EACzB,kBAAkB;EAClB,gBAAgB;AAClB","sourcesContent":["* {\r\n  box-sizing: border-box;\r\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbutton,\r\ni {\r\n  cursor: pointer;\r\n}\r\n\r\n#Navbar {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 100%;\r\n  padding: 20px;\r\n}\r\n\r\n#brand {\r\n  padding: 0;\r\n}\r\n\r\n#logo {\r\n  width: 80px;\r\n}\r\n\r\n#nav-list {\r\n  display: flex;\r\n  list-style: none;\r\n  flex-wrap: wrap;\r\n  gap: 20px;\r\n  width: 100%;\r\n  justify-content: center;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.nav a {\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n  color: #333;\r\n  transition: color 0.3s ease; /* Smooth color transition */\r\n}\r\n\r\n.nav a:hover {\r\n  color: #555;\r\n}\r\n\r\n/* Footer */\r\nfooter {\r\n  background-color: #f9f9f9;\r\n  padding: 20px;\r\n  text-align: left;\r\n  border-top: 1px solid #ddd;\r\n  border-bottom: 1px solid #ddd;\r\n}\r\n\r\nfooter p {\r\n  margin: 0;\r\n}\r\n\r\n#meals {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  padding: 5%;\r\n  justify-content: space-between;\r\n}\r\n\r\n.meal-card {\r\n  width: 30%;\r\n  margin-top: 20px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\r\n  border: 1px solid #e0e0e0;\r\n  border-radius: 12px;\r\n  overflow: hidden;\r\n  transition: transform 0.3s ease; /* Smooth transform transition */\r\n}\r\n\r\n.meal-card:hover {\r\n  transform: translateY(-5px);\r\n}\r\n\r\n.meal-thumbnail,\r\n.meal-thumbnail img {\r\n  width: 100%;\r\n  height: 200px; /* Fixed height for consistency */\r\n  object-fit: cover; /* Maintain aspect ratio */\r\n  border-radius: 12px 12px 0 0;\r\n}\r\n\r\n.meal-body {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 10px;\r\n  padding: 20px;\r\n}\r\n\r\n.likeButton {\r\n  color: #3498db;\r\n}\r\n\r\n.meal-description {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n.meal-name {\r\n  margin: 0;\r\n  font-size: 1.5rem;\r\n  font-weight: 600;\r\n}\r\n\r\n.like-count {\r\n  margin-left: auto;\r\n}\r\n\r\n/* Popup */\r\n#popup {\r\n  overflow-y: auto;\r\n  position: fixed;\r\n  background-color: #fff8e1;\r\n  top: 10%;\r\n  left: 10%;\r\n  right: 10%;\r\n  bottom: 10%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 20px;\r\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);\r\n  border-radius: 16px;\r\n}\r\n\r\n#popup-header {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  font-size: 1.8rem;\r\n  font-weight: 700;\r\n}\r\n\r\n#popup-thumbnail {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n#popup-close {\r\n  font-size: 2.5rem;\r\n  cursor: pointer;\r\n  color: #777;\r\n  transition: color 0.3s ease;\r\n}\r\n\r\n#popup-close:hover {\r\n  color: #555;\r\n}\r\n\r\n#popup-thumb {\r\n  width: 40%;\r\n  margin: 0 auto;\r\n}\r\n\r\n#popup-desc {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\r\n  gap: 20px;\r\n  width: 100%;\r\n  padding: 0 10%;\r\n}\r\n\r\n#popup-desc div {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 2%;\r\n}\r\n\r\n#popup-responses {\r\n  width: 100%;\r\n  padding: 0 10%;\r\n}\r\n\r\n.header {\r\n  margin: 0 auto;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n#popup-add-response {\r\n  width: 100%;\r\n  padding: 0 10%;\r\n}\r\n\r\n.popup-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 12px;\r\n  width: 50%;\r\n}\r\n\r\n.form-submit {\r\n  width: fit-content;\r\n  font-size: 1.2rem;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n  padding: 10px;\r\n  border: none;\r\n  border-radius: 8px;\r\n  background-color: #3498db;\r\n  color: #fff;\r\n  transition: background-color 0.3s ease;\r\n}\r\n\r\n.form-submit:hover {\r\n  background-color: #2575b2;\r\n}\r\n\r\n.meal-comment {\r\n  padding: 12px;\r\n  font-size: 1.2rem;\r\n  border: 1px solid #e0e0e0;\r\n  border-radius: 8px;\r\n  font-weight: 600;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/Modules/API-Data.js":
/*!*********************************!*\
  !*** ./src/Modules/API-Data.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   APP_URL: () => (/* binding */ APP_URL),
/* harmony export */   MEAL_DB_URL: () => (/* binding */ MEAL_DB_URL)
/* harmony export */ });
/* eslint-disable linebreak-style */
const MEAL_DB_URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian';
const APP_ID = 'K3sxVOiMOhEMJTSuvB1D';
const APP_URL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${APP_ID}`;



/***/ }),

/***/ "./src/Modules/Images.js":
/*!*******************************!*\
  !*** ./src/Modules/Images.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_brand_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/brand-logo.png */ "./src/assets/brand-logo.png");
/* eslint-disable linebreak-style */


const Navbar = () => {
  const img = document.querySelector('#logo');
  img.src = _assets_brand_logo_png__WEBPACK_IMPORTED_MODULE_0__;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

/***/ }),

/***/ "./src/Modules/comments.js":
/*!*********************************!*\
  !*** ./src/Modules/comments.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getComments: () => (/* binding */ getComments),
/* harmony export */   postComment: () => (/* binding */ postComment)
/* harmony export */ });
/* harmony import */ var _API_Data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./API-Data.js */ "./src/Modules/API-Data.js");


const postComment = async (id, username, comment) => {
  await fetch(`${_API_Data_js__WEBPACK_IMPORTED_MODULE_0__.APP_URL}/comments/`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
      username,
      comment,
    }),
  });
};

const getComments = async (id) => {
  const request = await fetch(`${_API_Data_js__WEBPACK_IMPORTED_MODULE_0__.APP_URL}/comments?item_id=${id}`);
  const response = await request.json();
  return response;
};



/***/ }),

/***/ "./src/Modules/commentsCounter.js":
/*!****************************************!*\
  !*** ./src/Modules/commentsCounter.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const commentsCounter = (arr, header) => {
  if (Array.isArray(arr)) {
    header.textContent = `Comments (${arr.length})`;
  } else {
    header.textContent = 'Comments (0)';
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentsCounter);

/***/ }),

/***/ "./src/Modules/displayMeals.js":
/*!*************************************!*\
  !*** ./src/Modules/displayMeals.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mealCounter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mealCounter.js */ "./src/Modules/mealCounter.js");
/* harmony import */ var _getMeals_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getMeals.js */ "./src/Modules/getMeals.js");
/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popup.js */ "./src/Modules/popup.js");
/* harmony import */ var _getLikes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getLikes.js */ "./src/Modules/getLikes.js");





const MEAL_TEMPLATE = `
<div class="meal-thumbnail">
  <img src="" alt="dish">
</div>
<div class="meal-body">
  <div class ="meal-description">
    <p class="meal-name"></p>
    <i class="fa-solid fa-heart likeButton"></i>
  </div>
  <span class="like-count"></span>
  <button class="meal-comment">Comments</button>
</div>`;

const handleLikeEvent = async (id) => {
  try {
    await (0,_getLikes_js__WEBPACK_IMPORTED_MODULE_3__.updateLikeColor)(id);
    await (0,_getLikes_js__WEBPACK_IMPORTED_MODULE_3__.postLikes)(id);
    await (0,_getLikes_js__WEBPACK_IMPORTED_MODULE_3__.updateLike)(id);
  } catch (e) {
    console.error(e);
  }
};

const displayMeal = async () => {
  const meals = await (0,_getMeals_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const Container = document.querySelector('#meals');
  meals.forEach((meal) => {
    const card = document.createElement('div');
    card.innerHTML = MEAL_TEMPLATE;
    const thumbnail = card.querySelector('.meal-thumbnail img');
    const dish = card.querySelector('.meal-name');
    const likes = card.querySelector('.like-count');
    const likeButton = card.querySelector('.likeButton');

    dish.textContent = meal.strMeal;
    thumbnail.src = meal.strMealThumb;
    likes.textContent = '0 Likes';

    card.classList.add('meal-card');
    card.id = meal.idMeal;

    likeButton.addEventListener('click', () => {
      handleLikeEvent(card.id);
    });

    Container.appendChild(card);
    const commentButton = card.querySelector('.meal-comment');
    commentButton.addEventListener('click', async () => {
      (0,_popup_js__WEBPACK_IMPORTED_MODULE_2__.displayPopup)(card.id);
    });
  });

  await (0,_getLikes_js__WEBPACK_IMPORTED_MODULE_3__.displayLikes)();
  await (0,_mealCounter_js__WEBPACK_IMPORTED_MODULE_0__["default"])(meals);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayMeal);

/***/ }),

/***/ "./src/Modules/getLikes.js":
/*!*********************************!*\
  !*** ./src/Modules/getLikes.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayLikes: () => (/* binding */ displayLikes),
/* harmony export */   getLikes: () => (/* binding */ getLikes),
/* harmony export */   postLikes: () => (/* binding */ postLikes),
/* harmony export */   updateLike: () => (/* binding */ updateLike),
/* harmony export */   updateLikeColor: () => (/* binding */ updateLikeColor)
/* harmony export */ });
/* harmony import */ var _API_Data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./API-Data.js */ "./src/Modules/API-Data.js");


const postLikes = async (id) => {
  await fetch(`${_API_Data_js__WEBPACK_IMPORTED_MODULE_0__.APP_URL}/likes`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
    }),
  });
};

const getLikes = async () => {
  try {
    const request = await fetch(`${_API_Data_js__WEBPACK_IMPORTED_MODULE_0__.APP_URL}/likes`);
    const data = await request.json();
    return data;
  } catch {
    return null;
  }
};

const displayLikes = async () => {
  const likes = await getLikes();
  if (likes !== null) {
    likes.forEach((like) => {
      const card = document.getElementById(like.item_id);
      const likeCount = card.querySelector('.like-count');
      likeCount.textContent = `${like.likes} likes`;
    });
  }
};

const updateLike = async (id) => {
  const likes = await getLikes();
  const newLike = likes.find((obj) => obj.item_id === id);
  const card = document.getElementById(id);
  const likeCount = card.querySelector('.like-count');
  likeCount.textContent = `${newLike.likes} likes`;
};

const updateLikeColor = (id) => {
  const card = document.getElementById(id);
  const likeButton = card.querySelector('.likeButton');
  likeButton.style.color = 'red';
};



/***/ }),

/***/ "./src/Modules/getMeals.js":
/*!*********************************!*\
  !*** ./src/Modules/getMeals.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _API_Data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./API-Data.js */ "./src/Modules/API-Data.js");
/* eslint-disable linebreak-style */


const getMealList = async () => {
  const request = await fetch(_API_Data_js__WEBPACK_IMPORTED_MODULE_0__.MEAL_DB_URL);
  const { meals } = await request.json();
  return meals;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMealList);

/***/ }),

/***/ "./src/Modules/mealCounter.js":
/*!************************************!*\
  !*** ./src/Modules/mealCounter.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const mealCounter = (arr) => {
  const navDishes = document.querySelector('#nav-dishes');
  if (Array.isArray(arr)) {
    navDishes.textContent = `Dishes (${arr.length})`;
  } else {
    navDishes.textContent = 'Dishes (0)';
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mealCounter);

/***/ }),

/***/ "./src/Modules/popup.js":
/*!******************************!*\
  !*** ./src/Modules/popup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createPopUp: () => (/* binding */ createPopUp),
/* harmony export */   displayPopup: () => (/* binding */ displayPopup),
/* harmony export */   getItemDetails: () => (/* binding */ getItemDetails)
/* harmony export */ });
/* harmony import */ var _comments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comments.js */ "./src/Modules/comments.js");
/* harmony import */ var _commentsCounter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentsCounter.js */ "./src/Modules/commentsCounter.js");



const POPUP_TEMPLATE = `
<div id="popup-header">
    <div id="popup-thumbnail">
      <img src="" id="popup-thumb">
      <i class="fa-solid fa-xmark" id="popup-close"></i>
    </div>
    <p id="popup-name"></p>
    </div>
    <div id="popup-desc">
      <div id="area">
      <p></p>
      </div>
      <div id="category">
        <p></p>
      </div>
      <div id="ingredients">
        <p></p>
      </div>
      <div id="recipe">
        <p>Recipe Toturial:</p>
        <a href="">Youtube</a>
      </div>
    </div>
    <div id="popup-responses">
      <div class="header">
        <h2></h2>
      </div>
    </div>
    <div id="popup-add-response">
      <div class="header">
        <h2></h2>
      </div>
    </div>
  `;
const createPopUp = () => {
  const popUp = document.createElement('div');
  popUp.id = 'popup';
  popUp.innerHTML = POPUP_TEMPLATE;
  return popUp;
};

const getItemDetails = async (id) => {
  const request = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  const response = await request.json();
  const data = response.meals[0];
  return data;
};

const populateCommentsSection = async (id) => {
  const comments = await (0,_comments_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(id);
  if (Array.isArray(comments)) {
    const returnElements = [];
    // Disable the camelcase check because creation_date is not a variable name made by me,
    // Its a property name for the object data
    comments.forEach((data) => {
      /* eslint-disable-next-line camelcase */
      const { comment, creation_date, username } = data;
      const p = document.createElement('p');
      /* eslint-disable-next-line camelcase */
      p.textContent = `${creation_date} ${username}: ${comment}`;
      returnElements.push(p);
    });
    return returnElements;
  }

  return undefined;
};

const updateCommentSection = async (id) => {
  const comments = await (0,_comments_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(id);
  const commentsSection = document.querySelector('#popup-responses');
  const header = commentsSection.querySelector('.header h2');
  const newComment = document.createElement('p');
  // Disable the camelcase check because creation_date is not a variable name made by me,
  // Its a property name for the object data
  /* eslint-disable-next-line camelcase */
  const { comment, creation_date, username } = comments[comments.length - 1];
  /* eslint-disable-next-line camelcase */
  newComment.textContent = `${creation_date} ${username}: ${comment}`;
  commentsSection.appendChild(newComment);
  header.textContent = `Comments (${comments.length})`;
};

const handleCommentPost = async (form) => {
  const inputName = form.querySelector('input').value;
  const comment = form.querySelector('textarea').value;

  if (inputName !== '' && comment !== '') {
    await (0,_comments_js__WEBPACK_IMPORTED_MODULE_0__.postComment)(form.id, inputName, comment);
    await updateCommentSection(form.id);
  } else {
    const submit = form.querySelector('.form-submit');
    const prompt = document.createElement('span');
    prompt.textContent = '* Please input both name and comment to submit';
    prompt.style.color = 'red';
    form.insertBefore(prompt, submit);
  }
};

const createCommentForm = (id) => {
  const form = document.createElement('form');
  const inputName = document.createElement('input');
  const comment = document.createElement('textarea');
  const submit = document.createElement('button');

  inputName.classList.add('form-input');
  comment.classList.add('form-textArea');
  submit.classList.add('form-submit');
  form.classList.add('popup-form');
  form.id = id;

  inputName.placeholder = 'Your name';
  comment.placeholder = 'Your insights';
  submit.textContent = 'Comment';

  submit.type = 'button';

  form.appendChild(inputName);
  form.appendChild(comment);
  form.appendChild(submit);

  submit.addEventListener('click', async () => handleCommentPost(form));

  return form;
};

const populatePopup = async (id, popUp) => {
  const itemDetails = await getItemDetails(id);
  const thumbnail = popUp.querySelector('#popup-thumb');
  const mealName = popUp.querySelector('#popup-name');
  const mealArea = popUp.querySelector('#area p');
  const mealCategory = popUp.querySelector('#category p');
  const mealIngredients = popUp.querySelector('#ingredients p');
  const mealRecipe = popUp.querySelector('#recipe a');
  const {
    strIngredient1, strIngredient2,
    strIngredient3, strMealThumb, strMeal,
    strArea, strCategory, strYoutube,
  } = itemDetails;
  thumbnail.src = strMealThumb;
  mealName.textContent = strMeal;
  mealArea.textContent = `Origin: ${strArea}`;
  mealCategory.textContent = `Category: ${strCategory}`;
  mealIngredients.textContent = `Ingredients: ${strIngredient1}, ${strIngredient2}, ${strIngredient3}`;
  mealRecipe.href = strYoutube;
  mealRecipe.target = '_blank';

  const comments = await populateCommentsSection(id);
  const commentArea = popUp.querySelector('#popup-responses');
  const header1 = commentArea.querySelector('.header h2');

  if (comments) {
    comments.forEach((comment) => commentArea.appendChild(comment));
  }

  (0,_commentsCounter_js__WEBPACK_IMPORTED_MODULE_1__["default"])(comments, header1);
  const addComments = popUp.querySelector('#popup-add-response');
  const header2 = addComments.querySelector('.header h2');
  const form = createCommentForm(id);
  addComments.appendChild(form);
  header2.textContent = 'Add a comment';
};

const closePopup = () => {
  const popUp = document.querySelector('#popup');
  document.body.removeChild(popUp);
};

const displayPopup = async (id) => {
  const popUp = createPopUp();
  await populatePopup(id, popUp, 'Comments');
  const closePopUp = popUp.querySelector('#popup-close');
  closePopUp.addEventListener('click', closePopup);
  document.body.appendChild(popUp);
};



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _Modules_Images_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modules/Images.js */ "./src/Modules/Images.js");
/* harmony import */ var _Modules_displayMeals_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modules/displayMeals.js */ "./src/Modules/displayMeals.js");




(0,_Modules_Images_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_Modules_displayMeals_js__WEBPACK_IMPORTED_MODULE_2__["default"])();

/***/ }),

/***/ "./src/assets/brand-logo.png":
/*!***********************************!*\
  !*** ./src/assets/brand-logo.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e1a3d136c3dcec637691.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxvQ0FBb0MsUUFBUTtBQUM1QywwQ0FBMEMsWUFBWTtBQUN0RCxnREFBZ0QsZUFBZSxJQUFJLGVBQWUsSUFBSSxlQUFlO0FBQ3JHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLCtEQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xMcUI7QUFDb0I7QUFDVztBQUNwRDtBQUNBLDhEQUFNO0FBQ04sb0VBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL01vZHVsZXMvQVBJLURhdGEuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL01vZHVsZXMvSW1hZ2VzLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9Nb2R1bGVzL2NvbW1lbnRzLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9Nb2R1bGVzL2NvbW1lbnRzQ291bnRlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvTW9kdWxlcy9kaXNwbGF5TWVhbHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL01vZHVsZXMvZ2V0TGlrZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL01vZHVsZXMvZ2V0TWVhbHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL01vZHVsZXMvbWVhbENvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL01vZHVsZXMvcG9wdXAuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuYnV0dG9uLFxyXG5pIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbiNOYXZiYXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuI2JyYW5kIHtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4jbG9nbyB7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbn1cclxuXHJcbiNuYXYtbGlzdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBnYXA6IDIwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbn1cclxuXHJcbi5uYXYgYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogIzMzMztcclxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7IC8qIFNtb290aCBjb2xvciB0cmFuc2l0aW9uICovXHJcbn1cclxuXHJcbi5uYXYgYTpob3ZlciB7XHJcbiAgY29sb3I6ICM1NTU7XHJcbn1cclxuXHJcbi8qIEZvb3RlciAqL1xyXG5mb290ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG59XHJcblxyXG5mb290ZXIgcCB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4jbWVhbHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIHBhZGRpbmc6IDUlO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLm1lYWwtY2FyZCB7XHJcbiAgd2lkdGg6IDMwJTtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTsgLyogU21vb3RoIHRyYW5zZm9ybSB0cmFuc2l0aW9uICovXHJcbn1cclxuXHJcbi5tZWFsLWNhcmQ6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcclxufVxyXG5cclxuLm1lYWwtdGh1bWJuYWlsLFxyXG4ubWVhbC10aHVtYm5haWwgaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDIwMHB4OyAvKiBGaXhlZCBoZWlnaHQgZm9yIGNvbnNpc3RlbmN5ICovXHJcbiAgb2JqZWN0LWZpdDogY292ZXI7IC8qIE1haW50YWluIGFzcGVjdCByYXRpbyAqL1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHggMTJweCAwIDA7XHJcbn1cclxuXHJcbi5tZWFsLWJvZHkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTBweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4ubGlrZUJ1dHRvbiB7XHJcbiAgY29sb3I6ICMzNDk4ZGI7XHJcbn1cclxuXHJcbi5tZWFsLWRlc2NyaXB0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDEwcHg7XHJcbn1cclxuXHJcbi5tZWFsLW5hbWUge1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4ubGlrZS1jb3VudCB7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuXHJcbi8qIFBvcHVwICovXHJcbiNwb3B1cCB7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjhlMTtcclxuICB0b3A6IDEwJTtcclxuICBsZWZ0OiAxMCU7XHJcbiAgcmlnaHQ6IDEwJTtcclxuICBib3R0b206IDEwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbn1cclxuXHJcbiNwb3B1cC1oZWFkZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbiNwb3B1cC10aHVtYm5haWwge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4jcG9wdXAtY2xvc2Uge1xyXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogIzc3NztcclxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbiNwb3B1cC1jbG9zZTpob3ZlciB7XHJcbiAgY29sb3I6ICM1NTU7XHJcbn1cclxuXHJcbiNwb3B1cC10aHVtYiB7XHJcbiAgd2lkdGg6IDQwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuI3BvcHVwLWRlc2Mge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMDBweCwgMWZyKSk7XHJcbiAgZ2FwOiAyMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDAgMTAlO1xyXG59XHJcblxyXG4jcG9wdXAtZGVzYyBkaXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDIlO1xyXG59XHJcblxyXG4jcG9wdXAtcmVzcG9uc2VzIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAwIDEwJTtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuI3BvcHVwLWFkZC1yZXNwb25zZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMCAxMCU7XHJcbn1cclxuXHJcbi5wb3B1cC1mb3JtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAxMnB4O1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi5mb3JtLXN1Ym1pdCB7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ5OGRiO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xyXG59XHJcblxyXG4uZm9ybS1zdWJtaXQ6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNTc1YjI7XHJcbn1cclxuXHJcbi5tZWFsLWNvbW1lbnQge1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsNERBQTREO0VBQzVELFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7O0VBRUUsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixTQUFTO0VBQ1QsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLFdBQVc7RUFDWCwyQkFBMkIsRUFBRSw0QkFBNEI7QUFDM0Q7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUEsV0FBVztBQUNYO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsMEJBQTBCO0VBQzFCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsV0FBVztFQUNYLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHdDQUF3QztFQUN4Qyx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQiwrQkFBK0IsRUFBRSxnQ0FBZ0M7QUFDbkU7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7O0VBRUUsV0FBVztFQUNYLGFBQWEsRUFBRSxpQ0FBaUM7RUFDaEQsaUJBQWlCLEVBQUUsMEJBQTBCO0VBQzdDLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsU0FBUztFQUNULGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUEsVUFBVTtBQUNWO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsUUFBUTtFQUNSLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYix5Q0FBeUM7RUFDekMsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsV0FBVztFQUNYLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFVBQVU7RUFDVixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJEQUEyRDtFQUMzRCxTQUFTO0VBQ1QsV0FBVztFQUNYLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLE9BQU87QUFDVDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsV0FBVztFQUNYLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLFxcclxcbmkge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jTmF2YmFyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jYnJhbmQge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuI2xvZ28ge1xcclxcbiAgd2lkdGg6IDgwcHg7XFxyXFxufVxcclxcblxcclxcbiNuYXYtbGlzdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdiBhIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGNvbG9yOiAjMzMzO1xcclxcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlOyAvKiBTbW9vdGggY29sb3IgdHJhbnNpdGlvbiAqL1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2IGE6aG92ZXIge1xcclxcbiAgY29sb3I6ICM1NTU7XFxyXFxufVxcclxcblxcclxcbi8qIEZvb3RlciAqL1xcclxcbmZvb3RlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RkZDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgcCB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbiNtZWFscyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgcGFkZGluZzogNSU7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5tZWFsLWNhcmQge1xcclxcbiAgd2lkdGg6IDMwJTtcXHJcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlOyAvKiBTbW9vdGggdHJhbnNmb3JtIHRyYW5zaXRpb24gKi9cXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtY2FyZDpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLXRodW1ibmFpbCxcXHJcXG4ubWVhbC10aHVtYm5haWwgaW1nIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAyMDBweDsgLyogRml4ZWQgaGVpZ2h0IGZvciBjb25zaXN0ZW5jeSAqL1xcclxcbiAgb2JqZWN0LWZpdDogY292ZXI7IC8qIE1haW50YWluIGFzcGVjdCByYXRpbyAqL1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTJweCAxMnB4IDAgMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtYm9keSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZUJ1dHRvbiB7XFxyXFxuICBjb2xvcjogIzM0OThkYjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtZGVzY3JpcHRpb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1uYW1lIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2UtY291bnQge1xcclxcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi8qIFBvcHVwICovXFxyXFxuI3BvcHVwIHtcXHJcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOGUxO1xcclxcbiAgdG9wOiAxMCU7XFxyXFxuICBsZWZ0OiAxMCU7XFxyXFxuICByaWdodDogMTAlO1xcclxcbiAgYm90dG9tOiAxMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4jcG9wdXAtaGVhZGVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG4jcG9wdXAtdGh1bWJuYWlsIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuI3BvcHVwLWNsb3NlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgY29sb3I6ICM3Nzc7XFxyXFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbiNwb3B1cC1jbG9zZTpob3ZlciB7XFxyXFxuICBjb2xvcjogIzU1NTtcXHJcXG59XFxyXFxuXFxyXFxuI3BvcHVwLXRodW1iIHtcXHJcXG4gIHdpZHRoOiA0MCU7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuI3BvcHVwLWRlc2Mge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikpO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAwIDEwJTtcXHJcXG59XFxyXFxuXFxyXFxuI3BvcHVwLWRlc2MgZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAyJTtcXHJcXG59XFxyXFxuXFxyXFxuI3BvcHVwLXJlc3BvbnNlcyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDAgMTAlO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jcG9wdXAtYWRkLXJlc3BvbnNlIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMCAxMCU7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxMnB4O1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tc3VibWl0IHtcXHJcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ5OGRiO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tc3VibWl0OmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNTc1YjI7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLWNvbW1lbnQge1xcclxcbiAgcGFkZGluZzogMTJweDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cclxuY29uc3QgTUVBTF9EQl9VUkwgPSAnaHR0cHM6Ly93d3cudGhlbWVhbGRiLmNvbS9hcGkvanNvbi92MS8xL2ZpbHRlci5waHA/YT1DYW5hZGlhbic7XHJcbmNvbnN0IEFQUF9JRCA9ICdLM3N4Vk9pTU9oRU1KVFN1dkIxRCc7XHJcbmNvbnN0IEFQUF9VUkwgPSBgaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvJHtBUFBfSUR9YDtcclxuXHJcbmV4cG9ydCB7IE1FQUxfREJfVVJMLCBBUFBfVVJMIH07IiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXHJcbmltcG9ydCBsb2dvIGZyb20gJy4uL2Fzc2V0cy9icmFuZC1sb2dvLnBuZyc7XHJcblxyXG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgaW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvZ28nKTtcclxuICBpbWcuc3JjID0gbG9nbztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjsiLCJpbXBvcnQgeyBBUFBfVVJMIH0gZnJvbSAnLi9BUEktRGF0YS5qcyc7XHJcblxyXG5jb25zdCBwb3N0Q29tbWVudCA9IGFzeW5jIChpZCwgdXNlcm5hbWUsIGNvbW1lbnQpID0+IHtcclxuICBhd2FpdCBmZXRjaChgJHtBUFBfVVJMfS9jb21tZW50cy9gLCB7XHJcbiAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgIGl0ZW1faWQ6IGlkLFxyXG4gICAgICB1c2VybmFtZSxcclxuICAgICAgY29tbWVudCxcclxuICAgIH0pLFxyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0Q29tbWVudHMgPSBhc3luYyAoaWQpID0+IHtcclxuICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2goYCR7QVBQX1VSTH0vY29tbWVudHM/aXRlbV9pZD0ke2lkfWApO1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XHJcbiAgcmV0dXJuIHJlc3BvbnNlO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgcG9zdENvbW1lbnQsIGdldENvbW1lbnRzIH07IiwiY29uc3QgY29tbWVudHNDb3VudGVyID0gKGFyciwgaGVhZGVyKSA9PiB7XHJcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xyXG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gYENvbW1lbnRzICgke2Fyci5sZW5ndGh9KWA7XHJcbiAgfSBlbHNlIHtcclxuICAgIGhlYWRlci50ZXh0Q29udGVudCA9ICdDb21tZW50cyAoMCknO1xyXG4gIH1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgY29tbWVudHNDb3VudGVyOyIsImltcG9ydCBtZWFsQ291bnRlciBmcm9tICcuL21lYWxDb3VudGVyLmpzJztcclxuaW1wb3J0IGdldE1lYWxMaXN0IGZyb20gJy4vZ2V0TWVhbHMuanMnO1xyXG5pbXBvcnQgeyBkaXNwbGF5UG9wdXAgfSBmcm9tICcuL3BvcHVwLmpzJztcclxuaW1wb3J0IHtcclxuICBkaXNwbGF5TGlrZXMsIHBvc3RMaWtlcywgdXBkYXRlTGlrZSwgdXBkYXRlTGlrZUNvbG9yLFxyXG59IGZyb20gJy4vZ2V0TGlrZXMuanMnO1xyXG5cclxuY29uc3QgTUVBTF9URU1QTEFURSA9IGBcclxuPGRpdiBjbGFzcz1cIm1lYWwtdGh1bWJuYWlsXCI+XHJcbiAgPGltZyBzcmM9XCJcIiBhbHQ9XCJkaXNoXCI+XHJcbjwvZGl2PlxyXG48ZGl2IGNsYXNzPVwibWVhbC1ib2R5XCI+XHJcbiAgPGRpdiBjbGFzcyA9XCJtZWFsLWRlc2NyaXB0aW9uXCI+XHJcbiAgICA8cCBjbGFzcz1cIm1lYWwtbmFtZVwiPjwvcD5cclxuICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtaGVhcnQgbGlrZUJ1dHRvblwiPjwvaT5cclxuICA8L2Rpdj5cclxuICA8c3BhbiBjbGFzcz1cImxpa2UtY291bnRcIj48L3NwYW4+XHJcbiAgPGJ1dHRvbiBjbGFzcz1cIm1lYWwtY29tbWVudFwiPkNvbW1lbnRzPC9idXR0b24+XHJcbjwvZGl2PmA7XHJcblxyXG5jb25zdCBoYW5kbGVMaWtlRXZlbnQgPSBhc3luYyAoaWQpID0+IHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgdXBkYXRlTGlrZUNvbG9yKGlkKTtcclxuICAgIGF3YWl0IHBvc3RMaWtlcyhpZCk7XHJcbiAgICBhd2FpdCB1cGRhdGVMaWtlKGlkKTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGRpc3BsYXlNZWFsID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IG1lYWxzID0gYXdhaXQgZ2V0TWVhbExpc3QoKTtcclxuICBjb25zdCBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVhbHMnKTtcclxuICBtZWFscy5mb3JFYWNoKChtZWFsKSA9PiB7XHJcbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjYXJkLmlubmVySFRNTCA9IE1FQUxfVEVNUExBVEU7XHJcbiAgICBjb25zdCB0aHVtYm5haWwgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5tZWFsLXRodW1ibmFpbCBpbWcnKTtcclxuICAgIGNvbnN0IGRpc2ggPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5tZWFsLW5hbWUnKTtcclxuICAgIGNvbnN0IGxpa2VzID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcubGlrZS1jb3VudCcpO1xyXG4gICAgY29uc3QgbGlrZUJ1dHRvbiA9IGNhcmQucXVlcnlTZWxlY3RvcignLmxpa2VCdXR0b24nKTtcclxuXHJcbiAgICBkaXNoLnRleHRDb250ZW50ID0gbWVhbC5zdHJNZWFsO1xyXG4gICAgdGh1bWJuYWlsLnNyYyA9IG1lYWwuc3RyTWVhbFRodW1iO1xyXG4gICAgbGlrZXMudGV4dENvbnRlbnQgPSAnMCBMaWtlcyc7XHJcblxyXG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdtZWFsLWNhcmQnKTtcclxuICAgIGNhcmQuaWQgPSBtZWFsLmlkTWVhbDtcclxuXHJcbiAgICBsaWtlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBoYW5kbGVMaWtlRXZlbnQoY2FyZC5pZCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZCk7XHJcbiAgICBjb25zdCBjb21tZW50QnV0dG9uID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcubWVhbC1jb21tZW50Jyk7XHJcbiAgICBjb21tZW50QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xyXG4gICAgICBkaXNwbGF5UG9wdXAoY2FyZC5pZCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgYXdhaXQgZGlzcGxheUxpa2VzKCk7XHJcbiAgYXdhaXQgbWVhbENvdW50ZXIobWVhbHMpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheU1lYWw7IiwiaW1wb3J0IHsgQVBQX1VSTCB9IGZyb20gJy4vQVBJLURhdGEuanMnO1xyXG5cclxuY29uc3QgcG9zdExpa2VzID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgYXdhaXQgZmV0Y2goYCR7QVBQX1VSTH0vbGlrZXNgLCB7XHJcbiAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgIGl0ZW1faWQ6IGlkLFxyXG4gICAgfSksXHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRMaWtlcyA9IGFzeW5jICgpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKGAke0FQUF9VUkx9L2xpa2VzYCk7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9IGNhdGNoIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGRpc3BsYXlMaWtlcyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBsaWtlcyA9IGF3YWl0IGdldExpa2VzKCk7XHJcbiAgaWYgKGxpa2VzICE9PSBudWxsKSB7XHJcbiAgICBsaWtlcy5mb3JFYWNoKChsaWtlKSA9PiB7XHJcbiAgICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChsaWtlLml0ZW1faWQpO1xyXG4gICAgICBjb25zdCBsaWtlQ291bnQgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5saWtlLWNvdW50Jyk7XHJcbiAgICAgIGxpa2VDb3VudC50ZXh0Q29udGVudCA9IGAke2xpa2UubGlrZXN9IGxpa2VzYDtcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IHVwZGF0ZUxpa2UgPSBhc3luYyAoaWQpID0+IHtcclxuICBjb25zdCBsaWtlcyA9IGF3YWl0IGdldExpa2VzKCk7XHJcbiAgY29uc3QgbmV3TGlrZSA9IGxpa2VzLmZpbmQoKG9iaikgPT4gb2JqLml0ZW1faWQgPT09IGlkKTtcclxuICBjb25zdCBjYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gIGNvbnN0IGxpa2VDb3VudCA9IGNhcmQucXVlcnlTZWxlY3RvcignLmxpa2UtY291bnQnKTtcclxuICBsaWtlQ291bnQudGV4dENvbnRlbnQgPSBgJHtuZXdMaWtlLmxpa2VzfSBsaWtlc2A7XHJcbn07XHJcblxyXG5jb25zdCB1cGRhdGVMaWtlQ29sb3IgPSAoaWQpID0+IHtcclxuICBjb25zdCBjYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gIGNvbnN0IGxpa2VCdXR0b24gPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5saWtlQnV0dG9uJyk7XHJcbiAgbGlrZUJ1dHRvbi5zdHlsZS5jb2xvciA9ICdyZWQnO1xyXG59O1xyXG5cclxuZXhwb3J0IHtcclxuICBwb3N0TGlrZXMsIGdldExpa2VzLCBkaXNwbGF5TGlrZXMsIHVwZGF0ZUxpa2UsIHVwZGF0ZUxpa2VDb2xvcixcclxufTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cclxuaW1wb3J0IHsgTUVBTF9EQl9VUkwgfSBmcm9tICcuL0FQSS1EYXRhLmpzJztcclxuXHJcbmNvbnN0IGdldE1lYWxMaXN0ID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaChNRUFMX0RCX1VSTCk7XHJcbiAgY29uc3QgeyBtZWFscyB9ID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XHJcbiAgcmV0dXJuIG1lYWxzO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0TWVhbExpc3Q7IiwiY29uc3QgbWVhbENvdW50ZXIgPSAoYXJyKSA9PiB7XHJcbiAgY29uc3QgbmF2RGlzaGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdi1kaXNoZXMnKTtcclxuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XHJcbiAgICBuYXZEaXNoZXMudGV4dENvbnRlbnQgPSBgRGlzaGVzICgke2Fyci5sZW5ndGh9KWA7XHJcbiAgfSBlbHNlIHtcclxuICAgIG5hdkRpc2hlcy50ZXh0Q29udGVudCA9ICdEaXNoZXMgKDApJztcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZWFsQ291bnRlcjsiLCJpbXBvcnQgeyBnZXRDb21tZW50cywgcG9zdENvbW1lbnQgfSBmcm9tICcuL2NvbW1lbnRzLmpzJztcclxuaW1wb3J0IGNvbW1lbnRzQ291bnRlciBmcm9tICcuL2NvbW1lbnRzQ291bnRlci5qcyc7XHJcblxyXG5jb25zdCBQT1BVUF9URU1QTEFURSA9IGBcclxuPGRpdiBpZD1cInBvcHVwLWhlYWRlclwiPlxyXG4gICAgPGRpdiBpZD1cInBvcHVwLXRodW1ibmFpbFwiPlxyXG4gICAgICA8aW1nIHNyYz1cIlwiIGlkPVwicG9wdXAtdGh1bWJcIj5cclxuICAgICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS14bWFya1wiIGlkPVwicG9wdXAtY2xvc2VcIj48L2k+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxwIGlkPVwicG9wdXAtbmFtZVwiPjwvcD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBpZD1cInBvcHVwLWRlc2NcIj5cclxuICAgICAgPGRpdiBpZD1cImFyZWFcIj5cclxuICAgICAgPHA+PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBpZD1cImNhdGVnb3J5XCI+XHJcbiAgICAgICAgPHA+PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBpZD1cImluZ3JlZGllbnRzXCI+XHJcbiAgICAgICAgPHA+PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBpZD1cInJlY2lwZVwiPlxyXG4gICAgICAgIDxwPlJlY2lwZSBUb3R1cmlhbDo8L3A+XHJcbiAgICAgICAgPGEgaHJlZj1cIlwiPllvdXR1YmU8L2E+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGlkPVwicG9wdXAtcmVzcG9uc2VzXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cclxuICAgICAgICA8aDI+PC9oMj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgaWQ9XCJwb3B1cC1hZGQtcmVzcG9uc2VcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImhlYWRlclwiPlxyXG4gICAgICAgIDxoMj48L2gyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIGA7XHJcbmNvbnN0IGNyZWF0ZVBvcFVwID0gKCkgPT4ge1xyXG4gIGNvbnN0IHBvcFVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgcG9wVXAuaWQgPSAncG9wdXAnO1xyXG4gIHBvcFVwLmlubmVySFRNTCA9IFBPUFVQX1RFTVBMQVRFO1xyXG4gIHJldHVybiBwb3BVcDtcclxufTtcclxuXHJcbmNvbnN0IGdldEl0ZW1EZXRhaWxzID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKGBodHRwczovL3d3dy50aGVtZWFsZGIuY29tL2FwaS9qc29uL3YxLzEvbG9va3VwLnBocD9pPSR7aWR9YCk7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcclxuICBjb25zdCBkYXRhID0gcmVzcG9uc2UubWVhbHNbMF07XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn07XHJcblxyXG5jb25zdCBwb3B1bGF0ZUNvbW1lbnRzU2VjdGlvbiA9IGFzeW5jIChpZCkgPT4ge1xyXG4gIGNvbnN0IGNvbW1lbnRzID0gYXdhaXQgZ2V0Q29tbWVudHMoaWQpO1xyXG4gIGlmIChBcnJheS5pc0FycmF5KGNvbW1lbnRzKSkge1xyXG4gICAgY29uc3QgcmV0dXJuRWxlbWVudHMgPSBbXTtcclxuICAgIC8vIERpc2FibGUgdGhlIGNhbWVsY2FzZSBjaGVjayBiZWNhdXNlIGNyZWF0aW9uX2RhdGUgaXMgbm90IGEgdmFyaWFibGUgbmFtZSBtYWRlIGJ5IG1lLFxyXG4gICAgLy8gSXRzIGEgcHJvcGVydHkgbmFtZSBmb3IgdGhlIG9iamVjdCBkYXRhXHJcbiAgICBjb21tZW50cy5mb3JFYWNoKChkYXRhKSA9PiB7XHJcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjYW1lbGNhc2UgKi9cclxuICAgICAgY29uc3QgeyBjb21tZW50LCBjcmVhdGlvbl9kYXRlLCB1c2VybmFtZSB9ID0gZGF0YTtcclxuICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNhbWVsY2FzZSAqL1xyXG4gICAgICBwLnRleHRDb250ZW50ID0gYCR7Y3JlYXRpb25fZGF0ZX0gJHt1c2VybmFtZX06ICR7Y29tbWVudH1gO1xyXG4gICAgICByZXR1cm5FbGVtZW50cy5wdXNoKHApO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcmV0dXJuRWxlbWVudHM7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdW5kZWZpbmVkO1xyXG59O1xyXG5cclxuY29uc3QgdXBkYXRlQ29tbWVudFNlY3Rpb24gPSBhc3luYyAoaWQpID0+IHtcclxuICBjb25zdCBjb21tZW50cyA9IGF3YWl0IGdldENvbW1lbnRzKGlkKTtcclxuICBjb25zdCBjb21tZW50c1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcG9wdXAtcmVzcG9uc2VzJyk7XHJcbiAgY29uc3QgaGVhZGVyID0gY29tbWVudHNTZWN0aW9uLnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXIgaDInKTtcclxuICBjb25zdCBuZXdDb21tZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIC8vIERpc2FibGUgdGhlIGNhbWVsY2FzZSBjaGVjayBiZWNhdXNlIGNyZWF0aW9uX2RhdGUgaXMgbm90IGEgdmFyaWFibGUgbmFtZSBtYWRlIGJ5IG1lLFxyXG4gIC8vIEl0cyBhIHByb3BlcnR5IG5hbWUgZm9yIHRoZSBvYmplY3QgZGF0YVxyXG4gIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjYW1lbGNhc2UgKi9cclxuICBjb25zdCB7IGNvbW1lbnQsIGNyZWF0aW9uX2RhdGUsIHVzZXJuYW1lIH0gPSBjb21tZW50c1tjb21tZW50cy5sZW5ndGggLSAxXTtcclxuICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2FtZWxjYXNlICovXHJcbiAgbmV3Q29tbWVudC50ZXh0Q29udGVudCA9IGAke2NyZWF0aW9uX2RhdGV9ICR7dXNlcm5hbWV9OiAke2NvbW1lbnR9YDtcclxuICBjb21tZW50c1NlY3Rpb24uYXBwZW5kQ2hpbGQobmV3Q29tbWVudCk7XHJcbiAgaGVhZGVyLnRleHRDb250ZW50ID0gYENvbW1lbnRzICgke2NvbW1lbnRzLmxlbmd0aH0pYDtcclxufTtcclxuXHJcbmNvbnN0IGhhbmRsZUNvbW1lbnRQb3N0ID0gYXN5bmMgKGZvcm0pID0+IHtcclxuICBjb25zdCBpbnB1dE5hbWUgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykudmFsdWU7XHJcbiAgY29uc3QgY29tbWVudCA9IGZvcm0ucXVlcnlTZWxlY3RvcigndGV4dGFyZWEnKS52YWx1ZTtcclxuXHJcbiAgaWYgKGlucHV0TmFtZSAhPT0gJycgJiYgY29tbWVudCAhPT0gJycpIHtcclxuICAgIGF3YWl0IHBvc3RDb21tZW50KGZvcm0uaWQsIGlucHV0TmFtZSwgY29tbWVudCk7XHJcbiAgICBhd2FpdCB1cGRhdGVDb21tZW50U2VjdGlvbihmb3JtLmlkKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3Qgc3VibWl0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuZm9ybS1zdWJtaXQnKTtcclxuICAgIGNvbnN0IHByb21wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIHByb21wdC50ZXh0Q29udGVudCA9ICcqIFBsZWFzZSBpbnB1dCBib3RoIG5hbWUgYW5kIGNvbW1lbnQgdG8gc3VibWl0JztcclxuICAgIHByb21wdC5zdHlsZS5jb2xvciA9ICdyZWQnO1xyXG4gICAgZm9ybS5pbnNlcnRCZWZvcmUocHJvbXB0LCBzdWJtaXQpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZUNvbW1lbnRGb3JtID0gKGlkKSA9PiB7XHJcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICBjb25zdCBpbnB1dE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIGNvbnN0IGNvbW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xyXG4gIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cclxuICBpbnB1dE5hbWUuY2xhc3NMaXN0LmFkZCgnZm9ybS1pbnB1dCcpO1xyXG4gIGNvbW1lbnQuY2xhc3NMaXN0LmFkZCgnZm9ybS10ZXh0QXJlYScpO1xyXG4gIHN1Ym1pdC5jbGFzc0xpc3QuYWRkKCdmb3JtLXN1Ym1pdCcpO1xyXG4gIGZvcm0uY2xhc3NMaXN0LmFkZCgncG9wdXAtZm9ybScpO1xyXG4gIGZvcm0uaWQgPSBpZDtcclxuXHJcbiAgaW5wdXROYW1lLnBsYWNlaG9sZGVyID0gJ1lvdXIgbmFtZSc7XHJcbiAgY29tbWVudC5wbGFjZWhvbGRlciA9ICdZb3VyIGluc2lnaHRzJztcclxuICBzdWJtaXQudGV4dENvbnRlbnQgPSAnQ29tbWVudCc7XHJcblxyXG4gIHN1Ym1pdC50eXBlID0gJ2J1dHRvbic7XHJcblxyXG4gIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXROYW1lKTtcclxuICBmb3JtLmFwcGVuZENoaWxkKGNvbW1lbnQpO1xyXG4gIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0KTtcclxuXHJcbiAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4gaGFuZGxlQ29tbWVudFBvc3QoZm9ybSkpO1xyXG5cclxuICByZXR1cm4gZm9ybTtcclxufTtcclxuXHJcbmNvbnN0IHBvcHVsYXRlUG9wdXAgPSBhc3luYyAoaWQsIHBvcFVwKSA9PiB7XHJcbiAgY29uc3QgaXRlbURldGFpbHMgPSBhd2FpdCBnZXRJdGVtRGV0YWlscyhpZCk7XHJcbiAgY29uc3QgdGh1bWJuYWlsID0gcG9wVXAucXVlcnlTZWxlY3RvcignI3BvcHVwLXRodW1iJyk7XHJcbiAgY29uc3QgbWVhbE5hbWUgPSBwb3BVcC5xdWVyeVNlbGVjdG9yKCcjcG9wdXAtbmFtZScpO1xyXG4gIGNvbnN0IG1lYWxBcmVhID0gcG9wVXAucXVlcnlTZWxlY3RvcignI2FyZWEgcCcpO1xyXG4gIGNvbnN0IG1lYWxDYXRlZ29yeSA9IHBvcFVwLnF1ZXJ5U2VsZWN0b3IoJyNjYXRlZ29yeSBwJyk7XHJcbiAgY29uc3QgbWVhbEluZ3JlZGllbnRzID0gcG9wVXAucXVlcnlTZWxlY3RvcignI2luZ3JlZGllbnRzIHAnKTtcclxuICBjb25zdCBtZWFsUmVjaXBlID0gcG9wVXAucXVlcnlTZWxlY3RvcignI3JlY2lwZSBhJyk7XHJcbiAgY29uc3Qge1xyXG4gICAgc3RySW5ncmVkaWVudDEsIHN0ckluZ3JlZGllbnQyLFxyXG4gICAgc3RySW5ncmVkaWVudDMsIHN0ck1lYWxUaHVtYiwgc3RyTWVhbCxcclxuICAgIHN0ckFyZWEsIHN0ckNhdGVnb3J5LCBzdHJZb3V0dWJlLFxyXG4gIH0gPSBpdGVtRGV0YWlscztcclxuICB0aHVtYm5haWwuc3JjID0gc3RyTWVhbFRodW1iO1xyXG4gIG1lYWxOYW1lLnRleHRDb250ZW50ID0gc3RyTWVhbDtcclxuICBtZWFsQXJlYS50ZXh0Q29udGVudCA9IGBPcmlnaW46ICR7c3RyQXJlYX1gO1xyXG4gIG1lYWxDYXRlZ29yeS50ZXh0Q29udGVudCA9IGBDYXRlZ29yeTogJHtzdHJDYXRlZ29yeX1gO1xyXG4gIG1lYWxJbmdyZWRpZW50cy50ZXh0Q29udGVudCA9IGBJbmdyZWRpZW50czogJHtzdHJJbmdyZWRpZW50MX0sICR7c3RySW5ncmVkaWVudDJ9LCAke3N0ckluZ3JlZGllbnQzfWA7XHJcbiAgbWVhbFJlY2lwZS5ocmVmID0gc3RyWW91dHViZTtcclxuICBtZWFsUmVjaXBlLnRhcmdldCA9ICdfYmxhbmsnO1xyXG5cclxuICBjb25zdCBjb21tZW50cyA9IGF3YWl0IHBvcHVsYXRlQ29tbWVudHNTZWN0aW9uKGlkKTtcclxuICBjb25zdCBjb21tZW50QXJlYSA9IHBvcFVwLnF1ZXJ5U2VsZWN0b3IoJyNwb3B1cC1yZXNwb25zZXMnKTtcclxuICBjb25zdCBoZWFkZXIxID0gY29tbWVudEFyZWEucXVlcnlTZWxlY3RvcignLmhlYWRlciBoMicpO1xyXG5cclxuICBpZiAoY29tbWVudHMpIHtcclxuICAgIGNvbW1lbnRzLmZvckVhY2goKGNvbW1lbnQpID0+IGNvbW1lbnRBcmVhLmFwcGVuZENoaWxkKGNvbW1lbnQpKTtcclxuICB9XHJcblxyXG4gIGNvbW1lbnRzQ291bnRlcihjb21tZW50cywgaGVhZGVyMSk7XHJcbiAgY29uc3QgYWRkQ29tbWVudHMgPSBwb3BVcC5xdWVyeVNlbGVjdG9yKCcjcG9wdXAtYWRkLXJlc3BvbnNlJyk7XHJcbiAgY29uc3QgaGVhZGVyMiA9IGFkZENvbW1lbnRzLnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXIgaDInKTtcclxuICBjb25zdCBmb3JtID0gY3JlYXRlQ29tbWVudEZvcm0oaWQpO1xyXG4gIGFkZENvbW1lbnRzLmFwcGVuZENoaWxkKGZvcm0pO1xyXG4gIGhlYWRlcjIudGV4dENvbnRlbnQgPSAnQWRkIGEgY29tbWVudCc7XHJcbn07XHJcblxyXG5jb25zdCBjbG9zZVBvcHVwID0gKCkgPT4ge1xyXG4gIGNvbnN0IHBvcFVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BvcHVwJyk7XHJcbiAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChwb3BVcCk7XHJcbn07XHJcblxyXG5jb25zdCBkaXNwbGF5UG9wdXAgPSBhc3luYyAoaWQpID0+IHtcclxuICBjb25zdCBwb3BVcCA9IGNyZWF0ZVBvcFVwKCk7XHJcbiAgYXdhaXQgcG9wdWxhdGVQb3B1cChpZCwgcG9wVXAsICdDb21tZW50cycpO1xyXG4gIGNvbnN0IGNsb3NlUG9wVXAgPSBwb3BVcC5xdWVyeVNlbGVjdG9yKCcjcG9wdXAtY2xvc2UnKTtcclxuICBjbG9zZVBvcFVwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VQb3B1cCk7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwb3BVcCk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBjcmVhdGVQb3BVcCwgZ2V0SXRlbURldGFpbHMsIGRpc3BsYXlQb3B1cCB9OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4vTW9kdWxlcy9JbWFnZXMuanMnO1xyXG5pbXBvcnQgZGlzcGxheU1lYWwgZnJvbSAnLi9Nb2R1bGVzL2Rpc3BsYXlNZWFscy5qcyc7XHJcblxyXG5OYXZiYXIoKTtcclxuZGlzcGxheU1lYWwoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=