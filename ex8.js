let tasks = (localStorage.getItem("tasks") || "").split("|"),
            taskList = document.getElementById("taskList");
        
        window.onload = function() {
            renderTasks();
        };
        
        function addTask() {
            let taskInput = document.getElementById("taskInput");
            let taskText = taskInput.value.trim();
            
            if (taskText === "") {
                alert("Vui lòng nhập công việc!");
                return;
            }
            
            tasks.push(taskText);
            localStorage.setItem("tasks", tasks.join("|"));
            taskInput.value = "";
            renderTasks();
        }
        
        function renderTasks() {
            taskList.innerHTML = "";
            tasks.forEach((task, index) => {
                if (task) {
                    let li = document.createElement("li");
                    li.innerHTML = `
                        <span>${task}</span>
                        <div>
                            <button onclick="editTask(${index})">Sửa</button>
                            <button onclick="deleteTask(${index})">Xóa</button>
                        </div>
                    `;
                    taskList.appendChild(li);
                }
            });
        }
        
        function deleteTask(index) {
            if (confirm("Bạn có chắc chắn muốn xóa công việc này không?")) {
                tasks.splice(index, 1);
                localStorage.setItem("tasks", tasks.join("|"));
                renderTasks();
            }
        }
        
        function editTask(index) {
            let newTask = prompt("Chỉnh sửa công việc:", tasks[index]);
            if (newTask !== null && newTask.trim() !== "") {
                tasks[index] = newTask.trim();
                localStorage.setItem("tasks", tasks.join("|"));
                renderTasks();
            }
        }