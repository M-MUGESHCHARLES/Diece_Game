//  =====================================
// reload the content in the page.
// ======================================

 function refreshPage() {
     location.reload();
    } 

// =====================================
// generate an random number to manipulate the image from the other images in  folder.
// =====================================

var randomnumber1 = Math.floor(Math.random() * 6) + 1;
var randomImgSrc1 = "images/dice" + randomnumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomImgSrc1);

var randomnumber2 = Math.floor(Math.random() * 6) + 1;
var randomImgSrc2 = "images/dice" + randomnumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImgSrc2);

// ======================================
// declaration statements.
// ======================================

if (randomnumber1 > randomnumber2) {
    document.getElementById("declaration-txt").innerHTML=( " 🚩 Player 1 wins!");  
} 
else if (randomnumber2 > randomnumber1) {
    document.getElementById("declaration-txt").innerHTML=(" Player 2 wins! 🚩");
}
else {
    document.getElementById("declaration-txt").innerHTML=(" It's a tie! ");
    }