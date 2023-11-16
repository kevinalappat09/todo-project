/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/createTaskFromInput.js":
/*!************************************!*\
  !*** ./src/createTaskFromInput.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTaskFromInput: () => (/* binding */ createTaskFromInput)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/todo.js");


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
    const newTask = (0,_todo__WEBPACK_IMPORTED_MODULE_0__.createNewToDo)(getProject(),uid,getTitleFromInput(),getDue(),getDesc(),getPriority(),false);
    return newTask;
}



/***/ }),

/***/ "./src/createTodoElement.js":
/*!**********************************!*\
  !*** ./src/createTodoElement.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createNewTaskDisplay: () => (/* binding */ createNewTaskDisplay)
/* harmony export */ });
function createTaskTitleUI(taskTitle) {
    let newTaskTitle = document.createElement('div');
    newTaskTitle.innerHTML = taskTitle;
    return newTaskTitle;
}

function createTaskDueUI(taskDueDate) {
    let newTaskDueDate = document.createElement('div');
    newTaskDueDate.innerHTML = taskDueDate;
    return newTaskDueDate;
}

function createTaskDescription(taskDescription) {
    let newTaskDescription = document.createElement('div');
    newTaskDescription.innerHTML = taskDescription;
    return newTaskDescription;
}

function createTaskPriority(taskPriority) {
    let newTaskPriority = document.createElement('div');
    if(taskPriority == 1) {
        newTaskPriority.innerHTML = "High";
    } else if(taskPriority == 2) {
        newTaskPriority.innerHTML = "Medium";
    } else {
        newTaskPriority.innerHTML = "Low";
    }
    return newTaskPriority;
}

function createTaskButtonGroup(uid) {
    let newTaskButtonGroup = document.createElement('div');
    
    let deleteButton = document.createElement('button');
    deleteButton.id = "task-del-button";
    deleteButton.setAttribute('data-id',uid);
    deleteButton.innerHTML = "Delete";
    newTaskButtonGroup.appendChild(deleteButton);

    let completeButton = document.createElement('button');
    completeButton.innerHTML = "Complete";
    completeButton.setAttribute('data-id',uid);
    completeButton.id = "task-comp-button";
    newTaskButtonGroup.appendChild(completeButton);

    return newTaskButtonGroup;
}


function createNewTaskDisplay(task) {
    let newTask = document.createElement('div');
        
    const newTaskTitle = createTaskTitleUI(task.getTitle());
    newTask.appendChild(newTaskTitle);
    
    const newTaskDueDate = createTaskDueUI(task.getDueDate());
    newTask.appendChild(newTaskDueDate);

    const newTaskDescription = createTaskDescription(task.getDescription());
    newTask.appendChild(newTaskDescription);

    const newTaskPriority = createTaskPriority(task.getPriority());
    newTask.appendChild(newTaskPriority);

    if(task.getIsComplete() == true) {
        newTask.style.color = "red";
    }

    const buttonGroup = createTaskButtonGroup(task.getUID());
    newTask.appendChild(buttonGroup);

    return newTask;
}



/***/ }),

/***/ "./src/createUIElement.js":
/*!********************************!*\
  !*** ./src/createUIElement.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formGenInstance: () => (/* binding */ formGenInstance),
/* harmony export */   uiGenInstance: () => (/* binding */ uiGenInstance)
/* harmony export */ });
/* harmony import */ var _projectList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectList */ "./src/projectList.js");


class UIGen {
    constructor() {

    }

    createButton(idName, text) {
        let newButton = document.createElement('button');
        newButton.classList.add('button');
        newButton.id = idName;
        newButton.innerHTML = text;
        return newButton;
    }
    
    createLinkButton(idName,text) {
        let newButton = document.createElement('button');
        newButton.classList.add('link-button');
        newButton.id = idName;
        newButton.innerHTML = text;
        return newButton;
    }

    createContainerDiv(idName) {
        let newContainerDiv = document.createElement('div');
        newContainerDiv.classList.add('container');
        newContainerDiv.id = idName;
        return newContainerDiv;
    }

    createGeneralDiv(className,idName) {
        let newGeneralDiv = document.createElement('div');
        newGeneralDiv.classList.add(className);
        newGeneralDiv.id = idName;
        return newGeneralDiv;
    }

    createInput(id,type,placeholder) {
        let newInput = document.createElement('input');
        newInput.classList.add('form-input');
        newInput.id = id;
        newInput.type = type;
        if(placeholder) {
            newInput.placeholder = placeholder;
        }
        return newInput;
    }

    createPrioritySelector() {
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

        return taskPriorityInput;
    }

    createProjectSelector() {
        let projectSelector = document.createElement('select');
        projectSelector.classList.add('selector');
        projectSelector.name = "project-selector";
        projectSelector.id = 'project-input';

        const projects = Array.from(_projectList__WEBPACK_IMPORTED_MODULE_0__.projectListInstance.getProjectList());
        for(let i=0; i<projects.length;i++) {
            let projectOption = document.createElement('option');
            projectOption.value = projects[i].getProjectName();
            projectOption.innerHTML = projects[i].getProjectName();
            projectSelector.appendChild(projectOption);
        }

        return projectSelector;
    }

    createColorSelector() {
        let projectColorInput = document.createElement('select');
        projectColorInput.id = 'pColor-input';
        projectColorInput.classList.add('form-input');
        
        let pco1 = document.createElement('option');
        pco1.value = "blue";
        pco1.innerHTML = "Blue";
        projectColorInput.appendChild(pco1);

        let pco2 = document.createElement('option');
        pco2.value = "green";
        pco2.innerHTML = "Green";
        projectColorInput.appendChild(pco2);

        let pco3 = document.createElement('option');
        pco3.value = "red";
        pco3.innerHTML = "Red";
        projectColorInput.appendChild(pco3);

        return projectColorInput;
    }
}

const uiGenInstance = new UIGen;

class FormGen {
    constructor() {

    }

    createTaskForm() {
        let taskFormDiv = document.createElement('div');
        taskFormDiv.classList.add('form-div');
    
        let taskTitleInput = uiGenInstance.createInput('tite-input','text',"Title");
        taskFormDiv.appendChild(taskTitleInput);
    
        let taskDueInput = uiGenInstance.createInput('due-input','date');
        taskFormDiv.appendChild(taskDueInput);
    
        let taskDescriptionInput = uiGenInstance.createInput('desc-input','text','Description');
        taskFormDiv.appendChild(taskDescriptionInput);
    
        
        taskFormDiv.appendChild(uiGenInstance.createPrioritySelector());
    
        let taskProjectInput = uiGenInstance.createProjectSelector();
        taskFormDiv.appendChild(taskProjectInput);
    
        let taskCreateButton = uiGenInstance.createButton('create-task-button',"Create");
        taskFormDiv.appendChild(taskCreateButton);
    
        return taskFormDiv;
    }

    createProjectForm() {
        let projectForm = document.createElement('div');
    
        let projectNameInput = uiGenInstance.createInput('pName-input','text','Project Name');
        projectForm.appendChild(projectNameInput);
    
        projectForm.appendChild(uiGenInstance.createColorSelector());
    
        let projectCreateButton = uiGenInstance.createButton('create-project-button','Create Project');
        projectForm.appendChild(projectCreateButton);
    
        return projectForm;
    }
}

const formGenInstance = new FormGen;


/***/ }),

/***/ "./src/errorHandler.js":
/*!*****************************!*\
  !*** ./src/errorHandler.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   projectErrorObject: () => (/* binding */ projectErrorObject),
/* harmony export */   taskErrorObject: () => (/* binding */ taskErrorObject)
/* harmony export */ });
class taskErrors {
    constructor() {

    }

    notTaskError() {
        console.log("Tried inserting an item that was not class todo into the task list");
    }

    taskNotFound() {
        console.log("task with the required UID not found");
    }

    wrongIsCompleteID() {
        console.log("wrong data value has been provided to set the is complete for a task")
    }
}

class projectErrors {
    constructor() {

    }

    notProjectError() {
        console.log("Tried inserting an item that was not a project into project list");
    }
}

const taskErrorObject = new taskErrors;
const projectErrorObject = new projectErrors



/***/ }),

/***/ "./src/initEventListeners.js":
/*!***********************************!*\
  !*** ./src/initEventListeners.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   navListenerInstnace: () => (/* binding */ navListenerInstnace),
/* harmony export */   selectProjectListenerInstance: () => (/* binding */ selectProjectListenerInstance),
/* harmony export */   taskHandlerListenerInstance: () => (/* binding */ taskHandlerListenerInstance)
/* harmony export */ });
/* harmony import */ var _updatePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updatePage */ "./src/updatePage.js");
/* harmony import */ var _taskFunctionality__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskFunctionality */ "./src/taskFunctionality.js");



class SelectProjectListener {
    constructor() {}

    addSelectEventListner() {
        const getTaskButton = document.querySelector('#selector-button');
        getTaskButton.addEventListener('click', _updatePage__WEBPACK_IMPORTED_MODULE_0__.updateTodoPage);
    }
}

class TaskHandlingListener {
    constructor() {}
    
    addDeleteTaskEventListener() {
        const delButtons = Array.from(document.querySelectorAll('#task-del-button'));
        for(let i=0;i<delButtons.length;i++) {
            delButtons[i].addEventListener('click',_taskFunctionality__WEBPACK_IMPORTED_MODULE_1__.deleteTask);
        }   
    }

    addCompleteTaskEventListener() {
        const completeButtons = Array.from(document.querySelectorAll('#task-comp-button'));
        for(let i=0;i<completeButtons.length;i++) {
            completeButtons[i].addEventListener('click',_taskFunctionality__WEBPACK_IMPORTED_MODULE_1__.taskComplete);
        }
    }
}

