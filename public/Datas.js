"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Datas = void 0;
var Datas = /** @class */ (function () {
    function Datas(documentType, firstName, lastName, address, country, town, zip, product, price, quantity, tva, date) {
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
    Datas.prototype.subTotal = function (price, quantity, tva) {
        var tvapercent = tva / 100;
        var totaltva = price * tvapercent;
        return (price + totaltva) * quantity;
    };
    Datas.prototype.HasHtmlFormat = function () {
        var totalprice = this.subTotal(this.price, this.quantity, this.tva);
        return "\n        <div class=\"row p-5\">\n            <div class=\"col-md-6\">\n                <h2 class=\"text-left\">LOGO</h2>\n            </div>\n            <div class=\"col-md-6 text-right\">\n                <p class=\"font-weight-bold mb-1\">".concat(this.documentType === "invoice" ? "Facture" : "Devis", "<span class=\"font-weight-normal\">N\u00B0 ").concat(Math.floor(Math.random() * 101), "</span></p>\n                <p class=\"font-weight-bold mb-1\">Date <span class=\"font-weight-normal\">").concat(this.date.toLocaleDateString(), "</span></p>\n            </div>\n        </div>\n\n        <div class=\"row pb-5 p-5\">\n            <div class=\"col-sm-6 text-left\">\n                <p class=\"font-weight-bold\">Entreprise de Toto</p>\n                <p class=\"mb-1\">22 boulevard Moe Szyslak</p>\n                <p>75008 - Paris</p>\n                <p class=\"mb-1\">T\u00E9l: 00.00.00.00.00</p>\n            </div>\n        \n            <div class=\"col-sm-6 text-right\">\n                <p class=\"font-weight-bold\">Informations du client</p>\n                <p class=\"mb-1\">Mr/Mme ").concat(this.firstName, " ").concat(this.lastName, "</p>\n                <p class=\"mb-1\">").concat(this.address, "</p>\n                <p>").concat(this.zip, "</p>\n                <p>").concat(this.town, "</p>\n                <p>").concat(this.country, "</p>\n            </div>\n        </div>\n\n        <div class=\"row p-5\">\n            <div class=\"col-md-12\">\n                <table class=\"table\">\n                <thead>\n                    <tr>\n                    <th class=\"border-0 text-uppercase small font-weight-bold\">Produit/Service</th>\n                    <th class=\"border-0 text-uppercase small font-weight-bold\">Prix unitaire HT</th>\n                    <th class=\"border-0 text-uppercase small font-weight-bold\">Quantit\u00E9</th>\n                    <th class=\"border-0 text-uppercase small font-weight-bold\">Total HT</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                    <td>").concat(this.product, "</td>\n                    <td>").concat(this.price, " \u20AC HT</td>\n                    <td>").concat(this.quantity, "</td>\n                    <td>").concat(this.price * this.quantity, " \u20AC HT</td>\n                    </tr>\n                </tbody>\n                </table>\n            </div>\n        </div>\n\n        <div class=\"d-flex flex-row-reverse bg-light p-4\">\n            <div class=\"py-3 px-5\">\n                <div class=\"mb-2\">TOTAL TTC</div>\n                <div class=\"h2 font-weight-light\">").concat(totalprice, " \u20AC</div>\n            </div>\n        </div>\n");
    };
    return Datas;
}());
exports.Datas = Datas;
