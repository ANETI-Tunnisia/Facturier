"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Display = void 0;
var Display = /** @class */ (function () {
    function Display(container, hiddenDiv) {
        this.container = container;
        this.hiddenDiv = hiddenDiv;
        this.formContainer = document.getElementById('form-container');
    }
    Display.prototype.render = function (docObj, docType) {
        var htmlstring = docObj.HasHtmlFormat();
        this.container.innerHTML = htmlstring;
        this.hiddenDiv.classList.remove('invisible');
        this.formContainer.innerHTML = "";
    };
    return Display;
}());
exports.Display = Display;
