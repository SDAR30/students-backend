const {repeatNTimesWithSpace, capitilizeFirstLetter} = require('./stringUtils')

describe("Take a string & number and repeat same # of times with spaces", ()=>{
    it("handles empty string", ()=>{
        expect(repeatNTimesWithSpace('',0)).toBe('');
        expect(repeatNTimesWithSpace('',5)).toBe('');
    })
    it("handles a string with 1 or more character", ()=>{
        expect(repeatNTimesWithSpace('a',1)).toBe('a');
        expect(repeatNTimesWithSpace('a',5)).toBe('a a a a a');
        expect(repeatNTimesWithSpace('abc',3)).toBe('abc abc abc');
    })
})

describe("Take a string and capitilize first letter", ()=>{
    it("handles empty string", ()=>{
        expect(capitilizeFirstLetter('')).toBe('');
    })
    it("handles one letter", ()=>{
        expect(capitilizeFirstLetter('a')).toBe('A');
    })
    it("Capitilize first letter of string", ()=>{
        expect(capitilizeFirstLetter('sean')).toBe('Sean');
    })
})


//npm install -D jest //to install devDependency
//in package.json put: "test": "jest"
//it will look for any file with filename.test.js
//"npm run test" or "npm run test filename"