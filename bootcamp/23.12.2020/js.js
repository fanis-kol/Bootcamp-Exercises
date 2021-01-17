
/* class rectangle{
    // setup
    constructor(width, height, color) {
    console.log("The rectangle is being created");
    
    this.height = width,
    this.width = height,
    this.color = color

 }
 getArea(){
     return this.width * this.height;

 }
}

let newRectangle = new rectangle(3 , 5 , "blue");
let newRectangle1 = new rectangle(10 , 5 , "red");


console.log(newRectangle.getArea());
console.log(newRectangle1.getArea()) */

/* 
 class Color {
    constructor(r = 0, g =0, b=0){
        this.r = r;
        this.g = g;
        this.b = b;
    }

    
    toString(){
        //..
    }


static fromCSS(CSS){
    //...
} 

}


class Image {
   constructor( height, width) {
       this.height = height;
       this.width = width;
   }
}  

const newImg = new Image(120, 346);
//Τι ειναι  το image?
console.log(typeof Image);//function
console.log(typeof newImg);//object

console.log(typeof Image === Image);//

//class declaration

class Color{
    //constructor
    //methods
};

//Anonymoys class expression
let Color3 = class {
    
};

//named class expression
let Color4 = class color{
 
}

//const myNewBlack = new ColorBlack()
class ColorBlack{
    constructor(){
        this.r = 0;
        this.g = 0;
        this.b = 0;
    }
}

 */



/* 
class user {
    constructor(name) {
        this.name =name;
    }
    sayHi(){
        alert(this.name);
    }
}

//class is a function
alert(typeof user);// function

//... or , more precisely, the constructor method
alert(user === user.prototype.constructor); // true

// the mehtos are in user.prototype, e-g:
alert(user.prototype.sayHi);// alert(this.name);

//there are exactly two methods in the prototype
alert(object.getOwnPropertyNames(user.prottype));//constructor. say hi */


/* class Player {
    clan =prompt("Se poio clan eisai ?", "Black Wizard")

    constructor(nickname, group){
        this.nickname = nickname;
        this.group = group;
        console.log(this.nickname);
    
}

 get nickname() {
    console.log(this._nickname)
     return this._nickname;
 }


 set nickname(value){
     if (value.length <3) {
        alert("Your nickname is too short")
        return;
     }
     this._nickname = value;
 }

}

 let pico = new Player('pico');
alert(pico.clan);//black wizards
 console.log(player.prototype.clan); */

/* class Guide {
     [6*7] () {
         console.log("Life, the universe and everything");
     }
 }

let guide = new Guide();
guide["42"]() */

/* class Button {
    constructor(value){
        this.value = value;
    }
    click = () => {
        alert(this.value);
    }
}

let myNewButton = new Button("Πατα εδω");
setTimeout(myNewButton.click, 1500); */


/* class VolCylinder {
    constructor(r, h){
      this.r = r
      this.h = h
    }
    carculate = () => {
      return 3.14*2*this.r* this.h.toFixed(4)

    }
   
}

let cylinder = new VolCylinder(25, 25);
console.log(cylinder.carculate());

 */


function addTwo (a, b) {
    return a + b 
    
    }
    
    alert(addTwo(3, 2));
    alert(addTwo(10,7));