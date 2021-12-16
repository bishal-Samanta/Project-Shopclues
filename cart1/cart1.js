data = [
    {
        name: "Solid Polo Classy Tshirt For Men",
        imgURL: "https://cdn.shopclues.com/images1/thumbnails/109145/280/1/150573840-109145405-1597763799.jpg",
        mrp: "Rs499",
        price: "Rs250",
        discount: "50%",
        color_family: "orange",
        brand: "Polo",
        size: 'S',
    },
    {
        name: "Solid Polo Classy Tshirt For Men",
        imgURL: "https://cdn.shopclues.com/images1/thumbnails/109145/280/1/150573840-109145405-1597763799.jpg",
        mrp: "Rs499",
        price: "Rs250",
        discount: "50%",
        color_family: "orange",
        brand: "Polo",
        size: 'S',
    },
    {
        name: "Solid Polo Classy Tshirt For Men",
        imgURL: "https://cdn.shopclues.com/images1/thumbnails/109145/280/1/150573840-109145405-1597763799.jpg",
        mrp: "Rs499",
        price: "Rs250",
        discount: "50%",
        color_family: "orange",
        brand: "Polo",
        size: 'S',
    },
    {
        name: "Solid Polo Classy Tshirt For Men",
        imgURL: "https://cdn.shopclues.com/images1/thumbnails/109145/280/1/150573840-109145405-1597763799.jpg",
        mrp: "Rs499",
        price: "Rs250",
        discount: "50%",
        color_family: "orange",
        brand: "Polo",
        size: 'S',
    },
]

var numberOfProducts = document.querySelector('.pDiv>div>h2');

var arr = [];

if(data.length != 0){
    var len = data.length;
    if(len == 1){
        numberOfProducts.textContent = "My Cart ( "+len+" Item )";
        products();
    }
    else{
        numberOfProducts.textContent = "My Cart ( "+len+" Items )";
        products();
    }
}


