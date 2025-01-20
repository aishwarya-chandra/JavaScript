// singleton
// Object.create //constructor method

// object literals

//declared a symbol
const mySym = Symbol("key1")


const JsUser = { //keys: value
    name: "Aishwarya",
    "full name": "Aishwarya Chandra",
    [mySym]: "mykey1",
    age: 18,
    location: "Delhi",
    email: "aish@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "aish@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "aish@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);  //this used to refer to same object
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());