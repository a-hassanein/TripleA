let carts =document.querySelectorAll(".addToCart");
console.log("before click");
let products =[
    {
        name: "Defacto",
        tag:"1",
        price:200,
        inCart: 0
    },
    {
        name: "Deafcto",
        tag:"2",
        price:180,
        inCart: 0
    },
    {
        name: "Desert",
        tag:"3",
        price:225,
        inCart: 0
    },
    {
        name: "Defacto",
        tag:"4",
        price:185,
        inCart: 0
    },
    {
        name: "Defacto",
        tag:"5",
        price:135,
        inCart: 0
    },
    {
        name: "Andora",
        tag:"6",
        price:220,
        inCart: 0
    },
    {
        name: "LC Waikiki",
        tag:"7",
        price:150,
        inCart: 0
    },
    {
        name: "Defacto",
        tag:"8",
        price:200,
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
                <img src="../../images/Boys/${item.tag}.jpg">
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
