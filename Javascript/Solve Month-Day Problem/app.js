let myStringArray = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December", "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];


let arrayLength = myStringArray.length;

function Month() {
    for (let i = 9; i < 16; i++) {
        console.log(myStringArray[i]);
        //Do something
    }
}
Month();