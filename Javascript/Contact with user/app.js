function user() {
    let person = prompt("What is your name?");
    let surname = prompt("What is your surname");
    for (let index = 1; index < 5; index++) {
        console.log(person)

    }
    for (let i = 1; i < 3; i++) {
        console.log(surname);

    }
    console.log(person + " ||| " + surname);
    console.log("Your name is:" + " " + person)
    console.log("Your surname:" + " " + surname)


}
user();