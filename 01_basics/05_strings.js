const name = "Aish"            //denote by double or single qoute
const repoCount = 50

// console.log(name + repoCount + " Value"); //bad method

//good method - string interpolation , make placeholder ${} for variables
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('ch-aish')

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(4));
// console.log(gameName.indexOf('s'));

const newstr = gameName.substring(0 , 4) //start inclusive end exclusive
// console.log(newstr);

const otherstr = gameName.slice(-6 , 4) //negative indexing allowed
// console.log(otherstr);

const newstr1 = "   aish    "
// console.log(newstr1);
// console.log(newstr1.trim()); //removes spaces

const url = "https://aish.com/aish%20ch"
// console.log(url.replace('%20', '-'));
// console.log(url.includes('ch'));
// console.log(url.includes('chaish'));

// console.log(gameName.split('-'));



 
