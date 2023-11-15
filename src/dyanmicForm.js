import { createProjectSelector } from "./createProjectSelector";

function createTaskForm() {
    let taskFormDiv = document.createElement('div');

    let taskTitleInput = document.createElement('input');
    taskTitleInput.classList.add('form-input');
    taskTitleInput.id = 'title-input';
    taskTitleInput.placeholder = "Title";
    taskTitleInput.type = 'text';
    taskFormDiv.appendChild(taskTitleInput);

    let taskDueInput = document.createElement('input');
    taskDueInput.classList.add('form-input');
    taskDueInput.id = 'due-input';
    taskDueInput.type = 'date';
    taskFormDiv.appendChild(taskDueInput);

    let taskDescriptionInput = document.createElement('input');
    taskDescriptionInput.type = 'text';
    taskDescriptionInput.id = 'desc-input';
    taskDescriptionInput.classList.add('form-input');
    taskDescriptionInput.placeholder = "Description";
    taskFormDiv.appendChild(taskDescriptionInput);

    let taskPriorityInput = document.createElement('select');
    taskPriorityInput.id = 'priority-input';
    taskPriorityInput.classList.add('form-input');
    
    let taskPriorityOption1 = document.createElement('option');
    taskPriorityOption1.value = 1;
    taskPriorityOption1.innerHTML = "High";
    taskPriorityInput.appendChild(taskPriorityOption1);

    let taskPriorityOption2 = document.createElement('option');
    taskPriorityOption2.value = 2;
    taskPriorityOption2.innerHTML = "Medium";
    taskPriorityInput.appendChild(taskPriorityOption2);

    let taskPriorityOption3 = document.createElement('option');
    taskPriorityOption3.value = 3;
    taskPriorityOption3.innerHTML = "Low";
    taskPriorityInput.appendChild(taskPriorityOption3);

    taskFormDiv.appendChild(taskPriorityInput);

    let taskProjectInput = createProjectSelector();
    taskProjectInput.id = 'project-input';
    taskFormDiv.appendChild(taskProjectInput);


    let taskCreateButton = document.createElement('button');
    taskCreateButton.innerHTML = "Create";
    taskCreateButton.id = "create-task-button";
    taskCreateButton.classList.add("button");
    taskFormDiv.appendChild(taskCreateButton);

    return taskFormDiv;
}

function createProjectForm() {

}

export {createTaskForm, createProjectForm};