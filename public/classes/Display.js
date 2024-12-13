export class Display {
    constructor(container, hiddenDiv, buttonPrint) {
        this.container = container;
        this.hiddenDiv = hiddenDiv;
        this.buttonPrint = buttonPrint;
        this.formContainer = document.getElementById('form-container');
    }
    render(docObj, docType) {
        const htmlstring = docObj.HasHtmlFormat();
        this.container.innerHTML = htmlstring;
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
