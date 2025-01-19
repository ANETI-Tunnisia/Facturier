/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/classes/Datas.ts":
/*!******************************!*\
  !*** ./src/classes/Datas.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Datas: () => (/* binding */ Datas)
/* harmony export */ });
class Datas {
    constructor(documentType, firstName, lastName, address, country, town, zip, product, price, quantity, tva, date) {
        this.documentType = documentType;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.country = country;
        this.town = town;
        this.zip = zip;
        this.product = product;
        this.price = price;
        this.quantity = quantity;
        this.tva = tva;
        this.date = date;
    }
    subTotal(price, quantity, tva) {
        const tvapercent = tva / 100;
        const totaltva = price * tvapercent;
        return (price + totaltva) * quantity;
    }
    HasHtmlFormat() {
        const totalprice = this.subTotal(this.price, this.quantity, this.tva);
        return `
        <div class="row p-5">
            <div class="col-md-6">
                <h2 class="text-left">LOGO</h2>
            </div>
            <div class="col-md-6 text-right">
                <p class="font-weight-bold mb-1">${this.documentType === "invoice" ? "Facture" : "Devis"}<span class="font-weight-normal">N° ${Math.floor(Math.random() * 101)}</span></p>
                <p class="font-weight-bold mb-1">Date <span class="font-weight-normal">${this.date.toLocaleDateString()}</span></p>
            </div>
        </div>

        <div class="row pb-5 p-5">
            <div class="col-sm-6 text-left">
                <p class="font-weight-bold">Entreprise de Toto</p>
                <p class="mb-1">22 boulevard Moe Szyslak</p>
                <p>75008 - Paris</p>
                <p class="mb-1">Tél: 00.00.00.00.00</p>
            </div>
        
            <div class="col-sm-6 text-right">
                <p class="font-weight-bold">Informations du client</p>
                <p class="mb-1">Mr/Mme ${this.firstName} ${this.lastName}</p>
                <p class="mb-1">${this.address}</p>
                <p>${this.zip}</p>
                <p>${this.town}</p>
                <p>${this.country}</p>
            </div>
        </div>

        <div class="row p-5">
            <div class="col-md-12">
                <table class="table">
                <thead>
                    <tr>
                    <th class="border-0 text-uppercase small font-weight-bold">Produit/Service</th>
                    <th class="border-0 text-uppercase small font-weight-bold">Prix unitaire HT</th>
                    <th class="border-0 text-uppercase small font-weight-bold">Quantité</th>
                    <th class="border-0 text-uppercase small font-weight-bold">Total HT</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>${this.product}</td>
                    <td>${this.price} € HT</td>
                    <td>${this.quantity}</td>
                    <td>${this.price * this.quantity} € HT</td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>

        <div class="d-flex flex-row-reverse bg-light p-4">
            <div class="py-3 px-5">
                <div class="mb-2">TOTAL TTC</div>
                <div class="h2 font-weight-light">${totalprice} €</div>
            </div>
        </div>
`;
    }
}


/***/ }),

/***/ "./src/classes/Display.ts":
/*!********************************!*\
  !*** ./src/classes/Display.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Display: () => (/* binding */ Display)
/* harmony export */ });
/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Storage */ "./src/classes/Storage.ts");

class Display {
    constructor(container, hiddenDiv, buttonPrint) {
        this.container = container;
        this.hiddenDiv = hiddenDiv;
        this.buttonPrint = buttonPrint;
        this.formContainer = document.getElementById('form-container');
    }
    render(docObj, docType) {
        const htmlstring = docObj.HasHtmlFormat();
        this.container.innerHTML = htmlstring;
        new _Storage__WEBPACK_IMPORTED_MODULE_0__.Storage(docType, htmlstring);
        if (docType === 'invoice') {
            this.buttonPrint.innerText = 'Print Invoice';
        }
        else {
            this.buttonPrint.innerText = 'Print Devis';
        }
        this.hiddenDiv.classList.remove('invisible');
        this.formContainer.innerHTML = "";
    }
}


/***/ }),

/***/ "./src/classes/FormInputs.ts":
/*!***********************************!*\
  !*** ./src/classes/FormInputs.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormInput: () => (/* binding */ FormInput)
/* harmony export */ });
/* harmony import */ var _Datas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Datas */ "./src/classes/Datas.ts");
/* harmony import */ var _Display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Display */ "./src/classes/Display.ts");
/* harmony import */ var _Print__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Print */ "./src/classes/Print.ts");



