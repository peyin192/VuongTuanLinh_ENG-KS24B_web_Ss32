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
                        
                    `;
                    taskList.appendChild(li);
                }
            });
        }
        
