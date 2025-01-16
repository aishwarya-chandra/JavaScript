//var c = 300
let a = 300            // global scope
if (true) {
    let a = 10
    const b = 20                   //block scope
    //var c = 30
    // console.log("INNER: ", a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);

//nested scope
function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);  //out of scope

    two()

}
// one()


 
if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website); //out of scope
}

// console.log(username); //out of scope


// ++++++++++++++++++ interesting ++++++++++++++++++

//function
console.log(addone(5)) //works

function addone(num){
    return num + 1
}


//expression
addTwo(5) //error as not initiliazed
const addTwo = function(num){
    return num + 2
}