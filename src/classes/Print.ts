
import {HasPrint} from "../interfaces/HasPrint";
export class Print implements HasPrint
{
    constructor(private el:HTMLDivElement    ) {
    }
    print(): void {

        console.log(this.el.innerHTML);
        document.body.innerHTML=this.el.innerHTML;
        window.print();
        document.location.reload();
    }

}