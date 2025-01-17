const accountId = 144553               // constant , not changeable
let accountEmail = "chaish@gmail.com"  // let -variable , changeable
var accountPassword = "12345"          // var -variable , changeable
accountCity = "Jaipur"                 // reserve memory without writing anything 
                                       // tho not good practise

// only declared not initialized
let accountState;                      // gives undefined if printed

// accountId = 2           error

accountEmail = "hc@hc.com"
accountPassword = "121"
accountCity = "Bengaluru"

console.log(accountId);

// to print in tabular structure
console.table([accountEmail, accountPassword, accountCity, accountState])

/*
Prefer not to use var
because of issue in block scope and functional scope
var have no control on scope, it changes everywhere 
if same variable name is used
 */
