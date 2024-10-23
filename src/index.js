
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


  console.log(dummyArray3);


  
  let body = document.querySelector('body');


  function  isPrime(num) {
    let isPrime = "true"
    if ( num == 1 || num == 2 )  {isPrime = true  }
    else{
    for(let i = 3 ;  i <= num/2; i++) {
          if (num % i == 0)  { isPrime = false; }
    }
    }
    return isPrime;
  }

  function addPrimeNumbers(n) {
    for(let i = 1 ; i <= n; i++  ) {
      if(isPrime(i)){ console.log(i)
      let pText = document.createElement('p');
      pText.textContent = `${i}`  
      body.appendChild(pText) ;   
    }
    }
    // add timeout to delay the alert 
    setTimeout(() => {
      window.alert('calculation is finished')
     }, n/10);
  }
 
  addPrimeNumbers(1000)




  