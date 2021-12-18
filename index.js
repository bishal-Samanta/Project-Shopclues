var cartIcon = document.querySelector(".fas fa-shopping-cart fa-customize");
cartIcon.addEventListener("click", cartPage);

function cartPage(){
    if(cartArr.length == 0){
        window.location.href = "cart.html";
    }
    else{
        window.location.href = "cart1.html";
    }
}