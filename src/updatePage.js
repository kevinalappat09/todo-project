import { taskListInstance } from "./todoList";
import { createNewTaskDisplay } from "./createTodoElement";
import { updateHomePageListener } from "./initEventListeners";
import { createTaskForm, createProjectForm } from "./dyanmicForm";

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

function initTopDivForm() {
    let topDiv = document.querySelector('.top-div');
    topDiv.innerHTML = "";  
    topDiv.appendChild(createTaskForm());
}

function updateTopDivForm() {
    let trigger = 0;

    let topDiv = document.querySelector('.top-div');
    topDiv.innerHTML = "";  
    if(trigger == 0) {
        topDiv.appendChild(createTaskForm());
        trigger = 1;
    } else {
        topDiv.appendChild(createProjectForm());
    }
}

export {updateTodoPage, updateTopDivForm, initTopDivForm};