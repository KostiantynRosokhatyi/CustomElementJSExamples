/*   Change font   */
class TypeFont extends HTMLElement {
    constructor(){
        super();
        let b = document.getElementById("myP");
        let a  =  b.getAttribute('font');
        b.style.font = a;
    }

}
customElements.define("my-font", TypeFont);

/*   Change color text   */

class textColor extends HTMLElement {
    constructor(){
        super();
        let b = document.getElementById("myColor");
        let a  =  b.getAttribute('color');
        b.style.color = a;
    }

}
customElements.define("my-color", textColor);

/*   Change font size   */
class myfontSize extends HTMLElement {
    constructor(){
        super();
        let b = document.getElementById("myFontSize");
        let a  =  b.getAttribute('font-size');
        b.style.fontSize = a;
    }

}
customElements.define("my-font-size", myfontSize);

/*   Create my tag with picture   */
class myPicture extends HTMLElement {
    constructor(){
        super();
        let b = document.getElementById("myPicture");
        let a  =  b.getAttribute('src');
        let myWidth  =  b.getAttribute('width');
        let myHeight  =  b.getAttribute('height');


        let img = new Image();

        img.onload = function() {
            b.appendChild(img);
        };

        img.style.height = myWidth;
        img.style.width = myHeight;
        img. src = a;

    }

}
customElements.define("my-picture", myPicture);

/*Position of elements*/

class myPosition extends HTMLElement {
    constructor(){
        super();
        let b = document.getElementById("myPosition");
        let left  =  b.getAttribute('left');
        let right  =  b.getAttribute('right');
        let top  =  b.getAttribute('top');
        let bottom  =  b.getAttribute('bottom');

        b.style.position = "absolute";

        b.style.left=left;
        b.style.right=right;
        b.style.top=top;
        b.style.bottom=bottom;



    }

}
customElements.define("my-position", myPosition);

/*Background color or image*/

class myBackground extends HTMLElement {
    constructor(){
        super();
        let b = document.getElementById("myBg");
        let a  =  b.getAttribute('bg-color');
        let c  =  b.getAttribute('border');
        b.style.backgroundColor = a;
        b.style.border= c;

    }


}
customElements.define("my-bg", myBackground);

/*Create title tag*/

class myTitle extends HTMLElement {
    constructor(){
        super();
        let my_title = document.getElementById("myTitle").innerHTML;
        document.title = my_title;
        document.getElementById("myTitle").style.display="none";
    }

}
customElements.define("my-title", myTitle);

/*New  tag like <br> tag*/




class my_Br extends HTMLElement {

    constructor() {
        super();
        document.getElementById("myBr").innerHTML = "<br>";
    }

}
customElements.define("my-br", my_Br);