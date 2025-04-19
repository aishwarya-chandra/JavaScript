const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const chai = {                                //an object
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));         //tells the properties

Object.defineProperty(chai, 'name', {                             //can change if a property could be enumerated,configurated etc.
    //writable: false,
    enumerable: false,                                           //the loop over property "name" is stopped
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {                  //loop over object to check if enumeration is stopped
    if (typeof value !== 'function') {                            //do not loop on the functions of the object
        
        console.log(`${key} : ${value}`);
    }
}