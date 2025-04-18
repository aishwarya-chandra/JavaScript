function SetUsername(username){
    //complex DB calls
    this.username = username           //here this holds reference in setUsername which gets flushed out once setUsername function is called and worked on thus loosing reference of username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)    //the function is passed this of the createUser context so it hold the username reference in createUser
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);