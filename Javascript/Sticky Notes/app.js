function AddNote() {
    document.getElementById("modal").style.display = "block";
    console.log("hi");
}

function Close() {
    document.getElementById("modal").style.display = "none";
}

function sub() {
    let textaa = document.getElementById("CommendAdd").value;
    document.getElementById("text").innerText = textaa;
}