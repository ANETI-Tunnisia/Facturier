/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/classes/Datas.ts":
/*!******************************!*\
  !*** ./src/classes/Datas.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Datas: () => (/* binding */ Datas)\n/* harmony export */ });\nclass Datas {\n    constructor(documentType, firstName, lastName, address, country, town, zip, product, price, quantity, tva, date) {\n        this.documentType = documentType;\n        this.firstName = firstName;\n        this.lastName = lastName;\n        this.address = address;\n        this.country = country;\n        this.town = town;\n        this.zip = zip;\n        this.product = product;\n        this.price = price;\n        this.quantity = quantity;\n        this.tva = tva;\n        this.date = date;\n    }\n    subTotal(price, quantity, tva) {\n        const tvapercent = tva / 100;\n        const totaltva = price * tvapercent;\n        return (price + totaltva) * quantity;\n    }\n    HasHtmlFormat() {\n        const totalprice = this.subTotal(this.price, this.quantity, this.tva);\n        return `\r\n        <div class=\"row p-5\">\r\n            <div class=\"col-md-6\">\r\n                <h2 class=\"text-left\">LOGO</h2>\r\n            </div>\r\n            <div class=\"col-md-6 text-right\">\r\n                <p class=\"font-weight-bold mb-1\">${this.documentType === \"invoice\" ? \"Facture\" : \"Devis\"}<span class=\"font-weight-normal\">N° ${Math.floor(Math.random() * 101)}</span></p>\r\n                <p class=\"font-weight-bold mb-1\">Date <span class=\"font-weight-normal\">${this.date.toLocaleDateString()}</span></p>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row pb-5 p-5\">\r\n            <div class=\"col-sm-6 text-left\">\r\n                <p class=\"font-weight-bold\">Entreprise de Toto</p>\r\n                <p class=\"mb-1\">22 boulevard Moe Szyslak</p>\r\n                <p>75008 - Paris</p>\r\n                <p class=\"mb-1\">Tél: 00.00.00.00.00</p>\r\n            </div>\r\n        \r\n            <div class=\"col-sm-6 text-right\">\r\n                <p class=\"font-weight-bold\">Informations du client</p>\r\n                <p class=\"mb-1\">Mr/Mme ${this.firstName} ${this.lastName}</p>\r\n                <p class=\"mb-1\">${this.address}</p>\r\n                <p>${this.zip}</p>\r\n                <p>${this.town}</p>\r\n                <p>${this.country}</p>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row p-5\">\r\n            <div class=\"col-md-12\">\r\n                <table class=\"table\">\r\n                <thead>\r\n                    <tr>\r\n                    <th class=\"border-0 text-uppercase small font-weight-bold\">Produit/Service</th>\r\n                    <th class=\"border-0 text-uppercase small font-weight-bold\">Prix unitaire HT</th>\r\n                    <th class=\"border-0 text-uppercase small font-weight-bold\">Quantité</th>\r\n                    <th class=\"border-0 text-uppercase small font-weight-bold\">Total HT</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr>\r\n                    <td>${this.product}</td>\r\n                    <td>${this.price} € HT</td>\r\n                    <td>${this.quantity}</td>\r\n                    <td>${this.price * this.quantity} € HT</td>\r\n                    </tr>\r\n                </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"d-flex flex-row-reverse bg-light p-4\">\r\n            <div class=\"py-3 px-5\">\r\n                <div class=\"mb-2\">TOTAL TTC</div>\r\n                <div class=\"h2 font-weight-light\">${totalprice} €</div>\r\n            </div>\r\n        </div>\r\n`;\n    }\n}\n\n\n//# sourceURL=webpack://facturier/./src/classes/Datas.ts?");

/***/ }),

