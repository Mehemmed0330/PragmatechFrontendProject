// let xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//         let data = JSON.parse(this.responseText);
//         for (let i = 0; i < data.length; i++) {
//             document.querySelector('.carts').innerHTML = `

//         <div class="cart">
//            <div class="cart__img">
//            <img src="../image/itemimg1.png" alt="">
//              </div>
//             <div class="cart__about">
//             <div class="cart__about--value">
//                <h1><i class="fas fa-euro-sign"><span class="value">${data[i++].price}</span></i></h1>
//            </div>
//            <div class="cart__about--time">
//                <h1><i class="fas fa-plus"></i><span class="pro-name">${data[i++].name}</span></h1>
//            </div>
//           </div>
//         </div>
//            `
//         }

//     }
// };
// xhttp.open("GET", "data/product.json", true);
// xhttp.send();

let cart = ""
fetch('data/product.json')
    .then(response => response.json())
    .then(data => {
        // data.preventDefault();
        for (let i = 0; i < data.length; i++) {

            cart += `<span class="pro-value">${data[i++].price}</span>`
            cart += `<span class="pro-name">${data[i++].name}</span>`
        }
        document.querySelector('.carts').innerHTML = cart;
        console.log(data);
    })