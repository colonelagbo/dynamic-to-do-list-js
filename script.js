document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
        const taskText = taskInput.value.trim();
        
        if (taskText !== "") {
            // Create new list item
            const li = document.createElement('li');
            li.textContent = taskText;

            // Create remove button
            const removeButton = document.createElement('button');
            removeButton.textContent = "Remove";
            removeButton.className = 'remove-btn';
            
            // Assign onclick event to remove button
            removeButton.onclick = function() {
                taskList.removeChild(li);
            };

            // Append remove button to list item
            li.appendChild(removeButton);

            // Append list item to task list
            taskList.appendChild(li);

            // Clear the task input field
            taskInput.value = "";
        }
    }

    // Add event listener to the add button
    addButton.addEventListener('click', addTask);

    // Add event listener to the task input for Enter key press
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});