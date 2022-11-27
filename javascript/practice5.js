
function countdown(times, count = []){

    (function getCountDown(times){
        console.log(times)
        if (times >= 0)
            return count.concat([0]);
        count.push(times * -1)
        return getCountDown(times + 1, count)
    })(times)
}

console.log((67).toString(2)) // write in base 2
// https://dev.to/puritanic/nsfw-use-cases-for-bitwise-operators-in-js-2om5#:~:text=Bitwise%20operators%20in%20Javascript%20are,their%20Math%20or%20parseInt%20equivalents.
