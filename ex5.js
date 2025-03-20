function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskValue = taskInput.value.trim();
    if (taskValue === "") {
        alert("Vui lòng nhập nhiệm vụ!");
        return;
    }
    let ul = document.getElementById("taskList");
    let li = document.createElement("li");
    li.innerHTML = `${taskValue} <button class="delete-btn" onclick="confirmDelete(this)">X</button>`;
    ul.appendChild(li);
    taskInput.value = "";
}
function confirmDelete(button) {
    if (confirm("Bạn có chắc muốn xóa nhiệm vụ này?")) {
        let li = button.parentElement;
        li.remove();
    }
}