export class Print {
    constructor(el) {
        this.el = el;
    }
    print() {
        console.log(this.el.innerHTML);
        document.body.innerHTML = this.el.innerHTML;
        window.print();
        document.location.reload();
    }
}
