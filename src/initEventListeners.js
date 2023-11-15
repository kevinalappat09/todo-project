import { updateTodoPage } from "./updatePage";
import { addNewTask, deleteTask, taskComplete } from "./taskFunctionality";

function addSelectEventListner() {
    const getTaskButton = document.querySelector('#selector-button');
    getTaskButton.addEventListener('click', updateTodoPage);
}

function addDeleteTaskEventListener() {
    const delButtons = Array.from(document.querySelectorAll('#task-del-button'));
    for(let i=0;i<delButtons.length;i++) {
        delButtons[i].addEventListener('click',deleteTask);
    }   
}

function addCompleteTaskEventListener() {
    const completeButtons = Array.from(document.querySelectorAll('#task-comp-button'));
    for(let i=0;i<completeButtons.length;i++) {
        completeButtons[i].addEventListener('click',taskComplete);
    }
}

function addSwitchToProjectForm() {
}

function addTaskEventListener() {
    const createTaskButton = document.querySelector('#create-task-button');
    createTaskButton.addEventListener('click',addNewTask);
}

function initHomePageListener() {
    addSelectEventListner();
    addTaskEventListener();
}

function updateHomePageListener() {
    addDeleteTaskEventListener();
    addCompleteTaskEventListener();
}

export {initHomePageListener, updateHomePageListener};