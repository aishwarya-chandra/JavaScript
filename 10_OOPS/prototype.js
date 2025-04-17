// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);
//challenge: to make trueLength a method which could be used with any string.


let myHeros = ["thor", "spiderman"] //a array


let heroPower = {                   //an object
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){      //injected hitesh as a property for the JS object
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){    //injected heyHitesh as a property for the JS array
    console.log(`Hitesh says hello`);
}

// heroPower.hitesh()      //works as hitesh was injected in object's property
// myHeros.hitesh()        //works because arrays are inherited by objects
// myHeros.heyHitesh()     //works as heyHitesh was injected in array's property
// heroPower.heyHitesh()   //does not work as heyHitesh is not property of object, i.e array the child have it not the parent

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport   //TASupport can access all properties of TeachingSupport
}

Teacher.__proto__ = User //teacher can access all properties of user

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)
//gives access of teacher properties to teachingSupport


//the challenge solution
let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);               //jis ka matlab this , i.e, this will return reference of jisne call kiya
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()