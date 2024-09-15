function switchSection(section) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(section).classList.remove('hidden');

    document.querySelectorAll('.sidebar ul li').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelector('.sidebar ul li[onclick="switchSection(\'' + section + '\')"]').classList.add('active');
}

function addTask() {
    const taskText = document.getElementById("taskInput").value;
    const taskDate = document.getElementById("taskDate").value;
    const taskTime = document.getElementById("taskTime").value;

    if (taskText && taskDate && taskTime) {
        const taskList = document.getElementById("taskList");
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${taskText} - Due: ${taskDate} ${taskTime}</span>
            <div class="task-actions">
                <button onclick="markComplete(this)">Complete</button>
                <button class="delete" onclick="deleteTask(this)">Delete</button>
            </div>
        `;
        taskList.appendChild(li);

        // Reset input fields
        document.getElementById("taskInput").value = '';
        document.getElementById("taskDate").value = '';
        document.getElementById("taskTime").value = '';
    } else {
        alert("Please enter all task details.");
    }
}

function markComplete(button) {
    const taskItem = button.parentElement.parentElement;
    taskItem.classList.toggle('completed');
    button.textContent = taskItem.classList.contains('completed') ? 'Pending' : 'Complete';
}

function deleteTask(button) {
    const taskItem = button.parentElement.parentElement;
    taskItem.remove();
}