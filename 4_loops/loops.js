const arr = [1, 2, 3, 4, 5] //array

for (const num of arr) {
   // console.log(num);

    
}

const greetings ="hello world" //sttring

for (const greet of greetings) {
   // console.log(`each char is ${greet}`);
    
}


// maps is object holds collection of  key value pair
// no duplicate values only unique values

const map = new Map()
map.set('IN',"India")
map.set('usa',"america")
map.set('fr',"france")

//console.log(map);
for (const [key, value] of map) {
    console.log(key, ':-', value);
    
    
}

