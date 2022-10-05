/*
1) read problem
2) ask calrifying questions
3) state problem in own words
4) provide examples
5) write function sig
5) write psuedocode
7) write test
8) write code
*/

// const isAnagram = (string1, string2) => {
//     let wordCounter = {};

//     for (let char of string1) {
//         if ((/[a-zA-Z]/).test(char))
//             wordCounter[char] ? wordCounter[char]++ : wordCounter[char] = 1;

//     }

//     for (let char of string2) {
//         if ((/[a-zA-Z]/).test(char)) {
//             if (wordCounter[char]) {
//                 wordCounter[char]--;
//             } else {
//                 return false;
//             }
//         }
//     }

//     // for (let key in wordCounter) {
//     //     if (wordCounter[key] !== 0) return false;

//     // }
//     return Object.values(wordCounter).every(value => value === 0)

// }

const isAnagram = (str1, str2) => {
    str1 = str1.replace(/[^a-zA-Z]/g, '');
    str2 = str2.replace(/[^a-zA-Z]/g, '');
    return str1.length === str2.length && str1.replace(new RegExp(`[${str2}]`, 'g'), '').length === 0;


}

console.log(isAnagram("aba  c", "aab"))
console.log(isAnagram("abaC", "aabCc"))
console.log(isAnagram("hub", "huc"))
console.log(isAnagram("hubBBCc", "hCBBucb"))
console.log(isAnagram("aba#$$Cc", "aab*&^cC"))
console.log(isAnagram("addacccb", "aab  cccdd"))
console.log('abaaabbaa'.replaceAll('a', 'x'))
console.log('abaaabbaa'.replace(new RegExp('a','g'), 'x'))
console.log('abaaabbaa'.replace(new RegExp('a+','g'), 'x'))
console.log('abaaabbaa'.replace(new RegExp('a{2,}','g'), 'x'))
console.log('how are you today'.replace(/[aeiou]/g, ' '))//replace all vowels
console.log('how are you today'.replace(/[^aeiou]/g, ' '))//only leave vowels