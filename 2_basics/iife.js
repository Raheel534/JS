//Immediately Invoked Function Expression(IIFE)
/* we use iife for avoid the problem from pollution of global scope varialbles
we use iife for removing that problem 
and for immediatly execution  */

(function chai(){
    //chai() is named iife
    console.log(`Db connected`);

})();
//when we use iife then we sholud end the line by semicolon;
//then only we can use for next function or code
// ()();

//we can use the function in parantheses and can use paranthese for caling directly

//by arrow function directly
 ((name) => {
    //simple iife no name or no function name is  given
 console.log(`DB connected againn ${name}`);
 })("raheel")