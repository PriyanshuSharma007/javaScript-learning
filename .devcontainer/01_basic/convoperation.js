let score ="45"
console.log(typeof (score));

// here we use tyoe conversion from one data type to another it is called type conversion

let number = Number (score)
console.log(typeof(number)) 

 // another example  
 let score1= "33abc"

//  convert it into a number 
let number1= Number(score1) 
console.log(number1); 
//  this will print some thing different that is " NaN "--> means not a number so chk it properly as it is number or an alpha numerical number 

// let do it for boolean data type 
let isLoggedIn= 1
let isLogIn =Boolean(isLoggedIn) 
console.log(isLogIn); 

// 1=> true ;  0 => false 
// " " => false 
//  "hey" => true  

// we can convert string as well