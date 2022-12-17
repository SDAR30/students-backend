function replaceAll(input, find, replace) {
  if (!input && !find) return replace;
  if (!find) return replace + input.split('').join(replace) + replace
  let result = '';

  for (let i = 0; i < input.length; i++) {

    if (input.slice(i, i + find.length) == find) {
      result += replace
      i += find.length - 1;
    } else {
      result += input[i]
    }
  }

}

// console.log(replaceAll('', '', '-'))
//console.log(replaceAll('Hello world Orlando ore', 'o', '-'))


// const isPrime = num => {
//   for (let i = num - 1; i > 1; i--) {
//     if(num % i === 0) return false;
//   }
//   return true;
// }

const isPrime = (num) => {
  let i = Math.ceil(Math.sqrt(num))
  if (num < 3) return true;
  while(i>1){
    if(num % i === 0) return false;
    i--;
  }
  return true;
}

const totalPrime = (start, end)=>{
  let total = 0;

  for (let i = start; i<= end; i++){
    if(isPrime(i)){
      total+= i;
    }

  }
  return total;

}

// console.log(totalPrime(3,7))
// console.log(totalPrime(2,3))
// console.log(totalPrime(2, 17))
// console.log(totalPrime(3, 1023))

function findGreatestProductInMatrix (matrix){

}

const matrix3 = [
  [2 ,12,6,21],
  [11, 0,11,2],
  [4 ,22,9, 7]
 ]
console.log(findGreatestProductInMatrix(matrix3))

/*s


*/