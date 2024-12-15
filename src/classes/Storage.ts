export class Storage {
    constructor() {}
    static checkStorage(){
        if(localStorage.getItem("invoice")===null){
localStorage.setItem("invoice",'[]');
        }
        if(localStorage.getItem("estimate")===null){
            localStorage.setItem("estimate",'[]');
        }
    }
}