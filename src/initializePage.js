import { uiGenInstance, formGenInstance } from "./createUIElement"
import { taskHandlerListenerInstance, selectProjectListenerInstance, navListenerInstnace, formListenerInstance } from "./initEventListeners";



function initializeNavBar() {
    let navContainer = uiGenInstance.createContainerDiv("nav-container");
    let navButtonGroup = uiGenInstance.createGeneralDiv("button-group","nav-button-group");
    const navButtonTask = uiGenInstance.createLinkButton("task-nav","Create A Task");
    navButtonGroup.appendChild(navButtonTask);
    const navButtonproject = uiGenInstance.createLinkButton("project-nav","Create A Project");
    navButtonGroup.appendChild(navButtonproject);
    navContainer.appendChild(navButtonGroup);
    return navContainer;
}

function initializeTopDiv() {
    let topDiv = uiGenInstance.createContainerDiv("top-div");
    topDiv.appendChild(formGenInstance.createTaskForm());
    return topDiv;
}

function initializeSelector() {
    let projectSelectorDiv = uiGenInstance.createContainerDiv("project-selector-div");
    let projectSelector = uiGenInstance.createProjectSelector();
    projectSelector.id = "list-project-selector";
    projectSelectorDiv.appendChild(projectSelector);

    const selectorButton = uiGenInstance.createButton('selector-button','Select');
    projectSelectorDiv.appendChild(selectorButton);

    return projectSelectorDiv;
}

function initializeTaskContainer() {
    let todoDiv = document.createElement('div');
    todoDiv.classList.add('todo-list');
    todoDiv.innerHTML = "No Chapter Selected";
    return todoDiv;
}

function initHomePageListener() {
    selectProjectListenerInstance.addSelectEventListner();
    navListenerInstnace.addProjectFormListener();
    navListenerInstnace.addTaskFormListener();
    formListenerInstance.addTaskEventListener();
}

function initializePage() {
    let contentDiv = document.querySelector('.content');
    contentDiv.appendChild(initializeNavBar());
    contentDiv.appendChild(initializeTopDiv());
    contentDiv.appendChild(initializeSelector());
    contentDiv.appendChild(initializeTaskContainer());
    initHomePageListener();
}

export { initializePage };