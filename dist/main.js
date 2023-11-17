/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/createProjectFromInput.js":
/*!***************************************!*\
  !*** ./src/createProjectFromInput.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProjectFromInput: () => (/* binding */ createProjectFromInput)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");


function getProjectName() {
    const projectNameInputValue = document.querySelector('#pName-input').value;
    return projectNameInputValue;
}

function getProjectColor() {
    const projectColorValue = document.querySelector('#pColor-input').value;
    return projectColorValue;
}

function createProjectFromInput(uid) {
    const newProject = (0,_project__WEBPACK_IMPORTED_MODULE_0__.createNewProject)(uid,getProjectName(),getProjectColor());
    return newProject;
}



/***/ }),

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
    
        let taskTitleInput = uiGenInstance.createInput('title-input','text',"Title");
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
/* harmony export */   formListenerInstance: () => (/* binding */ formListenerInstance),
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

class formListener {
    constructor() {}

    addTaskEventListener() {
        const createTaskButton = document.querySelector('#create-task-button');
        createTaskButton.addEventListener('click',_taskFunctionality__WEBPACK_IMPORTED_MODULE_1__.addNewTask);
    }


    addProjectEventListener() {
        const createProjectButton = document.querySelector('#create-project-button');
        createProjectButton.addEventListener('click',_taskFunctionality__WEBPACK_IMPORTED_MODULE_1__.addNewProject);
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
const formListenerInstance = new formListener



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
    _initEventListeners__WEBPACK_IMPORTED_MODULE_1__.formListenerInstance.addTaskEventListener();
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
/* harmony export */   addNewProject: () => (/* binding */ addNewProject),
/* harmony export */   addNewTask: () => (/* binding */ addNewTask),
/* harmony export */   deleteTask: () => (/* binding */ deleteTask),
/* harmony export */   taskComplete: () => (/* binding */ taskComplete)
/* harmony export */ });
/* harmony import */ var _todoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoList */ "./src/todoList.js");
/* harmony import */ var _updatePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updatePage */ "./src/updatePage.js");
/* harmony import */ var _createTaskFromInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createTaskFromInput */ "./src/createTaskFromInput.js");
/* harmony import */ var _projectList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectList */ "./src/projectList.js");
/* harmony import */ var _createProjectFromInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createProjectFromInput */ "./src/createProjectFromInput.js");







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

