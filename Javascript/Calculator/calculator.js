function display(val) {
    document.getElementById("result").value += val;
}

function claer() {
    document.getElementById("result").value = ""
}

function equal() {
    let question = document.getElementById("result").value;
    let answer = eval(question);
    document.getElementById("result").value = answer;
}