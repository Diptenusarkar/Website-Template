document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            const taskItem = document.createElement("li");
            taskItem.innerHTML = `
                ${taskText}
                <button class="delete">Delete</button>
            `;

            taskList.appendChild(taskItem);

            taskInput.value = "";

            taskItem.querySelector(".delete").addEventListener("click", function () {
                taskItem.remove();
            });
        }
    });
});
