let countersPlus = Array.from(document.querySelectorAll('.product__quantity-control_inc'));
countersPlus.forEach(counter =>{
    counter.onclick = function(){
        let parent = counter.parentElement;
        let counterValue = parent.querySelector('.product__quantity-value');
        counterValue.innerText++;
    }
})

let countersMinus = Array.from(document.querySelectorAll('.product__quantity-control_dec'));
countersMinus.forEach(counter =>{
    counter.onclick = function(){
        let parent = counter.parentElement;
        let counterValue = parent.querySelector('.product__quantity-value');
        counterValue.innerText = counterValue.innerText == 1 ? counterValue.innerText : --counterValue.innerText;
    }
})

const addButtons = Array.from(document.querySelectorAll('.product__add'));
addButtons.forEach(button => {
    button.onclick = function(){
        let product = button.closest('.product');
        let dataId = product.dataset.id;
        let imgSrc = product.getElementsByTagName('img')[0].currentSrc;
        let count = product.querySelector('.product__quantity-value').textContent;
        let newProduct = `<div class="cart__product" data-id=${dataId}>
        <img class="cart__product-image" src=${imgSrc}>
        <div class="cart__product-count">${count}</div>
    </div>`
        let cart = document.querySelector('.cart__products');
        let ProductsInCart = Array.from(cart.querySelectorAll('.cart__product'));
        let compareRes = ProductsInCart.findIndex(el => el.dataset.id == dataId);
        console.log('compareRes '+compareRes);
        if(compareRes == -1){
        cart.innerHTML += newProduct;
        };
    }
})
