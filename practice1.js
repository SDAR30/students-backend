

const uppercaseIfFirstVowel = str => (/[aeiou]/i).test(str[0]) ? str.toUpperCase() : str


const checkIfTwoConsecutiveIntegers = array => {
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] === array[i + 1] - 1) return true;
    }
    return false;
}
console.log(checkIfTwoConsecutiveIntegers([3, 14, 5, 6, 19]))
console.log(uppercaseIfFirstVowel("aello"))

//SET is an obj with only values, no keys;

let arr = [3, 4, 5, 5, 5, 5, 5, 6, 7, 7, 7, 8]
let set = new Set(arr)
set.add(8)
console.log(set)
console.log(set.has(4))
console.log([] === [])//false, not primitive

//primitives: string, number, boolean, bigint, symbol

function Hero(name) {
    this.name = name || "hero"
    this.power = 23;
    this.position = '00'

}
let hero1 = new Hero("goku");
console.log(hero1)