// function maxSum(arr, range) {
//     let max = -Infinity;

//     for (let i = 0; i < range.length; i++) {
//         let start = range[i][0];
//         let end = range[i][1];
//         let total = 0;
//         arr[start] = range[i][2];

//         for (let j = start; j <= end; j++) {
//             total += arr[j]
//         }
//         if (total > max)
//             max = total;
//     }

//     return max;

// }

function maxSum(arr, range) {
    let prefix = [0], total = 0;
    for (let num of arr)
        prefix.push(total += num);
    let sum = range.map(([x, y, z]) => {
        let add = prefix[x] + z - prefix[x + 1]
        for (let i = x + 1; i <= y + 1; i++) {
            prefix[i] = prefix[i] + add;
        }
        return prefix[y + 1] - prefix[x]
    });
    return Math.max(...sum);
}


// console.log(maxSum([1, -2, 3, 4, -5, -4, 3, 2, 1], [[1, 3], [0, 4], [6, 8]]) === 6)
// console.log(maxSum([1,-2,3,4,-5,-4,3,2,1],[[1,3]]) === 5)
// console.log(maxSum([1,-2,3,4,-5,-4,3,2,1],[[1,4],[2,5]]) === 0)

//The maximum sum value of ranges -- Ultimate version
// console.log(maxSum([1, -2, 3, 4, -5, -4, 3, 2, 1], [[1, 3, 5], [0, 4, 2], [6, 8, 1]]) === 12)
// console.log(maxSum([1, -2, 3, 4, -5, -4, 3, 2, 1], [[1, 3, 10]]) === 17)
// console.log(maxSum([1, -2, 3, 4, -5, -4, 3, 2, 1], [[1, 4, 6], [2, 5, 4]]) === 8)



function validSolution(board) {
    for (let i = 0; i < board.length; i++) {
        let set = new Set();
        let set2 = new Set();
        for (let j = 0; j < board.length; j++) {
            set.add(board[i][j])
            set2.add(board[j][i])
        }
        if (set.size !== 9) return false;
        if (set2.size !== 9) return false;
    }


    let set = new Set();
    let set2 = new Set();
    let set3 = new Set();
    let set4 = new Set();
    let set5 = new Set();
    let set6 = new Set();
    let set7 = new Set();
    let set8 = new Set();
    let set9 = new Set();
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            set.add(board[i][j])
            set2.add(board[i + 3][j])
            set3.add(board[i + 6][j])
            set4.add(board[i + 3][j + 3])
            set5.add(board[i + 3][j + 3])
            set6.add(board[i + 6][j + 3])
            set7.add(board[i][j + 6])
            set8.add(board[i + 3][j + 6])
            set9.add(board[i + 6][j + 6])
        }
    }
    if (set.size !== 9) return false;
    if (set2.size !== 9) return false;
    if (set3.size !== 9) return false;
    if (set4.size !== 9) return false;
    if (set5.size !== 9) return false;
    if (set6.size !== 9) return false;
    if (set7.size !== 9) return false;
    if (set8.size !== 9) return false;
    if (set9.size !== 9) return false;

    return true;
}

function totalTime(arr) {
    let seconds = 0;
    arr.forEach(time => {
        time.split(':').map(time => parseInt(time)).reverse().forEach((time, index) => {
            seconds += time * (60 ** index)
        })
    })
    let days = Math.floor(seconds / 86400);
    if (days) seconds = seconds - (86400 * days)
    
    let hours = Math.floor(seconds / 3600);
    if (hours) seconds = seconds - (3600 * hours)

    let minutes = Math.floor(seconds / 60);
    if (minutes) seconds = seconds - (60 * minutes)

    return [days==1 ? '1 day' : days + ' days',hours==1 ? '1 hour' : hours + ' hours', minutes==1 ? '1 minute' : minutes +
     ' minutes', seconds==1 ? '1 second' : seconds + ' seconds',].filter(e=>e[0]>0).join(', ')
}


console.log(totalTime(['60']) === '1 minute');
console.log(totalTime(['25:01:01'])=== '1 day, 1 hour, 1 minute, 1 second');
console.log(totalTime(['50:02:02']) === '2 days, 2 hours, 2 minutes, 2 seconds');
console.log(totalTime(['01:20', '03:10']) === '4 minutes, 30 seconds');
console.log(totalTime(['00:50', '00:30']) === '1 minute, 20 seconds');
console.log(totalTime(['01:20:00','40:00'])==='2 hours');
    console.log(totalTime(['12:00:00','10:00:00','02:00:00'])==='1 day');
    console.log(totalTime(['24:00:00','24:00:00','07'])==='2 days, 7 seconds');