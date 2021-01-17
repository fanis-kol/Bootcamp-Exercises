/* /* /* /* /* shift alt a  */

/* 
function dataFlair ( employee, client ) {
  // client and employee creating a cyrcle
    client.assistant = employee;
    employee.inquizer = client;
    return {
        admin: employee,
        user : client
    }
}
// function call with arguments
var company = dataFlair({
    name:"john" // employee name
}, {
    name:"tony" // client name
})

//release memory
delete company.admin;
delete company.user.assisant; 


// askhsh redudunt
function someLargeArray() {
    return new Array(1000000);
}
var exampleObj = {
    "value1": someLargeArray(),
    "value2": someLargeArray()
}

console.log(exampleObj.value1);
*/



// this in global
/* 
function thisDemo() {
    console.log("simple function call");
    console.log(this === window);
}

thisDemo();

//globalThis ECMAscript 2020
console.log(globalThis === window);

function mfunc () {
    console.log(globalThis);
}

new mfunc(); */


// global example
/* var myVar = 100;

function whoIsThis(){
    var myVar =200;
    alert(`myVar = ${myVar}`)//function myVar = 200
    alert(`this.myVar = ${this.myVar}`);//global myVar = 100
}

whoIsThis();//window.whoIsThis */


//this in function constructor
/* function Person (name) {
    console.log(this);
    this.name = name;
    this.show = function(){
        console.log(this.name);
    }
}

let gangsta = new Person ("Tony Montana");
gangsta.show();

let actor = new Person("al patsino");
actor.show();

//this in object methods
const anna = {
    first: "Anna",//property
    says(text){   //method
       return `${this.first} λεει "${text}"`;
    }
} */
/* 
anna.says("καλα χριστουγεννα!");


let anna = {
    first: "Anna",
    married: false
}

anna.says = function(text){
    return `${anna.first} λεει "${text}"`;

};

console.log(anna.says("kala xristoygenna!"));
let tonia = anna;
tonia.says("twra twra twra");// type error
 */
// this in object methods

/* let person = {
    name: "vasilh",
    show: function(){
        console.log(this, this.name);
    }
}

person.show();// object {name : vasilhs , show :show()}, this.name = vasilhs

let other = {
    name : "mary"
}

other.show =person.show;
other.show (); // object {name : "mary", show : show()}, mary

function myFunction () {
    console.log ("this is a function call");
    console.log(this === window);
}

let newPerson = {
    count : 10,
    simpleMethod : myFunction,
    anotherSimpleMethod: function(){
        console.log(this === window);//false anaferetai sto new person oxi sto window
    }
}

newPerson.simpleMethod(); // tha ferei to myFunction kai false
newPerson.anotherSimpleMethod();// pali false giati den anaferetai sto globla alla sto new person

 */
//event handles && this

//let button = document.querySelector(".btn");
//button.addEventListener('click', function(){
  //  console.log(this);// h anafora einai sto event dld sto button
//});


/* //askhsh 
function makeUser() {
    
    return {
        name : "john",
        ref(){
            return this;
        }
       

}; */

// this in strict mode vs slopy mode

/* function strictDemo (){
    'use strict' 
    console.log("strict mode function call")
    console.log(this === window);
}

strictDeomo(); */
//this in functions II
/* function makeWish (){
    alert(this.wish)
}


let christmas = { wish :"kala xristoygenna!"};
let newYear = { wish : " kalh xronia !"};
christmas.method =  makeWish;
newYear.method = makeWish;

christmas.method();
newYear.method(); */

//call() bind() apply()

//arrow functions
//function name() {}//function declaration

//add(3,5);
//function add(a,b) => {return a+b} // arrow function

//function expression   
//function add(a,b) {return a +b} // function declaration
//function add(a,b) => {return a+b} // arrow function
//const add = function(a,b){ return a + b} /function expression
/* 
const fun = function () {};
const arrowFun = () => {} //  h domh tou
console.log(fun.prototype);
console.log(arrowFun.prototype);

const greatBob = ["Dylan", "Marley", "O sfouggarakis", "o mastoras"];
const fullBob = greatBob.map((name) => {
    return `bob  ${name}`;

});

console.log(fullBob);

const fullBob2 = greatBob.map(name => {
    return`bob ${name}`;
})

const fullBob3 = greatBob.map(name => `bob ${name}`);

const blueJean = {
    fullName: "Levis 501",
    color: "blue",
    print: function(){
        console.log(`${this.fullName}) is {this.color}`);

    }
}

blueJean.print();


const blackTshirt = {
    fullName: `T-Shirt`,
    color : 'black', */
  /*   print: function(){
        setTimeout(function(){
         console.log(`${this.fullName} is ${this.color}`);

        }, 1000);
    }
}
 */

/* print: () => {
    setTimeout(() => {
        console.log(`${this.fullName} is ${this.color}`);
    
   },1000);
 }
} 
 */
/* 
function ask(question, yes,no) {
    if (confirm(question)) yes()
    else no();
}

ask {
    "do you agree?",
    function(){ alert("you agreed.");},
    function(){ alert("you caneled the exucution");}
}


const ask (question, yes, no) => {
    if (confirm(question)) yes()
       else no();
 }​​
    
    ask ( 
    "Do you agree?",
    () => alert("You agreed."), 
    () => alert("You canceled the execution.")
    )
} */


/* const studentA = {
    firstName : "Hraklis",
    hobbies: ["modeling", "tai chi", "cooking"],
    printName  : () => {   //undefined epeidh den exei to arrow function this scope , an ginei kanoniko function to vlepei
        return this.firstName
    },
    printHobbies : function() {
        this.hobbies.map(function(hobby){
          console.log(`${this.firstName} likes ${hobby}`)
        })
    }
}

console.log(studentA.printName()); */

//ftiaxnwntas object
/* const myObj = {}; // object literal
const myObj2 = new Object();//ftiaxnw object me th methodo//new constructor

const myStr = new String("lola");//string me ton idio tropo

 */

//constructor
