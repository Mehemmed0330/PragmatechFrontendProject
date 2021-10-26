// const start = new Date("03/25/2020");
// const end = new Date("07/25/2020");

// let loop = new Date(start);
// while (loop <= end) {
//     console.log(loop);
//     let newDate = loop.setDate(loop.getDate() + 1);
//     if (Date.getDate === Date.getDate) {
//         loop = new Date(newDate);
//     }
// }

function date() {
    const start = new Date("03/25/2020");
    const end = new Date("07/25/2020");
    let loop = new Date(start);
    while (loop <= end) {
        console.log(loop);
        let newDate = loop.setDate(loop.getDate() + 1);
        if (loop.getDate == loop.getDate) {
            loop = new Date(newDate);
        }
    }
}
date();