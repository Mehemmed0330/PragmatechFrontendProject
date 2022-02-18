function compareTriplets(arr) {
    const solve1 = arr[0] + arr[4] + arr[8]
    const solve2 = arr[2] + arr[4] + arr[6]
    const solve3 = solve1 - solve2

    console.log(Math.abs(solve3))
}
compareTriplets([11, 2, 4,
    4, 5, 6,
    10, 8, -12
])