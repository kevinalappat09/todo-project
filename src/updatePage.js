import { taskListInstance } from "./todoList";
import { createNewTaskDisplay } from "./createTodoElement";
import { taskHandlerListenerInstance } from "./initEventListeners";
import { formGenInstance } from "./createUIElement";

function updateHomePageListener() {
    taskHandlerListenerInstance.addDeleteTaskEventListener();
    taskHandlerListenerInstance.addCompleteTaskEventListener();
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
    updateHomePageListener();
}

function loadProjectForm() {
    const topDiv = document.querySelector('#top-div');
    topDiv.innerHTML = "";
    topDiv.appendChild(formGenInstance.createProjectForm());
}

function loadTaskForm() {
    const topDiv = document.querySelector('#top-div');
    topDiv.innerHTML = "";
    topDiv.appendChild(formGenInstance.createTaskForm());
}

export {updateTodoPage, loadProjectForm, loadTaskForm};