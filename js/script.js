function createTask() {
    let taskInput = document.getElementById("taskInput");

    if (taskInput.value != '') {
        let newTask = document.createElement("li");
        let taskList = document.getElementById("taskList");
        newTask.textContent = taskInput.value;
        newTask.addEventListener('click', function () {
            newTask.classList.toggle("completed");
        })

        newTask.addEventListener('dblclick', function () {
            taskList.removeChild(newTask);
        });

        taskList.appendChild(newTask);
        taskInput.value = "";
    }
}

let addTaskButton = document.getElementById("addTaskBtn").addEventListener("click", () => createTask());