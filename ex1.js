// random color if user click on the button
document.querySelector('#btn1').addEventListener('click', function() {
    let color = Math.floor(Math.random() * 16777215).toString(16);
    document.querySelector('.background1').style.backgroundColor = '#' + color;
});

document.querySelector('#btn2').addEventListener('click', function() {
    let color = Math.floor(Math.random() * 16777215).toString(16);
    document.querySelector('.background2').style.backgroundColor = '#' + color;
});