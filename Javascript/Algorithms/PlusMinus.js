function plusMinus(arr) {
    // Write your code here
    const lengthArr = arr.length;
    const plusArr = arr.filter(num => num > 0);
    const lenghtPlus = plusArr.length;
    const minusArr = arr.filter(num => num < 0);
    const lenghtMinus = minusArr.length;
    const zeroArr = arr.filter(num => num == 0);
    const lenghtZero = zeroArr.length;
    const dividePlus = lenghtPlus / lengthArr;
    const divideMinus = lenghtMinus / lengthArr;
    const divideZero = lenghtZero / lengthArr;
    console.log(dividePlus);
    console.log(divideMinus);
    console.log(divideZero);
}
plusMinus([-4, 3, -9, 0, 4, 1]);