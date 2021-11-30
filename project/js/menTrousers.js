let carts =document.querySelectorAll(".addToCart");
console.log("before click");
let products =[
    {
        name: "American Eagle",
        tag:"1",
        price:350,
        inCart: 0
    },
    {
        name: "Kady Pants",
        tag:"2",
        price:267,
        inCart: 0
    },
    {
        name: "Chertex Men",
        tag:"3",
        price:525,
        inCart: 0
    },
    {
        name: "Caesar Solid Gabardine",
        tag:"4",
        price:385,
        inCart: 0
    },
    {
        name: "Blanc Trousers",
        tag:"5",
        price:285,
        inCart: 0
    },
    {
        name: "Kady Pant",
        tag:"6",
        price:580,
        inCart: 0
    },
    {
        name: "Ho Holland Sweatpant",
        tag:"7",
        price:450,
        inCart: 0
    },
    {
        name: "Chertex Trousers",
        tag:"8",
        price:1000,
        inCart: 0
    },
]

for(let i=0 ; i < carts.length ; i++){
    // debugger;
    carts[i].addEventListener('click',()=>{
        cartNumber(products[i]);
        totalCost(products[i])
    })
}

function onLoadCartNumbers(){
    let productNumers = localStorage.getItem("cartNumbers");
    if(productNumers){
        document.querySelector(".cart_Number").textContent =productNumers ;
    }
}

function cartNumber(product){
    console.log("The product clicked is" , product);
    let productNumers = localStorage.getItem("cartNumbers");
    productNumers = parseInt(productNumers);
    // debugger;
    if(productNumers){
    localStorage.setItem("cartNumbers", productNumers + 1);
    document.querySelector(".cart_Number").textContent = productNumers + 1;
    }else{
    localStorage.setItem("cartNumbers",1); 
    document.querySelector(".cart_Number").textContent = 1 ;
    }

    setItems(product);
}

function setItems(product){
    // console.log("Inside of setItem function");
    // console.log("My product is",product);
    let cartItems = localStorage.getItem("productsInCart");
    cartItems=JSON.parse(cartItems);
    console.log("My cartItem are ",cartItems);
    if(cartItems !=null){
        if(cartItems[product.tag] == undefined){
            cartItems ={
                ...cartItems,
                [product.tag]:product
            }
        }
        cartItems[product.tag].inCart += 1;
    }else{
        product.inCart = 1 ; 
        cartItems ={
            [product.tag]:product
        }
    }
    
    localStorage.setItem("productsInCart",JSON.stringify(cartItems));
}

function totalCost(product){
    //  console.log("The product price is" ,product.price)
    let cartCost = localStorage.getItem("totalCost");
    
    console.log("My cartCost is",cartCost);
    if(cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost" ,cartCost + product.price);
    }else{
    localStorage.setItem("totalCost",product.price);
}
}

function displayCart(){
    let cartItems =localStorage.getItem("productsInCart");
    cartItems =JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");
    let cartCost = localStorage.getItem("totalCost");
    if(cartItems && productContainer){
        // console.log("running");
        console.log(cartItems);
        productContainer.innerHTML = " ";
        Object.values(cartItems).map(item =>{
            productContainer.innerHTML += `
            <div class="product">
                <ion-icon name="close-circle"></ion-icon>
                <img src="../../images/Men/trousers/${item.tag}.jpg">
                <span>${item.name}</span>
            </div>
            <div class="price">EGP${item.price},00</div>
            <div class="quantity">
                <ion-icon name="arrow-dropleft-circle"></ion-icon>
                <span>${item.inCart}</span>
                <ion-icon name="arrow-dropright-circle"></ion-icon>
            </div>

            <div class="total">
                EGP${item.inCart * item.price},00
            </div>
            `
        });

        productContainer.innerHTML += `
            <div class="basketTotalContainer">
            <div class="cash"><h4><input type="checkbox" value="cash"><label>Cash</label></h4></div>
                <h4 class="basketTotalTitle">
                    Basket Total
                </h4>
                <h4 class="basketTotal">
                    EGP${cartCost},00
                </h4>
        `
    }

}

/* <img src="../../images/${item.tapgg}.j"></img> */

onLoadCartNumbers();
displayCart();