class NavigationHandlingListener {
    constructor() {}

    addTaskFormListener() {
        let switchTaskButton = document.querySelector('#task-nav');
        switchTaskButton.addEventListener('click',_updatePage__WEBPACK_IMPORTED_MODULE_0__.loadTaskForm);
    }

    addProjectFormListener() {
        let switchProjectButton = document.querySelector('#project-nav');
        switchProjectButton.addEventListener('click',_updatePage__WEBPACK_IMPORTED_MODULE_0__.loadProjectForm);
    }
}

const taskHandlerListenerInstance = new TaskHandlingListener;
const selectProjectListenerInstance = new SelectProjectListener;
const navListenerInstnace = new NavigationHandlingListener;



/***/ }),

/***/ "./src/initializePage.js":
/*!*******************************!*\
  !*** ./src/initializePage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initializePage: () => (/* binding */ initializePage)
/* harmony export */ });
/* harmony import */ var _createUIElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createUIElement */ "./src/createUIElement.js");
/* harmony import */ var _initEventListeners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initEventListeners */ "./src/initEventListeners.js");





function initializeNavBar() {
    let navContainer = _createUIElement__WEBPACK_IMPORTED_MODULE_0__.uiGenInstance.createContainerDiv("nav-container");
    let navButtonGroup = _createUIElement__WEBPACK_IMPORTED_MODULE_0__.uiGenInstance.createGeneralDiv("button-group","nav-button-group");
    const navButtonTask = _createUIElement__WEBPACK_IMPORTED_MODULE_0__.uiGenInstance.createLinkButton("task-nav","Create A Task");
    navButtonGroup.appendChild(navButtonTask);
    const navButtonproject = _createUIElement__WEBPACK_IMPORTED_MODULE_0__.uiGenInstance.createLinkButton("project-nav","Create A Project");
    navButtonGroup.appendChild(navButtonproject);
    navContainer.appendChild(navButtonGroup);
    return navContainer;
}

function initializeTopDiv() {
    let topDiv = _createUIElement__WEBPACK_IMPORTED_MODULE_0__.uiGenInstance.createContainerDiv("top-div");
    topDiv.appendChild(_createUIElement__WEBPACK_IMPORTED_MODULE_0__.formGenInstance.createTaskForm());
    return topDiv;
}

function initializeSelector() {
    let projectSelectorDiv = _createUIElement__WEBPACK_IMPORTED_MODULE_0__.uiGenInstance.createContainerDiv("project-selector-div");
    let projectSelector = _createUIElement__WEBPACK_IMPORTED_MODULE_0__.uiGenInstance.createProjectSelector();
    projectSelector.id = "list-project-selector";
    projectSelectorDiv.appendChild(projectSelector);

    const selectorButton = _createUIElement__WEBPACK_IMPORTED_MODULE_0__.uiGenInstance.createButton('selector-button','Select');
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
    _initEventListeners__WEBPACK_IMPORTED_MODULE_1__.selectProjectListenerInstance.addSelectEventListner();
    _initEventListeners__WEBPACK_IMPORTED_MODULE_1__.navListenerInstnace.addProjectFormListener();
    _initEventListeners__WEBPACK_IMPORTED_MODULE_1__.navListenerInstnace.addTaskFormListener();
}

function initializePage() {
    let contentDiv = document.querySelector('.content');
    contentDiv.appendChild(initializeNavBar());
    contentDiv.appendChild(initializeTopDiv());
    contentDiv.appendChild(initializeSelector());
    contentDiv.appendChild(initializeTaskContainer());
    initHomePageListener();
}



/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkIfProject: () => (/* binding */ checkIfProject),
/* harmony export */   createNewProject: () => (/* binding */ createNewProject)
/* harmony export */ });
class project {
    constructor(uid, projectName, projectColor) {
        this.uid = uid;
        this.projectName = projectName;
        this.projectColor = projectColor;
    }

    getProjectName() {
        return this.projectName;
    }

    getProjectColor() {
        return this.projectColor;
    }
}

function createNewProject(uid,projectName, projectColor) {
    const newProject = new project(uid, projectName,projectColor);
    return newProject;
}

function checkIfProject(p) {
    if(p instanceof project) {
        return true;
    }
    return false;
}



/***/ }),

/***/ "./src/projectList.js":
/*!****************************!*\
  !*** ./src/projectList.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   projectListInstance: () => (/* binding */ projectListInstance)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _errorHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./errorHandler */ "./src/errorHandler.js");



class projectList {
    constructor() {
        this.projectList = [];
        this.projectCounter = 0;
    }

    projectListAppend(project) {
        if((0,_project__WEBPACK_IMPORTED_MODULE_0__.checkIfProject)(project)) {
            this.projectList.push(project);
            this.projectCounter++;
        } else {
            _errorHandler__WEBPACK_IMPORTED_MODULE_1__.projectErrorObject.notProjectError();
        }
    }

    getProjectList() {
        return this.projectList
    }

    getCurrentProjectCounter() {
        return this.projectCounter;
    }
}


//Make delete task

const projectListInstance = new projectList;



/***/ }),

/***/ "./src/taskFunctionality.js":
/*!**********************************!*\
  !*** ./src/taskFunctionality.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addNewTask: () => (/* binding */ addNewTask),
/* harmony export */   deleteTask: () => (/* binding */ deleteTask),
/* harmony export */   taskComplete: () => (/* binding */ taskComplete)
/* harmony export */ });
/* harmony import */ var _todoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoList */ "./src/todoList.js");
/* harmony import */ var _updatePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updatePage */ "./src/updatePage.js");
/* harmony import */ var _createTaskFromInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createTaskFromInput */ "./src/createTaskFromInput.js");





function addNewTask() {
    const taskUID = _todoList__WEBPACK_IMPORTED_MODULE_0__.taskListInstance.getCurrentCounter();
    const newTask = (0,_createTaskFromInput__WEBPACK_IMPORTED_MODULE_2__.createTaskFromInput)(taskUID);
    _todoList__WEBPACK_IMPORTED_MODULE_0__.taskListInstance.taskListAppend(newTask);
    (0,_updatePage__WEBPACK_IMPORTED_MODULE_1__.updateTodoPage)();
}

function deleteTask(e) {
    _todoList__WEBPACK_IMPORTED_MODULE_0__.taskListInstance.deleteTask(e.target.getAttribute('data-id'));
    (0,_updatePage__WEBPACK_IMPORTED_MODULE_1__.updateTodoPage)();
}

function taskComplete(e) {
    console.log(e.target);
    _todoList__WEBPACK_IMPORTED_MODULE_0__.taskListInstance.setComplete(e.target.getAttribute('data-id'));
    (0,_updatePage__WEBPACK_IMPORTED_MODULE_1__.updateTodoPage)();
}



/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkIfTask: () => (/* binding */ checkIfTask),
/* harmony export */   createNewToDo: () => (/* binding */ createNewToDo)
/* harmony export */ });
/* harmony import */ var _errorHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errorHandler */ "./src/errorHandler.js");


class todo {
    constructor(project, uid, title, duedate, description, priority, isComplete) {
        this.project = project;
        this.uid = uid;
        this.title = title;
        this.duedate = duedate;
        this.description = description;
        this.priority = priority;
        this.isComplete = isComplete
    }

    getUID() {
        return this.uid;
    }

    getTitle () {
        return this.title;
    }

    getDueDate() {
        return this.duedate;
    }

    getDescription() {
        return this.description;
    }

    getPriority() {
        return this.priority;
    }

    getTaskProject() {
        return this.project;
    }

    getIsComplete() {
        return this.isComplete;
    }

    setIsComplete(i) {
        if(i==true) {
            this.isComplete = true;
        } else if(i==false) {
            this.isComplete = false;
        } else {
            _errorHandler__WEBPACK_IMPORTED_MODULE_0__.taskErrorObject.wrongIsCompleteID();
        }
    }

};

function createNewToDo(project, uid, title, duedate, description, priority, isComplete) {
    const newToDo = new todo(project, uid, title, duedate, description, priority, isComplete);
    return newToDo;
}

function checkIfTask(t1) {
    if(t1 instanceof todo) {
        return true;
    }
    return false;
}



/***/ }),

/***/ "./src/todoList.js":
/*!*************************!*\
  !*** ./src/todoList.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   taskListInstance: () => (/* binding */ taskListInstance)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _errorHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./errorHandler */ "./src/errorHandler.js");



class taskList {
    constructor() {
        this.taskList = [];
        this.counter = 0;
    }


    taskListAppend(task) {
        if((0,_todo__WEBPACK_IMPORTED_MODULE_0__.checkIfTask)(task)) {
            this.taskList.push(task);
            this.counter += 1;
        }
        else {
            _errorHandler__WEBPACK_IMPORTED_MODULE_1__.taskErrorObject.notTaskError();
        }
    }

    getCurrentCounter() {
        return this.counter;
    }

    getTaskList() {
        return this.taskList;
    }

    getTasksOfProject(projectName) {
        let newTaskList = [];
    
        for(let i=0;i<this.taskList.length;i++) {
            if(this.taskList[i].getTaskProject()==projectName) {
                newTaskList.push(this.taskList[i]);
            }
        }
    
        return newTaskList;
    }

    getCompleteTasksOfProject(projectName) {
        let newTaskList = [];
        for(let i=0;i<this.taskList.length;i++) {
            if(this.taskList[i].getTaskProject() == projectName && this.taskList[i].getIsComplete() == true) {
                newTaskList.push(this.taskList[i]);
            }
        }
        return newTaskList;
    }