function products(){
    var productsDiv = document.querySelector('.productsDiv');
    var pDiv = document.querySelector(".pDiv");
    var h = (350)+116*data.length;
    if(data.length >= 2){
        var h1 = h.toString();
        pDiv.style.height = h1+"px";
    }

    data.map(function(ele){

        var pD = document.createElement('div');
        pD.setAttribute("class","pD");
        pD.style.display = "flex";

        var imgD = document.createElement('div');
        imgD.setAttribute("class","imgD");

        var imgLink = document.createElement('img');
        imgLink.setAttribute('class','imgLink');
        imgLink.setAttribute('src',ele.imgURL);

        imgD.append(imgLink);

        var p_title = document.createElement('div');
        p_title.setAttribute("class","p_title"); 

        var p_name = document.createElement('a');
        p_name.setAttribute('class','p_name');
        p_name.textContent = ele.name;

        var s_size = document.createElement('span');
        s_size.setAttribute('class','s_size');
        s_size.textContent = "Size Men Upper: "+ele.size;

        var b1 = document.createElement("br");

        p_title.append(p_name,b1,s_size);

        var p_quantity = document.createElement('div');
        p_quantity.setAttribute('class','p_quantity');

        var minus = document.createElement('a');
        minus.setAttribute("class","minus");
        minus.textContent = "-";

        var quantity = document.createElement('span');
        quantity.setAttribute('class','quantity');
        var quan = 1;
        quantity.textContent = quan;

        var plus = document.createElement('a');
        plus.setAttribute("class","plus");
        plus.textContent = "+";

        var remove = document.createElement('a');
        remove.setAttribute("class","remove");
        remove.textContent = "Remove";

        minus.addEventListener('click',dec);
        plus.addEventListener('click',inc);
        
        function dec(){
            if(quan == 1){
                quan = 1;
                quantity.textContent = quan;
            }
            else{
                quan = quan - 1;
                quantity.textContent = quan;
                displayDataMinus(quan);
            }
        }

        function inc(){
            quan = quan + 1;
            quantity.textContent = quan;
            displayDataPlus(quan);
        }

        var b2 = document.createElement("br");
        p_quantity.append(minus,quantity,plus,b2,remove);

        var priceD = document.createElement('div');
        priceD.setAttribute('class','priceD');

        var price = document.createElement('span');
        price.setAttribute('class','price');
        price.textContent = "Price : "

        var p = ele.price.split('');
        var pri = p[2] + p[3] + p[4];
        var reducedprice = +pri;
        console.log(reducedprice);

        var m = ele.mrp.split('');
        var mrp = m[2] + m[3] + m[4];
        var maxprice = +mrp;
        console.log(maxprice);

        var pricespan = document.createElement('span');
        pricespan.setAttribute('class','pricespan');
        pricespan.textContent = "Rs "+maxprice;
        var mp = maxprice;

        var discount = document.createElement('span');
        discount.setAttribute('class','discount');
        discount.textContent = "Discount : ";

        var discountspan = document.createElement('span');
        discountspan.setAttribute('class','discountspan');
        var d = maxprice - reducedprice;
        discountspan.textContent = "- Rs "+d;
        var n = d;

        var shipping_fee = document.createElement('span');
        shipping_fee.setAttribute('class','shipping_fee');
        shipping_fee.textContent = "Shipping Fee : ";

        var shipping = 20;
        var shippingspan = document.createElement('span');
        shippingspan.setAttribute('class','shippingspan');
        shippingspan.textContent = "Rs "+shipping;
        var s = shipping;

        var b3 = document.createElement("br");
        var b4 = document.createElement("br");
        priceD.append(price,pricespan,b3,discount,discountspan,b4,shipping_fee,shippingspan);

        var tpDiv = document.createElement('div');
        tpDiv.setAttribute('class','tpDiv');

        var tPrice = document.createElement('span');
        tPrice.setAttribute('class','tPrice');
        var total = reducedprice + shipping;
        var t = reducedprice + shipping;
        tPrice.textContent = "Rs "+total;
        console.log(total);

        var pRules = document.createElement('p');
        pRules.setAttribute('class','pRules');
        pRules.textContent = "Inclusive of all applicable taxes";

        var b5 = document.createElement('br');
        tpDiv.append(tPrice,b5,pRules);

        pD.append(imgD,p_title,p_quantity,priceD,tpDiv);

        var bottomline = document.createElement("hr");
        productsDiv.append(pD,bottomline);
        
        function displayDataMinus(quan){
            total = total - t;
            maxprice = maxprice - mp;
            d = d - n;
            shipping = shipping - s;
            displayPrice(total,t);
            tPrice.textContent = "Rs "+total;
            discountspan.textContent = "- Rs "+d;
            pricespan.textContent = "Rs "+maxprice;
            shippingspan.textContent = "Rs "+shipping;
        }

        function displayDataPlus(quan){
            total = total + t;
            maxprice = maxprice + mp;
            d = d + n;
            shipping = shipping + s;
            displayPrice(total,t);
            tPrice.textContent = "Rs "+total;
            discountspan.textContent = "- Rs "+d;
            pricespan.textContent = "Rs "+maxprice;
            shippingspan.textContent = "Rs "+shipping;
        }
    })
}

var grandTotalDiv = document.querySelector('.GTotalDiv');

var tP = document.createElement('p');
tP.setAttribute("class","tP");
var gTotal = document.createElement('p');
gTotal.setAttribute("class","gTotal");

var t = document.querySelector(".tPrice").textContent;
t = t[3]+t[4]+t[5];
var num = t.split("").map(Number);
var j = num.join('');
var n = parseInt(j);
n = n*data.length;
tP.textContent = "Total : Rs "+ n;
gTotal.textContent = "Grand Total : Rs "+ n;

function displayPrice(total,t){
    var nums = total + n - t;
    tP.textContent = "Total : Rs "+ nums;
    gTotal.textContent = "Grand Total : Rs "+ nums;
}

var rules = document.createElement('p');
rules.setAttribute("class","rules");
rules.textContent = "Inclusive of all the applicable taxes";

var place = document.createElement('button');
place.setAttribute("class","place");
place.textContent = "Place Order";

grandTotalDiv.append(tP,gTotal,rules,place);





    

