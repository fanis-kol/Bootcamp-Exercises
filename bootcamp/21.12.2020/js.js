// askhsh
/* const band = {};
const mpaso = Symbol("μπασο");
const kithara = Symbol("κιθαρα");
const drums = Symbol("Drums");
const armonio = Symbol("αρμονιο");


band[mpaso] = "μπασιστας ";
band[kithara]= "κιθαριστας";
band[drums]= "ντραμιστας ";
band[armonio]= "armonio player";

console.log(band);
console.log(band[mpaso]);
console.log(drums.toString()); */


/* const a = Symbol("alpha");
const b = Symbol("alpha");

console.log(a === b);// false ta symbol einai unique den exei shmasia to value tous

//alert(a);//type error ta symbol den kanoun auto convert se string
alert(a.toString());

 */
/* 
const poet = {};

const fullName = Symbol("fullName");
const dateOfBirth = Symbol("Birth_Date");
const famousQuotes = Symbol("Famous_quotes of great quotes");


poet[fullName] = "Odysseas Elytis";
poet[dateOfBirth] = "1911";
poet[famousQuotes] = [
    "Πιασε το ΠΡΕΠΕΙ απο το ιωτα και γδαρε το μεχρι το πι",
    "Κανε αλμα μεγαλυτερο απο τη φθορα"
];

console.log(poet);

console.log(poet.fullName);
console.log(poet[fullName]);
console.log(famousQuotes.description); */



/* 
const timeSTamp = Symbol ("Δημιουργικη Περιοδος");

const modernGreekPoets = {
     [timeStamp]: "1900 - 1999"
}

modernGreekPoets[fullName] = Symbol("Συγχρονοι ελληνες ποιητες");
poet[modernGreekPoets[fullName]] = fullName;
console.log(modernGreekPoets);
console.log(poets); */


/* for (keys in poet) {
    alert(keys); */
/* } *///αγνοει τα symbols
/* 
Object.keys(poet); //

const greekFamousPoets = {};
Object.assign(greekFamousPoets, poet);
console.log(greekFamousPoets);

const greekPoetsMagazine = symbol.for("περιοδικο ποιηση");

console.log(greekPoetsMagazine === magazine);
let greekPoetsMagazine = symbol.for("Περιοδιοκο τεχνη");

console.log(greekPoetsMagazine=== magazine);

//symbols
console.log(object.getOwnPropertySymbols(poet));
//show symbol keys
console.log(reflect.ownKeys(poet)); */

/* 
let id= Symbol();
let idAgain = Symbol.for("id");
alert( id === idAgain); //false , why ?

let id = symbol.for("id");
let idAgain = symbol.for("id");
alert(id === idAgain); //true why ? */


/* var map = {};
setProp(map);
setProp2(map);

function setProp(map) {
    map.prop = "version 1";
}
function setProp2(map) {
    map.prop = "version 2";
}


console.log(map); */

/* 

Number("6")// explicit

1 == null;
2/"5" //implicit
 */
//to string 
let myNewNumber = string(2109876432);// explicit
let myNewNumber2 = 2109876432 + ""// implicit
//special for symbol
let myNewPhone = Symbol.for('telephone');
//let tel = myNewPhone + "";//TypeError
let tel = toString(myNewPhone);
console.log(typeOf tel, typeof myNewPhone);

a. string mode : number + string --> string + string --> return result
b. Number mode : boolean + number --> 
//to boolean
implicit && ||
explicit if (2) {}

//to number 
number("")

null --> 0
undefined --> NaN

true + false