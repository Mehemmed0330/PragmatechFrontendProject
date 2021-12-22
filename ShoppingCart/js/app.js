let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let data = JSON.parse(this.responseText);
        let carts = document.querySelector('.carts');
        data.forEach(element => {

            carts.innerHTML += viewData(element)
        });

    }
};
xhttp.open("GET", "data/product.json", true);
xhttp.send();

function viewData(product) {
    return `
    <div class="cart" data = ${product.id}>
           <div class="cart__img">
           <img src="${product.img}" alt="">
             </div>
            <div class="cart__about">
            <div class="cart__about--value">
               <h1><i class="fas fa-euro-sign"><span class="value">${product.price}</span></i></h1>
           </div>
           <div class="cart__about--time">
               <h1><i class="fas fa-plus"></i><span class="pro-name">${product.name}</span></h1>
           </div>
          </div>
        </div>
    `
}