const mynums = [ 1, 2, 3, 4, 5, 6, 7]
// writing reduce by function
// const total = mynums.reduce(function(accumltor , curntvalue){
//     console.log(`acc: ${accumltor} and currr: ${curntvalue}`);
//  return accumltor+curntvalue
//  //console.log(`acc: ${accumltor} and currr: ${curntvalue}`);
// }, 0 )
// console.log(total);

// writing reduce by arrow function

// const total = mynums.reduce( (acc,curr) => acc+curr,0)

// console.log(total);


const shoppingcart = [ 
    {
        itemname: "js course",
        price: 3000
    },
    {
        itemname: "python course",
        price: 2000
    },
    {
        itemname: "web course",
        price: 5000
    },
    {
        itemname: "dsa course",
        price: 1000
    },
]
 const mytotal = shoppingcart.reduce( (acc, item) => acc + item.price, 0 )
console.log(mytotal);