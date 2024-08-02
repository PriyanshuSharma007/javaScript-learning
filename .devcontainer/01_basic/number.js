const num= 100 //in this we declare a number with value 100 in simple way 
console.log(num); 


const num1 =new Number(100) // but in this the value 100 is definately the number as we defined it in the type of varibale 
console.log(num1);  

// there are different methods that are used in number for ex 
console.log(num1.toString().length); 
console.log(num1.toFixed(2));

//+++++++++++++++++++++++++++++++maths+++++++++++++++++++++++++++++++++++++++
 
console.log(Math.abs(-98));
console.log(Math.round(4.984));
console.log(Math.ceil(4.9838));
console.log(Math.floor(48.948));
console.log(Math.min(1,2,3,4,5,6,67,34));
console.log(Math.max(1,2,3,4,4,3434,535,3,355553)); 

// there is one function that is math.random that provide a value betweem 0 nd 1 only 
console.log(Math.random());
console.log((Math.random()*10)+1);  // to make the value grter then one 
//  we can use floor function nd random function together
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min))+min);


