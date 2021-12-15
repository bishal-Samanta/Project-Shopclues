console.log("test");

var arrofobj = JSON.parse(localStorage.getItem("lsproductdetails"));
console.log(arrofobj);

displayUi();

function displayUi() {
  document.querySelector("#jsproduct").innerHTML = "";
  arrofobj.map(function (el) {
    //Create all html tags

    var singlemainbox = document.createElement("div");
    var likebox = document.createElement("div");
    var spanbox1 = document.createElement("span");
    var mainproductbox = document.createElement("div");
    var firstimagediv = document.createElement("div");
    var innerimagediv = document.createElement("div");
    var innerimagetag = document.createElement("img");

    var namediv = document.createElement("div");
    var priceanddisdiv = document.createElement("div");
    var pricediv = document.createElement("div");
    var discountdiv = document.createElement("div");
    var mrpdiv = document.createElement("div");
    var stardiv = document.createElement("div");
    var spanbox2 = document.createElement("span");
    var spanbox3 = document.createElement("span");
    var spanbox4 = document.createElement("span");
    var spanbox5 = document.createElement("span");
    var spanbox6 = document.createElement("span");
    var freeshipingdiv = document.createElement("div");
    var lstdiv = document.createElement("div");
    var branddiv = document.createElement("div");
    var colordiv = document.createElement("div");

    //creating attributes
    spanbox1.setAttribute("id", "heart");
    mainproductbox.setAttribute("id", "prod");
    innerimagetag.setAttribute("src", el.imgURL);

    spanbox2.setAttribute("class", "fa fa-star checked");
    spanbox3.setAttribute("class", "fa fa-star checked");
    spanbox4.setAttribute("class", "fa fa-star checked");
    spanbox5.setAttribute("class", "fa fa-star");
    spanbox6.setAttribute("class", "fa fa-star");

    //Set all values
    namediv.textContent = el.name;
    // pricediv.textContent = "&#8377;" + el.price;
    pricediv.innerHTML = "₹" + el.price;
    discountdiv.textContent = el.discount + "% Off";
    mrpdiv.textContent = "₹" + el.mrp;
    branddiv.textContent = "Brand: " + el.brand;
    colordiv.textContent = "Color-Family: " + el.color_family;
    freeshipingdiv.textContent = "Free Shipping";

    //Append all the element
    lstdiv.append(branddiv, colordiv);
    stardiv.append(spanbox2, spanbox3, spanbox4, spanbox5, spanbox6);
    priceanddisdiv.append(pricediv, discountdiv);
    innerimagediv.append(innerimagetag);
    firstimagediv.append(innerimagediv);

    mainproductbox.append(
      firstimagediv,
      namediv,
      priceanddisdiv,
      mrpdiv,
      stardiv,
      freeshipingdiv,
      lstdiv
    );

    likebox.append(spanbox1);
    singlemainbox.append(likebox, mainproductbox);

    document.querySelector("#jsproduct").append(singlemainbox);
  });
}
