import { taskListInstance } from "./todoList";
import { createNewTaskDisplay } from "./createTodoElement";
import { taskHandlerListenerInstance } from "./initEventListeners";
import { formGenInstance, uiGenInstance } from "./createUIElement";
import { formListenerInstance } from "./initEventListeners";

function updateHomePageListener() {
    taskHandlerListenerInstance.addDeleteTaskEventListener();
    taskHandlerListenerInstance.addCompleteTaskEventListener();
}

function updateSelector() {
    const projectSelectorDiv = document.querySelector('#project-selector-div');
    projectSelectorDiv.innerHTML = "";
    let projectSelector = uiGenInstance.createProjectSelector();
    projectSelector.id = "list-project-selector";
    projectSelectorDiv.appendChild(projectSelector);

    const selectorButton = uiGenInstance.createButton('selector-button','Select');
    projectSelectorDiv.appendChild(selectorButton);
}


function updateTodoPage() {
    const todoDiv = document.querySelector('.todo-list');


    todoDiv.innerHTML = "";
    const projectSelector = document.querySelector('#list-project-selector');
    
    const selectedProjectTasks = Array.from(taskListInstance.getTasksOfProject(projectSelector.value));
    for(let i=0;i<selectedProjectTasks.length;i++) {
        let newTask = createNewTaskDisplay(selectedProjectTasks[i]);
        todoDiv.appendChild(newTask);
    }
    updateSelector();
    updateHomePageListener();
}

function loadProjectForm() {
    const topDiv = document.querySelector('#top-div');
    topDiv.innerHTML = "";
    topDiv.appendChild(formGenInstance.createProjectForm());
    formListenerInstance.addProjectEventListener();
}

function loadTaskForm() {
    const topDiv = document.querySelector('#top-div');
    topDiv.innerHTML = "";
    topDiv.appendChild(formGenInstance.createTaskForm());
}

export {updateTodoPage, loadProjectForm, loadTaskForm};