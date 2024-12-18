import {HasHtmlFormat} from "../interfaces/HasHtmlFormat.js";
import {Datas} from "./Datas.js";
import {HasRender} from "../interfaces/hasRender.js";
import {Display} from "./Display.js";
import {HasPrint} from "../interfaces/HasPrint.js";
import {Print} from "./Print.js";

export  class FormInput{
    form: HTMLFormElement;
    type : HTMLSelectElement;
    firstName: HTMLInputElement;
    lastName : HTMLInputElement;
    address : HTMLInputElement;
    country : HTMLInputElement;
    town : HTMLInputElement;
    zip : HTMLInputElement;
    product : HTMLInputElement;
    price : HTMLInputElement;
    quantity : HTMLInputElement;
    tva : HTMLInputElement;
    docContainer: HTMLDivElement;
    hiddenDiv: HTMLDivElement;
    StoredEl: HTMLDivElement;
    buttonPrint:HTMLButtonElement;
    btnReload:HTMLButtonElement;
    btnStoredEstimates: HTMLButtonElement;
    btnStoredInvoices:HTMLButtonElement;
    constructor() {
        this.form = document.getElementById("form") as HTMLFormElement;
        this.type = document.getElementById("type") as HTMLSelectElement;
        this.firstName = document.getElementById("firstName") as HTMLInputElement;
        this.lastName = document.getElementById("lastName") as HTMLInputElement;
        this.address = document.getElementById("address") as HTMLInputElement;
        this.country = document.getElementById("country") as HTMLInputElement;
        this.town = document.getElementById("town") as HTMLInputElement;
        this.zip = document.getElementById("zip") as HTMLInputElement;
        this.product = document.getElementById("product") as HTMLInputElement;
        this.price = document.getElementById("price") as HTMLInputElement;
        this.quantity = document.getElementById("quantity") as HTMLInputElement;
        this.tva = document.getElementById("tva") as HTMLInputElement;
       this.docContainer= document.getElementById('document-container') as HTMLDivElement;
       this.hiddenDiv= document.getElementById('hiddenDiv') as HTMLDivElement;
       this.StoredEl=document.getElementById('stored-data') as HTMLDivElement;
       this.buttonPrint= document.getElementById('print') as HTMLButtonElement;
       this.btnReload=document.getElementById('reload') as HTMLButtonElement;
        this.btnStoredEstimates=document.getElementById('stored-estimates') as HTMLButtonElement;
        this.btnStoredInvoices=document.getElementById('stored-invoices') as HTMLButtonElement;


        this.submitFormListener();
        this.printListener(this.buttonPrint,this.docContainer);
        this.reloadListener(this.btnReload);
        this.getStoredDocsListener();
    }

    private  submitFormListener(){
        this.form.addEventListener("submit",this.handleFormSubmit.bind(this) );

    }
    private  printListener(btn:HTMLButtonElement,docContainer:HTMLDivElement){
         btn.addEventListener("click", (e)=>{
            let availableDoc:HasPrint;
            availableDoc=new Print(docContainer);
            availableDoc.print();
         });
    }
    private reloadListener(btn:HTMLButtonElement){
      btn.addEventListener("click",()=>{
          document.location.reload();
          window.scroll(0,0);
      });
    }

    private getStoredDocsListener(){
        this.btnStoredInvoices.addEventListener("click",this.getItems.bind(this,'invoice'))
        this.btnStoredEstimates.addEventListener("click",this.getItems.bind(this,'estimate'))

    }
private getItems(docType:string){
    if(this.StoredEl.hasChildNodes())
    {
     this.StoredEl.innerHTML="";
    }
let array:string|null;
    array=localStorage.getItem(docType);
    if(array!==null && array.length>2){
        let arrayData:string[];
        arrayData=JSON.parse(array);
        arrayData.map((doc:string):void=>{
            let card:HTMLDivElement=document.createElement("div");
            let cardBody:HTMLDivElement=document.createElement("div");
            let cardClasses:Array<string>=['card','mt-5'];
            let cardBodyClasses:string='card-body';
            card.classList.add(...cardClasses);
            cardBody.classList.add(cardBodyClasses);
            cardBody.innerHTML=doc;
            card.append(cardBody);
            this.StoredEl.append(card);




            });
    }
    else
    {
        this.StoredEl.innerHTML="<div class='p-5'>Aucne Data disponible</div>"
    }
}
    private handleFormSubmit(e: Event) {
        e.preventDefault();
        const inputs=this.inputDatas();
        if(Array.isArray(inputs)){
            const [type,firstName,lastName,adress,country,town,zip,product,price,quantity,tva]=inputs;
            //console.log(type,firstName,lastName,adress,country,town,zip,product,price,quantity,tva);
            let docData:HasHtmlFormat;
            let date=new Date();
            docData=new Datas(type,firstName,lastName,adress,country,town,zip,product,price,quantity,tva,date);
            console.log(docData.HasHtmlFormat());

            let template:HasRender;
            template=new Display(this.docContainer,this.hiddenDiv,this.buttonPrint);
            template.render(docData,type)


        }

    }
    private inputDatas():[string,string,string,string,string,string,number,string,number,number,number]| void {

        const type= this.type.value;
        const firstName=this.firstName.value;
        const lastName=this.lastName.value;
        const adress=this.address.value;
        const country=this.country.value;
        const town=this.town.value;
        const zip=this.zip.valueAsNumber;
        const product=this.product.value;
        const price=this.price.valueAsNumber;
        const quantity=this.quantity.valueAsNumber;
        const tva=this.tva.valueAsNumber;
        if(zip>0 && price>0 && quantity>0 && tva>0) {
            return [type,firstName,lastName,adress,country,town,zip,product,price,quantity,tva];
        }
        else
        {
            alert("les valeur numérique doivent être > 0");
            return;
        }
    }
}