/***/ "./src/classes/Display.ts":
/*!********************************!*\
  !*** ./src/classes/Display.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Display: () => (/* binding */ Display)\n/* harmony export */ });\n/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Storage */ \"./src/classes/Storage.ts\");\n\nclass Display {\n    constructor(container, hiddenDiv, buttonPrint) {\n        this.container = container;\n        this.hiddenDiv = hiddenDiv;\n        this.buttonPrint = buttonPrint;\n        this.formContainer = document.getElementById('form-container');\n    }\n    render(docObj, docType) {\n        const htmlstring = docObj.HasHtmlFormat();\n        this.container.innerHTML = htmlstring;\n        new _Storage__WEBPACK_IMPORTED_MODULE_0__.Storage(docType, htmlstring);\n        if (docType === 'invoice') {\n            this.buttonPrint.innerText = 'Print Invoice';\n        }\n        else {\n            this.buttonPrint.innerText = 'Print Devis';\n        }\n        this.hiddenDiv.classList.remove('invisible');\n        this.formContainer.innerHTML = \"\";\n    }\n}\n\n\n//# sourceURL=webpack://facturier/./src/classes/Display.ts?");

/***/ }),

/***/ "./src/classes/FormInputs.ts":
/*!***********************************!*\
  !*** ./src/classes/FormInputs.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FormInput: () => (/* binding */ FormInput)\n/* harmony export */ });\n/* harmony import */ var _Datas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Datas */ \"./src/classes/Datas.ts\");\n/* harmony import */ var _Display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Display */ \"./src/classes/Display.ts\");\n/* harmony import */ var _Print__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Print */ \"./src/classes/Print.ts\");\n\n\n\nclass FormInput {\n    constructor() {\n        this.form = document.getElementById(\"form\");\n        this.type = document.getElementById(\"type\");\n        this.firstName = document.getElementById(\"firstName\");\n        this.lastName = document.getElementById(\"lastName\");\n        this.address = document.getElementById(\"address\");\n        this.country = document.getElementById(\"country\");\n        this.town = document.getElementById(\"town\");\n        this.zip = document.getElementById(\"zip\");\n        this.product = document.getElementById(\"product\");\n        this.price = document.getElementById(\"price\");\n        this.quantity = document.getElementById(\"quantity\");\n        this.tva = document.getElementById(\"tva\");\n        this.docContainer = document.getElementById('document-container');\n        this.hiddenDiv = document.getElementById('hiddenDiv');\n        this.StoredEl = document.getElementById('stored-data');\n        this.buttonPrint = document.getElementById('print');\n        this.btnReload = document.getElementById('reload');\n        this.btnStoredEstimates = document.getElementById('stored-estimates');\n        this.btnStoredInvoices = document.getElementById('stored-invoices');\n        this.submitFormListener();\n        this.printListener(this.buttonPrint, this.docContainer);\n        this.reloadListener(this.btnReload);\n        this.getStoredDocsListener();\n    }\n    submitFormListener() {\n        this.form.addEventListener(\"submit\", this.handleFormSubmit.bind(this));\n    }\n    printListener(btn, docContainer) {\n        btn.addEventListener(\"click\", (e) => {\n            let availableDoc;\n            availableDoc = new _Print__WEBPACK_IMPORTED_MODULE_2__.Print(docContainer);\n            availableDoc.print();\n        });\n    }\n    reloadListener(btn) {\n        btn.addEventListener(\"click\", () => {\n            document.location.reload();\n            window.scroll(0, 0);\n        });\n    }\n    getStoredDocsListener() {\n        this.btnStoredInvoices.addEventListener(\"click\", this.getItems.bind(this, 'invoice'));\n        this.btnStoredEstimates.addEventListener(\"click\", this.getItems.bind(this, 'estimate'));\n    }\n    getItems(docType) {\n        if (this.StoredEl.hasChildNodes()) {\n            this.StoredEl.innerHTML = \"\";\n        }\n        let array;\n        array = localStorage.getItem(docType);\n        if (array !== null && array.length > 2) {\n            let arrayData;\n            arrayData = JSON.parse(array);\n            arrayData.map((doc) => {\n                let card = document.createElement(\"div\");\n                let cardBody = document.createElement(\"div\");\n                let cardClasses = ['card', 'mt-5'];\n                let cardBodyClasses = 'card-body';\n                card.classList.add(...cardClasses);\n                cardBody.classList.add(cardBodyClasses);\n                cardBody.innerHTML = doc;\n                card.append(cardBody);\n                this.StoredEl.append(card);\n            });\n        }\n        else {\n            this.StoredEl.innerHTML = \"<div class='p-5'>Aucne Data disponible</div>\";\n        }\n    }\n    handleFormSubmit(e) {\n        e.preventDefault();\n        const inputs = this.inputDatas();\n        if (Array.isArray(inputs)) {\n            const [type, firstName, lastName, adress, country, town, zip, product, price, quantity, tva] = inputs;\n            //console.log(type,firstName,lastName,adress,country,town,zip,product,price,quantity,tva);\n            let docData;\n            let date = new Date();\n            docData = new _Datas__WEBPACK_IMPORTED_MODULE_0__.Datas(type, firstName, lastName, adress, country, town, zip, product, price, quantity, tva, date);\n            console.log(docData.HasHtmlFormat());\n            let template;\n            template = new _Display__WEBPACK_IMPORTED_MODULE_1__.Display(this.docContainer, this.hiddenDiv, this.buttonPrint);\n            template.render(docData, type);\n        }\n    }\n    inputDatas() {\n        const type = this.type.value;\n        const firstName = this.firstName.value;\n        const lastName = this.lastName.value;\n        const adress = this.address.value;\n        const country = this.country.value;\n        const town = this.town.value;\n        const zip = this.zip.valueAsNumber;\n        const product = this.product.value;\n        const price = this.price.valueAsNumber;\n        const quantity = this.quantity.valueAsNumber;\n        const tva = this.tva.valueAsNumber;\n        if (zip > 0 && price > 0 && quantity > 0 && tva > 0) {\n            return [type, firstName, lastName, adress, country, town, zip, product, price, quantity, tva];\n        }\n        else {\n            alert(\"les valeur numérique doivent être > 0\");\n            return;\n        }\n    }\n}\n\n\n//# sourceURL=webpack://facturier/./src/classes/FormInputs.ts?");

