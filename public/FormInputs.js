"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormInput = void 0;
var Datas_js_1 = require("../src/classes/Datas.js");
var Display_js_1 = require("../src/classes/Display.js");
var FormInput = /** @class */ (function () {
    function FormInput() {
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
        this.submitFormListener();
    }
    FormInput.prototype.submitFormListener = function () {
        this.form.addEventListener("submit", this.handleFormSubmit.bind(this));
    };
    FormInput.prototype.handleFormSubmit = function (e) {
        e.preventDefault();
        var inputs = this.inputDatas();
        if (Array.isArray(inputs)) {
            var type = inputs[0], firstName = inputs[1], lastName = inputs[2], adress = inputs[3], country = inputs[4], town = inputs[5], zip = inputs[6], product = inputs[7], price = inputs[8], quantity = inputs[9], tva = inputs[10];
            //console.log(type,firstName,lastName,adress,country,town,zip,product,price,quantity,tva);
            var docData = void 0;
            var date = new Date();
            docData = new Datas_js_1.Datas(type, firstName, lastName, adress, country, town, zip, product, price, quantity, tva, date);
            console.log(docData.HasHtmlFormat());
            var template = void 0;
            template = new Display_js_1.Display(this.docContainer, this.hiddenDiv);
            template.render(docData, type);
        }
    };
    FormInput.prototype.inputDatas = function () {
        var type = this.type.value;
        var firstName = this.firstName.value;
        var lastName = this.lastName.value;
        var adress = this.address.value;
        var country = this.country.value;
        var town = this.town.value;
        var zip = this.zip.valueAsNumber;
        var product = this.product.value;
        var price = this.price.valueAsNumber;
        var quantity = this.quantity.valueAsNumber;
        var tva = this.tva.valueAsNumber;
        if (zip > 0 && price > 0 && quantity > 0 && tva > 0) {
            return [type, firstName, lastName, adress, country, town, zip, product, price, quantity, tva];
        }
        else {
            alert("les valeur numérique doivent être > 0");
            return;
        }
    };
    return FormInput;
}());
exports.FormInput = FormInput;
