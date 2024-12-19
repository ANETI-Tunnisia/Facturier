import {HasRender} from "../interfaces/hasRender.js";
import {HasHtmlFormat} from "../interfaces/HasHtmlFormat.js";
import {Storage} from "./Storage.js";

export class Display implements  HasRender{
   formContainer:HTMLDivElement;
    constructor(
        private container:HTMLDivElement,
        private hiddenDiv:HTMLDivElement,
        private buttonPrint:HTMLButtonElement,

    ) {
        this.formContainer= document.getElementById('form-container') as HTMLDivElement;
    }

    render(docObj: HasHtmlFormat, docType: string): void {
        const htmlstring:string=docObj.HasHtmlFormat();
        this.container.innerHTML=htmlstring;
        new Storage(docType,htmlstring);
        if(docType==='invoice'){
            this.buttonPrint.innerText='Print Invoice';
        }else
        {
            this.buttonPrint.innerText='Print Devis';

        }
        this.hiddenDiv.classList.remove('invisible');
        this.formContainer.innerHTML="";

    }


}