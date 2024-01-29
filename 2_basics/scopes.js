var c = 30;
//let b = 20;
const m =10
 //console.log(c);
 //console.log(b);
 //console.log(a);  
 
 var a = 10
 {
    var a = 200 
    // var is global scope
    //let is block scope
    
 }
 //console.log(a)



 //********************* */\
//nested scope
function one(){
    const username ="raheel"
    function two(){
        const website ="ytube"
        console.log(username);
    }
   // console.log(webiste)
    two()
}
one()
/*from above nested function
the child can access the values of parent but
 the parent cannot access the values of child */


 //by using is statement
 if (true){
    const username = "raheel"
    if(username === "raheel"){
        const website = " youtube"
        console.log(username + website);
    }
    //console.log(website);
 }
 //console.log(username);


 //********************************** */
 //method1
 function addone(num){
    return num + 1
 }
 addone(5)
 //when we call this function then it will retuen 5+1=6
 
 //other way of declaring function is 
 //declaring it in variable
//method 2

 const addtwo = function(num){
    return num + 2
 }
addtwo(5) 
//when we call this function then it will return the value
// num +2 ie 5+2=7

// imp note 

//in {method one} if the function is called before the 
//declartion of function then it will give the answer

// in {method two} if we call function before declaration 
//we get error because the function is declared in variable 
//or stored in variable.
