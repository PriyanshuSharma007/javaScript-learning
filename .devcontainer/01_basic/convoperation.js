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

let value= 2  
let negativeValue= -value // this makethe orignal value negative 
console.log(negativeValue);   

// lets do concatenation of two string or more 
let name1 = "priyanshu" 
let surname = " sharma" 
let fullName = name1 + surname 
console.log(fullName); 

// exception in js 
// Note** 
/*in javaScript the type of data is there in concatenation it will
 make it to that type if string i there then string of number is 
 there then add them all and give final output*/
console.log("1"+2+3);  // it will give out put as 123 
console.log(1+2+3+"4"); // it will give outputas 64 