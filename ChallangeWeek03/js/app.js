// let button = document.querySelector("#btn");
// button.addEventListener("click", function btn() {
//     document.querySelector("#btn").style.border = "2px solid blue";

// })

quiz = [{
    'question': 'What is your name',
    'answser': [
        'Muhammad',
        'Farid',
        'Jane',
        'Moly',
        'Unknown'
    ]
}]

document.querySelector(".buttons").innerHTML = `
                        <button class="btn" id="btn1" onclick="chechAnswer(this)">${quiz[0]['answer'][0]}</button>
                        <button class="btn" id="btn2" onclick="chechAnswer(this)">${quiz[0]['answer'][1]}</button>
                        <button class="btn" id="btn3" onclick="chechAnswer(this)">${quiz[0]['answer'][2]}</button>
                        <button class="btn" id="btn4" onclick="chechAnswer(this)">${quiz[0]['answer'][3]}</button>
                        <button class="btn" id="btn5" onclick="chechAnswer(this)">${quiz[0]['answer'][4]}</button>
                        <p>Heloo</p>

`

function checkAnswer(el) {
    if (el.innerHTML == 'Muhammad') {
        el.className = 'backgorund-color:green;'
    }
}

document.querySelector(".app").innerHTML = `
<h1>Hello</h1>
`