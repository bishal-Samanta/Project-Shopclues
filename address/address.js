var arr = JSON.parse(localStorage.getItem('addressDatabase')) ||[];

var save = document.querySelector(".save").addEventListener("click",saveData);

function saveData(){

    var uName = document.querySelector('.name').value;
    var mob = document.querySelector('.mobile').value;
    var h_add = document.querySelector('.houseNo').value;
    var lm = document.querySelector('.landmark').value; 
    var pin = document.querySelector('.pincode').value;
    var ct = document.querySelector('.city').value; 
    var st = document.querySelector('.states').value;

    var addressObj = {
        fullName : uName,
        mobile: mob,
        house: h_add,
        landmark: lm,
        pincode: pin,
        city: ct,
        state: st,
    }

    arr.push(addressObj);
    localStorage.setItem('addressDatabase',JSON.stringify(arr));
    console.log(arr);
}

// var arr = [
//     {
//         city: "Mumbai"
//         fullName: "Sumeet Shinde"
//         house: "Sion"
//         landmark: "Sion"
//         mobile: "8767956476"
//         pincode: "400017"
//         state: "Maharashtra"
//     }
// ]
