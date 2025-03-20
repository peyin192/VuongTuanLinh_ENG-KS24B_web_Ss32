let point = 0;

// display the point of times the "click" button is pressed
document.querySelector("#btn").addEventListener("click", function() {
    point++;
    document.querySelector("#point").innerHTML = point;
});
