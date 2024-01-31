const mynums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ,10]

//const newnums = mynums.filter( (num) => num > 4 )
//const newnums = mynums.filter( (num) => {
    //return num > 4  ("if open scope return keyword should be used ")
//  } )
// console.log(newnums);

// const newnums = []
//  mynums.forEach( (num) => {
//     if(num > 4){
//         newnums.push(num)
//     }
//  } )

//  console.log(newnums);


const books = [
    {title: "book one", about: 'fiction', publish: 1982},
    {title: "book two", about: 'non-fiction', publish: 1989},
    {title: "book three", about: 'history', publish: 1992},
    {title: "book four", about: 'non-fiction', publish: 1995},
    {title: "book five", about: 'science', publish: 2000},
    {title: "book six", about: 'fiction', publish: 2005},
    {title: "book seven", about: 'history', publish: 2010},
    {title: "book eight", about: 'science', publish: 1982}
]

//const userbooks = books.filter( (bk) => bk.about === "science")

const userbooks = books.filter( (bk) => { return bk.publish >= 2000} )

console.log(userbooks);
