var i = 0;
var toplama = 0;
while (i <= 1000) {
    i++;
    toplama += i;
}
document.write(toplama)
document.write("<hr>")
var i = 0;
var toplama = 0;
do {
    toplama += i;
    i++;

} while (i <= 55)
document.write(toplama)
document.write("<hr>")

var toplama = 0;
for (var i = 0; i < 10; i++) {
    toplama += i;

}
document.write(toplama)
document.write("<hr>")

for (let i = 0; i <= 10; i++) {
    if (i == 0) {
        console.log(i + " ne tekdir ne cut")
    } else if (i % 2 == 0) {
        console.log(i + " cutdur")
    } else {
        console.log(i + " tekdir")
    }
}




function sentence() {
    document.write("Hi there")
}
sentence()
document.write("<hr>")

function add(num1, num2) {
    let result = num1 + num2;
    document.write(result)

}
add(10, 20)
document.write("<hr>")

function math(num1, num2) {
    var result = num1 * num2;
    return result;
}

let answer = math(5, 7);

document.write(answer)

document.write("<hr>")

function question(num) {
    val = 1;
    for (let i = 1; i <= 5; i++) {
        val *= i

    }
    document.write(val + "<br>")
}
question(5)
document.write("<hr>")

// Array
let arr = ["apple", "banana", "orange"]
    // console.log(arr)
    // document.write(arr[0])

for (let i = 0; i < arr.length; i++) {
    document.write(arr[i] + "<br>")

}
arr.push("ssss")
console.log(arr)

arr.pop()
console.log(arr)

var key = ["Ali", "Muhammad", "Farid", "Emin"];
var test = key.slice(0, 2);
console.log(test);

var frontend = ["Html", "Css", "js"];
var backend = ["Python", "Flask", "Sql"];
var test2 = frontend.indexOf("Html")
document.write(test2 + "<br>")
let fullstack = frontend.concat(backend);
document.write(fullstack)