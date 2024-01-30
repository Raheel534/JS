const coding = ["js", "ruby", "java", "python"]

//coding.forEach(function(item){
//console.log(item);
//})

// coding.forEach( (item) => {
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

const mycodding = [
    
    {
        languagename: "javascript",
        languagefile: "js"
    },
{
        languagename: "python",
        languagefile: "py"
    },
    {
        languagename: "java",
        languagefile: "java"
    }
]

// array k andar -object k andar -uski ak value nikali hai
// used in database for arrays
mycodding.forEach( (items) =>{
    console.log(items);//as itis same input as output total same
    console.log(items.languagename);//only languagenames as output
    console.log(items.languagefile);// only languagefile as output
})
