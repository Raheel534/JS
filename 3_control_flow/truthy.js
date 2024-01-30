const userEmail = []
if(userEmail){
    console.log("got user email");

}else{
    console.log("dont have Email");
}

//falsy values
// false, 0 -0 , bigint 0n , "", null, undefined, nan

//truthy valuse

// "0", 'false', " ", [] , {} , function(){} 

// if( userEmail.length === 0){
//     console.log("array is empty");
// }

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
console.log("object is empty");
}


// Nullish Coalescing Operator(??) : null undefinrd


let val1;

// val1 = 5 ?? 10  ( 5 )
// val1 = null ?? 10  ( 10 )
// val1 = undefined ?? 15   (  15 )

// console.log(val1)



// Terniary Operator 

// condition ? true : false 

const cigpack = 100 
cigpack <= 80 ? console.log("less than 80") : console.log("greater than 80");

