function miniMaxSum(arr) {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let minnum = 0;
    let maxnum = 0;
    for (let i = 0; i < arr.length; i++) {
        minnum += arr[i];
        maxnum += arr[i];
    }
    console.log(minnum - max, minnum - min)

}
miniMaxSum([1, 2, 3, 4, 5]);