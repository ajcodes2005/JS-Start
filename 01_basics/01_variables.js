const accountId = 357246 
let accountEmail = "primenumber2@gmail.com"
var accountPassword = "Ajay123@"
accountCity = "Ranchi"
let accountState;

/* prefer not to use var 
because of issue in block scope and functional scope */

// accountId = 2
console.log(accountId);
console.log(accountEmail);


accountEmail = "irrationalnumber2@gmail.com"
accountPassword = "Ajay123$"
accountCity = "Jamshedpur"

console.table( [accountId, accountEmail, accountPassword, accountCity, accountState] )