class FormInput {
    constructor() {
        this.form = document.getElementById("form");
        this.type = document.getElementById("type");
        this.firstName = document.getElementById("firstName");
        this.lastName = document.getElementById("lastName");
        this.address = document.getElementById("address");
        this.country = document.getElementById("country");
        this.town = document.getElementById("town");
        this.zip = document.getElementById("zip");
        this.product = document.getElementById("product");
        this.price = document.getElementById("price");
        this.quantity = document.getElementById("quantity");
        this.tva = document.getElementById("tva");
        this.docContainer = document.getElementById('document-container');
        this.hiddenDiv = document.getElementById('hiddenDiv');
        this.StoredEl = document.getElementById('stored-data');
        this.buttonPrint = document.getElementById('print');
        this.btnReload = document.getElementById('reload');
        this.btnStoredEstimates = document.getElementById('stored-estimates');
        this.btnStoredInvoices = document.getElementById('stored-invoices');
        this.submitFormListener();
        this.printListener(this.buttonPrint, this.docContainer);
        this.reloadListener(this.btnReload);
        this.getStoredDocsListener();
    }
    submitFormListener() {
        this.form.addEventListener("submit", this.handleFormSubmit.bind(this));
    }
    printListener(btn, docContainer) {
        btn.addEventListener("click", (e) => {
            let availableDoc;
            availableDoc = new _Print__WEBPACK_IMPORTED_MODULE_2__.Print(docContainer);
            availableDoc.print();
        });
    }
    reloadListener(btn) {
        btn.addEventListener("click", () => {
            document.location.reload();
            window.scroll(0, 0);
        });
    }
    getStoredDocsListener() {
        this.btnStoredInvoices.addEventListener("click", this.getItems.bind(this, 'invoice'));
        this.btnStoredEstimates.addEventListener("click", this.getItems.bind(this, 'estimate'));
    }
    getItems(docType) {
        if (this.StoredEl.hasChildNodes()) {
            this.StoredEl.innerHTML = "";
        }
        let array;
        array = localStorage.getItem(docType);
        if (array !== null && array.length > 2) {
            let arrayData;
            arrayData = JSON.parse(array);
            arrayData.map((doc) => {
                let card = document.createElement("div");
                let cardBody = document.createElement("div");
                let cardClasses = ['card', 'mt-5'];
                let cardBodyClasses = 'card-body';
                card.classList.add(...cardClasses);
                cardBody.classList.add(cardBodyClasses);
                cardBody.innerHTML = doc;
                card.append(cardBody);
                this.StoredEl.append(card);
            });
        }
        else {
            this.StoredEl.innerHTML = "<div class='p-5'>Aucne Data disponible</div>";
        }
    }
    handleFormSubmit(e) {
        e.preventDefault();
        const inputs = this.inputDatas();
        if (Array.isArray(inputs)) {
            const [type, firstName, lastName, adress, country, town, zip, product, price, quantity, tva] = inputs;
            //console.log(type,firstName,lastName,adress,country,town,zip,product,price,quantity,tva);
            let docData;
            let date = new Date();
            docData = new _Datas__WEBPACK_IMPORTED_MODULE_0__.Datas(type, firstName, lastName, adress, country, town, zip, product, price, quantity, tva, date);
            console.log(docData.HasHtmlFormat());
            let template;
            template = new _Display__WEBPACK_IMPORTED_MODULE_1__.Display(this.docContainer, this.hiddenDiv, this.buttonPrint);
            template.render(docData, type);
        }
    }
    inputDatas() {
        const type = this.type.value;
        const firstName = this.firstName.value;
        const lastName = this.lastName.value;
        const adress = this.address.value;
        const country = this.country.value;
        const town = this.town.value;
        const zip = this.zip.valueAsNumber;
        const product = this.product.value;
        const price = this.price.valueAsNumber;
        const quantity = this.quantity.valueAsNumber;
        const tva = this.tva.valueAsNumber;
        if (zip > 0 && price > 0 && quantity > 0 && tva > 0) {
            return [type, firstName, lastName, adress, country, town, zip, product, price, quantity, tva];
        }
        else {
            alert("les valeur numérique doivent être > 0");
            return;
        }
    }
}


/***/ }),

/***/ "./src/classes/Print.ts":
/*!******************************!*\
  !*** ./src/classes/Print.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Print: () => (/* binding */ Print)
