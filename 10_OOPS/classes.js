// ES6

class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){                                  //method of the class
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}
 
const chai = new User("chai", "chai@gmail.com", "123")       //object instantiated from the class User

console.log(chai.encryptPassword());
console.log(chai.changeUsername());

// behind the scene without syntactical sugar of classes

function User(username, email, password){                //a function user
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){              //as function is also an object datatype in js, using .prototype to inject a new function in it
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "tea@gmail.com", "123")     //object of the function

console.log(tea.encryptPassword());
console.log(tea.changeUsername());