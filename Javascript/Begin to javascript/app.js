// var i = 0;
// var toplama = 0;
// while (i <= 1000) {
//     i++;
//     toplama += i;
// }
// document.write(toplama)
// document.write("<hr>")
// var i = 0;
// var toplama = 0;
// do {
//     toplama += i;
//     i++;

// } while (i <= 55)
// document.write(toplama)
// document.write("<hr>")

// var toplama = 0;
// for (var i = 0; i < 10; i++) {
//     toplama += i;

// }
// document.write(toplama)
// document.write("<hr>")

// for (let i = 0; i <= 10; i++) {
//     if (i == 0) {
//         console.log(i + " ne tekdir ne cut")
//     } else if (i % 2 == 0) {
//         console.log(i + " cutdur")
//     } else {
//         console.log(i + " tekdir")
//     }
// }




// function sentence() {
//     document.write("Hi there")
// }
// sentence()
// document.write("<hr>")

// function add(num1, num2) {
//     let result = num1 + num2;
//     document.write(result)

// }
// add(10, 20)
// document.write("<hr>")

// function math(num1, num2) {
//     var result = num1 * num2;
//     return result;
// }

// let answer = math(5, 7);

// document.write(answer)

// document.write("<hr>")

// function question(num) {
//     val = 1;
//     for (let i = 1; i <= 5; i++) {
//         val *= i

//     }
//     document.write(val + "<br>")
// }
// question(5)
// document.write("<hr>")

// // Array
// let arr = ["apple", "banana", "orange"]
//     // console.log(arr)
//     // document.write(arr[0])

// for (let i = 0; i < arr.length; i++) {
//     document.write(arr[i] + "<br>")

// }
// arr.push("ssss")
// console.log(arr)

// arr.pop()
// console.log(arr)

// var key = ["Ali", "Muhammad", "Farid", "Emin"];
// var test = key.slice(0, 2);
// console.log(test);

// var frontend = ["Html", "Css", "js"];
// var backend = ["Python", "Flask", "Sql"];
// var test2 = frontend.indexOf("Html")
// document.write(test2 + "<br>")
// let fullstack = frontend.concat(backend);
// document.write(fullstack)
// document.write("<hr>")
// document.write(Math.ceil(0.00055))
// document.write("<hr>")
// document.write(Math.max(12, 100))

// document.write("<hr>")

// let command1 = prompt("Write a number1")
// let command2 = prompt("Write a number2")

// document.write(command1 + "<br>")
// document.write(command2)

// document.write("<hr>")

// let nmr = 0;
// nmr++;
// alert(nmr)
// document.write("<hr>");

// let age = prompt("How old are you?")
// if (18 > age) {
//     document.write("Sen 18 yasdan balacasan ve bu sehifede qalmamalisan")
// } else {
//     document.write("Sehufeye xos gelmisen");
// }


// let point = prompt("Nece bal toplamisan?");

// if (point >= 55 && point <= 75) {
//     document.write("Senin qiymetin 3 dur");
// } else if (point >= 75 && point <= 85) {
//     document.write("Senin qiymetin 4 dur");
// } else if (point >= 85 && point <= 100) {
//     document.write("Senin qiymetin 5 dir");
// } else {
//     document.write("Cix cole");
// }
// document.write("<hr>")

// let i = 0;
// let p = 0;
// while (i < 10) {
//     p += i;
//     i++;
// }
// document.write(p)

// document.write("<hr>")

// for (let i = 1; i < 100; i++) {
//     if (i % 5 == 0) {
//         console.log(i)
//     }

// }

// let elements = ["apple", "banana", "orange", "leamon", "grape"];
// elements.push("Muhammad")
// document.write(elements)

// let universitys = ['AzTu', 'ADNSU', 'BMU', 'ADPU'];
// let slice = universitys.slice(0, 3).join("-")
// document.write(slice)

// document.getElementById("btn").onclick = function() {
//     let top = document.getElementById("container-top").innerHTML;
//     let bottom = document.getElementById("container-bottom").innerHTML;
//     document.getElementById("container-top").innerHTML = bottom;
//     document.getElementById("container-bottom").innerHTML = top;
// }
// document.getElementById("btn-change").onclick = function() {
//     document.getElementsByClassName("text1")[0].innerHTML = "Mehemmed";
//     document.getElementsByClassName("text2")[0].innerHTML = "Aliyev";

// }
// document.getElementById("color").onclick = function() {
//     document.getElementById("container-top").style.color = "red";
//     document.getElementById("container-bottom").style.backgroundColor = "blue"
// }


// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     hello() {
//         document.write("Hello " + this.name);
//     }
// }
// let person = new Person("Muhammad");
// person.hello();

// function chapca() {
//     document.getElementById("chapca").value = Math.floor(Math.random() * 100);
// }
// chapca();

// function ChechTxt() {
//     let write = document.getElementById("number").value;
//     let password = document.getElementById("chapca").value;

//     if (write == password) {
//         alert("Duzgundur");
//     } else {
//         alert("Get sonra gelersen");
//     }
//     document.getElementById("number").value = "";
// }

function goTo(page, url) {
    if (confirm(page + "" + "sehifesine kecid edirsiz")) {
        setTimeout(function() {
            window.location.href = url;
        }, 500)
    } else {
        alert("Hele bu sefede qalin")
    }
}