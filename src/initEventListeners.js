import { loadProjectForm, loadTaskForm, updateTodoPage } from "./updatePage";
import { addNewProject, addNewTask, deleteTask, taskComplete } from "./taskFunctionality";

class SelectProjectListener {
    constructor() {}

    addSelectEventListner() {
        const getTaskButton = document.querySelector('#selector-button');
        getTaskButton.addEventListener('click', updateTodoPage);
    }
}

class TaskHandlingListener {
    constructor() {}
    
    addDeleteTaskEventListener() {
        const delButtons = Array.from(document.querySelectorAll('#task-del-button'));
        for(let i=0;i<delButtons.length;i++) {
            delButtons[i].addEventListener('click',deleteTask);
        }   
    }

    addCompleteTaskEventListener() {
        const completeButtons = Array.from(document.querySelectorAll('#task-comp-button'));
        for(let i=0;i<completeButtons.length;i++) {
            completeButtons[i].addEventListener('click',taskComplete);
        }
    }

}

class formListener {
    constructor() {}

    addTaskEventListener() {
        const createTaskButton = document.querySelector('#create-task-button');
        createTaskButton.addEventListener('click',addNewTask);
    }


    addProjectEventListener() {
        const createProjectButton = document.querySelector('#create-project-button');
        createProjectButton.addEventListener('click',addNewProject);
    }
}

class NavigationHandlingListener {
    constructor() {}

    addTaskFormListener() {
        let switchTaskButton = document.querySelector('#task-nav');
        switchTaskButton.addEventListener('click',loadTaskForm);
    }

    addProjectFormListener() {
        let switchProjectButton = document.querySelector('#project-nav');
        switchProjectButton.addEventListener('click',loadProjectForm);
    }
}

const taskHandlerListenerInstance = new TaskHandlingListener;
const selectProjectListenerInstance = new SelectProjectListener;
const navListenerInstnace = new NavigationHandlingListener;
const formListenerInstance = new formListener

export {taskHandlerListenerInstance,selectProjectListenerInstance,navListenerInstnace, formListenerInstance};