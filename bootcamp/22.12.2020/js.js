/* const baldLord = {
    Damage: "Tons",
    Pvp : "God",
    Weapon:"Greatsword",
    Armor:"Light"
}

const Hair = Symbol("Hair option");
baldLord[Hair] = "We have no hair bitches";

console.log(baldLord);

Object.getOwnPropertyNames(baldLord);
Object.getOwnPropertySymbols(baldLord); */

/* const greekPainter = {};


console.log(+greekPainter); //nan
console.log(`${greekPainter}`);// [object object];
console.log(greekPainter + '');//
let ID = Symbol.for("Artist's ID");
let ART = Symbol.for("Artist's Art");


const greekArtist ={
    ID: Symbol("ArtistID"),
    ART : Symbol("Artist's art"),
  
    [Symbol.toPrimitive](hint){
        if(hint === "number"){
            return 100
        };
        if (hint == "string") {
            return "Oi ellhnes kallitexnes sas xairetoun"
        }
       return "mia default timh"
    }

} */

/* console.log(+greekArtist);//100
console.log(`${greekArtist}`);//string
console.log(greekArtist + '');// mia default timh
 */

/* 
 const greekActor = {
     ID: Symbol("Μεγαλοι ελληνες οιθοποιοι"),
     fullName: "Θανασης Βεγγος",
     Movies: ["Τι εκανες στον πολεμο θαναση"],
     moviesNumber : 120,
     
     //for hint = string 
     toString() {
         return `{Ονοματεπωνυμο: "${this.fullName}"}`
     },

     //for hint = number or default
     valueOf(){
         return this.moviesNumber
     }

    }


alert(+greekActor + 200);   // object object
console.log(greekActor.valueOf()===greekActor);//false
alert(greekActor); */


 /* function population(country,pop) {
    return{
        country: country,
        pop : pop,
    
    toString() {
        return  `${this.country}`
    },

    valueOf() {
        return this.pop
    }

  }

}

var america_pop = population("usa", 350e6);
var mexico_pop = population("Mexico", 200e6);
var canada_pop = population("Canada", 200e6);

alert(america_pop);
var north_america_pop = america_pop + mexico_pop + canada_pop;
alert(north_america_pop); 
 */
/* 
const weapon = Symbol.for("wep");
const armor = Symbol.for("arm");


const warrior = {
    [weapon]:Symbol("axe"),
    [armor]:Symbol("heavy"),
    [Symbol.toPrimitive](hint){​​
        if (hint == "number"){​​

            return 20;

        }​​;

        if( hint == "string"){​​

             return "String";

        }​​

        return "Other value";
  }
}

console.log(warrior);
 */

 class Color {
     constructor(r = 0, g =0, b=0){
         this.r = r;
         this.g = g;
         this.b = b;
     }
     get rgb() {
         return `rgb(${this.r}, ${this.g}, ${this.b})`;

     }
     set rgb(){
         //...
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