/* harmony export */ });
class Print {
    constructor(el) {
        this.el = el;
    }
    print() {
        console.log(this.el.innerHTML);
        document.body.innerHTML = this.el.innerHTML;
        window.print();
        document.location.reload();
    }
}


/***/ }),

/***/ "./src/classes/Storage.ts":
/*!********************************!*\
  !*** ./src/classes/Storage.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Storage: () => (/* binding */ Storage)
/* harmony export */ });
class Storage {
    constructor(typeVal, htmlString) {
        this.oldData = [];
        this.setItem(typeVal, htmlString);
    }
    static checkStorage() {
        if (localStorage.getItem("invoice") === null) {
            localStorage.setItem("invoice", '[]');
        }
        if (localStorage.getItem("estimate") === null) {
            localStorage.setItem("estimate", '[]');
        }
    }
    setItem(typeVal, htmlString) {
        let array;
        array = localStorage.getItem(typeVal);
        if (array !== null) {
            this.oldData = JSON.parse(array);
            this.oldData.push(htmlString);
            localStorage.setItem(typeVal, JSON.stringify(this.oldData));
        }
        else {
            document.location.reload();
        }
    }
}


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
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_FormInputs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/FormInputs */ "./src/classes/FormInputs.ts");
/* harmony import */ var _classes_Storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/Storage */ "./src/classes/Storage.ts");


