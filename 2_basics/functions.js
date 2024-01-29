  /*function sum(num1, num2){
let result = num1 + num2 
return result    
}
const result  = sum(3,3)
console.log("Result:",result);
*/
function loginusermessage(username){
    if(username === undefined){
       // console.log("please enter your username");
        return/*when we give return here the codes after 
        the return will not work*/
        //use backticks `` 

    }
    return `${username} just logged in`
}
//console.log(loginusermessage("Raheel"))
//console.log(loginusermessage()) 


//trying with object and paSSING TO FUNCTION
const user = {
    username: "Raheel",
    age: 22
}
/*here we are creating the object with name user and giving keys and values
then we are declaring a function with name "handleobject" and 
in brakets anyobject, if using array anyarray
thenin function by consolelog using backticks `` giving below code
anyobject.username and anyobject.age
then calling that function by giving the user that is object name */
function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and age is ${anyobject.age} `);

}
handleobject(user)
//or direct giving values when calling
handleobject({
    username:"raheel",
    age: 23
})


//trying with array passing in function

const mynewarray =[100, 200, 300, 400 ]
function returnsecondvalue(getarray){
return getarray[1]
}
console.log(returnsecondvalue(mynewarray));
/* in above first we declre array with name (mynewarray)
then taking a function with any name like (returnsecondvalue)
then in function we should give a PARAMETER getarray and 
then we are returning thr getarray[1] which is of the function
then we are printing the function which the answer we want by giving
our array in that function
see this carefully CONSOLE.LOG(RETURNSECONDVALUE perform this function in .,,from(MYNEWARRAY))*/ 