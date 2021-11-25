function sockMerchant(ar) {
    // Write your code here
    // for (let i = 0; i < ar.length; i++) {
    //     if (ar.filter(num => num == ar[i])) {
    //         if (ar[i] % 2 == 0) {
    //             console.log(ar[i])
    //         } else {
    //             false
    //         }
    //     }

    // }
    const findDuplicates = ar => ar.filter((item, index) => ar.indexOf(item) !== index)
    const duplicates = findDuplicates(ar);
    console.log(duplicates);


}
sockMerchant([10, 20, 20, 10, 10, 30, 50, 10, 20])

const result = ar.filter(num => num == ar[i]);
console.log(result)