new _classes_FormInputs__WEBPACK_IMPORTED_MODULE_0__.FormInput();
_classes_Storage__WEBPACK_IMPORTED_MODULE_1__.Storage.checkStorage();
/*this.form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log(type.value);
  
});*/

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOaUQ7QUFDTDtBQUU1QyxJQUFJLDBEQUFTLEVBQUUsQ0FBQztBQUNoQixxREFBTyxDQUFDLFlBQVksRUFBRSxDQUFDO0FBRXZCOzs7O0tBSUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mYWN0dXJpZXIvLi9zcmMvY2xhc3Nlcy9EYXRhcy50cyIsIndlYnBhY2s6Ly9mYWN0dXJpZXIvLi9zcmMvY2xhc3Nlcy9EaXNwbGF5LnRzIiwid2VicGFjazovL2ZhY3R1cmllci8uL3NyYy9jbGFzc2VzL0Zvcm1JbnB1dHMudHMiLCJ3ZWJwYWNrOi8vZmFjdHVyaWVyLy4vc3JjL2NsYXNzZXMvUHJpbnQudHMiLCJ3ZWJwYWNrOi8vZmFjdHVyaWVyLy4vc3JjL2NsYXNzZXMvU3RvcmFnZS50cyIsIndlYnBhY2s6Ly9mYWN0dXJpZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZmFjdHVyaWVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9mYWN0dXJpZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9mYWN0dXJpZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9mYWN0dXJpZXIvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7SGFzSHRtbEZvcm1hdH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvSGFzSHRtbEZvcm1hdFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIERhdGFzIGltcGxlbWVudHMgIEhhc0h0bWxGb3JtYXR7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbnByaXZhdGUgZG9jdW1lbnRUeXBlOnN0cmluZyxcclxucHJpdmF0ZSBmaXJzdE5hbWU6c3RyaW5nLFxyXG5wcml2YXRlIGxhc3ROYW1lOnN0cmluZyxcclxucHJpdmF0ZSBhZGRyZXNzOnN0cmluZyxcclxucHJpdmF0ZSBjb3VudHJ5OnN0cmluZyxcclxucHJpdmF0ZSB0b3duOnN0cmluZyxcclxucHJpdmF0ZSB6aXA6bnVtYmVyLFxyXG5wcml2YXRlIHByb2R1Y3Q6c3RyaW5nLFxyXG5wcml2YXRlIHByaWNlOm51bWJlcixcclxucHJpdmF0ZSBxdWFudGl0eTpudW1iZXIsXHJcbnByaXZhdGUgdHZhOm51bWJlcixcclxucHJpdmF0ZSBkYXRlOkRhdGVcclxuICAgICkge1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBzdWJUb3RhbChwcmljZTpudW1iZXIscXVhbnRpdHk6bnVtYmVyLHR2YTpudW1iZXIpOm51bWJlcntcclxuICAgICAgICBjb25zdCB0dmFwZXJjZW50PXR2YS8xMDA7XHJcbiAgICAgICAgY29uc3QgdG90YWx0dmE9cHJpY2UqdHZhcGVyY2VudDtcclxuICAgICAgICByZXR1cm4gKHByaWNlK3RvdGFsdHZhKSAqIHF1YW50aXR5O1xyXG4gICAgfVxyXG5cclxuICAgIEhhc0h0bWxGb3JtYXQoKTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCB0b3RhbHByaWNlPXRoaXMuc3ViVG90YWwodGhpcy5wcmljZSx0aGlzLnF1YW50aXR5LHRoaXMudHZhKTtcclxuICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcC01XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwidGV4dC1sZWZ0XCI+TE9HTzwvaDI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTYgdGV4dC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJmb250LXdlaWdodC1ib2xkIG1iLTFcIj4ke3RoaXMuZG9jdW1lbnRUeXBlPT09XCJpbnZvaWNlXCI/XCJGYWN0dXJlXCI6XCJEZXZpc1wifTxzcGFuIGNsYXNzPVwiZm9udC13ZWlnaHQtbm9ybWFsXCI+TsKwICR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjEwMSl9PC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZm9udC13ZWlnaHQtYm9sZCBtYi0xXCI+RGF0ZSA8c3BhbiBjbGFzcz1cImZvbnQtd2VpZ2h0LW5vcm1hbFwiPiR7dGhpcy5kYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygpfTwvc3Bhbj48L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHBiLTUgcC01XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNiB0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZm9udC13ZWlnaHQtYm9sZFwiPkVudHJlcHJpc2UgZGUgVG90bzwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibWItMVwiPjIyIGJvdWxldmFyZCBNb2UgU3p5c2xhazwvcD5cclxuICAgICAgICAgICAgICAgIDxwPjc1MDA4IC0gUGFyaXM8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm1iLTFcIj5Uw6lsOiAwMC4wMC4wMC4wMC4wMDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNiB0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImZvbnQtd2VpZ2h0LWJvbGRcIj5JbmZvcm1hdGlvbnMgZHUgY2xpZW50PC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJtYi0xXCI+TXIvTW1lICR7dGhpcy5maXJzdE5hbWV9ICR7dGhpcy5sYXN0TmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm1iLTFcIj4ke3RoaXMuYWRkcmVzc308L3A+XHJcbiAgICAgICAgICAgICAgICA8cD4ke3RoaXMuemlwfTwvcD5cclxuICAgICAgICAgICAgICAgIDxwPiR7dGhpcy50b3dufTwvcD5cclxuICAgICAgICAgICAgICAgIDxwPiR7dGhpcy5jb3VudHJ5fTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcC01XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cImJvcmRlci0wIHRleHQtdXBwZXJjYXNlIHNtYWxsIGZvbnQtd2VpZ2h0LWJvbGRcIj5Qcm9kdWl0L1NlcnZpY2U8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cImJvcmRlci0wIHRleHQtdXBwZXJjYXNlIHNtYWxsIGZvbnQtd2VpZ2h0LWJvbGRcIj5Qcml4IHVuaXRhaXJlIEhUPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XCJib3JkZXItMCB0ZXh0LXVwcGVyY2FzZSBzbWFsbCBmb250LXdlaWdodC1ib2xkXCI+UXVhbnRpdMOpPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XCJib3JkZXItMCB0ZXh0LXVwcGVyY2FzZSBzbWFsbCBmb250LXdlaWdodC1ib2xkXCI+VG90YWwgSFQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+JHt0aGlzLnByb2R1Y3R9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+JHt0aGlzLnByaWNlfSDigqwgSFQ8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD4ke3RoaXMucXVhbnRpdHl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+JHt0aGlzLnByaWNlKnRoaXMucXVhbnRpdHl9IOKCrCBIVDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBmbGV4LXJvdy1yZXZlcnNlIGJnLWxpZ2h0IHAtNFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHktMyBweC01XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWItMlwiPlRPVEFMIFRUQzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImgyIGZvbnQtd2VpZ2h0LWxpZ2h0XCI+JHt0b3RhbHByaWNlfSDigqw8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbmA7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHtIYXNSZW5kZXJ9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2hhc1JlbmRlclwiO1xyXG5pbXBvcnQge0hhc0h0bWxGb3JtYXR9IGZyb20gXCIuLi9pbnRlcmZhY2VzL0hhc0h0bWxGb3JtYXRcIjtcclxuaW1wb3J0IHtTdG9yYWdlfSBmcm9tIFwiLi9TdG9yYWdlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRGlzcGxheSBpbXBsZW1lbnRzICBIYXNSZW5kZXJ7XHJcbiAgIGZvcm1Db250YWluZXI6SFRNTERpdkVsZW1lbnQ7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGNvbnRhaW5lcjpIVE1MRGl2RWxlbWVudCxcclxuICAgICAgICBwcml2YXRlIGhpZGRlbkRpdjpIVE1MRGl2RWxlbWVudCxcclxuICAgICAgICBwcml2YXRlIGJ1dHRvblByaW50OkhUTUxCdXR0b25FbGVtZW50LFxyXG5cclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuZm9ybUNvbnRhaW5lcj0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tY29udGFpbmVyJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKGRvY09iajogSGFzSHRtbEZvcm1hdCwgZG9jVHlwZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgaHRtbHN0cmluZzpzdHJpbmc9ZG9jT2JqLkhhc0h0bWxGb3JtYXQoKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUw9aHRtbHN0cmluZztcclxuICAgICAgICBuZXcgU3RvcmFnZShkb2NUeXBlLGh0bWxzdHJpbmcpO1xyXG4gICAgICAgIGlmKGRvY1R5cGU9PT0naW52b2ljZScpe1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvblByaW50LmlubmVyVGV4dD0nUHJpbnQgSW52b2ljZSc7XHJcbiAgICAgICAgfWVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uUHJpbnQuaW5uZXJUZXh0PSdQcmludCBEZXZpcyc7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmhpZGRlbkRpdi5jbGFzc0xpc3QucmVtb3ZlKCdpbnZpc2libGUnKTtcclxuICAgICAgICB0aGlzLmZvcm1Db250YWluZXIuaW5uZXJIVE1MPVwiXCI7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbn0iLCJpbXBvcnQge0hhc0h0bWxGb3JtYXR9IGZyb20gXCIuLi9pbnRlcmZhY2VzL0hhc0h0bWxGb3JtYXRcIjtcclxuaW1wb3J0IHtEYXRhc30gZnJvbSBcIi4vRGF0YXNcIjtcclxuaW1wb3J0IHtIYXNSZW5kZXJ9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2hhc1JlbmRlclwiO1xyXG5pbXBvcnQge0Rpc3BsYXl9IGZyb20gXCIuL0Rpc3BsYXlcIjtcclxuaW1wb3J0IHtIYXNQcmludH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvSGFzUHJpbnRcIjtcclxuaW1wb3J0IHtQcmludH0gZnJvbSBcIi4vUHJpbnRcIjtcclxuXHJcbmV4cG9ydCAgY2xhc3MgRm9ybUlucHV0e1xyXG4gICAgZm9ybTogSFRNTEZvcm1FbGVtZW50O1xyXG4gICAgdHlwZSA6IEhUTUxTZWxlY3RFbGVtZW50O1xyXG4gICAgZmlyc3ROYW1lOiBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgbGFzdE5hbWUgOiBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgYWRkcmVzcyA6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBjb3VudHJ5IDogSFRNTElucHV0RWxlbWVudDtcclxuICAgIHRvd24gOiBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgemlwIDogSFRNTElucHV0RWxlbWVudDtcclxuICAgIHByb2R1Y3QgOiBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgcHJpY2UgOiBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgcXVhbnRpdHkgOiBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgdHZhIDogSFRNTElucHV0RWxlbWVudDtcclxuICAgIGRvY0NvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBoaWRkZW5EaXY6IEhUTUxEaXZFbGVtZW50O1xyXG4gICAgU3RvcmVkRWw6IEhUTUxEaXZFbGVtZW50O1xyXG4gICAgYnV0dG9uUHJpbnQ6SFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICBidG5SZWxvYWQ6SFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICBidG5TdG9yZWRFc3RpbWF0ZXM6IEhUTUxCdXR0b25FbGVtZW50O1xyXG4gICAgYnRuU3RvcmVkSW52b2ljZXM6SFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm1cIikgYXMgSFRNTEZvcm1FbGVtZW50O1xyXG4gICAgICAgIHRoaXMudHlwZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHlwZVwiKSBhcyBIVE1MU2VsZWN0RWxlbWVudDtcclxuICAgICAgICB0aGlzLmZpcnN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmlyc3ROYW1lXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5sYXN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGFzdE5hbWVcIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICB0aGlzLmFkZHJlc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZHJlc3NcIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICB0aGlzLmNvdW50cnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvdW50cnlcIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICB0aGlzLnRvd24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvd25cIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICB0aGlzLnppcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiemlwXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5wcm9kdWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9kdWN0XCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5wcmljZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJpY2VcIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICB0aGlzLnF1YW50aXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJxdWFudGl0eVwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgIHRoaXMudHZhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0dmFcIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgIHRoaXMuZG9jQ29udGFpbmVyPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZG9jdW1lbnQtY29udGFpbmVyJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICAgICB0aGlzLmhpZGRlbkRpdj0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hpZGRlbkRpdicpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgICAgdGhpcy5TdG9yZWRFbD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RvcmVkLWRhdGEnKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgIHRoaXMuYnV0dG9uUHJpbnQ9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmludCcpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG4gICAgICAgdGhpcy5idG5SZWxvYWQ9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlbG9hZCcpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG4gICAgICAgIHRoaXMuYnRuU3RvcmVkRXN0aW1hdGVzPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdG9yZWQtZXN0aW1hdGVzJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5idG5TdG9yZWRJbnZvaWNlcz1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RvcmVkLWludm9pY2VzJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcblxyXG5cclxuICAgICAgICB0aGlzLnN1Ym1pdEZvcm1MaXN0ZW5lcigpO1xyXG4gICAgICAgIHRoaXMucHJpbnRMaXN0ZW5lcih0aGlzLmJ1dHRvblByaW50LHRoaXMuZG9jQ29udGFpbmVyKTtcclxuICAgICAgICB0aGlzLnJlbG9hZExpc3RlbmVyKHRoaXMuYnRuUmVsb2FkKTtcclxuICAgICAgICB0aGlzLmdldFN0b3JlZERvY3NMaXN0ZW5lcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgIHN1Ym1pdEZvcm1MaXN0ZW5lcigpe1xyXG4gICAgICAgIHRoaXMuZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsdGhpcy5oYW5kbGVGb3JtU3VibWl0LmJpbmQodGhpcykgKTtcclxuXHJcbiAgICB9XHJcbiAgICBwcml2YXRlICBwcmludExpc3RlbmVyKGJ0bjpIVE1MQnV0dG9uRWxlbWVudCxkb2NDb250YWluZXI6SFRNTERpdkVsZW1lbnQpe1xyXG4gICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKT0+e1xyXG4gICAgICAgICAgICBsZXQgYXZhaWxhYmxlRG9jOkhhc1ByaW50O1xyXG4gICAgICAgICAgICBhdmFpbGFibGVEb2M9bmV3IFByaW50KGRvY0NvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIGF2YWlsYWJsZURvYy5wcmludCgpO1xyXG4gICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgcmVsb2FkTGlzdGVuZXIoYnRuOkhUTUxCdXR0b25FbGVtZW50KXtcclxuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT57XHJcbiAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgIHdpbmRvdy5zY3JvbGwoMCwwKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRTdG9yZWREb2NzTGlzdGVuZXIoKXtcclxuICAgICAgICB0aGlzLmJ0blN0b3JlZEludm9pY2VzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHRoaXMuZ2V0SXRlbXMuYmluZCh0aGlzLCdpbnZvaWNlJykpXHJcbiAgICAgICAgdGhpcy5idG5TdG9yZWRFc3RpbWF0ZXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsdGhpcy5nZXRJdGVtcy5iaW5kKHRoaXMsJ2VzdGltYXRlJykpXHJcblxyXG4gICAgfVxyXG5wcml2YXRlIGdldEl0ZW1zKGRvY1R5cGU6c3RyaW5nKXtcclxuICAgIGlmKHRoaXMuU3RvcmVkRWwuaGFzQ2hpbGROb2RlcygpKVxyXG4gICAge1xyXG4gICAgIHRoaXMuU3RvcmVkRWwuaW5uZXJIVE1MPVwiXCI7XHJcbiAgICB9XHJcbmxldCBhcnJheTpzdHJpbmd8bnVsbDtcclxuICAgIGFycmF5PWxvY2FsU3RvcmFnZS5nZXRJdGVtKGRvY1R5cGUpO1xyXG4gICAgaWYoYXJyYXkhPT1udWxsICYmIGFycmF5Lmxlbmd0aD4yKXtcclxuICAgICAgICBsZXQgYXJyYXlEYXRhOnN0cmluZ1tdO1xyXG4gICAgICAgIGFycmF5RGF0YT1KU09OLnBhcnNlKGFycmF5KTtcclxuICAgICAgICBhcnJheURhdGEubWFwKChkb2M6c3RyaW5nKTp2b2lkPT57XHJcbiAgICAgICAgICAgIGxldCBjYXJkOkhUTUxEaXZFbGVtZW50PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIGxldCBjYXJkQm9keTpIVE1MRGl2RWxlbWVudD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBsZXQgY2FyZENsYXNzZXM6QXJyYXk8c3RyaW5nPj1bJ2NhcmQnLCdtdC01J107XHJcbiAgICAgICAgICAgIGxldCBjYXJkQm9keUNsYXNzZXM6c3RyaW5nPSdjYXJkLWJvZHknO1xyXG4gICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoLi4uY2FyZENsYXNzZXMpO1xyXG4gICAgICAgICAgICBjYXJkQm9keS5jbGFzc0xpc3QuYWRkKGNhcmRCb2R5Q2xhc3Nlcyk7XHJcbiAgICAgICAgICAgIGNhcmRCb2R5LmlubmVySFRNTD1kb2M7XHJcbiAgICAgICAgICAgIGNhcmQuYXBwZW5kKGNhcmRCb2R5KTtcclxuICAgICAgICAgICAgdGhpcy5TdG9yZWRFbC5hcHBlbmQoY2FyZCk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgICB0aGlzLlN0b3JlZEVsLmlubmVySFRNTD1cIjxkaXYgY2xhc3M9J3AtNSc+QXVjbmUgRGF0YSBkaXNwb25pYmxlPC9kaXY+XCJcclxuICAgIH1cclxufVxyXG4gICAgcHJpdmF0ZSBoYW5kbGVGb3JtU3VibWl0KGU6IEV2ZW50KSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IGlucHV0cz10aGlzLmlucHV0RGF0YXMoKTtcclxuICAgICAgICBpZihBcnJheS5pc0FycmF5KGlucHV0cykpe1xyXG4gICAgICAgICAgICBjb25zdCBbdHlwZSxmaXJzdE5hbWUsbGFzdE5hbWUsYWRyZXNzLGNvdW50cnksdG93bix6aXAscHJvZHVjdCxwcmljZSxxdWFudGl0eSx0dmFdPWlucHV0cztcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0eXBlLGZpcnN0TmFtZSxsYXN0TmFtZSxhZHJlc3MsY291bnRyeSx0b3duLHppcCxwcm9kdWN0LHByaWNlLHF1YW50aXR5LHR2YSk7XHJcbiAgICAgICAgICAgIGxldCBkb2NEYXRhOkhhc0h0bWxGb3JtYXQ7XHJcbiAgICAgICAgICAgIGxldCBkYXRlPW5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgIGRvY0RhdGE9bmV3IERhdGFzKHR5cGUsZmlyc3ROYW1lLGxhc3ROYW1lLGFkcmVzcyxjb3VudHJ5LHRvd24semlwLHByb2R1Y3QscHJpY2UscXVhbnRpdHksdHZhLGRhdGUpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkb2NEYXRhLkhhc0h0bWxGb3JtYXQoKSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgdGVtcGxhdGU6SGFzUmVuZGVyO1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZT1uZXcgRGlzcGxheSh0aGlzLmRvY0NvbnRhaW5lcix0aGlzLmhpZGRlbkRpdix0aGlzLmJ1dHRvblByaW50KTtcclxuICAgICAgICAgICAgdGVtcGxhdGUucmVuZGVyKGRvY0RhdGEsdHlwZSlcclxuXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGlucHV0RGF0YXMoKTpbc3RyaW5nLHN0cmluZyxzdHJpbmcsc3RyaW5nLHN0cmluZyxzdHJpbmcsbnVtYmVyLHN0cmluZyxudW1iZXIsbnVtYmVyLG51bWJlcl18IHZvaWQge1xyXG5cclxuICAgICAgICBjb25zdCB0eXBlPSB0aGlzLnR5cGUudmFsdWU7XHJcbiAgICAgICAgY29uc3QgZmlyc3ROYW1lPXRoaXMuZmlyc3ROYW1lLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGxhc3ROYW1lPXRoaXMubGFzdE5hbWUudmFsdWU7XHJcbiAgICAgICAgY29uc3QgYWRyZXNzPXRoaXMuYWRkcmVzcy52YWx1ZTtcclxuICAgICAgICBjb25zdCBjb3VudHJ5PXRoaXMuY291bnRyeS52YWx1ZTtcclxuICAgICAgICBjb25zdCB0b3duPXRoaXMudG93bi52YWx1ZTtcclxuICAgICAgICBjb25zdCB6aXA9dGhpcy56aXAudmFsdWVBc051bWJlcjtcclxuICAgICAgICBjb25zdCBwcm9kdWN0PXRoaXMucHJvZHVjdC52YWx1ZTtcclxuICAgICAgICBjb25zdCBwcmljZT10aGlzLnByaWNlLnZhbHVlQXNOdW1iZXI7XHJcbiAgICAgICAgY29uc3QgcXVhbnRpdHk9dGhpcy5xdWFudGl0eS52YWx1ZUFzTnVtYmVyO1xyXG4gICAgICAgIGNvbnN0IHR2YT10aGlzLnR2YS52YWx1ZUFzTnVtYmVyO1xyXG4gICAgICAgIGlmKHppcD4wICYmIHByaWNlPjAgJiYgcXVhbnRpdHk+MCAmJiB0dmE+MCkge1xyXG4gICAgICAgICAgICByZXR1cm4gW3R5cGUsZmlyc3ROYW1lLGxhc3ROYW1lLGFkcmVzcyxjb3VudHJ5LHRvd24semlwLHByb2R1Y3QscHJpY2UscXVhbnRpdHksdHZhXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYWxlcnQoXCJsZXMgdmFsZXVyIG51bcOpcmlxdWUgZG9pdmVudCDDqnRyZSA+IDBcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxuaW1wb3J0IHtIYXNQcmludH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvSGFzUHJpbnRcIjtcclxuZXhwb3J0IGNsYXNzIFByaW50IGltcGxlbWVudHMgSGFzUHJpbnRcclxue1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDpIVE1MRGl2RWxlbWVudCAgICApIHtcclxuICAgIH1cclxuICAgIHByaW50KCk6IHZvaWQge1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmVsLmlubmVySFRNTCk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUw9dGhpcy5lbC5pbm5lckhUTUw7XHJcbiAgICAgICAgd2luZG93LnByaW50KCk7XHJcbiAgICAgICAgZG9jdW1lbnQubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICB9XHJcblxyXG59IiwiICAgIGltcG9ydCAge0hhc1NldEl0ZW19IGZyb20gXCIuLi9pbnRlcmZhY2VzL0hhc1NldEl0ZW1cIjtcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgU3RvcmFnZSBpbXBsZW1lbnRzIEhhc1NldEl0ZW0gIHtcclxuICAgICAgICBvbGREYXRhOnN0cmluZ1tdPVtdO1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHR5cGVWYWw6IHN0cmluZywgaHRtbFN0cmluZzogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0SXRlbSh0eXBlVmFsLCBodG1sU3RyaW5nKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBzdGF0aWMgY2hlY2tTdG9yYWdlKCl7XHJcbiAgICAgICAgICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaW52b2ljZVwiKT09PW51bGwpe1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJpbnZvaWNlXCIsJ1tdJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJlc3RpbWF0ZVwiKT09PW51bGwpe1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJlc3RpbWF0ZVwiLCdbXScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRJdGVtKHR5cGVWYWw6IHN0cmluZywgaHRtbFN0cmluZzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgICAgIGxldCBhcnJheTpzdHJpbmd8bnVsbDtcclxuICAgICAgICAgICAgYXJyYXk9bG9jYWxTdG9yYWdlLmdldEl0ZW0odHlwZVZhbCk7XHJcbiAgICAgICAgICAgIGlmKGFycmF5IT09bnVsbCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9sZERhdGE9SlNPTi5wYXJzZShhcnJheSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9sZERhdGEucHVzaChodG1sU3RyaW5nKTtcclxubG9jYWxTdG9yYWdlLnNldEl0ZW0odHlwZVZhbCxKU09OLnN0cmluZ2lmeSh0aGlzLm9sZERhdGEpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgRm9ybUlucHV0IH0gZnJvbSBcIi4vY2xhc3Nlcy9Gb3JtSW5wdXRzXCI7XHJcbmltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tIFwiLi9jbGFzc2VzL1N0b3JhZ2VcIjtcclxuXHJcbm5ldyBGb3JtSW5wdXQoKTtcclxuU3RvcmFnZS5jaGVja1N0b3JhZ2UoKTtcclxuXHJcbi8qdGhpcy5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGU6IEV2ZW50KSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGNvbnNvbGUubG9nKHR5cGUudmFsdWUpO1xyXG4gIFxyXG59KTsqL1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=