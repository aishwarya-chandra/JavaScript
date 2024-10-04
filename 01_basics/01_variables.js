const accountId = 144553
let accountEmail = "chaish@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed

accountEmail = "hc@hc.com"
accountPassword = "121"
accountCity = "Bengaluru"

console.log(accountId);
console.table([accountEmail, accountPassword, accountCity, accountState])

/*
Prefer not to use var
because of issue in block scope and functional scope
var have no control on scope, it chnages everywhere 
if same variable name is used
 */
