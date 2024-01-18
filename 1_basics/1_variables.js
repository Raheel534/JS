const accountId = 12233 //value cannot be changed in const
let accountEmail = "raheel@123.com"
var accountPassward ="7890"
accountCity = "hyderabad" 
let accountState;// not giving value gets undefined 

//accountId = 2 // not allowed

accountEmail = "raheel1212@hh.com"
accountPassward = "33333333333"
accountCity = "pune"
 
console.log(accountId);

// for getting the data in tabular form we use below table function

console.table([accountId, accountEmail, accountPassward, accountCity, accountState]);

  