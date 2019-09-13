function fizzbuzz (maxvalue){ for (let i = 0; i <=  maxvalue; i++){
   if (i % 2 === 0){
       console.log("fizz") 
   }
   else if (i % 3 === 0){
        console.log ("buzz")

   }
   else if ( i % 2 === 0 && i % 3 === 0 ){
       console.log ("fizzbuzz")
   }
   else {console.log (i)}
}
}
console.log (fizzbuzz(100))
