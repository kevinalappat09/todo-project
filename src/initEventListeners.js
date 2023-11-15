import { updateTodoPage, updateTopDivForm } from "./updatePage";
import { addNewTask, deleteTask, taskComplete } from "./taskFunctionality";
import { createProjectForm, createTaskForm } from "./dyanmicForm";

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
      const switchToProjectButton = document.querySelector('#switch-to-project');
      console.log(switchToProjectButton);
      switchToProjectButton.addEventListener('click',updateTopDivForm);
}

function addSwitchToTaskForm() {
    const switchToTaskButton = document.querySelector('#switch-to-task');
    switchToTaskButton.addEventListener('click',updateTopDivForm)
    console.log("Test");
}

function addTaskEventListener() {
    const createTaskButton = document.querySelector('#create-task-button');
    createTaskButton.addEventListener('click',addNewTask);
}

function initHomePageListener() {
    addSelectEventListner();
    addTaskEventListener();
    addSwitchToProjectForm();
}

function updateHomePageListener() {
    addDeleteTaskEventListener();
    addCompleteTaskEventListener();
}

export {initHomePageListener, updateHomePageListener, addSwitchToTaskForm, addSwitchToProjectForm};