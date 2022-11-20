let obj = { name: "Goji", power: 11, age: 32 }

//list keys:

// for(let key in obj){ /// in = index; of = element
//     console.log(key)
// }

// Object.entries(obj).forEach(key => console.log(key)) // print keys and values
// Object.keys(obj).forEach(key => console.log(key)) // print just keys;

// let entries = Object.entries(obj)
// for (let i = 0; i < entries.length; i++) {
//     let [key, value] = entries[i];
//     console.log("key: " + key + ` value: ${value}`)
// }


let str = ('dude' + ' ').repeat(3)


function shortcut(string) {
    let stringWithNoLowercaseVowels = '';
    for (let char of string) {
        //if (char !== 'a' && char !== 'e' && char !== 'i' && char !== 'o' && char !== 'u'){
        if (!'aeiou'.includes(char)) {
            stringWithNoLowercaseVowels += char;
        }
    }
    return stringWithNoLowercaseVowels;
}
//console.log("hello how are you todayay".replace('a',''))
// console.log('hey are you todayaya?'.replaceAll('a',''))
console.log('hey ho are you todayyaya'.replace(/[aeiou]/g,''))