function addNewProject() {
    const projectUID = _projectList__WEBPACK_IMPORTED_MODULE_3__.projectListInstance.getCurrentProjectCounter();
    const newProject = (0,_createProjectFromInput__WEBPACK_IMPORTED_MODULE_4__.createProjectFromInput)(projectUID);
    _projectList__WEBPACK_IMPORTED_MODULE_3__.projectListInstance.projectListAppend(newProject);
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

function updateSelector() {
    const projectSelectorDiv = document.querySelector('#project-selector-div');
    projectSelectorDiv.innerHTML = "";
    let projectSelector = _createUIElement__WEBPACK_IMPORTED_MODULE_3__.uiGenInstance.createProjectSelector();
    projectSelector.id = "list-project-selector";
    projectSelectorDiv.appendChild(projectSelector);

    const selectorButton = _createUIElement__WEBPACK_IMPORTED_MODULE_3__.uiGenInstance.createButton('selector-button','Select');
    projectSelectorDiv.appendChild(selectorButton);
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
    updateSelector();
    updateHomePageListener();
}

function loadProjectForm() {
    const topDiv = document.querySelector('#top-div');
    topDiv.innerHTML = "";
    topDiv.appendChild(_createUIElement__WEBPACK_IMPORTED_MODULE_3__.formGenInstance.createProjectForm());
    _initEventListeners__WEBPACK_IMPORTED_MODULE_2__.formListenerInstance.addProjectEventListener();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTnVDO0FBQ007QUFDQztBQUNNO0FBQ0Y7Ozs7OztBQU1sRCxXQUFXLDBEQUFnQixDQUFDLDZEQUFtQjtBQUMvQyw2REFBbUI7O0FBRW5CLFdBQVcsMERBQWdCLENBQUMsNkRBQW1CO0FBQy9DLDZEQUFtQjtBQUNuQixZQUFZLDZEQUFtQjs7Ozs7O0FBTS9CLFdBQVcsb0RBQWEscUJBQXFCLHVEQUFnQjtBQUM3RCx1REFBZ0I7QUFDaEIsV0FBVyxvREFBYSxxQkFBcUIsdURBQWdCO0FBQzdELHVEQUFnQjs7QUFFaEIsWUFBWSx1REFBZ0I7O0FBRTVCLFlBQVksdURBQWdCOztBQUU1QiwrREFBYyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy9jcmVhdGVQcm9qZWN0RnJvbUlucHV0LmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy9jcmVhdGVUYXNrRnJvbUlucHV0LmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy9jcmVhdGVUb2RvRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvY3JlYXRlVUlFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy9lcnJvckhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL2luaXRFdmVudExpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvaW5pdGlhbGl6ZVBhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL3Byb2plY3RMaXN0LmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy90YXNrRnVuY3Rpb25hbGl0eS5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvdG9kb0xpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL3VwZGF0ZVBhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZU5ld1Byb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5cbmZ1bmN0aW9uIGdldFByb2plY3ROYW1lKCkge1xuICAgIGNvbnN0IHByb2plY3ROYW1lSW5wdXRWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwTmFtZS1pbnB1dCcpLnZhbHVlO1xuICAgIHJldHVybiBwcm9qZWN0TmFtZUlucHV0VmFsdWU7XG59XG5cbmZ1bmN0aW9uIGdldFByb2plY3RDb2xvcigpIHtcbiAgICBjb25zdCBwcm9qZWN0Q29sb3JWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwQ29sb3ItaW5wdXQnKS52YWx1ZTtcbiAgICByZXR1cm4gcHJvamVjdENvbG9yVmFsdWU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RGcm9tSW5wdXQodWlkKSB7XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IGNyZWF0ZU5ld1Byb2plY3QodWlkLGdldFByb2plY3ROYW1lKCksZ2V0UHJvamVjdENvbG9yKCkpO1xuICAgIHJldHVybiBuZXdQcm9qZWN0O1xufVxuXG5leHBvcnQge2NyZWF0ZVByb2plY3RGcm9tSW5wdXR9OyIsImltcG9ydCB7IGNyZWF0ZU5ld1RvRG8gfSBmcm9tIFwiLi90b2RvXCI7XG5cbmZ1bmN0aW9uIGdldFRpdGxlRnJvbUlucHV0KCkge1xuICAgIGNvbnN0IHRpdGxlVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUtaW5wdXQnKS52YWx1ZTtcbiAgICByZXR1cm4gdGl0bGVWYWx1ZTtcbn1cblxuZnVuY3Rpb24gZ2V0RHVlKCkge1xuICAgIGNvbnN0IGR1ZVZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZS1pbnB1dCcpLnZhbHVlO1xuICAgIHJldHVybiBkdWVWYWx1ZTtcbn1cblxuZnVuY3Rpb24gZ2V0RGVzYygpIHtcbiAgICBjb25zdCBkZXNjVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzYy1pbnB1dCcpLnZhbHVlO1xuICAgIHJldHVybiBkZXNjVmFsdWU7XG59XG5cbmZ1bmN0aW9uIGdldFByaW9yaXR5KCkge1xuICAgIGNvbnN0IHByaW9yaXR5VmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHktaW5wdXQnKS52YWx1ZTtcbiAgICByZXR1cm4gcHJpb3JpdHlWYWx1ZTtcbn1cblxuZnVuY3Rpb24gZ2V0UHJvamVjdCgpIHtcbiAgICBjb25zdCBwcm9qZWN0VmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1pbnB1dCcpLnZhbHVlO1xuICAgIHJldHVybiBwcm9qZWN0VmFsdWU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tGcm9tSW5wdXQodWlkKSB7XG4gICAgY29uc3QgbmV3VGFzayA9IGNyZWF0ZU5ld1RvRG8oZ2V0UHJvamVjdCgpLHVpZCxnZXRUaXRsZUZyb21JbnB1dCgpLGdldER1ZSgpLGdldERlc2MoKSxnZXRQcmlvcml0eSgpLGZhbHNlKTtcbiAgICByZXR1cm4gbmV3VGFzaztcbn1cblxuZXhwb3J0IHtjcmVhdGVUYXNrRnJvbUlucHV0fTsiLCJmdW5jdGlvbiBjcmVhdGVUYXNrVGl0bGVVSSh0YXNrVGl0bGUpIHtcbiAgICBsZXQgbmV3VGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmV3VGFza1RpdGxlLmlubmVySFRNTCA9IHRhc2tUaXRsZTtcbiAgICByZXR1cm4gbmV3VGFza1RpdGxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrRHVlVUkodGFza0R1ZURhdGUpIHtcbiAgICBsZXQgbmV3VGFza0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdUYXNrRHVlRGF0ZS5pbm5lckhUTUwgPSB0YXNrRHVlRGF0ZTtcbiAgICByZXR1cm4gbmV3VGFza0R1ZURhdGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tEZXNjcmlwdGlvbih0YXNrRGVzY3JpcHRpb24pIHtcbiAgICBsZXQgbmV3VGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmV3VGFza0Rlc2NyaXB0aW9uLmlubmVySFRNTCA9IHRhc2tEZXNjcmlwdGlvbjtcbiAgICByZXR1cm4gbmV3VGFza0Rlc2NyaXB0aW9uO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrUHJpb3JpdHkodGFza1ByaW9yaXR5KSB7XG4gICAgbGV0IG5ld1Rhc2tQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGlmKHRhc2tQcmlvcml0eSA9PSAxKSB7XG4gICAgICAgIG5ld1Rhc2tQcmlvcml0eS5pbm5lckhUTUwgPSBcIkhpZ2hcIjtcbiAgICB9IGVsc2UgaWYodGFza1ByaW9yaXR5ID09IDIpIHtcbiAgICAgICAgbmV3VGFza1ByaW9yaXR5LmlubmVySFRNTCA9IFwiTWVkaXVtXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbmV3VGFza1ByaW9yaXR5LmlubmVySFRNTCA9IFwiTG93XCI7XG4gICAgfVxuICAgIHJldHVybiBuZXdUYXNrUHJpb3JpdHk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tCdXR0b25Hcm91cCh1aWQpIHtcbiAgICBsZXQgbmV3VGFza0J1dHRvbkdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgXG4gICAgbGV0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGRlbGV0ZUJ1dHRvbi5pZCA9IFwidGFzay1kZWwtYnV0dG9uXCI7XG4gICAgZGVsZXRlQnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsdWlkKTtcbiAgICBkZWxldGVCdXR0b24uaW5uZXJIVE1MID0gXCJEZWxldGVcIjtcbiAgICBuZXdUYXNrQnV0dG9uR3JvdXAuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcblxuICAgIGxldCBjb21wbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbXBsZXRlQnV0dG9uLmlubmVySFRNTCA9IFwiQ29tcGxldGVcIjtcbiAgICBjb21wbGV0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLHVpZCk7XG4gICAgY29tcGxldGVCdXR0b24uaWQgPSBcInRhc2stY29tcC1idXR0b25cIjtcbiAgICBuZXdUYXNrQnV0dG9uR3JvdXAuYXBwZW5kQ2hpbGQoY29tcGxldGVCdXR0b24pO1xuXG4gICAgcmV0dXJuIG5ld1Rhc2tCdXR0b25Hcm91cDtcbn1cblxuXG5mdW5jdGlvbiBjcmVhdGVOZXdUYXNrRGlzcGxheSh0YXNrKSB7XG4gICAgbGV0IG5ld1Rhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgXG4gICAgY29uc3QgbmV3VGFza1RpdGxlID0gY3JlYXRlVGFza1RpdGxlVUkodGFzay5nZXRUaXRsZSgpKTtcbiAgICBuZXdUYXNrLmFwcGVuZENoaWxkKG5ld1Rhc2tUaXRsZSk7XG4gICAgXG4gICAgY29uc3QgbmV3VGFza0R1ZURhdGUgPSBjcmVhdGVUYXNrRHVlVUkodGFzay5nZXREdWVEYXRlKCkpO1xuICAgIG5ld1Rhc2suYXBwZW5kQ2hpbGQobmV3VGFza0R1ZURhdGUpO1xuXG4gICAgY29uc3QgbmV3VGFza0Rlc2NyaXB0aW9uID0gY3JlYXRlVGFza0Rlc2NyaXB0aW9uKHRhc2suZ2V0RGVzY3JpcHRpb24oKSk7XG4gICAgbmV3VGFzay5hcHBlbmRDaGlsZChuZXdUYXNrRGVzY3JpcHRpb24pO1xuXG4gICAgY29uc3QgbmV3VGFza1ByaW9yaXR5ID0gY3JlYXRlVGFza1ByaW9yaXR5KHRhc2suZ2V0UHJpb3JpdHkoKSk7XG4gICAgbmV3VGFzay5hcHBlbmRDaGlsZChuZXdUYXNrUHJpb3JpdHkpO1xuXG4gICAgaWYodGFzay5nZXRJc0NvbXBsZXRlKCkgPT0gdHJ1ZSkge1xuICAgICAgICBuZXdUYXNrLnN0eWxlLmNvbG9yID0gXCJyZWRcIjtcbiAgICB9XG5cbiAgICBjb25zdCBidXR0b25Hcm91cCA9IGNyZWF0ZVRhc2tCdXR0b25Hcm91cCh0YXNrLmdldFVJRCgpKTtcbiAgICBuZXdUYXNrLmFwcGVuZENoaWxkKGJ1dHRvbkdyb3VwKTtcblxuICAgIHJldHVybiBuZXdUYXNrO1xufVxuXG5leHBvcnQge2NyZWF0ZU5ld1Rhc2tEaXNwbGF5fTsiLCJpbXBvcnQgeyBwcm9qZWN0TGlzdEluc3RhbmNlIH0gZnJvbSBcIi4vcHJvamVjdExpc3RcIjtcblxuY2xhc3MgVUlHZW4ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuXG4gICAgY3JlYXRlQnV0dG9uKGlkTmFtZSwgdGV4dCkge1xuICAgICAgICBsZXQgbmV3QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIG5ld0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b24nKTtcbiAgICAgICAgbmV3QnV0dG9uLmlkID0gaWROYW1lO1xuICAgICAgICBuZXdCdXR0b24uaW5uZXJIVE1MID0gdGV4dDtcbiAgICAgICAgcmV0dXJuIG5ld0J1dHRvbjtcbiAgICB9XG4gICAgXG4gICAgY3JlYXRlTGlua0J1dHRvbihpZE5hbWUsdGV4dCkge1xuICAgICAgICBsZXQgbmV3QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIG5ld0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdsaW5rLWJ1dHRvbicpO1xuICAgICAgICBuZXdCdXR0b24uaWQgPSBpZE5hbWU7XG4gICAgICAgIG5ld0J1dHRvbi5pbm5lckhUTUwgPSB0ZXh0O1xuICAgICAgICByZXR1cm4gbmV3QnV0dG9uO1xuICAgIH1cblxuICAgIGNyZWF0ZUNvbnRhaW5lckRpdihpZE5hbWUpIHtcbiAgICAgICAgbGV0IG5ld0NvbnRhaW5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBuZXdDb250YWluZXJEaXYuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG4gICAgICAgIG5ld0NvbnRhaW5lckRpdi5pZCA9IGlkTmFtZTtcbiAgICAgICAgcmV0dXJuIG5ld0NvbnRhaW5lckRpdjtcbiAgICB9XG5cbiAgICBjcmVhdGVHZW5lcmFsRGl2KGNsYXNzTmFtZSxpZE5hbWUpIHtcbiAgICAgICAgbGV0IG5ld0dlbmVyYWxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbmV3R2VuZXJhbERpdi5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgICAgIG5ld0dlbmVyYWxEaXYuaWQgPSBpZE5hbWU7XG4gICAgICAgIHJldHVybiBuZXdHZW5lcmFsRGl2O1xuICAgIH1cblxuICAgIGNyZWF0ZUlucHV0KGlkLHR5cGUscGxhY2Vob2xkZXIpIHtcbiAgICAgICAgbGV0IG5ld0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgbmV3SW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1pbnB1dCcpO1xuICAgICAgICBuZXdJbnB1dC5pZCA9IGlkO1xuICAgICAgICBuZXdJbnB1dC50eXBlID0gdHlwZTtcbiAgICAgICAgaWYocGxhY2Vob2xkZXIpIHtcbiAgICAgICAgICAgIG5ld0lucHV0LnBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld0lucHV0O1xuICAgIH1cblxuICAgIGNyZWF0ZVByaW9yaXR5U2VsZWN0b3IoKSB7XG4gICAgICAgIGxldCB0YXNrUHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICB0YXNrUHJpb3JpdHlJbnB1dC5pZCA9ICdwcmlvcml0eS1pbnB1dCc7XG4gICAgICAgIHRhc2tQcmlvcml0eUlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0taW5wdXQnKTtcblxuICAgICAgICBsZXQgdGFza1ByaW9yaXR5T3B0aW9uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICB0YXNrUHJpb3JpdHlPcHRpb24xLnZhbHVlID0gMTtcbiAgICAgICAgdGFza1ByaW9yaXR5T3B0aW9uMS5pbm5lckhUTUwgPSBcIkhpZ2hcIjtcbiAgICAgICAgdGFza1ByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5T3B0aW9uMSk7XG5cbiAgICAgICAgbGV0IHRhc2tQcmlvcml0eU9wdGlvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgdGFza1ByaW9yaXR5T3B0aW9uMi52YWx1ZSA9IDI7XG4gICAgICAgIHRhc2tQcmlvcml0eU9wdGlvbjIuaW5uZXJIVE1MID0gXCJNZWRpdW1cIjtcbiAgICAgICAgdGFza1ByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5T3B0aW9uMik7XG5cbiAgICAgICAgbGV0IHRhc2tQcmlvcml0eU9wdGlvbjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgdGFza1ByaW9yaXR5T3B0aW9uMy52YWx1ZSA9IDM7XG4gICAgICAgIHRhc2tQcmlvcml0eU9wdGlvbjMuaW5uZXJIVE1MID0gXCJMb3dcIjtcbiAgICAgICAgdGFza1ByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5T3B0aW9uMyk7XG5cbiAgICAgICAgcmV0dXJuIHRhc2tQcmlvcml0eUlucHV0O1xuICAgIH1cblxuICAgIGNyZWF0ZVByb2plY3RTZWxlY3RvcigpIHtcbiAgICAgICAgbGV0IHByb2plY3RTZWxlY3RvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICBwcm9qZWN0U2VsZWN0b3IuY2xhc3NMaXN0LmFkZCgnc2VsZWN0b3InKTtcbiAgICAgICAgcHJvamVjdFNlbGVjdG9yLm5hbWUgPSBcInByb2plY3Qtc2VsZWN0b3JcIjtcbiAgICAgICAgcHJvamVjdFNlbGVjdG9yLmlkID0gJ3Byb2plY3QtaW5wdXQnO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gQXJyYXkuZnJvbShwcm9qZWN0TGlzdEluc3RhbmNlLmdldFByb2plY3RMaXN0KCkpO1xuICAgICAgICBmb3IobGV0IGk9MDsgaTxwcm9qZWN0cy5sZW5ndGg7aSsrKSB7XG4gICAgICAgICAgICBsZXQgcHJvamVjdE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgcHJvamVjdE9wdGlvbi52YWx1ZSA9IHByb2plY3RzW2ldLmdldFByb2plY3ROYW1lKCk7XG4gICAgICAgICAgICBwcm9qZWN0T3B0aW9uLmlubmVySFRNTCA9IHByb2plY3RzW2ldLmdldFByb2plY3ROYW1lKCk7XG4gICAgICAgICAgICBwcm9qZWN0U2VsZWN0b3IuYXBwZW5kQ2hpbGQocHJvamVjdE9wdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcHJvamVjdFNlbGVjdG9yO1xuICAgIH1cblxuICAgIGNyZWF0ZUNvbG9yU2VsZWN0b3IoKSB7XG4gICAgICAgIGxldCBwcm9qZWN0Q29sb3JJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICBwcm9qZWN0Q29sb3JJbnB1dC5pZCA9ICdwQ29sb3ItaW5wdXQnO1xuICAgICAgICBwcm9qZWN0Q29sb3JJbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWlucHV0Jyk7XG4gICAgICAgIFxuICAgICAgICBsZXQgcGNvMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBwY28xLnZhbHVlID0gXCJibHVlXCI7XG4gICAgICAgIHBjbzEuaW5uZXJIVE1MID0gXCJCbHVlXCI7XG4gICAgICAgIHByb2plY3RDb2xvcklucHV0LmFwcGVuZENoaWxkKHBjbzEpO1xuXG4gICAgICAgIGxldCBwY28yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIHBjbzIudmFsdWUgPSBcImdyZWVuXCI7XG4gICAgICAgIHBjbzIuaW5uZXJIVE1MID0gXCJHcmVlblwiO1xuICAgICAgICBwcm9qZWN0Q29sb3JJbnB1dC5hcHBlbmRDaGlsZChwY28yKTtcblxuICAgICAgICBsZXQgcGNvMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBwY28zLnZhbHVlID0gXCJyZWRcIjtcbiAgICAgICAgcGNvMy5pbm5lckhUTUwgPSBcIlJlZFwiO1xuICAgICAgICBwcm9qZWN0Q29sb3JJbnB1dC5hcHBlbmRDaGlsZChwY28zKTtcblxuICAgICAgICByZXR1cm4gcHJvamVjdENvbG9ySW5wdXQ7XG4gICAgfVxufVxuXG5jb25zdCB1aUdlbkluc3RhbmNlID0gbmV3IFVJR2VuO1xuXG5jbGFzcyBGb3JtR2VuIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIH1cblxuICAgIGNyZWF0ZVRhc2tGb3JtKCkge1xuICAgICAgICBsZXQgdGFza0Zvcm1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFza0Zvcm1EaXYuY2xhc3NMaXN0LmFkZCgnZm9ybS1kaXYnKTtcbiAgICBcbiAgICAgICAgbGV0IHRhc2tUaXRsZUlucHV0ID0gdWlHZW5JbnN0YW5jZS5jcmVhdGVJbnB1dCgndGl0bGUtaW5wdXQnLCd0ZXh0JyxcIlRpdGxlXCIpO1xuICAgICAgICB0YXNrRm9ybURpdi5hcHBlbmRDaGlsZCh0YXNrVGl0bGVJbnB1dCk7XG4gICAgXG4gICAgICAgIGxldCB0YXNrRHVlSW5wdXQgPSB1aUdlbkluc3RhbmNlLmNyZWF0ZUlucHV0KCdkdWUtaW5wdXQnLCdkYXRlJyk7XG4gICAgICAgIHRhc2tGb3JtRGl2LmFwcGVuZENoaWxkKHRhc2tEdWVJbnB1dCk7XG4gICAgXG4gICAgICAgIGxldCB0YXNrRGVzY3JpcHRpb25JbnB1dCA9IHVpR2VuSW5zdGFuY2UuY3JlYXRlSW5wdXQoJ2Rlc2MtaW5wdXQnLCd0ZXh0JywnRGVzY3JpcHRpb24nKTtcbiAgICAgICAgdGFza0Zvcm1EaXYuYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uSW5wdXQpO1xuICAgIFxuICAgICAgICBcbiAgICAgICAgdGFza0Zvcm1EaXYuYXBwZW5kQ2hpbGQodWlHZW5JbnN0YW5jZS5jcmVhdGVQcmlvcml0eVNlbGVjdG9yKCkpO1xuICAgIFxuICAgICAgICBsZXQgdGFza1Byb2plY3RJbnB1dCA9IHVpR2VuSW5zdGFuY2UuY3JlYXRlUHJvamVjdFNlbGVjdG9yKCk7XG4gICAgICAgIHRhc2tGb3JtRGl2LmFwcGVuZENoaWxkKHRhc2tQcm9qZWN0SW5wdXQpO1xuICAgIFxuICAgICAgICBsZXQgdGFza0NyZWF0ZUJ1dHRvbiA9IHVpR2VuSW5zdGFuY2UuY3JlYXRlQnV0dG9uKCdjcmVhdGUtdGFzay1idXR0b24nLFwiQ3JlYXRlXCIpO1xuICAgICAgICB0YXNrRm9ybURpdi5hcHBlbmRDaGlsZCh0YXNrQ3JlYXRlQnV0dG9uKTtcbiAgICBcbiAgICAgICAgcmV0dXJuIHRhc2tGb3JtRGl2O1xuICAgIH1cblxuICAgIGNyZWF0ZVByb2plY3RGb3JtKCkge1xuICAgICAgICBsZXQgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBcbiAgICAgICAgbGV0IHByb2plY3ROYW1lSW5wdXQgPSB1aUdlbkluc3RhbmNlLmNyZWF0ZUlucHV0KCdwTmFtZS1pbnB1dCcsJ3RleHQnLCdQcm9qZWN0IE5hbWUnKTtcbiAgICAgICAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVJbnB1dCk7XG4gICAgXG4gICAgICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKHVpR2VuSW5zdGFuY2UuY3JlYXRlQ29sb3JTZWxlY3RvcigpKTtcbiAgICBcbiAgICAgICAgbGV0IHByb2plY3RDcmVhdGVCdXR0b24gPSB1aUdlbkluc3RhbmNlLmNyZWF0ZUJ1dHRvbignY3JlYXRlLXByb2plY3QtYnV0dG9uJywnQ3JlYXRlIFByb2plY3QnKTtcbiAgICAgICAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdENyZWF0ZUJ1dHRvbik7XG4gICAgXG4gICAgICAgIHJldHVybiBwcm9qZWN0Rm9ybTtcbiAgICB9XG59XG5cbmNvbnN0IGZvcm1HZW5JbnN0YW5jZSA9IG5ldyBGb3JtR2VuO1xuZXhwb3J0IHt1aUdlbkluc3RhbmNlLCBmb3JtR2VuSW5zdGFuY2UgfTsiLCJjbGFzcyB0YXNrRXJyb3JzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIH1cblxuICAgIG5vdFRhc2tFcnJvcigpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJUcmllZCBpbnNlcnRpbmcgYW4gaXRlbSB0aGF0IHdhcyBub3QgY2xhc3MgdG9kbyBpbnRvIHRoZSB0YXNrIGxpc3RcIik7XG4gICAgfVxuXG4gICAgdGFza05vdEZvdW5kKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInRhc2sgd2l0aCB0aGUgcmVxdWlyZWQgVUlEIG5vdCBmb3VuZFwiKTtcbiAgICB9XG5cbiAgICB3cm9uZ0lzQ29tcGxldGVJRCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ3cm9uZyBkYXRhIHZhbHVlIGhhcyBiZWVuIHByb3ZpZGVkIHRvIHNldCB0aGUgaXMgY29tcGxldGUgZm9yIGEgdGFza1wiKVxuICAgIH1cbn1cblxuY2xhc3MgcHJvamVjdEVycm9ycyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB9XG5cbiAgICBub3RQcm9qZWN0RXJyb3IoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVHJpZWQgaW5zZXJ0aW5nIGFuIGl0ZW0gdGhhdCB3YXMgbm90IGEgcHJvamVjdCBpbnRvIHByb2plY3QgbGlzdFwiKTtcbiAgICB9XG59XG5cbmNvbnN0IHRhc2tFcnJvck9iamVjdCA9IG5ldyB0YXNrRXJyb3JzO1xuY29uc3QgcHJvamVjdEVycm9yT2JqZWN0ID0gbmV3IHByb2plY3RFcnJvcnNcblxuZXhwb3J0IHt0YXNrRXJyb3JPYmplY3QsIHByb2plY3RFcnJvck9iamVjdH07IiwiaW1wb3J0IHsgbG9hZFByb2plY3RGb3JtLCBsb2FkVGFza0Zvcm0sIHVwZGF0ZVRvZG9QYWdlIH0gZnJvbSBcIi4vdXBkYXRlUGFnZVwiO1xuaW1wb3J0IHsgYWRkTmV3UHJvamVjdCwgYWRkTmV3VGFzaywgZGVsZXRlVGFzaywgdGFza0NvbXBsZXRlIH0gZnJvbSBcIi4vdGFza0Z1bmN0aW9uYWxpdHlcIjtcblxuY2xhc3MgU2VsZWN0UHJvamVjdExpc3RlbmVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgICBhZGRTZWxlY3RFdmVudExpc3RuZXIoKSB7XG4gICAgICAgIGNvbnN0IGdldFRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VsZWN0b3ItYnV0dG9uJyk7XG4gICAgICAgIGdldFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB1cGRhdGVUb2RvUGFnZSk7XG4gICAgfVxufVxuXG5jbGFzcyBUYXNrSGFuZGxpbmdMaXN0ZW5lciB7XG4gICAgY29uc3RydWN0b3IoKSB7fVxuICAgIFxuICAgIGFkZERlbGV0ZVRhc2tFdmVudExpc3RlbmVyKCkge1xuICAgICAgICBjb25zdCBkZWxCdXR0b25zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjdGFzay1kZWwtYnV0dG9uJykpO1xuICAgICAgICBmb3IobGV0IGk9MDtpPGRlbEJ1dHRvbnMubGVuZ3RoO2krKykge1xuICAgICAgICAgICAgZGVsQnV0dG9uc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZGVsZXRlVGFzayk7XG4gICAgICAgIH0gICBcbiAgICB9XG5cbiAgICBhZGRDb21wbGV0ZVRhc2tFdmVudExpc3RlbmVyKCkge1xuICAgICAgICBjb25zdCBjb21wbGV0ZUJ1dHRvbnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyN0YXNrLWNvbXAtYnV0dG9uJykpO1xuICAgICAgICBmb3IobGV0IGk9MDtpPGNvbXBsZXRlQnV0dG9ucy5sZW5ndGg7aSsrKSB7XG4gICAgICAgICAgICBjb21wbGV0ZUJ1dHRvbnNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLHRhc2tDb21wbGV0ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuY2xhc3MgZm9ybUxpc3RlbmVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgICBhZGRUYXNrRXZlbnRMaXN0ZW5lcigpIHtcbiAgICAgICAgY29uc3QgY3JlYXRlVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGUtdGFzay1idXR0b24nKTtcbiAgICAgICAgY3JlYXRlVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsYWRkTmV3VGFzayk7XG4gICAgfVxuXG5cbiAgICBhZGRQcm9qZWN0RXZlbnRMaXN0ZW5lcigpIHtcbiAgICAgICAgY29uc3QgY3JlYXRlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGUtcHJvamVjdC1idXR0b24nKTtcbiAgICAgICAgY3JlYXRlUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsYWRkTmV3UHJvamVjdCk7XG4gICAgfVxufVxuXG5jbGFzcyBOYXZpZ2F0aW9uSGFuZGxpbmdMaXN0ZW5lciB7XG4gICAgY29uc3RydWN0b3IoKSB7fVxuXG4gICAgYWRkVGFza0Zvcm1MaXN0ZW5lcigpIHtcbiAgICAgICAgbGV0IHN3aXRjaFRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1uYXYnKTtcbiAgICAgICAgc3dpdGNoVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsbG9hZFRhc2tGb3JtKTtcbiAgICB9XG5cbiAgICBhZGRQcm9qZWN0Rm9ybUxpc3RlbmVyKCkge1xuICAgICAgICBsZXQgc3dpdGNoUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LW5hdicpO1xuICAgICAgICBzd2l0Y2hQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxsb2FkUHJvamVjdEZvcm0pO1xuICAgIH1cbn1cblxuY29uc3QgdGFza0hhbmRsZXJMaXN0ZW5lckluc3RhbmNlID0gbmV3IFRhc2tIYW5kbGluZ0xpc3RlbmVyO1xuY29uc3Qgc2VsZWN0UHJvamVjdExpc3RlbmVySW5zdGFuY2UgPSBuZXcgU2VsZWN0UHJvamVjdExpc3RlbmVyO1xuY29uc3QgbmF2TGlzdGVuZXJJbnN0bmFjZSA9IG5ldyBOYXZpZ2F0aW9uSGFuZGxpbmdMaXN0ZW5lcjtcbmNvbnN0IGZvcm1MaXN0ZW5lckluc3RhbmNlID0gbmV3IGZvcm1MaXN0ZW5lclxuXG5leHBvcnQge3Rhc2tIYW5kbGVyTGlzdGVuZXJJbnN0YW5jZSxzZWxlY3RQcm9qZWN0TGlzdGVuZXJJbnN0YW5jZSxuYXZMaXN0ZW5lckluc3RuYWNlLCBmb3JtTGlzdGVuZXJJbnN0YW5jZX07IiwiaW1wb3J0IHsgdWlHZW5JbnN0YW5jZSwgZm9ybUdlbkluc3RhbmNlIH0gZnJvbSBcIi4vY3JlYXRlVUlFbGVtZW50XCJcbmltcG9ydCB7IHRhc2tIYW5kbGVyTGlzdGVuZXJJbnN0YW5jZSwgc2VsZWN0UHJvamVjdExpc3RlbmVySW5zdGFuY2UsIG5hdkxpc3RlbmVySW5zdG5hY2UsIGZvcm1MaXN0ZW5lckluc3RhbmNlIH0gZnJvbSBcIi4vaW5pdEV2ZW50TGlzdGVuZXJzXCI7XG5cblxuXG5mdW5jdGlvbiBpbml0aWFsaXplTmF2QmFyKCkge1xuICAgIGxldCBuYXZDb250YWluZXIgPSB1aUdlbkluc3RhbmNlLmNyZWF0ZUNvbnRhaW5lckRpdihcIm5hdi1jb250YWluZXJcIik7XG4gICAgbGV0IG5hdkJ1dHRvbkdyb3VwID0gdWlHZW5JbnN0YW5jZS5jcmVhdGVHZW5lcmFsRGl2KFwiYnV0dG9uLWdyb3VwXCIsXCJuYXYtYnV0dG9uLWdyb3VwXCIpO1xuICAgIGNvbnN0IG5hdkJ1dHRvblRhc2sgPSB1aUdlbkluc3RhbmNlLmNyZWF0ZUxpbmtCdXR0b24oXCJ0YXNrLW5hdlwiLFwiQ3JlYXRlIEEgVGFza1wiKTtcbiAgICBuYXZCdXR0b25Hcm91cC5hcHBlbmRDaGlsZChuYXZCdXR0b25UYXNrKTtcbiAgICBjb25zdCBuYXZCdXR0b25wcm9qZWN0ID0gdWlHZW5JbnN0YW5jZS5jcmVhdGVMaW5rQnV0dG9uKFwicHJvamVjdC1uYXZcIixcIkNyZWF0ZSBBIFByb2plY3RcIik7XG4gICAgbmF2QnV0dG9uR3JvdXAuYXBwZW5kQ2hpbGQobmF2QnV0dG9ucHJvamVjdCk7XG4gICAgbmF2Q29udGFpbmVyLmFwcGVuZENoaWxkKG5hdkJ1dHRvbkdyb3VwKTtcbiAgICByZXR1cm4gbmF2Q29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBpbml0aWFsaXplVG9wRGl2KCkge1xuICAgIGxldCB0b3BEaXYgPSB1aUdlbkluc3RhbmNlLmNyZWF0ZUNvbnRhaW5lckRpdihcInRvcC1kaXZcIik7XG4gICAgdG9wRGl2LmFwcGVuZENoaWxkKGZvcm1HZW5JbnN0YW5jZS5jcmVhdGVUYXNrRm9ybSgpKTtcbiAgICByZXR1cm4gdG9wRGl2O1xufVxuXG5mdW5jdGlvbiBpbml0aWFsaXplU2VsZWN0b3IoKSB7XG4gICAgbGV0IHByb2plY3RTZWxlY3RvckRpdiA9IHVpR2VuSW5zdGFuY2UuY3JlYXRlQ29udGFpbmVyRGl2KFwicHJvamVjdC1zZWxlY3Rvci1kaXZcIik7XG4gICAgbGV0IHByb2plY3RTZWxlY3RvciA9IHVpR2VuSW5zdGFuY2UuY3JlYXRlUHJvamVjdFNlbGVjdG9yKCk7XG4gICAgcHJvamVjdFNlbGVjdG9yLmlkID0gXCJsaXN0LXByb2plY3Qtc2VsZWN0b3JcIjtcbiAgICBwcm9qZWN0U2VsZWN0b3JEaXYuYXBwZW5kQ2hpbGQocHJvamVjdFNlbGVjdG9yKTtcblxuICAgIGNvbnN0IHNlbGVjdG9yQnV0dG9uID0gdWlHZW5JbnN0YW5jZS5jcmVhdGVCdXR0b24oJ3NlbGVjdG9yLWJ1dHRvbicsJ1NlbGVjdCcpO1xuICAgIHByb2plY3RTZWxlY3RvckRpdi5hcHBlbmRDaGlsZChzZWxlY3RvckJ1dHRvbik7XG5cbiAgICByZXR1cm4gcHJvamVjdFNlbGVjdG9yRGl2O1xufVxuXG5mdW5jdGlvbiBpbml0aWFsaXplVGFza0NvbnRhaW5lcigpIHtcbiAgICBsZXQgdG9kb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9EaXYuY2xhc3NMaXN0LmFkZCgndG9kby1saXN0Jyk7XG4gICAgdG9kb0Rpdi5pbm5lckhUTUwgPSBcIk5vIENoYXB0ZXIgU2VsZWN0ZWRcIjtcbiAgICByZXR1cm4gdG9kb0Rpdjtcbn1cblxuZnVuY3Rpb24gaW5pdEhvbWVQYWdlTGlzdGVuZXIoKSB7XG4gICAgc2VsZWN0UHJvamVjdExpc3RlbmVySW5zdGFuY2UuYWRkU2VsZWN0RXZlbnRMaXN0bmVyKCk7XG4gICAgbmF2TGlzdGVuZXJJbnN0bmFjZS5hZGRQcm9qZWN0Rm9ybUxpc3RlbmVyKCk7XG4gICAgbmF2TGlzdGVuZXJJbnN0bmFjZS5hZGRUYXNrRm9ybUxpc3RlbmVyKCk7XG4gICAgZm9ybUxpc3RlbmVySW5zdGFuY2UuYWRkVGFza0V2ZW50TGlzdGVuZXIoKTtcbn1cblxuZnVuY3Rpb24gaW5pdGlhbGl6ZVBhZ2UoKSB7XG4gICAgbGV0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoaW5pdGlhbGl6ZU5hdkJhcigpKTtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGluaXRpYWxpemVUb3BEaXYoKSk7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChpbml0aWFsaXplU2VsZWN0b3IoKSk7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChpbml0aWFsaXplVGFza0NvbnRhaW5lcigpKTtcbiAgICBpbml0SG9tZVBhZ2VMaXN0ZW5lcigpO1xufVxuXG5leHBvcnQgeyBpbml0aWFsaXplUGFnZSB9OyIsImNsYXNzIHByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKHVpZCwgcHJvamVjdE5hbWUsIHByb2plY3RDb2xvcikge1xuICAgICAgICB0aGlzLnVpZCA9IHVpZDtcbiAgICAgICAgdGhpcy5wcm9qZWN0TmFtZSA9IHByb2plY3ROYW1lO1xuICAgICAgICB0aGlzLnByb2plY3RDb2xvciA9IHByb2plY3RDb2xvcjtcbiAgICB9XG5cbiAgICBnZXRQcm9qZWN0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdE5hbWU7XG4gICAgfVxuXG4gICAgZ2V0UHJvamVjdENvbG9yKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0Q29sb3I7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVOZXdQcm9qZWN0KHVpZCxwcm9qZWN0TmFtZSwgcHJvamVjdENvbG9yKSB7XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBwcm9qZWN0KHVpZCwgcHJvamVjdE5hbWUscHJvamVjdENvbG9yKTtcbiAgICByZXR1cm4gbmV3UHJvamVjdDtcbn1cblxuZnVuY3Rpb24gY2hlY2tJZlByb2plY3QocCkge1xuICAgIGlmKHAgaW5zdGFuY2VvZiBwcm9qZWN0KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCB7Y3JlYXRlTmV3UHJvamVjdCwgY2hlY2tJZlByb2plY3R9OyIsImltcG9ydCB7IGNoZWNrSWZQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHsgcHJvamVjdEVycm9yT2JqZWN0IH0gZnJvbSBcIi4vZXJyb3JIYW5kbGVyXCI7XG5cbmNsYXNzIHByb2plY3RMaXN0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0TGlzdCA9IFtdO1xuICAgICAgICB0aGlzLnByb2plY3RDb3VudGVyID0gMDtcbiAgICB9XG5cbiAgICBwcm9qZWN0TGlzdEFwcGVuZChwcm9qZWN0KSB7XG4gICAgICAgIGlmKGNoZWNrSWZQcm9qZWN0KHByb2plY3QpKSB7XG4gICAgICAgICAgICB0aGlzLnByb2plY3RMaXN0LnB1c2gocHJvamVjdCk7XG4gICAgICAgICAgICB0aGlzLnByb2plY3RDb3VudGVyKys7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9qZWN0RXJyb3JPYmplY3Qubm90UHJvamVjdEVycm9yKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRQcm9qZWN0TGlzdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdExpc3RcbiAgICB9XG5cbiAgICBnZXRDdXJyZW50UHJvamVjdENvdW50ZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RDb3VudGVyO1xuICAgIH1cbn1cblxuXG4vL01ha2UgZGVsZXRlIHRhc2tcblxuY29uc3QgcHJvamVjdExpc3RJbnN0YW5jZSA9IG5ldyBwcm9qZWN0TGlzdDtcblxuZXhwb3J0IHtwcm9qZWN0TGlzdEluc3RhbmNlfTsiLCJpbXBvcnQgeyB0YXNrTGlzdEluc3RhbmNlIH0gZnJvbSBcIi4vdG9kb0xpc3RcIjtcbmltcG9ydCB7IHVwZGF0ZVRvZG9QYWdlIH0gZnJvbSBcIi4vdXBkYXRlUGFnZVwiO1xuaW1wb3J0IHsgY3JlYXRlVGFza0Zyb21JbnB1dCB9IGZyb20gXCIuL2NyZWF0ZVRhc2tGcm9tSW5wdXRcIjtcbmltcG9ydCB7IHByb2plY3RMaXN0SW5zdGFuY2UgfSBmcm9tIFwiLi9wcm9qZWN0TGlzdFwiO1xuaW1wb3J0IHsgY3JlYXRlUHJvamVjdEZyb21JbnB1dCB9IGZyb20gXCIuL2NyZWF0ZVByb2plY3RGcm9tSW5wdXRcIjtcblxuXG5mdW5jdGlvbiBhZGROZXdUYXNrKCkge1xuICAgIGNvbnN0IHRhc2tVSUQgPSB0YXNrTGlzdEluc3RhbmNlLmdldEN1cnJlbnRDb3VudGVyKCk7XG4gICAgY29uc3QgbmV3VGFzayA9IGNyZWF0ZVRhc2tGcm9tSW5wdXQodGFza1VJRCk7XG4gICAgdGFza0xpc3RJbnN0YW5jZS50YXNrTGlzdEFwcGVuZChuZXdUYXNrKTtcbiAgICB1cGRhdGVUb2RvUGFnZSgpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVUYXNrKGUpIHtcbiAgICB0YXNrTGlzdEluc3RhbmNlLmRlbGV0ZVRhc2soZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpO1xuICAgIHVwZGF0ZVRvZG9QYWdlKCk7XG59XG5cbmZ1bmN0aW9uIHRhc2tDb21wbGV0ZShlKSB7XG4gICAgY29uc29sZS5sb2coZS50YXJnZXQpO1xuICAgIHRhc2tMaXN0SW5zdGFuY2Uuc2V0Q29tcGxldGUoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpO1xuICAgIHVwZGF0ZVRvZG9QYWdlKCk7XG59XG5cbmZ1bmN0aW9uIGFkZE5ld1Byb2plY3QoKSB7XG4gICAgY29uc3QgcHJvamVjdFVJRCA9IHByb2plY3RMaXN0SW5zdGFuY2UuZ2V0Q3VycmVudFByb2plY3RDb3VudGVyKCk7XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IGNyZWF0ZVByb2plY3RGcm9tSW5wdXQocHJvamVjdFVJRCk7XG4gICAgcHJvamVjdExpc3RJbnN0YW5jZS5wcm9qZWN0TGlzdEFwcGVuZChuZXdQcm9qZWN0KTtcbiAgICB1cGRhdGVUb2RvUGFnZSgpO1xufVxuXG5leHBvcnQge2FkZE5ld1Rhc2ssZGVsZXRlVGFzaywgdGFza0NvbXBsZXRlLCBhZGROZXdQcm9qZWN0fSIsImltcG9ydCB7IHRhc2tFcnJvck9iamVjdCB9IGZyb20gXCIuL2Vycm9ySGFuZGxlclwiO1xuXG5jbGFzcyB0b2RvIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9qZWN0LCB1aWQsIHRpdGxlLCBkdWVkYXRlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGlzQ29tcGxldGUpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICAgICAgdGhpcy51aWQgPSB1aWQ7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kdWVkYXRlID0gZHVlZGF0ZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMuaXNDb21wbGV0ZSA9IGlzQ29tcGxldGVcbiAgICB9XG5cbiAgICBnZXRVSUQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVpZDtcbiAgICB9XG5cbiAgICBnZXRUaXRsZSAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRpdGxlO1xuICAgIH1cblxuICAgIGdldER1ZURhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmR1ZWRhdGU7XG4gICAgfVxuXG4gICAgZ2V0RGVzY3JpcHRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIGdldFByaW9yaXR5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcmlvcml0eTtcbiAgICB9XG5cbiAgICBnZXRUYXNrUHJvamVjdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdDtcbiAgICB9XG5cbiAgICBnZXRJc0NvbXBsZXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc0NvbXBsZXRlO1xuICAgIH1cblxuICAgIHNldElzQ29tcGxldGUoaSkge1xuICAgICAgICBpZihpPT10cnVlKSB7XG4gICAgICAgICAgICB0aGlzLmlzQ29tcGxldGUgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYoaT09ZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMuaXNDb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFza0Vycm9yT2JqZWN0Lndyb25nSXNDb21wbGV0ZUlEKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld1RvRG8ocHJvamVjdCwgdWlkLCB0aXRsZSwgZHVlZGF0ZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBpc0NvbXBsZXRlKSB7XG4gICAgY29uc3QgbmV3VG9EbyA9IG5ldyB0b2RvKHByb2plY3QsIHVpZCwgdGl0bGUsIGR1ZWRhdGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgaXNDb21wbGV0ZSk7XG4gICAgcmV0dXJuIG5ld1RvRG87XG59XG5cbmZ1bmN0aW9uIGNoZWNrSWZUYXNrKHQxKSB7XG4gICAgaWYodDEgaW5zdGFuY2VvZiB0b2RvKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCB7Y3JlYXRlTmV3VG9EbywgY2hlY2tJZlRhc2t9OyIsImltcG9ydCB7IGNoZWNrSWZUYXNrIH0gZnJvbSBcIi4vdG9kb1wiO1xuaW1wb3J0IHsgdGFza0Vycm9yT2JqZWN0IH0gZnJvbSBcIi4vZXJyb3JIYW5kbGVyXCI7XG5cbmNsYXNzIHRhc2tMaXN0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy50YXNrTGlzdCA9IFtdO1xuICAgICAgICB0aGlzLmNvdW50ZXIgPSAwO1xuICAgIH1cblxuXG4gICAgdGFza0xpc3RBcHBlbmQodGFzaykge1xuICAgICAgICBpZihjaGVja0lmVGFzayh0YXNrKSkge1xuICAgICAgICAgICAgdGhpcy50YXNrTGlzdC5wdXNoKHRhc2spO1xuICAgICAgICAgICAgdGhpcy5jb3VudGVyICs9IDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0YXNrRXJyb3JPYmplY3Qubm90VGFza0Vycm9yKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRDdXJyZW50Q291bnRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY291bnRlcjtcbiAgICB9XG5cbiAgICBnZXRUYXNrTGlzdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFza0xpc3Q7XG4gICAgfVxuXG4gICAgZ2V0VGFza3NPZlByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICAgICAgbGV0IG5ld1Rhc2tMaXN0ID0gW107XG4gICAgXG4gICAgICAgIGZvcihsZXQgaT0wO2k8dGhpcy50YXNrTGlzdC5sZW5ndGg7aSsrKSB7XG4gICAgICAgICAgICBpZih0aGlzLnRhc2tMaXN0W2ldLmdldFRhc2tQcm9qZWN0KCk9PXByb2plY3ROYW1lKSB7XG4gICAgICAgICAgICAgICAgbmV3VGFza0xpc3QucHVzaCh0aGlzLnRhc2tMaXN0W2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIFxuICAgICAgICByZXR1cm4gbmV3VGFza0xpc3Q7XG4gICAgfVxuXG4gICAgZ2V0Q29tcGxldGVUYXNrc09mUHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgICAgICBsZXQgbmV3VGFza0xpc3QgPSBbXTtcbiAgICAgICAgZm9yKGxldCBpPTA7aTx0aGlzLnRhc2tMaXN0Lmxlbmd0aDtpKyspIHtcbiAgICAgICAgICAgIGlmKHRoaXMudGFza0xpc3RbaV0uZ2V0VGFza1Byb2plY3QoKSA9PSBwcm9qZWN0TmFtZSAmJiB0aGlzLnRhc2tMaXN0W2ldLmdldElzQ29tcGxldGUoKSA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgbmV3VGFza0xpc3QucHVzaCh0aGlzLnRhc2tMaXN0W2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3VGFza0xpc3Q7XG4gICAgfVxuXG4gICAgZ2V0SW5jb21wbGV0ZVRhc2tzT2ZQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgICAgIGxldCBuZXdUYXNrTGlzdCA9IFtdO1xuICAgICAgICBmb3IobGV0IGk9MDtpPHRoaXMudGFza0xpc3QubGVuZ3RoO2krKykge1xuICAgICAgICAgICAgaWYodGhpcy50YXNrTGlzdFtpXS5nZXRUYXNrUHJvamVjdCgpID09IHByb2plY3ROYW1lICYmIHRoaXMudGFza0xpc3RbaV0uZ2V0SXNDb21wbGV0ZSgpID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgbmV3VGFza0xpc3QucHVzaCh0aGlzLnRhc2tMaXN0W2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3VGFza0xpc3Q7XG4gICAgfVxuXG5cbiAgICBkZWxldGVUYXNrKHRhc2tVSUQpIHtcbiAgICAgICAgbGV0IGk9MDtcbiAgICAgICAgbGV0IGl0ZW1Ub0RlbGV0ZSA9IC0xO1xuICAgICAgICB3aGlsZShpPHRoaXMudGFza0xpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZih0aGlzLnRhc2tMaXN0W2ldLmdldFVJRCgpID09IHRhc2tVSUQpIHtcbiAgICAgICAgICAgICAgICBpdGVtVG9EZWxldGUgPSBpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgICAgIGlmKGl0ZW1Ub0RlbGV0ZSA9PSAtMSkge1xuICAgICAgICAgICAgdGFza0Vycm9yT2JqZWN0LnRhc2tOb3RGb3VuZCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50YXNrTGlzdC5zcGxpY2UoaSwxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldENvbXBsZXRlKHRhc2tVSUQpIHtcbiAgICAgICAgbGV0IGk9MDtcbiAgICAgICAgbGV0IGl0ZW1Ub1NldCA9IC0xO1xuICAgICAgICB3aGlsZShpPHRoaXMudGFza0xpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZih0aGlzLnRhc2tMaXN0W2ldLmdldFVJRCgpID09IHRhc2tVSUQpIHtcbiAgICAgICAgICAgICAgICBpdGVtVG9TZXQgPSBpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgICAgIGlmKGl0ZW1Ub1NldCA9PSAtMSkge1xuICAgICAgICAgICAgdGFza0Vycm9yT2JqZWN0LnRhc2tOb3RGb3VuZCgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGFza1VJRCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZih0aGlzLnRhc2tMaXN0W2ldLmdldElzQ29tcGxldGUoKSA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50YXNrTGlzdFtpXS5zZXRJc0NvbXBsZXRlKGZhbHNlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy50YXNrTGlzdFtpXS5zZXRJc0NvbXBsZXRlKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5jb25zdCB0YXNrTGlzdEluc3RhbmNlID0gbmV3IHRhc2tMaXN0O1xuXG5leHBvcnQge3Rhc2tMaXN0SW5zdGFuY2V9OyIsImltcG9ydCB7IHRhc2tMaXN0SW5zdGFuY2UgfSBmcm9tIFwiLi90b2RvTGlzdFwiO1xuaW1wb3J0IHsgY3JlYXRlTmV3VGFza0Rpc3BsYXkgfSBmcm9tIFwiLi9jcmVhdGVUb2RvRWxlbWVudFwiO1xuaW1wb3J0IHsgdGFza0hhbmRsZXJMaXN0ZW5lckluc3RhbmNlIH0gZnJvbSBcIi4vaW5pdEV2ZW50TGlzdGVuZXJzXCI7XG5pbXBvcnQgeyBmb3JtR2VuSW5zdGFuY2UsIHVpR2VuSW5zdGFuY2UgfSBmcm9tIFwiLi9jcmVhdGVVSUVsZW1lbnRcIjtcbmltcG9ydCB7IGZvcm1MaXN0ZW5lckluc3RhbmNlIH0gZnJvbSBcIi4vaW5pdEV2ZW50TGlzdGVuZXJzXCI7XG5cbmZ1bmN0aW9uIHVwZGF0ZUhvbWVQYWdlTGlzdGVuZXIoKSB7XG4gICAgdGFza0hhbmRsZXJMaXN0ZW5lckluc3RhbmNlLmFkZERlbGV0ZVRhc2tFdmVudExpc3RlbmVyKCk7XG4gICAgdGFza0hhbmRsZXJMaXN0ZW5lckluc3RhbmNlLmFkZENvbXBsZXRlVGFza0V2ZW50TGlzdGVuZXIoKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlU2VsZWN0b3IoKSB7XG4gICAgY29uc3QgcHJvamVjdFNlbGVjdG9yRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3Qtc2VsZWN0b3ItZGl2Jyk7XG4gICAgcHJvamVjdFNlbGVjdG9yRGl2LmlubmVySFRNTCA9IFwiXCI7XG4gICAgbGV0IHByb2plY3RTZWxlY3RvciA9IHVpR2VuSW5zdGFuY2UuY3JlYXRlUHJvamVjdFNlbGVjdG9yKCk7XG4gICAgcHJvamVjdFNlbGVjdG9yLmlkID0gXCJsaXN0LXByb2plY3Qtc2VsZWN0b3JcIjtcbiAgICBwcm9qZWN0U2VsZWN0b3JEaXYuYXBwZW5kQ2hpbGQocHJvamVjdFNlbGVjdG9yKTtcblxuICAgIGNvbnN0IHNlbGVjdG9yQnV0dG9uID0gdWlHZW5JbnN0YW5jZS5jcmVhdGVCdXR0b24oJ3NlbGVjdG9yLWJ1dHRvbicsJ1NlbGVjdCcpO1xuICAgIHByb2plY3RTZWxlY3RvckRpdi5hcHBlbmRDaGlsZChzZWxlY3RvckJ1dHRvbik7XG59XG5cblxuZnVuY3Rpb24gdXBkYXRlVG9kb1BhZ2UoKSB7XG4gICAgY29uc3QgdG9kb0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWxpc3QnKTtcblxuXG4gICAgdG9kb0Rpdi5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGNvbnN0IHByb2plY3RTZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsaXN0LXByb2plY3Qtc2VsZWN0b3InKTtcbiAgICBcbiAgICBjb25zdCBzZWxlY3RlZFByb2plY3RUYXNrcyA9IEFycmF5LmZyb20odGFza0xpc3RJbnN0YW5jZS5nZXRUYXNrc09mUHJvamVjdChwcm9qZWN0U2VsZWN0b3IudmFsdWUpKTtcbiAgICBmb3IobGV0IGk9MDtpPHNlbGVjdGVkUHJvamVjdFRhc2tzLmxlbmd0aDtpKyspIHtcbiAgICAgICAgbGV0IG5ld1Rhc2sgPSBjcmVhdGVOZXdUYXNrRGlzcGxheShzZWxlY3RlZFByb2plY3RUYXNrc1tpXSk7XG4gICAgICAgIHRvZG9EaXYuYXBwZW5kQ2hpbGQobmV3VGFzayk7XG4gICAgfVxuICAgIHVwZGF0ZVNlbGVjdG9yKCk7XG4gICAgdXBkYXRlSG9tZVBhZ2VMaXN0ZW5lcigpO1xufVxuXG5mdW5jdGlvbiBsb2FkUHJvamVjdEZvcm0oKSB7XG4gICAgY29uc3QgdG9wRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvcC1kaXYnKTtcbiAgICB0b3BEaXYuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB0b3BEaXYuYXBwZW5kQ2hpbGQoZm9ybUdlbkluc3RhbmNlLmNyZWF0ZVByb2plY3RGb3JtKCkpO1xuICAgIGZvcm1MaXN0ZW5lckluc3RhbmNlLmFkZFByb2plY3RFdmVudExpc3RlbmVyKCk7XG59XG5cbmZ1bmN0aW9uIGxvYWRUYXNrRm9ybSgpIHtcbiAgICBjb25zdCB0b3BEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9wLWRpdicpO1xuICAgIHRvcERpdi5pbm5lckhUTUwgPSBcIlwiO1xuICAgIHRvcERpdi5hcHBlbmRDaGlsZChmb3JtR2VuSW5zdGFuY2UuY3JlYXRlVGFza0Zvcm0oKSk7XG59XG5cbmV4cG9ydCB7dXBkYXRlVG9kb1BhZ2UsIGxvYWRQcm9qZWN0Rm9ybSwgbG9hZFRhc2tGb3JtfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGNyZWF0ZU5ld1RvRG8gfSBmcm9tIFwiLi90b2RvXCI7XG5pbXBvcnQgeyBjcmVhdGVOZXdQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHsgdGFza0xpc3RJbnN0YW5jZSB9IGZyb20gXCIuL3RvZG9MaXN0XCI7XG5pbXBvcnQgeyBwcm9qZWN0TGlzdEluc3RhbmNlIH0gZnJvbSBcIi4vcHJvamVjdExpc3RcIjtcbmltcG9ydCB7IGluaXRpYWxpemVQYWdlIH0gZnJvbSBcIi4vaW5pdGlhbGl6ZVBhZ2VcIjtcblxuXG5cblxuXG5jb25zdCBwMSA9IGNyZWF0ZU5ld1Byb2plY3QocHJvamVjdExpc3RJbnN0YW5jZS5nZXRDdXJyZW50UHJvamVjdENvdW50ZXIoKSxcIkNhdHNcIixcIkJsdWVcIik7XG5wcm9qZWN0TGlzdEluc3RhbmNlLnByb2plY3RMaXN0QXBwZW5kKHAxKTtcblxuY29uc3QgcDIgPSBjcmVhdGVOZXdQcm9qZWN0KHByb2plY3RMaXN0SW5zdGFuY2UuZ2V0Q3VycmVudFByb2plY3RDb3VudGVyKCksXCJQcm9qZWN0IDJcIixcIkdyZWVuXCIpO1xucHJvamVjdExpc3RJbnN0YW5jZS5wcm9qZWN0TGlzdEFwcGVuZChwMik7XG5jb25zb2xlLmxvZyhwcm9qZWN0TGlzdEluc3RhbmNlLmdldFByb2plY3RMaXN0KCkpO1xuXG5cblxuXG5cbmNvbnN0IHQxID0gY3JlYXRlTmV3VG9EbyhwMS5nZXRQcm9qZWN0TmFtZSgpLHRhc2tMaXN0SW5zdGFuY2UuZ2V0Q3VycmVudENvdW50ZXIoKSxcIlRlc3RcIixcIlRlc3RcIixcIlRlc3RcIiwyLCB0cnVlKTtcbnRhc2tMaXN0SW5zdGFuY2UudGFza0xpc3RBcHBlbmQodDEpO1xuY29uc3QgdDIgPSBjcmVhdGVOZXdUb0RvKHAxLmdldFByb2plY3ROYW1lKCksdGFza0xpc3RJbnN0YW5jZS5nZXRDdXJyZW50Q291bnRlcigpLFwiTWlhd1wiLFwiVGVzdFwiLFwiVGVzdFwiLDEsIGZhbHNlKTtcbnRhc2tMaXN0SW5zdGFuY2UudGFza0xpc3RBcHBlbmQodDIpO1xuXG5jb25zb2xlLmxvZyh0YXNrTGlzdEluc3RhbmNlLmdldFRhc2tMaXN0KCkpO1xuXG5jb25zb2xlLmxvZyh0YXNrTGlzdEluc3RhbmNlLmdldFRhc2tzT2ZQcm9qZWN0KFwiQ2F0c1wiKSk7XG5cbmluaXRpYWxpemVQYWdlKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=