data = [
    {
        name: "Solid Polo Classy Tshirt For Men",
        // imgURL: "https://cdn.shopclues.com/images1/thumbnails/109145/280/1/150573840-109145405-1597763799.jpg",
        imgURL: "https://cdn.shopclues.com/images1/detailed/109145/150573840-109145405-1597763799.jpg",
        mrp: "₹499",
        discount: "50%",
        color_family: "orange",
        brand: "Polo",
        size: 'S',
    }
]
data.map(function (elem) {
    // var image = document.createElement("img");
    var image1 = document.querySelector("#topImage")
    image1.setAttribute("src", elem.imgURL);
    // document.querySelector(".topImageDiv").append(image)
    // document.querySelector(".small-img-col").append(image)
    var image_bot_1 = document.querySelector("#topImage1")
    image_bot_1.setAttribute("src", "https://cdn.shopclues.com/images1/detailed/109145/150573840-109145405-1597763799.jpg")
    var image_bot_2 = document.querySelector("#topImage2")
    image_bot_2.setAttribute("src", "https://cdn.shopclues.com/images1/detailed/109145/150573840-109145406-1597763800.jpg")
    var image_bot_3 = document.querySelector("#topImage3")
    image_bot_3.setAttribute("src", "https://cdn.shopclues.com/images1/detailed/109145/150573840-109145407-1597763801.jpg")

})
// document.querySelector(".box1P1").textContent = "Hello world"
// var MainProductImage = document.querySelector("#topImage");
// var SubProductImage1 = document.querySelector("#topImage3");
// console.log(SubProductImage1)
// SubProductImage1.addEventListener("click",function(){
//     // MainProductImage.src = "https://cdn.shopclues.com/images1/detailed/109145/150573840-109145405-1597763799.jpg";
//     MainProductImage.setAttribute("src","https://cdn.shopclues.com/images1/detailed/109145/150573840-109145405-1597763799.jpg")
//     console.log("here");
// })
// ----------------------------------------------------------------------------
var MainProductImage = document.getElementById("topImage");
console.log(MainProductImage)
var SubProductImage = document.getElementsByClassName("small-img-col");
// for(var i=0;i<SubProductImage.length;i++){
//     console.log(SubProductImage[i]);
// }
SubProductImage[0].onclick = function(){
    // MainProductImage = SubProductImage[0];
    MainProductImage.setAttribute("src","https://cdn.shopclues.com/images1/detailed/109145/150573840-109145405-1597763799.jpg")
}
SubProductImage[1].onclick = function(){
    // MainProductImage= SubProductImage[1];
    MainProductImage.setAttribute("src","https://cdn.shopclues.com/images1/detailed/109145/150573840-109145406-1597763800.jpg")
}
SubProductImage[2].onclick = function(){
    // MainProductImage = SubProductImage[2];
    MainProductImage.setAttribute("src","https://cdn.shopclues.com/images1/detailed/109145/150573840-109145407-1597763801.jpg")
    console.log(MainProductImage)
}
// -------------------------------------------------------------------------------------------
// var MainProductImage = document.querySelector("#topImage");
// var SubProductImage = document.querySelectorAll(".SubImages");
// // console.log(SubProductImage)/
// for(var i=0;i<SubProductImage.length;i++){
//     console.log(SubProductImage[i].addEventListener("click",changeImage));
// }
// function changeImage(){

// }