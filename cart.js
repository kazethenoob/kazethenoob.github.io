let products = [
    {
        name: "Nike free form sneakers",
        tag: "sofiaskinnyjeans",
        price: 20.00,
        inCart: 0
    },
    {
        name: "Prada Sunglasses",
        tag: "timeandtrujeans",
        price: 20.00,
        inCart: 0
    },
    {
        name: "ASOS oversized sweater",
        tag: "pufferjacket",
        price: 122.00,
        inCart: 0
    },
    {
        name: "Presto Gown",
        tag: "fleecejersey",
        price: 120.00,
        inCart: 0
    },
    {
        name: "Crooked tongue black shirt",
        tag: "fleecejoggers",
        price: 210.00,
        inCart: 0
    },
]


const carts = document.querySelectorAll(".itemcartbutton");
console.log(carts);
for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}

// function onLoadCartNumbers() {
//     let productNumbers = localStorage.getItem('cartNumbers');

//     if(productNumbers) {
//         document.querySelector('#cartnotification').textContent = productNumbers;
//     }
// }

function cartNumbers(product) {
     
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    

    setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null) {

        if(cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        } 
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }
    
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
    let cartCost = localStorage.getItem('totalCost');

    console.log("the total price is", cartCost);

    if(cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem('totalCost', cartCost + product.price);
    } else {
        localStorage.setItem('totalCost', product.price);

    }
};

function displayCart() {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");
    let cartCost = localStorage.getItem('totalCost')

    if(cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="product"> 
                <img src="logo.png" height="50" width="50">
                <span>${item.name}</span>
                
            </div><hr>
            <div style="position: relative; top: -3.8rem; left: 18rem;">$${item.price}</div>
                <div class="quantity" style="position: relative; top: -5rem; left: 24.5rem;">
            <span>${item.inCart}</span>
            </div>
            
            <div style="position: relative; top: -6rem; left: 31rem;" class="total">
                $${item.inCart * item.price}
            </div>
            `;
        });

        productContainer.innerHTML += `
            <div style="position: relative; top: -3.8rem;" class="basketTotalContainer">
                <h4 class="basketTotalTitle">
                    Basket Total :
                </h4>
                <h4 class="basketTotal">
                $${cartCost}
                </h4>
        `
    }
}

// onLoadCartNumbers();
displayCart();