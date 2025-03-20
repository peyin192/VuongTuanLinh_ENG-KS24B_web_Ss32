function changeFontSize(value) {
    let text = document.getElementById("text");
    let currentSize = parseInt(window.getComputedStyle(text).fontSize);
    text.style.fontSize = (currentSize + value) + "px";
}