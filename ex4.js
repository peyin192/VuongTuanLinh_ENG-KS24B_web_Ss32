function validateEmail() {
    let email = document.getElementById("email").value;
    let message = document.getElementById("message");
    let regex = /^[^\s@]+@[^\s@]+\.(com|vn)$/i; 
    
    if (regex.test(email)) {
        message.textContent = "Email hợp lệ!";
        message.className = "valid";
    } else {
        message.textContent = "Email không hợp lệ!";
        message.className = "invalid";
    }
}