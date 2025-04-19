class User {                                                     //class user
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{                               //User inherited by Teacher class
    constructor(username, email, password){              //constructor of teacher
        super(username)                                  //syntax to hold reference of parent class variables,called super constructor
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")              //object of Teacher

chai.logMe()
const masalaChai = new User("masalaChai")

masalaChai.logMe()

console.log(chai instanceof User);            //to check if chai was inherited by User