// let user = {
//     isim: "Ali",
//     yas: 18
// };
// let key = prompt("salam", "isim");
// console.log(user[key]);


// function PersonalCharacter(name, age) {
//     return {
//         name,
//         age
//     }
// }
// let user = PersonalCharacter("Muhammad", 18);
// console.log(user.name)


// let user = {
//     isim: "Muhammad",
//     yas: "Aliev"
// }
// console.log("isim" in user);


// let Car = {
//     name: "Kia",
//     whele: 4,
// }
// for (let avto in Car) {
//     console.log(Car[avto]);
// }

// let number = {
//     "1000": "50",
//     "20": "5",
//     "5": "2"
// }
// for (num in number) {
//     console.log(number[num])
// }


// let word = "Muhammad";
// let copy = word;
// console.log(copy);


// let computer = {
//     processor: "Core"
// };
// let tech = computer;
// console.log(tech.processor)



// let computer = {
//     isim: "Lenova",
//     hz: 2.4,
// }
// let asus = {};

// for (tech in computer) {
//     asus[tech] = computer[tech];
// }
// asus.hz = 1;
// console.log(computer.hz)



// function User(name) {
//     this.name = name;
// };
// let user = new User("Muhammad");
// console.log(user.name)



function User(name) {
    this.name = name;
    this.findName = function() {
        console.log("My name is" + this.name)
    }
}
let user = new User("Muhammad")
user.findName();


let animal = {
    jump: true
}
let bear = {
    power: true
}
bear.__proto__ = animal;
console.log(bear.jump)


let animal = {
    eates: true,
    walk() {
        alert("Can")
    }
}
let anm = {
    jump: true,
    __proto__: animal
}
anm.walk();