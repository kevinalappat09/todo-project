import { createNewToDo } from "./todo";

function getTitleFromInput() {
    const titleValue = document.querySelector('#title-input').value;
    return titleValue;
}

function getDue() {
    const dueValue = document.querySelector('#due-input').value;
    return dueValue;
}

function getDesc() {
    const descValue = document.querySelector('#desc-input').value;
    return descValue;
}

function getPriority() {
    const priorityValue = document.querySelector('#priority-input').value;
    return priorityValue;
}

function getProject() {
    const projectValue = document.querySelector('#project-input').value;
    return projectValue;
}

function createTaskFromInput(uid) {
    const newTask = createNewToDo(getProject(),uid,getTitleFromInput(),getDue(),getDesc(),getPriority(),false);
    return newTask;
}

export {createTaskFromInput};