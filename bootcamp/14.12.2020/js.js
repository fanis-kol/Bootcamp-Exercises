//for loops 

//for(let a = 0, b = 0; a < 10 && b < 50; a++, b+=5) {
 //  console.log(a,b)
//}

//enumerable && iterable

//for...in

//for (let prop in ["a", "b", "c"]);
//console.log(prop);

//for(let prop in "hola mundo!"){;
//console.log(prop);
//}

//const obj = {
 //   a: 1,
 //   b: 2,
 //   c: 3,
 //   d: 4
//}
// gia na bgoun ta keys bazeis to elem, gia na bgalei tiw times console.log(`${elem} = ${onj[elem]}`);
//for (let elem in obj){
 //   console.log(elem)
//}

//const string = "hola";
//for (let character in string) {
//    console.log(string[character])
//}

//const arr = ["dwarf", "wizard", "paladin"];
//for (let i in arr){
 //   console.log(arr[1]);
//}
//error
//for(let val of {a: 1, b: 2, c: true}){
//console.log(val);}
//correct
//for (let val of "string"){
  //  console.log(val);
//}

//for each
//const array = ["a", "b", "c"];
//array.forEach(function(elem){
//console.log(`printing ${elem}`);
//});



//console.log(object.entries("necromancer"));

//var student = {
  //  name : "john doe",
   // sclass : "vi",
   // rollno : 12
//};

//for ( let prop in student) {
//console.log(prop)
//}

//const theBeast = {
  //  name: "Roxy bubuno",
    //strenght: 25,
    //stamina : 12,
    //intelligence : 14,
    //weapons: ["big sword","axe"],
    //spells: ["fine", "vortex"]

//}

//function count(obj){
//return Object.keys(obj).length
//}

//alert(count(theBeast));


//const dwarf = {
  //  name: "thorin",
  //  strength: 25,
  //  stamina : 15,
  //  intelligence: 11,
  //  weaponry: {
   //     axe:1,
   ///     sword:2,
   //     armor :{
   //         hasArmor: true,
   //         madeFrom:"iron",
   //         value: 12
   //     },
  //  shield:true
//}
//}

//let {strength, stamina, intelligence} = dwarf;
//console.log(strength);

//οbject cloning

//via empty object && for .. in loop

//const durin = {};

//for (let key in dwarf ) {
 //   durin[key] = dwarf[key];
//}

//durin.name = "durin";
//durin.intelligence = 15;


//console.log(dwarf);
//console.log(durin);

//cloning via object.assign

//const dorin = {
    //name: "dorin",
   // strenght : 15,
  //  stamina : 18

//}

//let dorinClone = {};

//if a copied property name already exists then it gets overwritten
//let dorinClone = {stamina: 2}

//let dorinRope = { material:"iron", magic: +4};
//let dorinRing = {resistance : +5};

//Object.assign(dorinClone,dorin,dorinRope,dorinRing);
//console.log(dorin);
//console.log(dorinClone);

//dorinClone.name = "DorinTest";
//console.log(dorin,dorinClone);

//const player = {
  //  name : "antorio"

//}
//player.name = "tony";


//console.log(player);

/*Δημιουργήστε ένα object που θα έχει πληροφορίες για το
 αγαπημένο σας κοκτέιλ.
Θα πρέπει να έχει properties για title (string),
 servings (number), και ingredients (array of strings).
Σε ξεχωριστή γραμμή θα πρέπει να τυπώνεται τόσο το όνομα
 του κοκτέιλ (one console.log statement for each),
όσο τις μερίδες και τα υλικά:
YourCoctail
Serves: 2
Ingredients: []*/

const coctail = {
    title : "mojito",
    servings : 1 ,
    ingredients : ["roumi", "lime", "siropi zaxarhs", "duosmos"]
    
}

console.log(coctail.title);
console.log(coctail.servings);
console.log(coctail.ingredients);

for (let i = 0; i < coctail.ingredients.length; i++){
    console.log(coctail.ingredients[i]);
}