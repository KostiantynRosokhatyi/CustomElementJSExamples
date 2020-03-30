/*   Change font   */
class TypeFont extends HTMLElement {
    constructor(){
        super();
        let fontAttribute  =  this.getAttribute('font');
        this.style.font = fontAttribute;
    }
}
customElements.define("my-font", TypeFont);

/*   Change color text   */
class textColor extends HTMLElement {
    constructor(){
        super();
        let colorAttribute  =  this.getAttribute('color');
        this.style.color = colorAttribute;
    }
}
customElements.define("my-color", textColor);

/*   Change font size   */
class myfontSize extends HTMLElement {
    constructor(){
        super();
        let fontSizeAttribute  =  this.getAttribute('font-size');
        this.style.fontSize = fontSizeAttribute;
    }
}
customElements.define("my-font-size", myfontSize);

/*   Create my tag with picture   */
class myPicture extends HTMLElement {
    constructor(){
        super();
        let pictureElement = this;
        let srcAttribute  =  pictureElement.getAttribute('src');
        let myWidthAttribute  =  pictureElement.getAttribute('width');
        let myHeightAttribute  =  pictureElement.getAttribute('height');

        let img = new Image();
        img.onload = function() {
            pictureElement.appendChild(img);
        };

        img.style.height = myHeightAttribute;
        img.style.width = myWidthAttribute;
        img. src = srcAttribute;
    }
}
customElements.define("my-picture", myPicture);

/*Position of elements*/

class myPosition extends HTMLElement {
    constructor(){
        super();
        let leftAttribute  =  this.getAttribute('left');
        let rightAttribute  =  this.getAttribute('right');
        let topAttribute  =  this.getAttribute('top');
        let bottomAttribute  =  this.getAttribute('bottom');

        this.style.position = "absolute";

        this.style.left = leftAttribute;
        this.style.right = rightAttribute;
        this.style.top = topAttribute;
        this.style.bottom = bottomAttribute;
    }
}
customElements.define("my-position", myPosition);

/*Background color or image*/

class myBackground extends HTMLElement {
    constructor(){
        super();
        let bgColorAttribute  =  this.getAttribute('bg-color');
        let borderAttribute  =  this.getAttribute('border');
        this.style.backgroundColor = bgColorAttribute;
        this.style.border= borderAttribute;
    }
}
customElements.define("my-bg", myBackground);

/*Create title tag*/
class myTitle extends HTMLElement {
    constructor(){
        super();
        let my_title = this.innerHTML;
        document.title = my_title;
        this.style.display="none";
    }
}
customElements.define("my-title", myTitle);

/*New  tag like <br> tag*/
class my_Br extends HTMLElement {

    constructor() {
        super();
        this.innerHTML = "<br>";
    }
}
customElements.define("my-br", my_Br);