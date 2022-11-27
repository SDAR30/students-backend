//console.log('miamidolphins'.split('').filter(letter => ['a','e','i','o','u'].indexOf(letter)!==-1).length)

// console.log('NEWyorkjetsJETS'.match(/[aeiou]/gi)) //return all vowels
// console.log('NEWyorkjetsJETS'.replace(/[aeiou]/gi, ''))//remove all vowels
// console.log('NEWyorkjetsJETS'.replace(/[^aeiou]/gi, ''))//

let objA = { a: 4, b: 8, c: 10 }
let objB = { a: 12, b: 3, d: 7 }

function combine() {
    let objC = {}
    console.log(arguments)
    //     for (let ele of arguments)
    //         for (let [key, value] of Object.entries(ele))
    //             objC[key] ? objC[key] += value : objC[key] = value
    //  return objC
}
// console.log(combine(4,5,6))
function ROT135(input) {
    return input.replace(/([a-z])|(\d)/gi, letter => {
        const charCode = letter.charCodeAt();
        if (/[a-z]/.test(letter)) return String.fromCharCode(charCode + (charCode > 109 ? -13 : 13))
        if (/[A-Z]/.test(letter)) return String.fromCharCode(charCode + (charCode > 77 ? -13 : 13))
        if (/\d/.test(letter)) return parseInt(letter) + (parseInt(letter) > 5 ? -5 : 5)
    })

}

function topThreeWords(text) {
    let counter = {}
    text = text.replace(/[^\w\s\']|_/g, "") // remove punctuation marks
    text = text.trim(); // remove beginning and end spaces
    text = text.replace(/\s\s+/g, ' ') // remove multiple spaces and new lines
    text = text.replace(/[A-Z]/g, letter => letter.toLowerCase())
    if(!text.length) return [];
    text = text.split(' ') // split into separate words
    console.log(text)
    text = text.filter(word =>  /[a-z]/.test(word)  )
    console.log(text)
    
    for(let word of text)
        counter[word] ? counter[word]++ : counter[word] = 1;
    let sortCounter = [];
    for(let word in counter){
        sortCounter.push([word, counter[word]])
    }
    sortCounter.sort((a,b)=> b[1]-a[1])
    return sortCounter.slice(0,3).map(a => a[0])

}

console.log(topThreeWords(" a ' ''' ''  '' ' "))