    getIncompleteTasksOfProject(projectName) {
        let newTaskList = [];
        for(let i=0;i<this.taskList.length;i++) {
            if(this.taskList[i].getTaskProject() == projectName && this.taskList[i].getIsComplete() == false) {
                newTaskList.push(this.taskList[i]);
            }
        }
        return newTaskList;
    }


    deleteTask(taskUID) {
        let i=0;
        let itemToDelete = -1;
        while(i<this.taskList.length) {
            if(this.taskList[i].getUID() == taskUID) {
                itemToDelete = i;
                break;
            }
            i++;
        }
        if(itemToDelete == -1) {
            _errorHandler__WEBPACK_IMPORTED_MODULE_1__.taskErrorObject.taskNotFound();
        } else {
            this.taskList.splice(i,1);
        }
    }

    setComplete(taskUID) {
        let i=0;
        let itemToSet = -1;
        while(i<this.taskList.length) {
            if(this.taskList[i].getUID() == taskUID) {
                itemToSet = i;
                break;
            }
            i++;
        }
        if(itemToSet == -1) {
            _errorHandler__WEBPACK_IMPORTED_MODULE_1__.taskErrorObject.taskNotFound();
            console.log(taskUID);
        } else {
            if(this.taskList[i].getIsComplete() == true) {
                this.taskList[i].setIsComplete(false);
            } else {
                this.taskList[i].setIsComplete(true);
            }
        }
    }
}

const taskListInstance = new taskList;



/***/ }),

/***/ "./src/updatePage.js":
/*!***************************!*\
  !*** ./src/updatePage.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadProjectForm: () => (/* binding */ loadProjectForm),
/* harmony export */   loadTaskForm: () => (/* binding */ loadTaskForm),
/* harmony export */   updateTodoPage: () => (/* binding */ updateTodoPage)
/* harmony export */ });
/* harmony import */ var _todoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoList */ "./src/todoList.js");
/* harmony import */ var _createTodoElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTodoElement */ "./src/createTodoElement.js");
/* harmony import */ var _initEventListeners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./initEventListeners */ "./src/initEventListeners.js");
/* harmony import */ var _createUIElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createUIElement */ "./src/createUIElement.js");





function updateHomePageListener() {
    _initEventListeners__WEBPACK_IMPORTED_MODULE_2__.taskHandlerListenerInstance.addDeleteTaskEventListener();
    _initEventListeners__WEBPACK_IMPORTED_MODULE_2__.taskHandlerListenerInstance.addCompleteTaskEventListener();
}


function updateTodoPage() {
    const todoDiv = document.querySelector('.todo-list');


    todoDiv.innerHTML = "";
    const projectSelector = document.querySelector('#list-project-selector');
    
    const selectedProjectTasks = Array.from(_todoList__WEBPACK_IMPORTED_MODULE_0__.taskListInstance.getTasksOfProject(projectSelector.value));
    for(let i=0;i<selectedProjectTasks.length;i++) {
        let newTask = (0,_createTodoElement__WEBPACK_IMPORTED_MODULE_1__.createNewTaskDisplay)(selectedProjectTasks[i]);
        todoDiv.appendChild(newTask);
    }
    updateHomePageListener();
}

function loadProjectForm() {
    const topDiv = document.querySelector('#top-div');
    topDiv.innerHTML = "";
    topDiv.appendChild(_createUIElement__WEBPACK_IMPORTED_MODULE_3__.formGenInstance.createProjectForm());
}

function loadTaskForm() {
    const topDiv = document.querySelector('#top-div');
    topDiv.innerHTML = "";
    topDiv.appendChild(_createUIElement__WEBPACK_IMPORTED_MODULE_3__.formGenInstance.createTaskForm());
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _todoList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoList */ "./src/todoList.js");
/* harmony import */ var _projectList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectList */ "./src/projectList.js");
/* harmony import */ var _initializePage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./initializePage */ "./src/initializePage.js");










const p1 = (0,_project__WEBPACK_IMPORTED_MODULE_1__.createNewProject)(_projectList__WEBPACK_IMPORTED_MODULE_3__.projectListInstance.getCurrentProjectCounter(),"Cats","Blue");
_projectList__WEBPACK_IMPORTED_MODULE_3__.projectListInstance.projectListAppend(p1);

const p2 = (0,_project__WEBPACK_IMPORTED_MODULE_1__.createNewProject)(_projectList__WEBPACK_IMPORTED_MODULE_3__.projectListInstance.getCurrentProjectCounter(),"Project 2","Green");
_projectList__WEBPACK_IMPORTED_MODULE_3__.projectListInstance.projectListAppend(p2);
console.log(_projectList__WEBPACK_IMPORTED_MODULE_3__.projectListInstance.getProjectList());





const t1 = (0,_todo__WEBPACK_IMPORTED_MODULE_0__.createNewToDo)(p1.getProjectName(),_todoList__WEBPACK_IMPORTED_MODULE_2__.taskListInstance.getCurrentCounter(),"Test","Test","Test",2, true);
_todoList__WEBPACK_IMPORTED_MODULE_2__.taskListInstance.taskListAppend(t1);
const t2 = (0,_todo__WEBPACK_IMPORTED_MODULE_0__.createNewToDo)(p1.getProjectName(),_todoList__WEBPACK_IMPORTED_MODULE_2__.taskListInstance.getCurrentCounter(),"Miaw","Test","Test",1, false);
_todoList__WEBPACK_IMPORTED_MODULE_2__.taskListInstance.taskListAppend(t2);

console.log(_todoList__WEBPACK_IMPORTED_MODULE_2__.taskListInstance.getTaskList());

console.log(_todoList__WEBPACK_IMPORTED_MODULE_2__.taskListInstance.getTasksOfProject("Cats"));

