function AddNote() {
    document.getElementById("modal").style.display = "block";
    console.log("hi");
}

function Close() {
    document.getElementById("modal").style.display = "none";
}

// function sub() {
//     let textaa = document.getElementById("CommendAdd").value;
//     document.getElementById("text").innerText = textaa;
// }

// function sub() {

//     var li = document.createElement("li");
//     var inputValue = document.getElementById("CommendAdd").value;
//     var t = document.createTextNode(inputValue);
//     li.appendChild(t);
//     document.getElementById("myUL").appendChild(li);
//     document.getElementById("CommendAdd").value;
// }

let formm = document.querySelector("#Form");
formm.addEventListener("submit", (e) => {
    e.preventDefault();
    var li = document.createElement("li");
    var inputValue = document.getElementById("CommendAdd").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    document.getElementById("myUL").appendChild(li);
    document.getElementById("CommendAdd").value;
})