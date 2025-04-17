const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
        //this tells about the current context.
    }

}

//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);

function User(username, loginCount, isLoggedIn) {
    // myusername = username;
    this.username = username;    //here this.username is equivalent to myusername
    this.loginCount = loginCount;   //i.e, this is used to take the User function arguments in variables under the User function
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

//new keyword is used to create a new instance of the object.{empty and new copy of the object}
//constructor functions is called because of new keyword, it packs all arguments and gives you.
//this keyword injects all these arguments, this.username = username
//the functions now holds the arg in its own made variable storage of that particular instance.
const userOne = new User("aish", 12, true)
const userTwo = new User("Code", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);

//read instanceOf in javascript