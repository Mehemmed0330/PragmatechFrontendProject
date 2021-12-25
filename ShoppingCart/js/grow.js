let num = document.querySelector('.view__num');
let check = document.querySelector('#check')

// time.addEventListener('click', function() {
//     console.log("hi")
// })
let i = 0

function time() {
    i++;
    num.innerHTML = i;
}