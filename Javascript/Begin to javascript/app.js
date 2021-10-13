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
}
question(5)
document.write(val)