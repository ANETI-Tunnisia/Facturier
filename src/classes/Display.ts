import {HasRender} from "../interfaces/hasRender.js";
import {HasHtmlFormat} from "../interfaces/HasHtmlFormat.js";

export class Display implements  HasRender{
   formContainer:HTMLDivElement;
    constructor(
        private container:HTMLDivElement,
        private hiddenDiv:HTMLDivElement

    ) {
        this.formContainer= document.getElementById('form-container') as HTMLDivElement;
    }

    render(docObj: HasHtmlFormat, docType: string): void {
        const htmlstring:string=docObj.HasHtmlFormat();
        this.container.innerHTML=htmlstring;
        this.hiddenDiv.classList.remove('invisible');
        this.formContainer.innerHTML="";

    }


}