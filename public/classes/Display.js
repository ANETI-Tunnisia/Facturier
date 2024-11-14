export class Display {
    constructor(container, hiddenDiv) {
        this.container = container;
        this.hiddenDiv = hiddenDiv;
        this.formContainer = document.getElementById('form-container');
    }
    render(docObj, docType) {
        const htmlstring = docObj.HasHtmlFormat();
        this.container.innerHTML = htmlstring;
        this.hiddenDiv.classList.remove('invisible');
        this.formContainer.innerHTML = "";
    }
}
