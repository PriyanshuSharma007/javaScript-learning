let Name= "Priyanshu" 
let age= 23 
let mobNo= "1234567890"  

/* this is called conactenation in java script and it called string interopolation
we can add any thing in the same line using dollar and curly braces  */ 
console.log(`hey my name is  ${Name} and i m ${age} year old and my phone number is ${mobNo} `);

//  we can also define the string in object type using new keyword

const gameName =new String('priyanshu') 
// we can use any function of string only by adding dot nd function name to that string variable 
// ex 
console.log(gameName.toUpperCase()); 
//  to find length of the string 
console.log(gameName.length); // used to find the length o fthe string 
console.log(gameName.charAt(5));  // used to find the character at that index
console.log(gameName.indexOf('u'));  // used to the index of that character
 
// to remove unwanted space from the string from start or end we use trim() function  
 const newstring= new String("    hey im priyanshu can u help me    ")
console.log(newstring); 
console.log(newstring.trim());