/***/ }),

/***/ "./src/classes/Print.ts":
/*!******************************!*\
  !*** ./src/classes/Print.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Print: () => (/* binding */ Print)\n/* harmony export */ });\nclass Print {\n    constructor(el) {\n        this.el = el;\n    }\n    print() {\n        console.log(this.el.innerHTML);\n        document.body.innerHTML = this.el.innerHTML;\n        window.print();\n        document.location.reload();\n    }\n}\n\n\n//# sourceURL=webpack://facturier/./src/classes/Print.ts?");

/***/ }),

/***/ "./src/classes/Storage.ts":
/*!********************************!*\
  !*** ./src/classes/Storage.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Storage: () => (/* binding */ Storage)\n/* harmony export */ });\nclass Storage {\n    constructor(typeVal, htmlString) {\n        this.oldData = [];\n        this.setItem(typeVal, htmlString);\n    }\n    static checkStorage() {\n        if (localStorage.getItem(\"invoice\") === null) {\n            localStorage.setItem(\"invoice\", '[]');\n        }\n        if (localStorage.getItem(\"estimate\") === null) {\n            localStorage.setItem(\"estimate\", '[]');\n        }\n    }\n    setItem(typeVal, htmlString) {\n        let array;\n        array = localStorage.getItem(typeVal);\n        if (array !== null) {\n            this.oldData = JSON.parse(array);\n            this.oldData.push(htmlString);\n            localStorage.setItem(typeVal, JSON.stringify(this.oldData));\n        }\n        else {\n            document.location.reload();\n        }\n    }\n}\n\n\n//# sourceURL=webpack://facturier/./src/classes/Storage.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes_FormInputs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/FormInputs */ \"./src/classes/FormInputs.ts\");\n/* harmony import */ var _classes_Storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/Storage */ \"./src/classes/Storage.ts\");\n\n\nnew _classes_FormInputs__WEBPACK_IMPORTED_MODULE_0__.FormInput();\n_classes_Storage__WEBPACK_IMPORTED_MODULE_1__.Storage.checkStorage();\n/*this.form.addEventListener(\"submit\", (e: Event) => {\n  e.preventDefault();\n  console.log(type.value);\n  \n});*/\n\n\n//# sourceURL=webpack://facturier/./src/index.ts?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;