const user = {
    username: "raheel",
    price: 999,

    welcomemessage: function(){
        console.log(`${this.username} , welcome to this website`);
        console.log(this);
    }
}
//user.welcomemessage()
//user.username = "munnu"
//user.welcomemessage()

// function chai(){
//     let username = "raheel"
//     console.log(this);
// }
// chai()



//********************
//arrow function

const chai = () => {
let username = "raheel"
console.log(this);
}
// chai()


// basic syntax for arrow function
//() => {}
//arrow function can be hold by values 
//parameters in "()"
// const addtwo = (num1, num2) => {
//     return num1  + num2

// }

// if we use curly braces return keyword shoiuld be used


//other way in single line
// not giving baraces then no need of return keyword

// const addtwo = (num1, num2) =>  num1  + num2

//when parantheses are used no need of using return keyword
// const addtwo = (num1, num2) =>  (num1  + num2)

//for returning the object 

// const addtwo = (num1, num2) =>  {username: "raheel "} it
// gives undefined so the object shuold be in parantheses 

const addtwo = (num1, nunm2) => ({username:"raheel"})
console.log(addtwo(3, 4));
