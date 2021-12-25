let view = document.querySelector('.view');
let box = document.querySelector('.box')
view.addEventListener('click', function() {
    if (box.style.display === "block") {
        box.style.display = "none";
    } else {

        box.style.display = "block";
    }

})