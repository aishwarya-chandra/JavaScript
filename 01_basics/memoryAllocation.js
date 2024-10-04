//Stack(Primitive data type) - saves a copy
//Heap(Non-Primitive data type) - gives a reference
let name = "Aishwarya"
let anothername = "Tannu"
anothername = "Betu"

console.log(name);
console.log(anothername);

let userOne = {
    email : "user1@gmail.com",
    upi : "user1@upi"
}

let userTwo = userOne
userTwo.email = "tan@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

