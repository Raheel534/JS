/*function sum(num1, num2){
let result = num1 + num2 
return result    
}
const result  = sum(3,3)
console.log("Result:",result);
*/
function loginusermessage(username){
    if(username === undefined){
        console.log("please enter your username");
        return/*when we give return here the codes after 
        the return will not work*/
        //use backticks `` 

    }
    return `${username} just logged in`
}
//console.log(loginusermessage("Raheel"))
console.log(loginusermessage()) 