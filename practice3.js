function maxSum(arr, range) {
    let max = -Infinity;

    for (let i = 0; i < range.length; i++) {
        let start = range[i][0];
        let end = range[i][1];
        let total = 0;
        arr[start] = range[i][2];

        for (let j = start; j <= end; j++) {
            total += arr[j]
        }
        if (total > max)
            max = total;
    }

    return max;

}

//The maximum sum value of ranges -- Ultimate version
console.log(maxSum([1, -2, 3, 4, -5, -4, 3, 2, 1], [[1, 3, 5], [0, 4, 2], [6, 8, 1]]) === 12)
console.log(maxSum([1, -2, 3, 4, -5, -4, 3, 2, 1], [[1, 3, 10]]) === 17)
console.log(maxSum([1, -2, 3, 4, -5, -4, 3, 2, 1], [[1, 4, 6], [2, 5, 4]]) === 8)