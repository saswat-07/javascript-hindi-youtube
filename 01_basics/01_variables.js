const accountId = 223344
let accountEmail = "saswat@email.com"
var accountPassword = "1234"
accountCity = "Pune"

// accountId = 32 // not allowed

accountEmail = "random@email.com"
accountPassword = "2322"
accountCity = "BBSR"
let accountState;

console.log(accountId);

/*
 Prefer not to use 'var'
 because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])