var one = document.querySelector("#one")
var two = document.querySelector("#two")
var three = document.querySelector("#three")
var four = document.querySelector("#four")
var five = document.querySelector("#five")
var num = document.querySelector("#num")
var second = document.querySelector("#second")
var cardd1 = document.querySelector("#cardd1")
var sumbit = document.querySelector(".su");
// Variable to store the selected rating
var selectedRating = 0;

   


one.onclick = function() {
    selectedRating = 1;
};

two.onclick = function() {
    selectedRating = 2;
};

three.onclick = function() {
    selectedRating = 3;
};

four.onclick = function() {
    selectedRating = 4;
};

five.onclick = function() {
    selectedRating = 5;
};



// Event listener for the "Sumbit" button
sumbit.onclick = function() {
    // Update the content of the num element
    num.textContent = selectedRating;

    // Show the second div
    cardd1.style.display = "none"; // Assuming you want to hide the rating state
    second.style.display = "block";
};
