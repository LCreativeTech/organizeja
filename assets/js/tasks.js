document.getElementById("taskForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const desc = e.target[0].value;
    const categoria = e.target[1].value;

    if (desc) {
        const task = { id: Date.now(), desc, categoria };
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        renderTasks();
        e.target.reset();
    }
});

function renderTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = tasks.map(task => `
        <li data-id="${task.id}">
            ${task.desc} (${task.categoria})
            <button class="delete-btn"><i class="fas fa-trash"></i></button>
        </li>
    `).join("");

    document.querySelectorAll(".delete-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const taskId = parseInt(e.target.closest("li").dataset.id);
            const updatedTasks = tasks.filter(t => t.id !== taskId);
            localStorage.setItem("tasks", JSON.stringify(updatedTasks));
            renderTasks();
        });
    });
}

renderTasks();
