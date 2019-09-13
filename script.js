const numbers = []
function fizzBuzz (maxValue){ 
    for (let i = 1; i <=  maxValue; i++){
   if ( i % 3 === 0 && i %  2 === 0 ){
    numbers.push ("FizzBuzz, ")
   }
   else if (i % 2 === 0){
       numbers.push ("Fizz, ")

   }
   else if (i % 3 === 0){
    numbers.push ("Buzz, ") 
   }
   else if(! i % 2 === 0 || !i % 3 === 0){ 
   numbers.push (i+ ", ")
} 
}
 return numbers;

}

console.log (fizzBuzz(100))
