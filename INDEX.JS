
let count = 0 ;
function increment(n) {
     n++;
     count ++;
    increment(n) 
   
}

try {
    increment(count)
} catch (error) {
    console.log(count)
    console.log(error)
}

// I got the count of  12563 

let flatArray = []
function flatten(arr) {
    if (Array.isArray(arr)) 
       arr.forEach(element => {
         return flatArray.concat(flatten(element))
    });
    else  flatArray.push(arr)
    return flatArray ;
}

const dummyArray = flatten([1,2,[1,2,3,[1,2,3]],2,5,[5,6,4]])
console.log(dummyArray)

// [
//     1, 2, 1, 2, 3, 1,
//     2, 3, 2, 5, 5, 6,
//     4
//   ]