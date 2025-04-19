//getter and setter are the special methods introduced in ECMAScript 5 (ES5 2009) that allow us to retrieve and modify the values directly without directly changing the object property.
//The getter uses the get keyword and the setter uses the set keyword to modify and retrieve the values.

class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }
                                                         //getters & setters overwrite the constructor
    get email(){
        return this._email.toUpperCase()                 //used this._email because that is what is set by setter. 
    }
    set email(value){
        this._email = value                             //used this._email because using this.email will cause a race condition of setting email to this.email by both setter and constructor
    }

    get password(){                                     //getters always return something
        return `${this._password}hitesh`                //but the retrieved value of the object property is modified
    }

    set password(value){                                //setters never return anything, but take something in parameter
        this._password = value                          //here normal abc is set in the object property
    }
}

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.email);