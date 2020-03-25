class TypeFont extends HTMLElement {
    constructor(){
        super();
        let b = document.getElementById("myP");
        let a  =  b.getAttribute('font');
        b.style.font = a;
    }

}
customElements.define("my-font", TypeFont);


class textColor extends HTMLElement {
    constructor(){
        super();
        let b = document.getElementById("myColor");
        let a  =  b.getAttribute('color');
        b.style.color = a;
    }

}
customElements.define("my-color", textColor);
