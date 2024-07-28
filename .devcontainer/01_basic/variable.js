const accountId=1234
let accEmail = "priyanshu3808sharma@gmail.com"
var accPassword = "heyhello"
 accountCity ="jaipur"

// accountId= 1234  this cannot be allowed as the const variable can not be change once declared 

/* in javascript const and let is used to declare variable in the scope of block and 
var is global varibale can be changed anywhere in the code  so prefer to use let and const in the code 
*/ 
//  in java script if we declare a variable without the value it is consider to be undefined it self
console.log(accountId);  
accEmail="dbheb@gmail.com" 
accPassword="mndcksdjh"
accountCity="dehradun"  
let accState;
//  we can use console.table to print the value in the same line in the form of table
console.table([accEmail, accPassword, accountCity, accountId, accState]);

