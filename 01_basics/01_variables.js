const accountId = 144553
let accountEmail = "oishee@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

console.log(accountId);

/*
Prefer not to use var
because of isuue in block space and functional scope
*/

accountEmail = "cat@gmail.com"
accountPassword = "231451"
accountCity = "Dhaka"

console.table([accountId, accountEmail, accountPassword, accountCity])