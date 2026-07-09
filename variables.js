const accountId = 144553
let accountEmail = "mukund@github.com"
var accountPass = "12344" // not used generally because of issue in block scope and functionalscope
accountCity = "Jaipur" // can be done but not recommended

let accountState; // will be undefined till intialised

// accountId = 2
console.log(accountId);

accountEmail= "mukund@hdfc.com"
accountPass = "3456"
accountCity = "Jaya"

console.table([accountEmail,accountPass,accountCity,accountState]) 
