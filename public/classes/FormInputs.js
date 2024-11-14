import { Datas } from "./Datas.js";
import { Display } from "./Display.js";
export class FormInput {
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
        this.submitFormListener();
    }
    submitFormListener() {
        this.form.addEventListener("submit", this.handleFormSubmit.bind(this));
    }
    handleFormSubmit(e) {
        e.preventDefault();
        const inputs = this.inputDatas();
        if (Array.isArray(inputs)) {
            const [type, firstName, lastName, adress, country, town, zip, product, price, quantity, tva] = inputs;
            //console.log(type,firstName,lastName,adress,country,town,zip,product,price,quantity,tva);
            let docData;
            let date = new Date();
            docData = new Datas(type, firstName, lastName, adress, country, town, zip, product, price, quantity, tva, date);
            console.log(docData.HasHtmlFormat());
            let template;
            template = new Display(this.docContainer, this.hiddenDiv);
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