(0,_initializePage__WEBPACK_IMPORTED_MODULE_4__.initializePage)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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anMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL2NyZWF0ZVRvZG9FbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy9jcmVhdGVVSUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL2Vycm9ySGFuZGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvaW5pdEV2ZW50TGlzdGVuZXJzLmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy9pbml0aWFsaXplUGFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvcHJvamVjdExpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL3Rhc2tGdW5jdGlvbmFsaXR5LmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy90b2RvTGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvdXBkYXRlUGFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlTmV3VG9EbyB9IGZyb20gXCIuL3RvZG9cIjtcblxuZnVuY3Rpb24gZ2V0VGl0bGVGcm9tSW5wdXQoKSB7XG4gICAgY29uc3QgdGl0bGVWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZS1pbnB1dCcpLnZhbHVlO1xuICAgIHJldHVybiB0aXRsZVZhbHVlO1xufVxuXG5mdW5jdGlvbiBnZXREdWUoKSB7XG4gICAgY29uc3QgZHVlVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHVlLWlucHV0JykudmFsdWU7XG4gICAgcmV0dXJuIGR1ZVZhbHVlO1xufVxuXG5mdW5jdGlvbiBnZXREZXNjKCkge1xuICAgIGNvbnN0IGRlc2NWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjLWlucHV0JykudmFsdWU7XG4gICAgcmV0dXJuIGRlc2NWYWx1ZTtcbn1cblxuZnVuY3Rpb24gZ2V0UHJpb3JpdHkoKSB7XG4gICAgY29uc3QgcHJpb3JpdHlWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eS1pbnB1dCcpLnZhbHVlO1xuICAgIHJldHVybiBwcmlvcml0eVZhbHVlO1xufVxuXG5mdW5jdGlvbiBnZXRQcm9qZWN0KCkge1xuICAgIGNvbnN0IHByb2plY3RWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWlucHV0JykudmFsdWU7XG4gICAgcmV0dXJuIHByb2plY3RWYWx1ZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFza0Zyb21JbnB1dCh1aWQpIHtcbiAgICBjb25zdCBuZXdUYXNrID0gY3JlYXRlTmV3VG9EbyhnZXRQcm9qZWN0KCksdWlkLGdldFRpdGxlRnJvbUlucHV0KCksZ2V0RHVlKCksZ2V0RGVzYygpLGdldFByaW9yaXR5KCksZmFsc2UpO1xuICAgIHJldHVybiBuZXdUYXNrO1xufVxuXG5leHBvcnQge2NyZWF0ZVRhc2tGcm9tSW5wdXR9OyIsImZ1bmN0aW9uIGNyZWF0ZVRhc2tUaXRsZVVJKHRhc2tUaXRsZSkge1xuICAgIGxldCBuZXdUYXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdUYXNrVGl0bGUuaW5uZXJIVE1MID0gdGFza1RpdGxlO1xuICAgIHJldHVybiBuZXdUYXNrVGl0bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tEdWVVSSh0YXNrRHVlRGF0ZSkge1xuICAgIGxldCBuZXdUYXNrRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld1Rhc2tEdWVEYXRlLmlubmVySFRNTCA9IHRhc2tEdWVEYXRlO1xuICAgIHJldHVybiBuZXdUYXNrRHVlRGF0ZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFza0Rlc2NyaXB0aW9uKHRhc2tEZXNjcmlwdGlvbikge1xuICAgIGxldCBuZXdUYXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdUYXNrRGVzY3JpcHRpb24uaW5uZXJIVE1MID0gdGFza0Rlc2NyaXB0aW9uO1xuICAgIHJldHVybiBuZXdUYXNrRGVzY3JpcHRpb247XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tQcmlvcml0eSh0YXNrUHJpb3JpdHkpIHtcbiAgICBsZXQgbmV3VGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaWYodGFza1ByaW9yaXR5ID09IDEpIHtcbiAgICAgICAgbmV3VGFza1ByaW9yaXR5LmlubmVySFRNTCA9IFwiSGlnaFwiO1xuICAgIH0gZWxzZSBpZih0YXNrUHJpb3JpdHkgPT0gMikge1xuICAgICAgICBuZXdUYXNrUHJpb3JpdHkuaW5uZXJIVE1MID0gXCJNZWRpdW1cIjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBuZXdUYXNrUHJpb3JpdHkuaW5uZXJIVE1MID0gXCJMb3dcIjtcbiAgICB9XG4gICAgcmV0dXJuIG5ld1Rhc2tQcmlvcml0eTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFza0J1dHRvbkdyb3VwKHVpZCkge1xuICAgIGxldCBuZXdUYXNrQnV0dG9uR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBcbiAgICBsZXQgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZGVsZXRlQnV0dG9uLmlkID0gXCJ0YXNrLWRlbC1idXR0b25cIjtcbiAgICBkZWxldGVCdXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLWlkJyx1aWQpO1xuICAgIGRlbGV0ZUJ1dHRvbi5pbm5lckhUTUwgPSBcIkRlbGV0ZVwiO1xuICAgIG5ld1Rhc2tCdXR0b25Hcm91cC5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuXG4gICAgbGV0IGNvbXBsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29tcGxldGVCdXR0b24uaW5uZXJIVE1MID0gXCJDb21wbGV0ZVwiO1xuICAgIGNvbXBsZXRlQnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsdWlkKTtcbiAgICBjb21wbGV0ZUJ1dHRvbi5pZCA9IFwidGFzay1jb21wLWJ1dHRvblwiO1xuICAgIG5ld1Rhc2tCdXR0b25Hcm91cC5hcHBlbmRDaGlsZChjb21wbGV0ZUJ1dHRvbik7XG5cbiAgICByZXR1cm4gbmV3VGFza0J1dHRvbkdyb3VwO1xufVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld1Rhc2tEaXNwbGF5KHRhc2spIHtcbiAgICBsZXQgbmV3VGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBcbiAgICBjb25zdCBuZXdUYXNrVGl0bGUgPSBjcmVhdGVUYXNrVGl0bGVVSSh0YXNrLmdldFRpdGxlKCkpO1xuICAgIG5ld1Rhc2suYXBwZW5kQ2hpbGQobmV3VGFza1RpdGxlKTtcbiAgICBcbiAgICBjb25zdCBuZXdUYXNrRHVlRGF0ZSA9IGNyZWF0ZVRhc2tEdWVVSSh0YXNrLmdldER1ZURhdGUoKSk7XG4gICAgbmV3VGFzay5hcHBlbmRDaGlsZChuZXdUYXNrRHVlRGF0ZSk7XG5cbiAgICBjb25zdCBuZXdUYXNrRGVzY3JpcHRpb24gPSBjcmVhdGVUYXNrRGVzY3JpcHRpb24odGFzay5nZXREZXNjcmlwdGlvbigpKTtcbiAgICBuZXdUYXNrLmFwcGVuZENoaWxkKG5ld1Rhc2tEZXNjcmlwdGlvbik7XG5cbiAgICBjb25zdCBuZXdUYXNrUHJpb3JpdHkgPSBjcmVhdGVUYXNrUHJpb3JpdHkodGFzay5nZXRQcmlvcml0eSgpKTtcbiAgICBuZXdUYXNrLmFwcGVuZENoaWxkKG5ld1Rhc2tQcmlvcml0eSk7XG5cbiAgICBpZih0YXNrLmdldElzQ29tcGxldGUoKSA9PSB0cnVlKSB7XG4gICAgICAgIG5ld1Rhc2suc3R5bGUuY29sb3IgPSBcInJlZFwiO1xuICAgIH1cblxuICAgIGNvbnN0IGJ1dHRvbkdyb3VwID0gY3JlYXRlVGFza0J1dHRvbkdyb3VwKHRhc2suZ2V0VUlEKCkpO1xuICAgIG5ld1Rhc2suYXBwZW5kQ2hpbGQoYnV0dG9uR3JvdXApO1xuXG4gICAgcmV0dXJuIG5ld1Rhc2s7XG59XG5cbmV4cG9ydCB7Y3JlYXRlTmV3VGFza0Rpc3BsYXl9OyIsImltcG9ydCB7IHByb2plY3RMaXN0SW5zdGFuY2UgfSBmcm9tIFwiLi9wcm9qZWN0TGlzdFwiO1xuXG5jbGFzcyBVSUdlbiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB9XG5cbiAgICBjcmVhdGVCdXR0b24oaWROYW1lLCB0ZXh0KSB7XG4gICAgICAgIGxldCBuZXdCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgbmV3QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicpO1xuICAgICAgICBuZXdCdXR0b24uaWQgPSBpZE5hbWU7XG4gICAgICAgIG5ld0J1dHRvbi5pbm5lckhUTUwgPSB0ZXh0O1xuICAgICAgICByZXR1cm4gbmV3QnV0dG9uO1xuICAgIH1cbiAgICBcbiAgICBjcmVhdGVMaW5rQnV0dG9uKGlkTmFtZSx0ZXh0KSB7XG4gICAgICAgIGxldCBuZXdCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgbmV3QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2xpbmstYnV0dG9uJyk7XG4gICAgICAgIG5ld0J1dHRvbi5pZCA9IGlkTmFtZTtcbiAgICAgICAgbmV3QnV0dG9uLmlubmVySFRNTCA9IHRleHQ7XG4gICAgICAgIHJldHVybiBuZXdCdXR0b247XG4gICAgfVxuXG4gICAgY3JlYXRlQ29udGFpbmVyRGl2KGlkTmFtZSkge1xuICAgICAgICBsZXQgbmV3Q29udGFpbmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5ld0NvbnRhaW5lckRpdi5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcbiAgICAgICAgbmV3Q29udGFpbmVyRGl2LmlkID0gaWROYW1lO1xuICAgICAgICByZXR1cm4gbmV3Q29udGFpbmVyRGl2O1xuICAgIH1cblxuICAgIGNyZWF0ZUdlbmVyYWxEaXYoY2xhc3NOYW1lLGlkTmFtZSkge1xuICAgICAgICBsZXQgbmV3R2VuZXJhbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBuZXdHZW5lcmFsRGl2LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICAgICAgbmV3R2VuZXJhbERpdi5pZCA9IGlkTmFtZTtcbiAgICAgICAgcmV0dXJuIG5ld0dlbmVyYWxEaXY7XG4gICAgfVxuXG4gICAgY3JlYXRlSW5wdXQoaWQsdHlwZSxwbGFjZWhvbGRlcikge1xuICAgICAgICBsZXQgbmV3SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBuZXdJbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWlucHV0Jyk7XG4gICAgICAgIG5ld0lucHV0LmlkID0gaWQ7XG4gICAgICAgIG5ld0lucHV0LnR5cGUgPSB0eXBlO1xuICAgICAgICBpZihwbGFjZWhvbGRlcikge1xuICAgICAgICAgICAgbmV3SW5wdXQucGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlcjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3SW5wdXQ7XG4gICAgfVxuXG4gICAgY3JlYXRlUHJpb3JpdHlTZWxlY3RvcigpIHtcbiAgICAgICAgbGV0IHRhc2tQcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgICAgIHRhc2tQcmlvcml0eUlucHV0LmlkID0gJ3ByaW9yaXR5LWlucHV0JztcbiAgICAgICAgdGFza1ByaW9yaXR5SW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1pbnB1dCcpO1xuXG4gICAgICAgIGxldCB0YXNrUHJpb3JpdHlPcHRpb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIHRhc2tQcmlvcml0eU9wdGlvbjEudmFsdWUgPSAxO1xuICAgICAgICB0YXNrUHJpb3JpdHlPcHRpb24xLmlubmVySFRNTCA9IFwiSGlnaFwiO1xuICAgICAgICB0YXNrUHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHlPcHRpb24xKTtcblxuICAgICAgICBsZXQgdGFza1ByaW9yaXR5T3B0aW9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICB0YXNrUHJpb3JpdHlPcHRpb24yLnZhbHVlID0gMjtcbiAgICAgICAgdGFza1ByaW9yaXR5T3B0aW9uMi5pbm5lckhUTUwgPSBcIk1lZGl1bVwiO1xuICAgICAgICB0YXNrUHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHlPcHRpb24yKTtcblxuICAgICAgICBsZXQgdGFza1ByaW9yaXR5T3B0aW9uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICB0YXNrUHJpb3JpdHlPcHRpb24zLnZhbHVlID0gMztcbiAgICAgICAgdGFza1ByaW9yaXR5T3B0aW9uMy5pbm5lckhUTUwgPSBcIkxvd1wiO1xuICAgICAgICB0YXNrUHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHlPcHRpb24zKTtcblxuICAgICAgICByZXR1cm4gdGFza1ByaW9yaXR5SW5wdXQ7XG4gICAgfVxuXG4gICAgY3JlYXRlUHJvamVjdFNlbGVjdG9yKCkge1xuICAgICAgICBsZXQgcHJvamVjdFNlbGVjdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgICAgIHByb2plY3RTZWxlY3Rvci5jbGFzc0xpc3QuYWRkKCdzZWxlY3RvcicpO1xuICAgICAgICBwcm9qZWN0U2VsZWN0b3IubmFtZSA9IFwicHJvamVjdC1zZWxlY3RvclwiO1xuICAgICAgICBwcm9qZWN0U2VsZWN0b3IuaWQgPSAncHJvamVjdC1pbnB1dCc7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdHMgPSBBcnJheS5mcm9tKHByb2plY3RMaXN0SW5zdGFuY2UuZ2V0UHJvamVjdExpc3QoKSk7XG4gICAgICAgIGZvcihsZXQgaT0wOyBpPHByb2plY3RzLmxlbmd0aDtpKyspIHtcbiAgICAgICAgICAgIGxldCBwcm9qZWN0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICBwcm9qZWN0T3B0aW9uLnZhbHVlID0gcHJvamVjdHNbaV0uZ2V0UHJvamVjdE5hbWUoKTtcbiAgICAgICAgICAgIHByb2plY3RPcHRpb24uaW5uZXJIVE1MID0gcHJvamVjdHNbaV0uZ2V0UHJvamVjdE5hbWUoKTtcbiAgICAgICAgICAgIHByb2plY3RTZWxlY3Rvci5hcHBlbmRDaGlsZChwcm9qZWN0T3B0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwcm9qZWN0U2VsZWN0b3I7XG4gICAgfVxuXG4gICAgY3JlYXRlQ29sb3JTZWxlY3RvcigpIHtcbiAgICAgICAgbGV0IHByb2plY3RDb2xvcklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgICAgIHByb2plY3RDb2xvcklucHV0LmlkID0gJ3BDb2xvci1pbnB1dCc7XG4gICAgICAgIHByb2plY3RDb2xvcklucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0taW5wdXQnKTtcbiAgICAgICAgXG4gICAgICAgIGxldCBwY28xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIHBjbzEudmFsdWUgPSBcImJsdWVcIjtcbiAgICAgICAgcGNvMS5pbm5lckhUTUwgPSBcIkJsdWVcIjtcbiAgICAgICAgcHJvamVjdENvbG9ySW5wdXQuYXBwZW5kQ2hpbGQocGNvMSk7XG5cbiAgICAgICAgbGV0IHBjbzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgcGNvMi52YWx1ZSA9IFwiZ3JlZW5cIjtcbiAgICAgICAgcGNvMi5pbm5lckhUTUwgPSBcIkdyZWVuXCI7XG4gICAgICAgIHByb2plY3RDb2xvcklucHV0LmFwcGVuZENoaWxkKHBjbzIpO1xuXG4gICAgICAgIGxldCBwY28zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIHBjbzMudmFsdWUgPSBcInJlZFwiO1xuICAgICAgICBwY28zLmlubmVySFRNTCA9IFwiUmVkXCI7XG4gICAgICAgIHByb2plY3RDb2xvcklucHV0LmFwcGVuZENoaWxkKHBjbzMpO1xuXG4gICAgICAgIHJldHVybiBwcm9qZWN0Q29sb3JJbnB1dDtcbiAgICB9XG59XG5cbmNvbnN0IHVpR2VuSW5zdGFuY2UgPSBuZXcgVUlHZW47XG5cbmNsYXNzIEZvcm1HZW4ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuXG4gICAgY3JlYXRlVGFza0Zvcm0oKSB7XG4gICAgICAgIGxldCB0YXNrRm9ybURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrRm9ybURpdi5jbGFzc0xpc3QuYWRkKCdmb3JtLWRpdicpO1xuICAgIFxuICAgICAgICBsZXQgdGFza1RpdGxlSW5wdXQgPSB1aUdlbkluc3RhbmNlLmNyZWF0ZUlucHV0KCd0aXRlLWlucHV0JywndGV4dCcsXCJUaXRsZVwiKTtcbiAgICAgICAgdGFza0Zvcm1EaXYuYXBwZW5kQ2hpbGQodGFza1RpdGxlSW5wdXQpO1xuICAgIFxuICAgICAgICBsZXQgdGFza0R1ZUlucHV0ID0gdWlHZW5JbnN0YW5jZS5jcmVhdGVJbnB1dCgnZHVlLWlucHV0JywnZGF0ZScpO1xuICAgICAgICB0YXNrRm9ybURpdi5hcHBlbmRDaGlsZCh0YXNrRHVlSW5wdXQpO1xuICAgIFxuICAgICAgICBsZXQgdGFza0Rlc2NyaXB0aW9uSW5wdXQgPSB1aUdlbkluc3RhbmNlLmNyZWF0ZUlucHV0KCdkZXNjLWlucHV0JywndGV4dCcsJ0Rlc2NyaXB0aW9uJyk7XG4gICAgICAgIHRhc2tGb3JtRGl2LmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwdGlvbklucHV0KTtcbiAgICBcbiAgICAgICAgXG4gICAgICAgIHRhc2tGb3JtRGl2LmFwcGVuZENoaWxkKHVpR2VuSW5zdGFuY2UuY3JlYXRlUHJpb3JpdHlTZWxlY3RvcigpKTtcbiAgICBcbiAgICAgICAgbGV0IHRhc2tQcm9qZWN0SW5wdXQgPSB1aUdlbkluc3RhbmNlLmNyZWF0ZVByb2plY3RTZWxlY3RvcigpO1xuICAgICAgICB0YXNrRm9ybURpdi5hcHBlbmRDaGlsZCh0YXNrUHJvamVjdElucHV0KTtcbiAgICBcbiAgICAgICAgbGV0IHRhc2tDcmVhdGVCdXR0b24gPSB1aUdlbkluc3RhbmNlLmNyZWF0ZUJ1dHRvbignY3JlYXRlLXRhc2stYnV0dG9uJyxcIkNyZWF0ZVwiKTtcbiAgICAgICAgdGFza0Zvcm1EaXYuYXBwZW5kQ2hpbGQodGFza0NyZWF0ZUJ1dHRvbik7XG4gICAgXG4gICAgICAgIHJldHVybiB0YXNrRm9ybURpdjtcbiAgICB9XG5cbiAgICBjcmVhdGVQcm9qZWN0Rm9ybSgpIHtcbiAgICAgICAgbGV0IHByb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgXG4gICAgICAgIGxldCBwcm9qZWN0TmFtZUlucHV0ID0gdWlHZW5JbnN0YW5jZS5jcmVhdGVJbnB1dCgncE5hbWUtaW5wdXQnLCd0ZXh0JywnUHJvamVjdCBOYW1lJyk7XG4gICAgICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKHByb2plY3ROYW1lSW5wdXQpO1xuICAgIFxuICAgICAgICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZCh1aUdlbkluc3RhbmNlLmNyZWF0ZUNvbG9yU2VsZWN0b3IoKSk7XG4gICAgXG4gICAgICAgIGxldCBwcm9qZWN0Q3JlYXRlQnV0dG9uID0gdWlHZW5JbnN0YW5jZS5jcmVhdGVCdXR0b24oJ2NyZWF0ZS1wcm9qZWN0LWJ1dHRvbicsJ0NyZWF0ZSBQcm9qZWN0Jyk7XG4gICAgICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKHByb2plY3RDcmVhdGVCdXR0b24pO1xuICAgIFxuICAgICAgICByZXR1cm4gcHJvamVjdEZvcm07XG4gICAgfVxufVxuXG5jb25zdCBmb3JtR2VuSW5zdGFuY2UgPSBuZXcgRm9ybUdlbjtcbmV4cG9ydCB7dWlHZW5JbnN0YW5jZSwgZm9ybUdlbkluc3RhbmNlIH07IiwiY2xhc3MgdGFza0Vycm9ycyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB9XG5cbiAgICBub3RUYXNrRXJyb3IoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVHJpZWQgaW5zZXJ0aW5nIGFuIGl0ZW0gdGhhdCB3YXMgbm90IGNsYXNzIHRvZG8gaW50byB0aGUgdGFzayBsaXN0XCIpO1xuICAgIH1cblxuICAgIHRhc2tOb3RGb3VuZCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0YXNrIHdpdGggdGhlIHJlcXVpcmVkIFVJRCBub3QgZm91bmRcIik7XG4gICAgfVxuXG4gICAgd3JvbmdJc0NvbXBsZXRlSUQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwid3JvbmcgZGF0YSB2YWx1ZSBoYXMgYmVlbiBwcm92aWRlZCB0byBzZXQgdGhlIGlzIGNvbXBsZXRlIGZvciBhIHRhc2tcIilcbiAgICB9XG59XG5cbmNsYXNzIHByb2plY3RFcnJvcnMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuXG4gICAgbm90UHJvamVjdEVycm9yKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlRyaWVkIGluc2VydGluZyBhbiBpdGVtIHRoYXQgd2FzIG5vdCBhIHByb2plY3QgaW50byBwcm9qZWN0IGxpc3RcIik7XG4gICAgfVxufVxuXG5jb25zdCB0YXNrRXJyb3JPYmplY3QgPSBuZXcgdGFza0Vycm9ycztcbmNvbnN0IHByb2plY3RFcnJvck9iamVjdCA9IG5ldyBwcm9qZWN0RXJyb3JzXG5cbmV4cG9ydCB7dGFza0Vycm9yT2JqZWN0LCBwcm9qZWN0RXJyb3JPYmplY3R9OyIsImltcG9ydCB7IGxvYWRQcm9qZWN0Rm9ybSwgbG9hZFRhc2tGb3JtLCB1cGRhdGVUb2RvUGFnZSB9IGZyb20gXCIuL3VwZGF0ZVBhZ2VcIjtcbmltcG9ydCB7IGFkZE5ld1Rhc2ssIGRlbGV0ZVRhc2ssIHRhc2tDb21wbGV0ZSB9IGZyb20gXCIuL3Rhc2tGdW5jdGlvbmFsaXR5XCI7XG5cbmNsYXNzIFNlbGVjdFByb2plY3RMaXN0ZW5lciB7XG4gICAgY29uc3RydWN0b3IoKSB7fVxuXG4gICAgYWRkU2VsZWN0RXZlbnRMaXN0bmVyKCkge1xuICAgICAgICBjb25zdCBnZXRUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlbGVjdG9yLWJ1dHRvbicpO1xuICAgICAgICBnZXRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdXBkYXRlVG9kb1BhZ2UpO1xuICAgIH1cbn1cblxuY2xhc3MgVGFza0hhbmRsaW5nTGlzdGVuZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge31cbiAgICBcbiAgICBhZGREZWxldGVUYXNrRXZlbnRMaXN0ZW5lcigpIHtcbiAgICAgICAgY29uc3QgZGVsQnV0dG9ucyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3Rhc2stZGVsLWJ1dHRvbicpKTtcbiAgICAgICAgZm9yKGxldCBpPTA7aTxkZWxCdXR0b25zLmxlbmd0aDtpKyspIHtcbiAgICAgICAgICAgIGRlbEJ1dHRvbnNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGRlbGV0ZVRhc2spO1xuICAgICAgICB9ICAgXG4gICAgfVxuXG4gICAgYWRkQ29tcGxldGVUYXNrRXZlbnRMaXN0ZW5lcigpIHtcbiAgICAgICAgY29uc3QgY29tcGxldGVCdXR0b25zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjdGFzay1jb21wLWJ1dHRvbicpKTtcbiAgICAgICAgZm9yKGxldCBpPTA7aTxjb21wbGV0ZUJ1dHRvbnMubGVuZ3RoO2krKykge1xuICAgICAgICAgICAgY29tcGxldGVCdXR0b25zW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyx0YXNrQ29tcGxldGUpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jbGFzcyBOYXZpZ2F0aW9uSGFuZGxpbmdMaXN0ZW5lciB7XG4gICAgY29uc3RydWN0b3IoKSB7fVxuXG4gICAgYWRkVGFza0Zvcm1MaXN0ZW5lcigpIHtcbiAgICAgICAgbGV0IHN3aXRjaFRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1uYXYnKTtcbiAgICAgICAgc3dpdGNoVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsbG9hZFRhc2tGb3JtKTtcbiAgICB9XG5cbiAgICBhZGRQcm9qZWN0Rm9ybUxpc3RlbmVyKCkge1xuICAgICAgICBsZXQgc3dpdGNoUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LW5hdicpO1xuICAgICAgICBzd2l0Y2hQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxsb2FkUHJvamVjdEZvcm0pO1xuICAgIH1cbn1cblxuY29uc3QgdGFza0hhbmRsZXJMaXN0ZW5lckluc3RhbmNlID0gbmV3IFRhc2tIYW5kbGluZ0xpc3RlbmVyO1xuY29uc3Qgc2VsZWN0UHJvamVjdExpc3RlbmVySW5zdGFuY2UgPSBuZXcgU2VsZWN0UHJvamVjdExpc3RlbmVyO1xuY29uc3QgbmF2TGlzdGVuZXJJbnN0bmFjZSA9IG5ldyBOYXZpZ2F0aW9uSGFuZGxpbmdMaXN0ZW5lcjtcblxuZXhwb3J0IHt0YXNrSGFuZGxlckxpc3RlbmVySW5zdGFuY2Usc2VsZWN0UHJvamVjdExpc3RlbmVySW5zdGFuY2UsbmF2TGlzdGVuZXJJbnN0bmFjZX07IiwiaW1wb3J0IHsgdWlHZW5JbnN0YW5jZSwgZm9ybUdlbkluc3RhbmNlIH0gZnJvbSBcIi4vY3JlYXRlVUlFbGVtZW50XCJcbmltcG9ydCB7IHRhc2tIYW5kbGVyTGlzdGVuZXJJbnN0YW5jZSwgc2VsZWN0UHJvamVjdExpc3RlbmVySW5zdGFuY2UsIG5hdkxpc3RlbmVySW5zdG5hY2UgfSBmcm9tIFwiLi9pbml0RXZlbnRMaXN0ZW5lcnNcIjtcblxuXG5cbmZ1bmN0aW9uIGluaXRpYWxpemVOYXZCYXIoKSB7XG4gICAgbGV0IG5hdkNvbnRhaW5lciA9IHVpR2VuSW5zdGFuY2UuY3JlYXRlQ29udGFpbmVyRGl2KFwibmF2LWNvbnRhaW5lclwiKTtcbiAgICBsZXQgbmF2QnV0dG9uR3JvdXAgPSB1aUdlbkluc3RhbmNlLmNyZWF0ZUdlbmVyYWxEaXYoXCJidXR0b24tZ3JvdXBcIixcIm5hdi1idXR0b24tZ3JvdXBcIik7XG4gICAgY29uc3QgbmF2QnV0dG9uVGFzayA9IHVpR2VuSW5zdGFuY2UuY3JlYXRlTGlua0J1dHRvbihcInRhc2stbmF2XCIsXCJDcmVhdGUgQSBUYXNrXCIpO1xuICAgIG5hdkJ1dHRvbkdyb3VwLmFwcGVuZENoaWxkKG5hdkJ1dHRvblRhc2spO1xuICAgIGNvbnN0IG5hdkJ1dHRvbnByb2plY3QgPSB1aUdlbkluc3RhbmNlLmNyZWF0ZUxpbmtCdXR0b24oXCJwcm9qZWN0LW5hdlwiLFwiQ3JlYXRlIEEgUHJvamVjdFwiKTtcbiAgICBuYXZCdXR0b25Hcm91cC5hcHBlbmRDaGlsZChuYXZCdXR0b25wcm9qZWN0KTtcbiAgICBuYXZDb250YWluZXIuYXBwZW5kQ2hpbGQobmF2QnV0dG9uR3JvdXApO1xuICAgIHJldHVybiBuYXZDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGluaXRpYWxpemVUb3BEaXYoKSB7XG4gICAgbGV0IHRvcERpdiA9IHVpR2VuSW5zdGFuY2UuY3JlYXRlQ29udGFpbmVyRGl2KFwidG9wLWRpdlwiKTtcbiAgICB0b3BEaXYuYXBwZW5kQ2hpbGQoZm9ybUdlbkluc3RhbmNlLmNyZWF0ZVRhc2tGb3JtKCkpO1xuICAgIHJldHVybiB0b3BEaXY7XG59XG5cbmZ1bmN0aW9uIGluaXRpYWxpemVTZWxlY3RvcigpIHtcbiAgICBsZXQgcHJvamVjdFNlbGVjdG9yRGl2ID0gdWlHZW5JbnN0YW5jZS5jcmVhdGVDb250YWluZXJEaXYoXCJwcm9qZWN0LXNlbGVjdG9yLWRpdlwiKTtcbiAgICBsZXQgcHJvamVjdFNlbGVjdG9yID0gdWlHZW5JbnN0YW5jZS5jcmVhdGVQcm9qZWN0U2VsZWN0b3IoKTtcbiAgICBwcm9qZWN0U2VsZWN0b3IuaWQgPSBcImxpc3QtcHJvamVjdC1zZWxlY3RvclwiO1xuICAgIHByb2plY3RTZWxlY3RvckRpdi5hcHBlbmRDaGlsZChwcm9qZWN0U2VsZWN0b3IpO1xuXG4gICAgY29uc3Qgc2VsZWN0b3JCdXR0b24gPSB1aUdlbkluc3RhbmNlLmNyZWF0ZUJ1dHRvbignc2VsZWN0b3ItYnV0dG9uJywnU2VsZWN0Jyk7XG4gICAgcHJvamVjdFNlbGVjdG9yRGl2LmFwcGVuZENoaWxkKHNlbGVjdG9yQnV0dG9uKTtcblxuICAgIHJldHVybiBwcm9qZWN0U2VsZWN0b3JEaXY7XG59XG5cbmZ1bmN0aW9uIGluaXRpYWxpemVUYXNrQ29udGFpbmVyKCkge1xuICAgIGxldCB0b2RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb0Rpdi5jbGFzc0xpc3QuYWRkKCd0b2RvLWxpc3QnKTtcbiAgICB0b2RvRGl2LmlubmVySFRNTCA9IFwiTm8gQ2hhcHRlciBTZWxlY3RlZFwiO1xuICAgIHJldHVybiB0b2RvRGl2O1xufVxuXG5mdW5jdGlvbiBpbml0SG9tZVBhZ2VMaXN0ZW5lcigpIHtcbiAgICBzZWxlY3RQcm9qZWN0TGlzdGVuZXJJbnN0YW5jZS5hZGRTZWxlY3RFdmVudExpc3RuZXIoKTtcbiAgICBuYXZMaXN0ZW5lckluc3RuYWNlLmFkZFByb2plY3RGb3JtTGlzdGVuZXIoKTtcbiAgICBuYXZMaXN0ZW5lckluc3RuYWNlLmFkZFRhc2tGb3JtTGlzdGVuZXIoKTtcbn1cblxuZnVuY3Rpb24gaW5pdGlhbGl6ZVBhZ2UoKSB7XG4gICAgbGV0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoaW5pdGlhbGl6ZU5hdkJhcigpKTtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGluaXRpYWxpemVUb3BEaXYoKSk7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChpbml0aWFsaXplU2VsZWN0b3IoKSk7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChpbml0aWFsaXplVGFza0NvbnRhaW5lcigpKTtcbiAgICBpbml0SG9tZVBhZ2VMaXN0ZW5lcigpO1xufVxuXG5leHBvcnQgeyBpbml0aWFsaXplUGFnZSB9OyIsImNsYXNzIHByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKHVpZCwgcHJvamVjdE5hbWUsIHByb2plY3RDb2xvcikge1xuICAgICAgICB0aGlzLnVpZCA9IHVpZDtcbiAgICAgICAgdGhpcy5wcm9qZWN0TmFtZSA9IHByb2plY3ROYW1lO1xuICAgICAgICB0aGlzLnByb2plY3RDb2xvciA9IHByb2plY3RDb2xvcjtcbiAgICB9XG5cbiAgICBnZXRQcm9qZWN0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdE5hbWU7XG4gICAgfVxuXG4gICAgZ2V0UHJvamVjdENvbG9yKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0Q29sb3I7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVOZXdQcm9qZWN0KHVpZCxwcm9qZWN0TmFtZSwgcHJvamVjdENvbG9yKSB7XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBwcm9qZWN0KHVpZCwgcHJvamVjdE5hbWUscHJvamVjdENvbG9yKTtcbiAgICByZXR1cm4gbmV3UHJvamVjdDtcbn1cblxuZnVuY3Rpb24gY2hlY2tJZlByb2plY3QocCkge1xuICAgIGlmKHAgaW5zdGFuY2VvZiBwcm9qZWN0KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCB7Y3JlYXRlTmV3UHJvamVjdCwgY2hlY2tJZlByb2plY3R9OyIsImltcG9ydCB7IGNoZWNrSWZQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHsgcHJvamVjdEVycm9yT2JqZWN0IH0gZnJvbSBcIi4vZXJyb3JIYW5kbGVyXCI7XG5cbmNsYXNzIHByb2plY3RMaXN0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0TGlzdCA9IFtdO1xuICAgICAgICB0aGlzLnByb2plY3RDb3VudGVyID0gMDtcbiAgICB9XG5cbiAgICBwcm9qZWN0TGlzdEFwcGVuZChwcm9qZWN0KSB7XG4gICAgICAgIGlmKGNoZWNrSWZQcm9qZWN0KHByb2plY3QpKSB7XG4gICAgICAgICAgICB0aGlzLnByb2plY3RMaXN0LnB1c2gocHJvamVjdCk7XG4gICAgICAgICAgICB0aGlzLnByb2plY3RDb3VudGVyKys7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9qZWN0RXJyb3JPYmplY3Qubm90UHJvamVjdEVycm9yKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRQcm9qZWN0TGlzdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdExpc3RcbiAgICB9XG5cbiAgICBnZXRDdXJyZW50UHJvamVjdENvdW50ZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RDb3VudGVyO1xuICAgIH1cbn1cblxuXG4vL01ha2UgZGVsZXRlIHRhc2tcblxuY29uc3QgcHJvamVjdExpc3RJbnN0YW5jZSA9IG5ldyBwcm9qZWN0TGlzdDtcblxuZXhwb3J0IHtwcm9qZWN0TGlzdEluc3RhbmNlfTsiLCJpbXBvcnQgeyB0YXNrTGlzdEluc3RhbmNlIH0gZnJvbSBcIi4vdG9kb0xpc3RcIjtcbmltcG9ydCB7IHVwZGF0ZVRvZG9QYWdlIH0gZnJvbSBcIi4vdXBkYXRlUGFnZVwiO1xuaW1wb3J0IHsgY3JlYXRlVGFza0Zyb21JbnB1dCB9IGZyb20gXCIuL2NyZWF0ZVRhc2tGcm9tSW5wdXRcIjtcblxuXG5mdW5jdGlvbiBhZGROZXdUYXNrKCkge1xuICAgIGNvbnN0IHRhc2tVSUQgPSB0YXNrTGlzdEluc3RhbmNlLmdldEN1cnJlbnRDb3VudGVyKCk7XG4gICAgY29uc3QgbmV3VGFzayA9IGNyZWF0ZVRhc2tGcm9tSW5wdXQodGFza1VJRCk7XG4gICAgdGFza0xpc3RJbnN0YW5jZS50YXNrTGlzdEFwcGVuZChuZXdUYXNrKTtcbiAgICB1cGRhdGVUb2RvUGFnZSgpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVUYXNrKGUpIHtcbiAgICB0YXNrTGlzdEluc3RhbmNlLmRlbGV0ZVRhc2soZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpO1xuICAgIHVwZGF0ZVRvZG9QYWdlKCk7XG59XG5cbmZ1bmN0aW9uIHRhc2tDb21wbGV0ZShlKSB7XG4gICAgY29uc29sZS5sb2coZS50YXJnZXQpO1xuICAgIHRhc2tMaXN0SW5zdGFuY2Uuc2V0Q29tcGxldGUoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpO1xuICAgIHVwZGF0ZVRvZG9QYWdlKCk7XG59XG5cbmV4cG9ydCB7YWRkTmV3VGFzayxkZWxldGVUYXNrLCB0YXNrQ29tcGxldGV9IiwiaW1wb3J0IHsgdGFza0Vycm9yT2JqZWN0IH0gZnJvbSBcIi4vZXJyb3JIYW5kbGVyXCI7XG5cbmNsYXNzIHRvZG8ge1xuICAgIGNvbnN0cnVjdG9yKHByb2plY3QsIHVpZCwgdGl0bGUsIGR1ZWRhdGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgaXNDb21wbGV0ZSkge1xuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgICAgICB0aGlzLnVpZCA9IHVpZDtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmR1ZWRhdGUgPSBkdWVkYXRlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5pc0NvbXBsZXRlID0gaXNDb21wbGV0ZVxuICAgIH1cblxuICAgIGdldFVJRCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudWlkO1xuICAgIH1cblxuICAgIGdldFRpdGxlICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGl0bGU7XG4gICAgfVxuXG4gICAgZ2V0RHVlRGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHVlZGF0ZTtcbiAgICB9XG5cbiAgICBnZXREZXNjcmlwdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgZ2V0UHJpb3JpdHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByaW9yaXR5O1xuICAgIH1cblxuICAgIGdldFRhc2tQcm9qZWN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0O1xuICAgIH1cblxuICAgIGdldElzQ29tcGxldGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzQ29tcGxldGU7XG4gICAgfVxuXG4gICAgc2V0SXNDb21wbGV0ZShpKSB7XG4gICAgICAgIGlmKGk9PXRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuaXNDb21wbGV0ZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZihpPT1mYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5pc0NvbXBsZXRlID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXNrRXJyb3JPYmplY3Qud3JvbmdJc0NvbXBsZXRlSUQoKTtcbiAgICAgICAgfVxuICAgIH1cblxufTtcblxuZnVuY3Rpb24gY3JlYXRlTmV3VG9Ebyhwcm9qZWN0LCB1aWQsIHRpdGxlLCBkdWVkYXRlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGlzQ29tcGxldGUpIHtcbiAgICBjb25zdCBuZXdUb0RvID0gbmV3IHRvZG8ocHJvamVjdCwgdWlkLCB0aXRsZSwgZHVlZGF0ZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBpc0NvbXBsZXRlKTtcbiAgICByZXR1cm4gbmV3VG9Ebztcbn1cblxuZnVuY3Rpb24gY2hlY2tJZlRhc2sodDEpIHtcbiAgICBpZih0MSBpbnN0YW5jZW9mIHRvZG8pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IHtjcmVhdGVOZXdUb0RvLCBjaGVja0lmVGFza307IiwiaW1wb3J0IHsgY2hlY2tJZlRhc2sgfSBmcm9tIFwiLi90b2RvXCI7XG5pbXBvcnQgeyB0YXNrRXJyb3JPYmplY3QgfSBmcm9tIFwiLi9lcnJvckhhbmRsZXJcIjtcblxuY2xhc3MgdGFza0xpc3Qge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnRhc2tMaXN0ID0gW107XG4gICAgICAgIHRoaXMuY291bnRlciA9IDA7XG4gICAgfVxuXG5cbiAgICB0YXNrTGlzdEFwcGVuZCh0YXNrKSB7XG4gICAgICAgIGlmKGNoZWNrSWZUYXNrKHRhc2spKSB7XG4gICAgICAgICAgICB0aGlzLnRhc2tMaXN0LnB1c2godGFzayk7XG4gICAgICAgICAgICB0aGlzLmNvdW50ZXIgKz0gMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRhc2tFcnJvck9iamVjdC5ub3RUYXNrRXJyb3IoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEN1cnJlbnRDb3VudGVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb3VudGVyO1xuICAgIH1cblxuICAgIGdldFRhc2tMaXN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy50YXNrTGlzdDtcbiAgICB9XG5cbiAgICBnZXRUYXNrc09mUHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgICAgICBsZXQgbmV3VGFza0xpc3QgPSBbXTtcbiAgICBcbiAgICAgICAgZm9yKGxldCBpPTA7aTx0aGlzLnRhc2tMaXN0Lmxlbmd0aDtpKyspIHtcbiAgICAgICAgICAgIGlmKHRoaXMudGFza0xpc3RbaV0uZ2V0VGFza1Byb2plY3QoKT09cHJvamVjdE5hbWUpIHtcbiAgICAgICAgICAgICAgICBuZXdUYXNrTGlzdC5wdXNoKHRoaXMudGFza0xpc3RbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXG4gICAgICAgIHJldHVybiBuZXdUYXNrTGlzdDtcbiAgICB9XG5cbiAgICBnZXRDb21wbGV0ZVRhc2tzT2ZQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgICAgIGxldCBuZXdUYXNrTGlzdCA9IFtdO1xuICAgICAgICBmb3IobGV0IGk9MDtpPHRoaXMudGFza0xpc3QubGVuZ3RoO2krKykge1xuICAgICAgICAgICAgaWYodGhpcy50YXNrTGlzdFtpXS5nZXRUYXNrUHJvamVjdCgpID09IHByb2plY3ROYW1lICYmIHRoaXMudGFza0xpc3RbaV0uZ2V0SXNDb21wbGV0ZSgpID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBuZXdUYXNrTGlzdC5wdXNoKHRoaXMudGFza0xpc3RbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdUYXNrTGlzdDtcbiAgICB9XG5cbiAgICBnZXRJbmNvbXBsZXRlVGFza3NPZlByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICAgICAgbGV0IG5ld1Rhc2tMaXN0ID0gW107XG4gICAgICAgIGZvcihsZXQgaT0wO2k8dGhpcy50YXNrTGlzdC5sZW5ndGg7aSsrKSB7XG4gICAgICAgICAgICBpZih0aGlzLnRhc2tMaXN0W2ldLmdldFRhc2tQcm9qZWN0KCkgPT0gcHJvamVjdE5hbWUgJiYgdGhpcy50YXNrTGlzdFtpXS5nZXRJc0NvbXBsZXRlKCkgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBuZXdUYXNrTGlzdC5wdXNoKHRoaXMudGFza0xpc3RbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdUYXNrTGlzdDtcbiAgICB9XG5cblxuICAgIGRlbGV0ZVRhc2sodGFza1VJRCkge1xuICAgICAgICBsZXQgaT0wO1xuICAgICAgICBsZXQgaXRlbVRvRGVsZXRlID0gLTE7XG4gICAgICAgIHdoaWxlKGk8dGhpcy50YXNrTGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmKHRoaXMudGFza0xpc3RbaV0uZ2V0VUlEKCkgPT0gdGFza1VJRCkge1xuICAgICAgICAgICAgICAgIGl0ZW1Ub0RlbGV0ZSA9IGk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpKys7XG4gICAgICAgIH1cbiAgICAgICAgaWYoaXRlbVRvRGVsZXRlID09IC0xKSB7XG4gICAgICAgICAgICB0YXNrRXJyb3JPYmplY3QudGFza05vdEZvdW5kKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRhc2tMaXN0LnNwbGljZShpLDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0Q29tcGxldGUodGFza1VJRCkge1xuICAgICAgICBsZXQgaT0wO1xuICAgICAgICBsZXQgaXRlbVRvU2V0ID0gLTE7XG4gICAgICAgIHdoaWxlKGk8dGhpcy50YXNrTGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmKHRoaXMudGFza0xpc3RbaV0uZ2V0VUlEKCkgPT0gdGFza1VJRCkge1xuICAgICAgICAgICAgICAgIGl0ZW1Ub1NldCA9IGk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpKys7XG4gICAgICAgIH1cbiAgICAgICAgaWYoaXRlbVRvU2V0ID09IC0xKSB7XG4gICAgICAgICAgICB0YXNrRXJyb3JPYmplY3QudGFza05vdEZvdW5kKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0YXNrVUlEKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmKHRoaXMudGFza0xpc3RbaV0uZ2V0SXNDb21wbGV0ZSgpID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRhc2tMaXN0W2ldLnNldElzQ29tcGxldGUoZmFsc2UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRhc2tMaXN0W2ldLnNldElzQ29tcGxldGUodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNvbnN0IHRhc2tMaXN0SW5zdGFuY2UgPSBuZXcgdGFza0xpc3Q7XG5cbmV4cG9ydCB7dGFza0xpc3RJbnN0YW5jZX07IiwiaW1wb3J0IHsgdGFza0xpc3RJbnN0YW5jZSB9IGZyb20gXCIuL3RvZG9MaXN0XCI7XG5pbXBvcnQgeyBjcmVhdGVOZXdUYXNrRGlzcGxheSB9IGZyb20gXCIuL2NyZWF0ZVRvZG9FbGVtZW50XCI7XG5pbXBvcnQgeyB0YXNrSGFuZGxlckxpc3RlbmVySW5zdGFuY2UgfSBmcm9tIFwiLi9pbml0RXZlbnRMaXN0ZW5lcnNcIjtcbmltcG9ydCB7IGZvcm1HZW5JbnN0YW5jZSB9IGZyb20gXCIuL2NyZWF0ZVVJRWxlbWVudFwiO1xuXG5mdW5jdGlvbiB1cGRhdGVIb21lUGFnZUxpc3RlbmVyKCkge1xuICAgIHRhc2tIYW5kbGVyTGlzdGVuZXJJbnN0YW5jZS5hZGREZWxldGVUYXNrRXZlbnRMaXN0ZW5lcigpO1xuICAgIHRhc2tIYW5kbGVyTGlzdGVuZXJJbnN0YW5jZS5hZGRDb21wbGV0ZVRhc2tFdmVudExpc3RlbmVyKCk7XG59XG5cblxuZnVuY3Rpb24gdXBkYXRlVG9kb1BhZ2UoKSB7XG4gICAgY29uc3QgdG9kb0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWxpc3QnKTtcblxuXG4gICAgdG9kb0Rpdi5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGNvbnN0IHByb2plY3RTZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsaXN0LXByb2plY3Qtc2VsZWN0b3InKTtcbiAgICBcbiAgICBjb25zdCBzZWxlY3RlZFByb2plY3RUYXNrcyA9IEFycmF5LmZyb20odGFza0xpc3RJbnN0YW5jZS5nZXRUYXNrc09mUHJvamVjdChwcm9qZWN0U2VsZWN0b3IudmFsdWUpKTtcbiAgICBmb3IobGV0IGk9MDtpPHNlbGVjdGVkUHJvamVjdFRhc2tzLmxlbmd0aDtpKyspIHtcbiAgICAgICAgbGV0IG5ld1Rhc2sgPSBjcmVhdGVOZXdUYXNrRGlzcGxheShzZWxlY3RlZFByb2plY3RUYXNrc1tpXSk7XG4gICAgICAgIHRvZG9EaXYuYXBwZW5kQ2hpbGQobmV3VGFzayk7XG4gICAgfVxuICAgIHVwZGF0ZUhvbWVQYWdlTGlzdGVuZXIoKTtcbn1cblxuZnVuY3Rpb24gbG9hZFByb2plY3RGb3JtKCkge1xuICAgIGNvbnN0IHRvcERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b3AtZGl2Jyk7XG4gICAgdG9wRGl2LmlubmVySFRNTCA9IFwiXCI7XG4gICAgdG9wRGl2LmFwcGVuZENoaWxkKGZvcm1HZW5JbnN0YW5jZS5jcmVhdGVQcm9qZWN0Rm9ybSgpKTtcbn1cblxuZnVuY3Rpb24gbG9hZFRhc2tGb3JtKCkge1xuICAgIGNvbnN0IHRvcERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b3AtZGl2Jyk7XG4gICAgdG9wRGl2LmlubmVySFRNTCA9IFwiXCI7XG4gICAgdG9wRGl2LmFwcGVuZENoaWxkKGZvcm1HZW5JbnN0YW5jZS5jcmVhdGVUYXNrRm9ybSgpKTtcbn1cblxuZXhwb3J0IHt1cGRhdGVUb2RvUGFnZSwgbG9hZFByb2plY3RGb3JtLCBsb2FkVGFza0Zvcm19OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgY3JlYXRlTmV3VG9EbyB9IGZyb20gXCIuL3RvZG9cIjtcbmltcG9ydCB7IGNyZWF0ZU5ld1Byb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgeyB0YXNrTGlzdEluc3RhbmNlIH0gZnJvbSBcIi4vdG9kb0xpc3RcIjtcbmltcG9ydCB7IHByb2plY3RMaXN0SW5zdGFuY2UgfSBmcm9tIFwiLi9wcm9qZWN0TGlzdFwiO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZVBhZ2UgfSBmcm9tIFwiLi9pbml0aWFsaXplUGFnZVwiO1xuXG5cblxuXG5cbmNvbnN0IHAxID0gY3JlYXRlTmV3UHJvamVjdChwcm9qZWN0TGlzdEluc3RhbmNlLmdldEN1cnJlbnRQcm9qZWN0Q291bnRlcigpLFwiQ2F0c1wiLFwiQmx1ZVwiKTtcbnByb2plY3RMaXN0SW5zdGFuY2UucHJvamVjdExpc3RBcHBlbmQocDEpO1xuXG5jb25zdCBwMiA9IGNyZWF0ZU5ld1Byb2plY3QocHJvamVjdExpc3RJbnN0YW5jZS5nZXRDdXJyZW50UHJvamVjdENvdW50ZXIoKSxcIlByb2plY3QgMlwiLFwiR3JlZW5cIik7XG5wcm9qZWN0TGlzdEluc3RhbmNlLnByb2plY3RMaXN0QXBwZW5kKHAyKTtcbmNvbnNvbGUubG9nKHByb2plY3RMaXN0SW5zdGFuY2UuZ2V0UHJvamVjdExpc3QoKSk7XG5cblxuXG5cblxuY29uc3QgdDEgPSBjcmVhdGVOZXdUb0RvKHAxLmdldFByb2plY3ROYW1lKCksdGFza0xpc3RJbnN0YW5jZS5nZXRDdXJyZW50Q291bnRlcigpLFwiVGVzdFwiLFwiVGVzdFwiLFwiVGVzdFwiLDIsIHRydWUpO1xudGFza0xpc3RJbnN0YW5jZS50YXNrTGlzdEFwcGVuZCh0MSk7XG5jb25zdCB0MiA9IGNyZWF0ZU5ld1RvRG8ocDEuZ2V0UHJvamVjdE5hbWUoKSx0YXNrTGlzdEluc3RhbmNlLmdldEN1cnJlbnRDb3VudGVyKCksXCJNaWF3XCIsXCJUZXN0XCIsXCJUZXN0XCIsMSwgZmFsc2UpO1xudGFza0xpc3RJbnN0YW5jZS50YXNrTGlzdEFwcGVuZCh0Mik7XG5cbmNvbnNvbGUubG9nKHRhc2tMaXN0SW5zdGFuY2UuZ2V0VGFza0xpc3QoKSk7XG5cbmNvbnNvbGUubG9nKHRhc2tMaXN0SW5zdGFuY2UuZ2V0VGFza3NPZlByb2plY3QoXCJDYXRzXCIpKTtcblxuaW5pdGlhbGl6ZVBhZ2UoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==