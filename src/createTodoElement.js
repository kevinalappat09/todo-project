function createTaskTitleUI(taskTitle) {
    const newTaskTitle = document.createElement('div');
    newTaskTitle.innerHTML = taskTitle;
    return newTaskTitle;
}

function createTaskDueUI(taskDueDate) {
    const newTaskDueDate = document.createElement('div');
    newTaskDueDate.innerHTML = taskDueDate;
    return newTaskDueDate;
}

function createTaskDescription(taskDescription) {
    const newTaskDescription = document.createElement('div');
    newTaskDescription.innerHTML = taskDescription;
    return newTaskDescription;
}

function createTaskPriority(taskPriority) {
    const newTaskPriority = document.createElement('div');
    if (taskPriority === 1) {
        newTaskPriority.innerHTML = 'High';
    } else if (taskPriority === 2) {
        newTaskPriority.innerHTML = 'Medium';
    } else {
        newTaskPriority.innerHTML = 'Low';
    }
    return newTaskPriority;
}

function createTaskButtonGroup(uid) {
    const newTaskButtonGroup = document.createElement('div');
    const deleteButton = document.createElement('button');
    deleteButton.id = 'task-del-button';
    deleteButton.setAttribute('data-id', uid);
    deleteButton.innerHTML = 'Delete';
    newTaskButtonGroup.appendChild(deleteButton);

    const completeButton = document.createElement('button');
    completeButton.innerHTML = 'Complete';
    completeButton.setAttribute('data-id', uid);
    completeButton.id = 'task-comp-button';
    newTaskButtonGroup.appendChild(completeButton);

    return newTaskButtonGroup;
}

function createNewTaskDisplay(task) {
    const newTask = document.createElement('div');
    newTask.classList.add('task');
    const newTaskTitle = createTaskTitleUI(task.getTitle());
    newTask.appendChild(newTaskTitle);
    const newTaskDueDate = createTaskDueUI(task.getDueDate());
    newTask.appendChild(newTaskDueDate);
    const newTaskDescription = createTaskDescription(task.getDescription());
    newTask.appendChild(newTaskDescription);
    const newTaskPriority = createTaskPriority(task.getPriority());
    newTask.appendChild(newTaskPriority);

    if (task.getIsComplete() === true) {
        newTask.style.color = 'red';
    }

    const buttonGroup = createTaskButtonGroup(task.getUID());
    newTask.appendChild(buttonGroup);

    return newTask;
}

export default { createNewTaskDisplay };
