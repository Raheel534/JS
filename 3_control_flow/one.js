let age= 20
if(age<1){
    console.log("new kid")
}
else if(age<10){
    console.log("child")

}
else if(age>10 ){
    console.log("teen")
}
else{
console.log("men")
}
    









const userLoggedin = true
const debitcard = true
const loggedinfromGoogle = false
const loggedinfromEmail = true

if(userLoggedin && debitcard && loggedinfromEmail){
    //&& means and cheking true or not if anyone is not true then not be executed
console.log("allow to buy the courses");
}

if(loggedinfromGoogle || loggedinfromEmail){
    //|| means or if any one condition is true the code will be executed 
    console.log("user logged in");
}