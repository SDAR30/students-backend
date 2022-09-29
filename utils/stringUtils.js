const repeatNTimesWithSpace = (string, n) => {
    return (string + ' ').repeat(n);
}

const capitilizeFirstLetter = (string) => {
    return string[0].toUpperCase() + string.slice(1)
}



module.exports = {repeatNTimesWithSpace, capitilizeFirstLetter};