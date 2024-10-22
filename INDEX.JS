
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
flatArray = []
const dummyArray1 = flatten([1,2,[1,2,3,[1,2,3]],2,5,[5,6,4]])
console.log(dummyArray1)

// [
//     1, 2, 1, 2, 3, 1,
//     2, 3, 2, 5, 5, 6,
//     4
//   ]
const dummyArray2 = flatten([1,2,[1,2,3,[1,2,3,[10,11,12,13,14]]],2,5,[5,6,4]])
console.log(dummyArray2)

//[
//     1, 2, 1,  2,  3,  1,  2,  3, 2,
//     5, 5, 6,  4,  1,  2,  1,  2, 3,
//     1, 2, 3, 10, 11, 12, 13, 14, 2,
//     5, 5, 6,  4
//   ]


function trampoline(fn) {
    return function trampolined(...args) {
      let result = fn(...args);
  
      while (typeof result === 'function') {
        result = result();
      }
  
      return result;
    };
  }
  flatArray = []
  const trampolineFlatten = trampoline(flatten);
  const dummyArray3 = trampolineFlatten([1,2,[1,2,3,[1,2,3,[10,11,12,13,14]]],2,5,[5,6,4]])


  console.log(dummyArray3)