/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/createProjectSelector.js":
/*!**************************************!*\
  !*** ./src/createProjectSelector.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProjectSelector: () => (/* binding */ createProjectSelector)
/* harmony export */ });
/* harmony import */ var _projectList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectList */ "./src/projectList.js");


function createProjectSelector() {
    let projectSelector = document.createElement('select');
    projectSelector.classList.add('selector');
    projectSelector.name = "project-selector";

    const projects = Array.from(_projectList__WEBPACK_IMPORTED_MODULE_0__.projectListInstance.getProjectList());
    for(let i=0; i<projects.length;i++) {
        let projectOption = document.createElement('option');
        projectOption.value = projects[i].getProjectName();
        projectOption.innerHTML = projects[i].getProjectName();
        projectSelector.appendChild(projectOption);
    }

    return projectSelector;
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

/***/ "./src/dyanmicForm.js":
/*!****************************!*\
  !*** ./src/dyanmicForm.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProjectForm: () => (/* binding */ createProjectForm),
/* harmony export */   createTaskForm: () => (/* binding */ createTaskForm)
/* harmony export */ });
/* harmony import */ var _createProjectSelector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createProjectSelector */ "./src/createProjectSelector.js");
/* harmony import */ var _initEventListeners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initEventListeners */ "./src/initEventListeners.js");



function createTaskForm() {
    let taskFormDiv = document.createElement('div');
    taskFormDiv.classList.add('task-form');

    let taskTitleInput = document.createElement('input');
    taskTitleInput.classList.add('form-input');
    taskTitleInput.id = 'title-input';
    taskTitleInput.placeholder = "Title";
    taskTitleInput.type = 'text';
    taskFormDiv.appendChild(taskTitleInput);

    let taskDueInput = document.createElement('input');
    taskDueInput.classList.add('form-input');
    taskDueInput.id = 'due-input';
    taskDueInput.type = 'date';
    taskFormDiv.appendChild(taskDueInput);

    let taskDescriptionInput = document.createElement('input');
    taskDescriptionInput.type = 'text';
    taskDescriptionInput.id = 'desc-input';
    taskDescriptionInput.classList.add('form-input');
    taskDescriptionInput.placeholder = "Description";
    taskFormDiv.appendChild(taskDescriptionInput);

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

    taskFormDiv.appendChild(taskPriorityInput);

    let taskProjectInput = (0,_createProjectSelector__WEBPACK_IMPORTED_MODULE_0__.createProjectSelector)();
    taskProjectInput.id = 'project-input';
    taskFormDiv.appendChild(taskProjectInput);


    let taskCreateButton = document.createElement('button');
    taskCreateButton.innerHTML = "Create";
    taskCreateButton.id = "create-task-button";
    taskCreateButton.classList.add("button");
    taskFormDiv.appendChild(taskCreateButton);

    let switchToProjectButton = document.createElement('button');
    switchToProjectButton.innerHTML = "Create a project";
    switchToProjectButton.id = "switch-to-project";
    switchToProjectButton.addEventListener('click',_initEventListeners__WEBPACK_IMPORTED_MODULE_1__.addSwitchToProjectForm)
    switchToProjectButton.classList.add("button");
    taskFormDiv.appendChild(switchToProjectButton);

    return taskFormDiv;
}

function createProjectForm() {
    let projectForm = document.querySelector('div');
    projectForm.classList.add('project-form');

    let projectNameInput = document.createElement('input');
    projectNameInput.classList.add('form-input');
    projectNameInput.id = 'pName-input';
    projectNameInput.placeholder = "Project Name";
    projectNameInput.type = 'text';
    taskFormDiv.appendChild(projectNameInput);

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

    taskFormDiv.appendChild(projectColorInput);

    let projectCreateButton = document.createElement('button');
    projectCreateButton.innerHTML = "Create";
    projectCreateButton.id = "create-project-button";
    projectCreateButton.classList.add("button");
    taskFormDiv.appendChild(projectCreateButton);

    let switchToTask = document.createElement('button');
    switchToTask.innerHTML = "Create Task";
    switchToTask.id = "switch-to-task";
    switchToTask.classList.add('button');
    switchToTask.addEventListener('click',_initEventListeners__WEBPACK_IMPORTED_MODULE_1__.addSwitchToTaskForm);
    taskFormDiv.appendChild(switchToTask);

    return projectForm;
}



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
/* harmony export */   addSwitchToProjectForm: () => (/* binding */ addSwitchToProjectForm),
/* harmony export */   addSwitchToTaskForm: () => (/* binding */ addSwitchToTaskForm),
/* harmony export */   initHomePageListener: () => (/* binding */ initHomePageListener),
/* harmony export */   updateHomePageListener: () => (/* binding */ updateHomePageListener)
/* harmony export */ });
/* harmony import */ var _updatePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updatePage */ "./src/updatePage.js");
/* harmony import */ var _taskFunctionality__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskFunctionality */ "./src/taskFunctionality.js");
/* harmony import */ var _dyanmicForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dyanmicForm */ "./src/dyanmicForm.js");




function addSelectEventListner() {
    const getTaskButton = document.querySelector('#selector-button');
    getTaskButton.addEventListener('click', _updatePage__WEBPACK_IMPORTED_MODULE_0__.updateTodoPage);
}

function addDeleteTaskEventListener() {
    const delButtons = Array.from(document.querySelectorAll('#task-del-button'));
    for(let i=0;i<delButtons.length;i++) {
        delButtons[i].addEventListener('click',_taskFunctionality__WEBPACK_IMPORTED_MODULE_1__.deleteTask);
    }   
}

function addCompleteTaskEventListener() {
    const completeButtons = Array.from(document.querySelectorAll('#task-comp-button'));
    for(let i=0;i<completeButtons.length;i++) {
        completeButtons[i].addEventListener('click',_taskFunctionality__WEBPACK_IMPORTED_MODULE_1__.taskComplete);
    }
}

function addSwitchToProjectForm() {
      const switchToProjectButton = document.querySelector('#switch-to-project');
      console.log(switchToProjectButton);
      switchToProjectButton.addEventListener('click',_updatePage__WEBPACK_IMPORTED_MODULE_0__.updateTopDivForm);
}

function addSwitchToTaskForm() {
    const switchToTaskButton = document.querySelector('#switch-to-task');
    switchToTaskButton.addEventListener('click',_updatePage__WEBPACK_IMPORTED_MODULE_0__.updateTopDivForm)
    console.log("Test");
}

function addTaskEventListener() {
    const createTaskButton = document.querySelector('#create-task-button');
    createTaskButton.addEventListener('click',_taskFunctionality__WEBPACK_IMPORTED_MODULE_1__.addNewTask);
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



/***/ }),

/***/ "./src/init_page.js":
/*!**************************!*\
  !*** ./src/init_page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   init_page: () => (/* binding */ init_page)
/* harmony export */ });
/* harmony import */ var _createProjectSelector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createProjectSelector */ "./src/createProjectSelector.js");
/* harmony import */ var _dyanmicForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dyanmicForm */ "./src/dyanmicForm.js");
/* harmony import */ var _initEventListeners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./initEventListeners */ "./src/initEventListeners.js");
/* harmony import */ var _updatePage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./updatePage */ "./src/updatePage.js");





function loadTaskInputForm() {
    let topDiv = document.createElement('div');
    topDiv.classList.add('.top-div');
    return topDiv;
}



function loadProjectSelector() {
    let projectSelectorDiv = document.createElement('div');
    projectSelectorDiv.classList.add('project-selector-div');
    
    let projectSelector = (0,_createProjectSelector__WEBPACK_IMPORTED_MODULE_0__.createProjectSelector)();
    projectSelector.id = "list-project-selector";
    projectSelectorDiv.appendChild(projectSelector);

    let selectorButton = document.createElement('button');
    selectorButton.classList.add('button');
    selectorButton.id = "selector-button";
    selectorButton.innerHTML = "Select";
    projectSelectorDiv.appendChild(selectorButton);
    return projectSelectorDiv;
}

function initTodoUI() {
    let todoDiv = document.createElement('div');
    todoDiv.classList.add('todo-list');
    todoDiv.innerHTML = "No Chapter Selected";
    return todoDiv;
}

function init_page() {
    const contentDiv = document.querySelector('.content');
    contentDiv.appendChild(loadTaskInputForm());
    (0,_updatePage__WEBPACK_IMPORTED_MODULE_3__.initTopDivForm)();
    contentDiv.appendChild(loadProjectSelector());
    contentDiv.appendChild(initTodoUI());
    (0,_initEventListeners__WEBPACK_IMPORTED_MODULE_2__.initHomePageListener)();
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
/* harmony export */   initTopDivForm: () => (/* binding */ initTopDivForm),
/* harmony export */   updateTodoPage: () => (/* binding */ updateTodoPage),
/* harmony export */   updateTopDivForm: () => (/* binding */ updateTopDivForm)
/* harmony export */ });
/* harmony import */ var _todoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoList */ "./src/todoList.js");
/* harmony import */ var _createTodoElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTodoElement */ "./src/createTodoElement.js");
/* harmony import */ var _initEventListeners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./initEventListeners */ "./src/initEventListeners.js");
/* harmony import */ var _dyanmicForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dyanmicForm */ "./src/dyanmicForm.js");





function updateTodoPage() {
    const todoDiv = document.querySelector('.todo-list');


    todoDiv.innerHTML = "";
    const projectSelector = document.querySelector('#list-project-selector');
    
    const selectedProjectTasks = Array.from(_todoList__WEBPACK_IMPORTED_MODULE_0__.taskListInstance.getTasksOfProject(projectSelector.value));
    for(let i=0;i<selectedProjectTasks.length;i++) {
        let newTask = (0,_createTodoElement__WEBPACK_IMPORTED_MODULE_1__.createNewTaskDisplay)(selectedProjectTasks[i]);
        todoDiv.appendChild(newTask);
    }
    (0,_initEventListeners__WEBPACK_IMPORTED_MODULE_2__.updateHomePageListener)();
}

function initTopDivForm() {
    let topDiv = document.querySelector('.top-div');
    topDiv.innerHTML = "";  
    topDiv.appendChild((0,_dyanmicForm__WEBPACK_IMPORTED_MODULE_3__.createTaskForm)());
}

function updateTopDivForm() {
    let trigger = 0;

    let topDiv = document.querySelector('.top-div');
    topDiv.innerHTML = "";  
    if(trigger == 0) {
        topDiv.appendChild((0,_dyanmicForm__WEBPACK_IMPORTED_MODULE_3__.createTaskForm)());
        trigger = 1;
    } else {
        topDiv.appendChild((0,_dyanmicForm__WEBPACK_IMPORTED_MODULE_3__.createProjectForm)());
    }
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
/* harmony import */ var _init_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./init_page */ "./src/init_page.js");










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

(0,_init_page__WEBPACK_IMPORTED_MODULE_4__.init_page)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dUIsNERBQWM7QUFDckM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsNERBQWM7QUFDekM7QUFDQSxNQUFNO0FBQ04sMkJBQTJCLCtEQUFpQjtBQUM1QztBQUNBOzs7Ozs7OztVQ3JDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ051QztBQUNNO0FBQ0M7QUFDTTtBQUNaOzs7Ozs7QUFNeEMsV0FBVywwREFBZ0IsQ0FBQyw2REFBbUI7QUFDL0MsNkRBQW1COztBQUVuQixXQUFXLDBEQUFnQixDQUFDLDZEQUFtQjtBQUMvQyw2REFBbUI7QUFDbkIsWUFBWSw2REFBbUI7Ozs7OztBQU0vQixXQUFXLG9EQUFhLHFCQUFxQix1REFBZ0I7QUFDN0QsdURBQWdCO0FBQ2hCLFdBQVcsb0RBQWEscUJBQXFCLHVEQUFnQjtBQUM3RCx1REFBZ0I7O0FBRWhCLFlBQVksdURBQWdCOztBQUU1QixZQUFZLHVEQUFnQjs7QUFFNUIscURBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvY3JlYXRlUHJvamVjdFNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy9jcmVhdGVUYXNrRnJvbUlucHV0LmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy9jcmVhdGVUb2RvRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvZHlhbm1pY0Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL2Vycm9ySGFuZGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvaW5pdEV2ZW50TGlzdGVuZXJzLmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy9pbml0X3BhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL3Byb2plY3RMaXN0LmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy90YXNrRnVuY3Rpb25hbGl0eS5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvdG9kb0xpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL3VwZGF0ZVBhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHByb2plY3RMaXN0SW5zdGFuY2UgfSBmcm9tIFwiLi9wcm9qZWN0TGlzdFwiO1xuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0U2VsZWN0b3IoKSB7XG4gICAgbGV0IHByb2plY3RTZWxlY3RvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIHByb2plY3RTZWxlY3Rvci5jbGFzc0xpc3QuYWRkKCdzZWxlY3RvcicpO1xuICAgIHByb2plY3RTZWxlY3Rvci5uYW1lID0gXCJwcm9qZWN0LXNlbGVjdG9yXCI7XG5cbiAgICBjb25zdCBwcm9qZWN0cyA9IEFycmF5LmZyb20ocHJvamVjdExpc3RJbnN0YW5jZS5nZXRQcm9qZWN0TGlzdCgpKTtcbiAgICBmb3IobGV0IGk9MDsgaTxwcm9qZWN0cy5sZW5ndGg7aSsrKSB7XG4gICAgICAgIGxldCBwcm9qZWN0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIHByb2plY3RPcHRpb24udmFsdWUgPSBwcm9qZWN0c1tpXS5nZXRQcm9qZWN0TmFtZSgpO1xuICAgICAgICBwcm9qZWN0T3B0aW9uLmlubmVySFRNTCA9IHByb2plY3RzW2ldLmdldFByb2plY3ROYW1lKCk7XG4gICAgICAgIHByb2plY3RTZWxlY3Rvci5hcHBlbmRDaGlsZChwcm9qZWN0T3B0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvamVjdFNlbGVjdG9yO1xufVxuXG5leHBvcnQge2NyZWF0ZVByb2plY3RTZWxlY3Rvcn07IiwiaW1wb3J0IHsgY3JlYXRlTmV3VG9EbyB9IGZyb20gXCIuL3RvZG9cIjtcblxuZnVuY3Rpb24gZ2V0VGl0bGVGcm9tSW5wdXQoKSB7XG4gICAgY29uc3QgdGl0bGVWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZS1pbnB1dCcpLnZhbHVlO1xuICAgIHJldHVybiB0aXRsZVZhbHVlO1xufVxuXG5mdW5jdGlvbiBnZXREdWUoKSB7XG4gICAgY29uc3QgZHVlVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHVlLWlucHV0JykudmFsdWU7XG4gICAgcmV0dXJuIGR1ZVZhbHVlO1xufVxuXG5mdW5jdGlvbiBnZXREZXNjKCkge1xuICAgIGNvbnN0IGRlc2NWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjLWlucHV0JykudmFsdWU7XG4gICAgcmV0dXJuIGRlc2NWYWx1ZTtcbn1cblxuZnVuY3Rpb24gZ2V0UHJpb3JpdHkoKSB7XG4gICAgY29uc3QgcHJpb3JpdHlWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eS1pbnB1dCcpLnZhbHVlO1xuICAgIHJldHVybiBwcmlvcml0eVZhbHVlO1xufVxuXG5mdW5jdGlvbiBnZXRQcm9qZWN0KCkge1xuICAgIGNvbnN0IHByb2plY3RWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWlucHV0JykudmFsdWU7XG4gICAgcmV0dXJuIHByb2plY3RWYWx1ZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFza0Zyb21JbnB1dCh1aWQpIHtcbiAgICBjb25zdCBuZXdUYXNrID0gY3JlYXRlTmV3VG9EbyhnZXRQcm9qZWN0KCksdWlkLGdldFRpdGxlRnJvbUlucHV0KCksZ2V0RHVlKCksZ2V0RGVzYygpLGdldFByaW9yaXR5KCksZmFsc2UpO1xuICAgIHJldHVybiBuZXdUYXNrO1xufVxuXG5leHBvcnQge2NyZWF0ZVRhc2tGcm9tSW5wdXR9OyIsImZ1bmN0aW9uIGNyZWF0ZVRhc2tUaXRsZVVJKHRhc2tUaXRsZSkge1xuICAgIGxldCBuZXdUYXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdUYXNrVGl0bGUuaW5uZXJIVE1MID0gdGFza1RpdGxlO1xuICAgIHJldHVybiBuZXdUYXNrVGl0bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tEdWVVSSh0YXNrRHVlRGF0ZSkge1xuICAgIGxldCBuZXdUYXNrRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld1Rhc2tEdWVEYXRlLmlubmVySFRNTCA9IHRhc2tEdWVEYXRlO1xuICAgIHJldHVybiBuZXdUYXNrRHVlRGF0ZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFza0Rlc2NyaXB0aW9uKHRhc2tEZXNjcmlwdGlvbikge1xuICAgIGxldCBuZXdUYXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdUYXNrRGVzY3JpcHRpb24uaW5uZXJIVE1MID0gdGFza0Rlc2NyaXB0aW9uO1xuICAgIHJldHVybiBuZXdUYXNrRGVzY3JpcHRpb247XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tQcmlvcml0eSh0YXNrUHJpb3JpdHkpIHtcbiAgICBsZXQgbmV3VGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaWYodGFza1ByaW9yaXR5ID09IDEpIHtcbiAgICAgICAgbmV3VGFza1ByaW9yaXR5LmlubmVySFRNTCA9IFwiSGlnaFwiO1xuICAgIH0gZWxzZSBpZih0YXNrUHJpb3JpdHkgPT0gMikge1xuICAgICAgICBuZXdUYXNrUHJpb3JpdHkuaW5uZXJIVE1MID0gXCJNZWRpdW1cIjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBuZXdUYXNrUHJpb3JpdHkuaW5uZXJIVE1MID0gXCJMb3dcIjtcbiAgICB9XG4gICAgcmV0dXJuIG5ld1Rhc2tQcmlvcml0eTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFza0J1dHRvbkdyb3VwKHVpZCkge1xuICAgIGxldCBuZXdUYXNrQnV0dG9uR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBcbiAgICBsZXQgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZGVsZXRlQnV0dG9uLmlkID0gXCJ0YXNrLWRlbC1idXR0b25cIjtcbiAgICBkZWxldGVCdXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLWlkJyx1aWQpO1xuICAgIGRlbGV0ZUJ1dHRvbi5pbm5lckhUTUwgPSBcIkRlbGV0ZVwiO1xuICAgIG5ld1Rhc2tCdXR0b25Hcm91cC5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuXG4gICAgbGV0IGNvbXBsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29tcGxldGVCdXR0b24uaW5uZXJIVE1MID0gXCJDb21wbGV0ZVwiO1xuICAgIGNvbXBsZXRlQnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsdWlkKTtcbiAgICBjb21wbGV0ZUJ1dHRvbi5pZCA9IFwidGFzay1jb21wLWJ1dHRvblwiO1xuICAgIG5ld1Rhc2tCdXR0b25Hcm91cC5hcHBlbmRDaGlsZChjb21wbGV0ZUJ1dHRvbik7XG5cbiAgICByZXR1cm4gbmV3VGFza0J1dHRvbkdyb3VwO1xufVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld1Rhc2tEaXNwbGF5KHRhc2spIHtcbiAgICBsZXQgbmV3VGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBcbiAgICBjb25zdCBuZXdUYXNrVGl0bGUgPSBjcmVhdGVUYXNrVGl0bGVVSSh0YXNrLmdldFRpdGxlKCkpO1xuICAgIG5ld1Rhc2suYXBwZW5kQ2hpbGQobmV3VGFza1RpdGxlKTtcbiAgICBcbiAgICBjb25zdCBuZXdUYXNrRHVlRGF0ZSA9IGNyZWF0ZVRhc2tEdWVVSSh0YXNrLmdldER1ZURhdGUoKSk7XG4gICAgbmV3VGFzay5hcHBlbmRDaGlsZChuZXdUYXNrRHVlRGF0ZSk7XG5cbiAgICBjb25zdCBuZXdUYXNrRGVzY3JpcHRpb24gPSBjcmVhdGVUYXNrRGVzY3JpcHRpb24odGFzay5nZXREZXNjcmlwdGlvbigpKTtcbiAgICBuZXdUYXNrLmFwcGVuZENoaWxkKG5ld1Rhc2tEZXNjcmlwdGlvbik7XG5cbiAgICBjb25zdCBuZXdUYXNrUHJpb3JpdHkgPSBjcmVhdGVUYXNrUHJpb3JpdHkodGFzay5nZXRQcmlvcml0eSgpKTtcbiAgICBuZXdUYXNrLmFwcGVuZENoaWxkKG5ld1Rhc2tQcmlvcml0eSk7XG5cbiAgICBpZih0YXNrLmdldElzQ29tcGxldGUoKSA9PSB0cnVlKSB7XG4gICAgICAgIG5ld1Rhc2suc3R5bGUuY29sb3IgPSBcInJlZFwiO1xuICAgIH1cblxuICAgIGNvbnN0IGJ1dHRvbkdyb3VwID0gY3JlYXRlVGFza0J1dHRvbkdyb3VwKHRhc2suZ2V0VUlEKCkpO1xuICAgIG5ld1Rhc2suYXBwZW5kQ2hpbGQoYnV0dG9uR3JvdXApO1xuXG4gICAgcmV0dXJuIG5ld1Rhc2s7XG59XG5cbmV4cG9ydCB7Y3JlYXRlTmV3VGFza0Rpc3BsYXl9OyIsImltcG9ydCB7IGNyZWF0ZVByb2plY3RTZWxlY3RvciB9IGZyb20gXCIuL2NyZWF0ZVByb2plY3RTZWxlY3RvclwiO1xuaW1wb3J0IHsgYWRkU3dpdGNoVG9Qcm9qZWN0Rm9ybSwgYWRkU3dpdGNoVG9UYXNrRm9ybSB9IGZyb20gXCIuL2luaXRFdmVudExpc3RlbmVyc1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVUYXNrRm9ybSgpIHtcbiAgICBsZXQgdGFza0Zvcm1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrRm9ybURpdi5jbGFzc0xpc3QuYWRkKCd0YXNrLWZvcm0nKTtcblxuICAgIGxldCB0YXNrVGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdGFza1RpdGxlSW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1pbnB1dCcpO1xuICAgIHRhc2tUaXRsZUlucHV0LmlkID0gJ3RpdGxlLWlucHV0JztcbiAgICB0YXNrVGl0bGVJbnB1dC5wbGFjZWhvbGRlciA9IFwiVGl0bGVcIjtcbiAgICB0YXNrVGl0bGVJbnB1dC50eXBlID0gJ3RleHQnO1xuICAgIHRhc2tGb3JtRGl2LmFwcGVuZENoaWxkKHRhc2tUaXRsZUlucHV0KTtcblxuICAgIGxldCB0YXNrRHVlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRhc2tEdWVJbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWlucHV0Jyk7XG4gICAgdGFza0R1ZUlucHV0LmlkID0gJ2R1ZS1pbnB1dCc7XG4gICAgdGFza0R1ZUlucHV0LnR5cGUgPSAnZGF0ZSc7XG4gICAgdGFza0Zvcm1EaXYuYXBwZW5kQ2hpbGQodGFza0R1ZUlucHV0KTtcblxuICAgIGxldCB0YXNrRGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdGFza0Rlc2NyaXB0aW9uSW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICB0YXNrRGVzY3JpcHRpb25JbnB1dC5pZCA9ICdkZXNjLWlucHV0JztcbiAgICB0YXNrRGVzY3JpcHRpb25JbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWlucHV0Jyk7XG4gICAgdGFza0Rlc2NyaXB0aW9uSW5wdXQucGxhY2Vob2xkZXIgPSBcIkRlc2NyaXB0aW9uXCI7XG4gICAgdGFza0Zvcm1EaXYuYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uSW5wdXQpO1xuXG4gICAgbGV0IHRhc2tQcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgdGFza1ByaW9yaXR5SW5wdXQuaWQgPSAncHJpb3JpdHktaW5wdXQnO1xuICAgIHRhc2tQcmlvcml0eUlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0taW5wdXQnKTtcbiAgICBcbiAgICBsZXQgdGFza1ByaW9yaXR5T3B0aW9uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIHRhc2tQcmlvcml0eU9wdGlvbjEudmFsdWUgPSAxO1xuICAgIHRhc2tQcmlvcml0eU9wdGlvbjEuaW5uZXJIVE1MID0gXCJIaWdoXCI7XG4gICAgdGFza1ByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5T3B0aW9uMSk7XG5cbiAgICBsZXQgdGFza1ByaW9yaXR5T3B0aW9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIHRhc2tQcmlvcml0eU9wdGlvbjIudmFsdWUgPSAyO1xuICAgIHRhc2tQcmlvcml0eU9wdGlvbjIuaW5uZXJIVE1MID0gXCJNZWRpdW1cIjtcbiAgICB0YXNrUHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHlPcHRpb24yKTtcblxuICAgIGxldCB0YXNrUHJpb3JpdHlPcHRpb24zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgdGFza1ByaW9yaXR5T3B0aW9uMy52YWx1ZSA9IDM7XG4gICAgdGFza1ByaW9yaXR5T3B0aW9uMy5pbm5lckhUTUwgPSBcIkxvd1wiO1xuICAgIHRhc2tQcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eU9wdGlvbjMpO1xuXG4gICAgdGFza0Zvcm1EaXYuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5SW5wdXQpO1xuXG4gICAgbGV0IHRhc2tQcm9qZWN0SW5wdXQgPSBjcmVhdGVQcm9qZWN0U2VsZWN0b3IoKTtcbiAgICB0YXNrUHJvamVjdElucHV0LmlkID0gJ3Byb2plY3QtaW5wdXQnO1xuICAgIHRhc2tGb3JtRGl2LmFwcGVuZENoaWxkKHRhc2tQcm9qZWN0SW5wdXQpO1xuXG5cbiAgICBsZXQgdGFza0NyZWF0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHRhc2tDcmVhdGVCdXR0b24uaW5uZXJIVE1MID0gXCJDcmVhdGVcIjtcbiAgICB0YXNrQ3JlYXRlQnV0dG9uLmlkID0gXCJjcmVhdGUtdGFzay1idXR0b25cIjtcbiAgICB0YXNrQ3JlYXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJidXR0b25cIik7XG4gICAgdGFza0Zvcm1EaXYuYXBwZW5kQ2hpbGQodGFza0NyZWF0ZUJ1dHRvbik7XG5cbiAgICBsZXQgc3dpdGNoVG9Qcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc3dpdGNoVG9Qcm9qZWN0QnV0dG9uLmlubmVySFRNTCA9IFwiQ3JlYXRlIGEgcHJvamVjdFwiO1xuICAgIHN3aXRjaFRvUHJvamVjdEJ1dHRvbi5pZCA9IFwic3dpdGNoLXRvLXByb2plY3RcIjtcbiAgICBzd2l0Y2hUb1Byb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGFkZFN3aXRjaFRvUHJvamVjdEZvcm0pXG4gICAgc3dpdGNoVG9Qcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJidXR0b25cIik7XG4gICAgdGFza0Zvcm1EaXYuYXBwZW5kQ2hpbGQoc3dpdGNoVG9Qcm9qZWN0QnV0dG9uKTtcblxuICAgIHJldHVybiB0YXNrRm9ybURpdjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdEZvcm0oKSB7XG4gICAgbGV0IHByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2Jyk7XG4gICAgcHJvamVjdEZvcm0uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1mb3JtJyk7XG5cbiAgICBsZXQgcHJvamVjdE5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgcHJvamVjdE5hbWVJbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWlucHV0Jyk7XG4gICAgcHJvamVjdE5hbWVJbnB1dC5pZCA9ICdwTmFtZS1pbnB1dCc7XG4gICAgcHJvamVjdE5hbWVJbnB1dC5wbGFjZWhvbGRlciA9IFwiUHJvamVjdCBOYW1lXCI7XG4gICAgcHJvamVjdE5hbWVJbnB1dC50eXBlID0gJ3RleHQnO1xuICAgIHRhc2tGb3JtRGl2LmFwcGVuZENoaWxkKHByb2plY3ROYW1lSW5wdXQpO1xuXG4gICAgbGV0IHByb2plY3RDb2xvcklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgcHJvamVjdENvbG9ySW5wdXQuaWQgPSAncENvbG9yLWlucHV0JztcbiAgICBwcm9qZWN0Q29sb3JJbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWlucHV0Jyk7XG4gICAgXG4gICAgbGV0IHBjbzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBwY28xLnZhbHVlID0gXCJibHVlXCI7XG4gICAgcGNvMS5pbm5lckhUTUwgPSBcIkJsdWVcIjtcbiAgICBwcm9qZWN0Q29sb3JJbnB1dC5hcHBlbmRDaGlsZChwY28xKTtcblxuICAgIGxldCBwY28yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgcGNvMi52YWx1ZSA9IFwiZ3JlZW5cIjtcbiAgICBwY28yLmlubmVySFRNTCA9IFwiR3JlZW5cIjtcbiAgICBwcm9qZWN0Q29sb3JJbnB1dC5hcHBlbmRDaGlsZChwY28yKTtcblxuICAgIGxldCBwY28zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgcGNvMy52YWx1ZSA9IFwicmVkXCI7XG4gICAgcGNvMy5pbm5lckhUTUwgPSBcIlJlZFwiO1xuICAgIHByb2plY3RDb2xvcklucHV0LmFwcGVuZENoaWxkKHBjbzMpO1xuXG4gICAgdGFza0Zvcm1EaXYuYXBwZW5kQ2hpbGQocHJvamVjdENvbG9ySW5wdXQpO1xuXG4gICAgbGV0IHByb2plY3RDcmVhdGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBwcm9qZWN0Q3JlYXRlQnV0dG9uLmlubmVySFRNTCA9IFwiQ3JlYXRlXCI7XG4gICAgcHJvamVjdENyZWF0ZUJ1dHRvbi5pZCA9IFwiY3JlYXRlLXByb2plY3QtYnV0dG9uXCI7XG4gICAgcHJvamVjdENyZWF0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uXCIpO1xuICAgIHRhc2tGb3JtRGl2LmFwcGVuZENoaWxkKHByb2plY3RDcmVhdGVCdXR0b24pO1xuXG4gICAgbGV0IHN3aXRjaFRvVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHN3aXRjaFRvVGFzay5pbm5lckhUTUwgPSBcIkNyZWF0ZSBUYXNrXCI7XG4gICAgc3dpdGNoVG9UYXNrLmlkID0gXCJzd2l0Y2gtdG8tdGFza1wiO1xuICAgIHN3aXRjaFRvVGFzay5jbGFzc0xpc3QuYWRkKCdidXR0b24nKTtcbiAgICBzd2l0Y2hUb1Rhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGFkZFN3aXRjaFRvVGFza0Zvcm0pO1xuICAgIHRhc2tGb3JtRGl2LmFwcGVuZENoaWxkKHN3aXRjaFRvVGFzayk7XG5cbiAgICByZXR1cm4gcHJvamVjdEZvcm07XG59XG5cbmV4cG9ydCB7Y3JlYXRlVGFza0Zvcm0sIGNyZWF0ZVByb2plY3RGb3JtfTsiLCJjbGFzcyB0YXNrRXJyb3JzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIH1cblxuICAgIG5vdFRhc2tFcnJvcigpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJUcmllZCBpbnNlcnRpbmcgYW4gaXRlbSB0aGF0IHdhcyBub3QgY2xhc3MgdG9kbyBpbnRvIHRoZSB0YXNrIGxpc3RcIik7XG4gICAgfVxuXG4gICAgdGFza05vdEZvdW5kKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInRhc2sgd2l0aCB0aGUgcmVxdWlyZWQgVUlEIG5vdCBmb3VuZFwiKTtcbiAgICB9XG5cbiAgICB3cm9uZ0lzQ29tcGxldGVJRCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ3cm9uZyBkYXRhIHZhbHVlIGhhcyBiZWVuIHByb3ZpZGVkIHRvIHNldCB0aGUgaXMgY29tcGxldGUgZm9yIGEgdGFza1wiKVxuICAgIH1cbn1cblxuY2xhc3MgcHJvamVjdEVycm9ycyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB9XG5cbiAgICBub3RQcm9qZWN0RXJyb3IoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVHJpZWQgaW5zZXJ0aW5nIGFuIGl0ZW0gdGhhdCB3YXMgbm90IGEgcHJvamVjdCBpbnRvIHByb2plY3QgbGlzdFwiKTtcbiAgICB9XG59XG5cbmNvbnN0IHRhc2tFcnJvck9iamVjdCA9IG5ldyB0YXNrRXJyb3JzO1xuY29uc3QgcHJvamVjdEVycm9yT2JqZWN0ID0gbmV3IHByb2plY3RFcnJvcnNcblxuZXhwb3J0IHt0YXNrRXJyb3JPYmplY3QsIHByb2plY3RFcnJvck9iamVjdH07IiwiaW1wb3J0IHsgdXBkYXRlVG9kb1BhZ2UsIHVwZGF0ZVRvcERpdkZvcm0gfSBmcm9tIFwiLi91cGRhdGVQYWdlXCI7XG5pbXBvcnQgeyBhZGROZXdUYXNrLCBkZWxldGVUYXNrLCB0YXNrQ29tcGxldGUgfSBmcm9tIFwiLi90YXNrRnVuY3Rpb25hbGl0eVwiO1xuaW1wb3J0IHsgY3JlYXRlUHJvamVjdEZvcm0sIGNyZWF0ZVRhc2tGb3JtIH0gZnJvbSBcIi4vZHlhbm1pY0Zvcm1cIjtcblxuZnVuY3Rpb24gYWRkU2VsZWN0RXZlbnRMaXN0bmVyKCkge1xuICAgIGNvbnN0IGdldFRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VsZWN0b3ItYnV0dG9uJyk7XG4gICAgZ2V0VGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHVwZGF0ZVRvZG9QYWdlKTtcbn1cblxuZnVuY3Rpb24gYWRkRGVsZXRlVGFza0V2ZW50TGlzdGVuZXIoKSB7XG4gICAgY29uc3QgZGVsQnV0dG9ucyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3Rhc2stZGVsLWJ1dHRvbicpKTtcbiAgICBmb3IobGV0IGk9MDtpPGRlbEJ1dHRvbnMubGVuZ3RoO2krKykge1xuICAgICAgICBkZWxCdXR0b25zW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxkZWxldGVUYXNrKTtcbiAgICB9ICAgXG59XG5cbmZ1bmN0aW9uIGFkZENvbXBsZXRlVGFza0V2ZW50TGlzdGVuZXIoKSB7XG4gICAgY29uc3QgY29tcGxldGVCdXR0b25zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjdGFzay1jb21wLWJ1dHRvbicpKTtcbiAgICBmb3IobGV0IGk9MDtpPGNvbXBsZXRlQnV0dG9ucy5sZW5ndGg7aSsrKSB7XG4gICAgICAgIGNvbXBsZXRlQnV0dG9uc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsdGFza0NvbXBsZXRlKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGFkZFN3aXRjaFRvUHJvamVjdEZvcm0oKSB7XG4gICAgICBjb25zdCBzd2l0Y2hUb1Byb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3dpdGNoLXRvLXByb2plY3QnKTtcbiAgICAgIGNvbnNvbGUubG9nKHN3aXRjaFRvUHJvamVjdEJ1dHRvbik7XG4gICAgICBzd2l0Y2hUb1Byb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLHVwZGF0ZVRvcERpdkZvcm0pO1xufVxuXG5mdW5jdGlvbiBhZGRTd2l0Y2hUb1Rhc2tGb3JtKCkge1xuICAgIGNvbnN0IHN3aXRjaFRvVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzd2l0Y2gtdG8tdGFzaycpO1xuICAgIHN3aXRjaFRvVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsdXBkYXRlVG9wRGl2Rm9ybSlcbiAgICBjb25zb2xlLmxvZyhcIlRlc3RcIik7XG59XG5cbmZ1bmN0aW9uIGFkZFRhc2tFdmVudExpc3RlbmVyKCkge1xuICAgIGNvbnN0IGNyZWF0ZVRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlLXRhc2stYnV0dG9uJyk7XG4gICAgY3JlYXRlVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsYWRkTmV3VGFzayk7XG59XG5cbmZ1bmN0aW9uIGluaXRIb21lUGFnZUxpc3RlbmVyKCkge1xuICAgIGFkZFNlbGVjdEV2ZW50TGlzdG5lcigpO1xuICAgIGFkZFRhc2tFdmVudExpc3RlbmVyKCk7XG4gICAgYWRkU3dpdGNoVG9Qcm9qZWN0Rm9ybSgpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVIb21lUGFnZUxpc3RlbmVyKCkge1xuICAgIGFkZERlbGV0ZVRhc2tFdmVudExpc3RlbmVyKCk7XG4gICAgYWRkQ29tcGxldGVUYXNrRXZlbnRMaXN0ZW5lcigpO1xufVxuXG5leHBvcnQge2luaXRIb21lUGFnZUxpc3RlbmVyLCB1cGRhdGVIb21lUGFnZUxpc3RlbmVyLCBhZGRTd2l0Y2hUb1Rhc2tGb3JtLCBhZGRTd2l0Y2hUb1Byb2plY3RGb3JtfTsiLCJpbXBvcnQgeyBjcmVhdGVQcm9qZWN0U2VsZWN0b3IgfSBmcm9tIFwiLi9jcmVhdGVQcm9qZWN0U2VsZWN0b3JcIjtcbmltcG9ydCB7IGNyZWF0ZVRhc2tGb3JtLCBjcmVhdGVQcm9qZWN0Rm9ybSB9IGZyb20gXCIuL2R5YW5taWNGb3JtXCI7XG5pbXBvcnQgeyBpbml0SG9tZVBhZ2VMaXN0ZW5lciB9IGZyb20gXCIuL2luaXRFdmVudExpc3RlbmVyc1wiO1xuaW1wb3J0IHsgaW5pdFRvcERpdkZvcm0sIHVwZGF0ZVRvcERpdkZvcm0gfSBmcm9tIFwiLi91cGRhdGVQYWdlXCI7XG5cbmZ1bmN0aW9uIGxvYWRUYXNrSW5wdXRGb3JtKCkge1xuICAgIGxldCB0b3BEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b3BEaXYuY2xhc3NMaXN0LmFkZCgnLnRvcC1kaXYnKTtcbiAgICByZXR1cm4gdG9wRGl2O1xufVxuXG5cblxuZnVuY3Rpb24gbG9hZFByb2plY3RTZWxlY3RvcigpIHtcbiAgICBsZXQgcHJvamVjdFNlbGVjdG9yRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdFNlbGVjdG9yRGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3Qtc2VsZWN0b3ItZGl2Jyk7XG4gICAgXG4gICAgbGV0IHByb2plY3RTZWxlY3RvciA9IGNyZWF0ZVByb2plY3RTZWxlY3RvcigpO1xuICAgIHByb2plY3RTZWxlY3Rvci5pZCA9IFwibGlzdC1wcm9qZWN0LXNlbGVjdG9yXCI7XG4gICAgcHJvamVjdFNlbGVjdG9yRGl2LmFwcGVuZENoaWxkKHByb2plY3RTZWxlY3Rvcik7XG5cbiAgICBsZXQgc2VsZWN0b3JCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzZWxlY3RvckJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b24nKTtcbiAgICBzZWxlY3RvckJ1dHRvbi5pZCA9IFwic2VsZWN0b3ItYnV0dG9uXCI7XG4gICAgc2VsZWN0b3JCdXR0b24uaW5uZXJIVE1MID0gXCJTZWxlY3RcIjtcbiAgICBwcm9qZWN0U2VsZWN0b3JEaXYuYXBwZW5kQ2hpbGQoc2VsZWN0b3JCdXR0b24pO1xuICAgIHJldHVybiBwcm9qZWN0U2VsZWN0b3JEaXY7XG59XG5cbmZ1bmN0aW9uIGluaXRUb2RvVUkoKSB7XG4gICAgbGV0IHRvZG9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvRGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG8tbGlzdCcpO1xuICAgIHRvZG9EaXYuaW5uZXJIVE1MID0gXCJObyBDaGFwdGVyIFNlbGVjdGVkXCI7XG4gICAgcmV0dXJuIHRvZG9EaXY7XG59XG5cbmZ1bmN0aW9uIGluaXRfcGFnZSgpIHtcbiAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGxvYWRUYXNrSW5wdXRGb3JtKCkpO1xuICAgIGluaXRUb3BEaXZGb3JtKCk7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChsb2FkUHJvamVjdFNlbGVjdG9yKCkpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoaW5pdFRvZG9VSSgpKTtcbiAgICBpbml0SG9tZVBhZ2VMaXN0ZW5lcigpO1xufVxuXG5leHBvcnQge2luaXRfcGFnZX07IiwiY2xhc3MgcHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IodWlkLCBwcm9qZWN0TmFtZSwgcHJvamVjdENvbG9yKSB7XG4gICAgICAgIHRoaXMudWlkID0gdWlkO1xuICAgICAgICB0aGlzLnByb2plY3ROYW1lID0gcHJvamVjdE5hbWU7XG4gICAgICAgIHRoaXMucHJvamVjdENvbG9yID0gcHJvamVjdENvbG9yO1xuICAgIH1cblxuICAgIGdldFByb2plY3ROYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0TmFtZTtcbiAgICB9XG5cbiAgICBnZXRQcm9qZWN0Q29sb3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RDb2xvcjtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3QodWlkLHByb2plY3ROYW1lLCBwcm9qZWN0Q29sb3IpIHtcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IHByb2plY3QodWlkLCBwcm9qZWN0TmFtZSxwcm9qZWN0Q29sb3IpO1xuICAgIHJldHVybiBuZXdQcm9qZWN0O1xufVxuXG5mdW5jdGlvbiBjaGVja0lmUHJvamVjdChwKSB7XG4gICAgaWYocCBpbnN0YW5jZW9mIHByb2plY3QpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IHtjcmVhdGVOZXdQcm9qZWN0LCBjaGVja0lmUHJvamVjdH07IiwiaW1wb3J0IHsgY2hlY2tJZlByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgeyBwcm9qZWN0RXJyb3JPYmplY3QgfSBmcm9tIFwiLi9lcnJvckhhbmRsZXJcIjtcblxuY2xhc3MgcHJvamVjdExpc3Qge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnByb2plY3RMaXN0ID0gW107XG4gICAgICAgIHRoaXMucHJvamVjdENvdW50ZXIgPSAwO1xuICAgIH1cblxuICAgIHByb2plY3RMaXN0QXBwZW5kKHByb2plY3QpIHtcbiAgICAgICAgaWYoY2hlY2tJZlByb2plY3QocHJvamVjdCkpIHtcbiAgICAgICAgICAgIHRoaXMucHJvamVjdExpc3QucHVzaChwcm9qZWN0KTtcbiAgICAgICAgICAgIHRoaXMucHJvamVjdENvdW50ZXIrKztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb2plY3RFcnJvck9iamVjdC5ub3RQcm9qZWN0RXJyb3IoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFByb2plY3RMaXN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0TGlzdFxuICAgIH1cblxuICAgIGdldEN1cnJlbnRQcm9qZWN0Q291bnRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdENvdW50ZXI7XG4gICAgfVxufVxuXG5cbi8vTWFrZSBkZWxldGUgdGFza1xuXG5jb25zdCBwcm9qZWN0TGlzdEluc3RhbmNlID0gbmV3IHByb2plY3RMaXN0O1xuXG5leHBvcnQge3Byb2plY3RMaXN0SW5zdGFuY2V9OyIsImltcG9ydCB7IHRhc2tMaXN0SW5zdGFuY2UgfSBmcm9tIFwiLi90b2RvTGlzdFwiO1xuaW1wb3J0IHsgdXBkYXRlVG9kb1BhZ2UgfSBmcm9tIFwiLi91cGRhdGVQYWdlXCI7XG5pbXBvcnQgeyBjcmVhdGVUYXNrRnJvbUlucHV0IH0gZnJvbSBcIi4vY3JlYXRlVGFza0Zyb21JbnB1dFwiO1xuXG5cbmZ1bmN0aW9uIGFkZE5ld1Rhc2soKSB7XG4gICAgY29uc3QgdGFza1VJRCA9IHRhc2tMaXN0SW5zdGFuY2UuZ2V0Q3VycmVudENvdW50ZXIoKTtcbiAgICBjb25zdCBuZXdUYXNrID0gY3JlYXRlVGFza0Zyb21JbnB1dCh0YXNrVUlEKTtcbiAgICB0YXNrTGlzdEluc3RhbmNlLnRhc2tMaXN0QXBwZW5kKG5ld1Rhc2spO1xuICAgIHVwZGF0ZVRvZG9QYWdlKCk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVRhc2soZSkge1xuICAgIHRhc2tMaXN0SW5zdGFuY2UuZGVsZXRlVGFzayhlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7XG4gICAgdXBkYXRlVG9kb1BhZ2UoKTtcbn1cblxuZnVuY3Rpb24gdGFza0NvbXBsZXRlKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldCk7XG4gICAgdGFza0xpc3RJbnN0YW5jZS5zZXRDb21wbGV0ZShlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7XG4gICAgdXBkYXRlVG9kb1BhZ2UoKTtcbn1cblxuZXhwb3J0IHthZGROZXdUYXNrLGRlbGV0ZVRhc2ssIHRhc2tDb21wbGV0ZX0iLCJpbXBvcnQgeyB0YXNrRXJyb3JPYmplY3QgfSBmcm9tIFwiLi9lcnJvckhhbmRsZXJcIjtcblxuY2xhc3MgdG9kbyB7XG4gICAgY29uc3RydWN0b3IocHJvamVjdCwgdWlkLCB0aXRsZSwgZHVlZGF0ZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBpc0NvbXBsZXRlKSB7XG4gICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgICAgIHRoaXMudWlkID0gdWlkO1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZHVlZGF0ZSA9IGR1ZWRhdGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLmlzQ29tcGxldGUgPSBpc0NvbXBsZXRlXG4gICAgfVxuXG4gICAgZ2V0VUlEKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51aWQ7XG4gICAgfVxuXG4gICAgZ2V0VGl0bGUgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50aXRsZTtcbiAgICB9XG5cbiAgICBnZXREdWVEYXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kdWVkYXRlO1xuICAgIH1cblxuICAgIGdldERlc2NyaXB0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICBnZXRQcmlvcml0eSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJpb3JpdHk7XG4gICAgfVxuXG4gICAgZ2V0VGFza1Byb2plY3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3Q7XG4gICAgfVxuXG4gICAgZ2V0SXNDb21wbGV0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNDb21wbGV0ZTtcbiAgICB9XG5cbiAgICBzZXRJc0NvbXBsZXRlKGkpIHtcbiAgICAgICAgaWYoaT09dHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5pc0NvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmKGk9PWZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLmlzQ29tcGxldGUgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRhc2tFcnJvck9iamVjdC53cm9uZ0lzQ29tcGxldGVJRCgpO1xuICAgICAgICB9XG4gICAgfVxuXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVOZXdUb0RvKHByb2plY3QsIHVpZCwgdGl0bGUsIGR1ZWRhdGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgaXNDb21wbGV0ZSkge1xuICAgIGNvbnN0IG5ld1RvRG8gPSBuZXcgdG9kbyhwcm9qZWN0LCB1aWQsIHRpdGxlLCBkdWVkYXRlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGlzQ29tcGxldGUpO1xuICAgIHJldHVybiBuZXdUb0RvO1xufVxuXG5mdW5jdGlvbiBjaGVja0lmVGFzayh0MSkge1xuICAgIGlmKHQxIGluc3RhbmNlb2YgdG9kbykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQge2NyZWF0ZU5ld1RvRG8sIGNoZWNrSWZUYXNrfTsiLCJpbXBvcnQgeyBjaGVja0lmVGFzayB9IGZyb20gXCIuL3RvZG9cIjtcbmltcG9ydCB7IHRhc2tFcnJvck9iamVjdCB9IGZyb20gXCIuL2Vycm9ySGFuZGxlclwiO1xuXG5jbGFzcyB0YXNrTGlzdCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudGFza0xpc3QgPSBbXTtcbiAgICAgICAgdGhpcy5jb3VudGVyID0gMDtcbiAgICB9XG5cblxuICAgIHRhc2tMaXN0QXBwZW5kKHRhc2spIHtcbiAgICAgICAgaWYoY2hlY2tJZlRhc2sodGFzaykpIHtcbiAgICAgICAgICAgIHRoaXMudGFza0xpc3QucHVzaCh0YXNrKTtcbiAgICAgICAgICAgIHRoaXMuY291bnRlciArPSAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGFza0Vycm9yT2JqZWN0Lm5vdFRhc2tFcnJvcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0Q3VycmVudENvdW50ZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvdW50ZXI7XG4gICAgfVxuXG4gICAgZ2V0VGFza0xpc3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhc2tMaXN0O1xuICAgIH1cblxuICAgIGdldFRhc2tzT2ZQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgICAgIGxldCBuZXdUYXNrTGlzdCA9IFtdO1xuICAgIFxuICAgICAgICBmb3IobGV0IGk9MDtpPHRoaXMudGFza0xpc3QubGVuZ3RoO2krKykge1xuICAgICAgICAgICAgaWYodGhpcy50YXNrTGlzdFtpXS5nZXRUYXNrUHJvamVjdCgpPT1wcm9qZWN0TmFtZSkge1xuICAgICAgICAgICAgICAgIG5ld1Rhc2tMaXN0LnB1c2godGhpcy50YXNrTGlzdFtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgcmV0dXJuIG5ld1Rhc2tMaXN0O1xuICAgIH1cblxuICAgIGdldENvbXBsZXRlVGFza3NPZlByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICAgICAgbGV0IG5ld1Rhc2tMaXN0ID0gW107XG4gICAgICAgIGZvcihsZXQgaT0wO2k8dGhpcy50YXNrTGlzdC5sZW5ndGg7aSsrKSB7XG4gICAgICAgICAgICBpZih0aGlzLnRhc2tMaXN0W2ldLmdldFRhc2tQcm9qZWN0KCkgPT0gcHJvamVjdE5hbWUgJiYgdGhpcy50YXNrTGlzdFtpXS5nZXRJc0NvbXBsZXRlKCkgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIG5ld1Rhc2tMaXN0LnB1c2godGhpcy50YXNrTGlzdFtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld1Rhc2tMaXN0O1xuICAgIH1cblxuICAgIGdldEluY29tcGxldGVUYXNrc09mUHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgICAgICBsZXQgbmV3VGFza0xpc3QgPSBbXTtcbiAgICAgICAgZm9yKGxldCBpPTA7aTx0aGlzLnRhc2tMaXN0Lmxlbmd0aDtpKyspIHtcbiAgICAgICAgICAgIGlmKHRoaXMudGFza0xpc3RbaV0uZ2V0VGFza1Byb2plY3QoKSA9PSBwcm9qZWN0TmFtZSAmJiB0aGlzLnRhc2tMaXN0W2ldLmdldElzQ29tcGxldGUoKSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIG5ld1Rhc2tMaXN0LnB1c2godGhpcy50YXNrTGlzdFtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld1Rhc2tMaXN0O1xuICAgIH1cblxuXG4gICAgZGVsZXRlVGFzayh0YXNrVUlEKSB7XG4gICAgICAgIGxldCBpPTA7XG4gICAgICAgIGxldCBpdGVtVG9EZWxldGUgPSAtMTtcbiAgICAgICAgd2hpbGUoaTx0aGlzLnRhc2tMaXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgaWYodGhpcy50YXNrTGlzdFtpXS5nZXRVSUQoKSA9PSB0YXNrVUlEKSB7XG4gICAgICAgICAgICAgICAgaXRlbVRvRGVsZXRlID0gaTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuICAgICAgICBpZihpdGVtVG9EZWxldGUgPT0gLTEpIHtcbiAgICAgICAgICAgIHRhc2tFcnJvck9iamVjdC50YXNrTm90Rm91bmQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGFza0xpc3Quc3BsaWNlKGksMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRDb21wbGV0ZSh0YXNrVUlEKSB7XG4gICAgICAgIGxldCBpPTA7XG4gICAgICAgIGxldCBpdGVtVG9TZXQgPSAtMTtcbiAgICAgICAgd2hpbGUoaTx0aGlzLnRhc2tMaXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgaWYodGhpcy50YXNrTGlzdFtpXS5nZXRVSUQoKSA9PSB0YXNrVUlEKSB7XG4gICAgICAgICAgICAgICAgaXRlbVRvU2V0ID0gaTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuICAgICAgICBpZihpdGVtVG9TZXQgPT0gLTEpIHtcbiAgICAgICAgICAgIHRhc2tFcnJvck9iamVjdC50YXNrTm90Rm91bmQoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhc2tVSUQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYodGhpcy50YXNrTGlzdFtpXS5nZXRJc0NvbXBsZXRlKCkgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudGFza0xpc3RbaV0uc2V0SXNDb21wbGV0ZShmYWxzZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudGFza0xpc3RbaV0uc2V0SXNDb21wbGV0ZSh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuY29uc3QgdGFza0xpc3RJbnN0YW5jZSA9IG5ldyB0YXNrTGlzdDtcblxuZXhwb3J0IHt0YXNrTGlzdEluc3RhbmNlfTsiLCJpbXBvcnQgeyB0YXNrTGlzdEluc3RhbmNlIH0gZnJvbSBcIi4vdG9kb0xpc3RcIjtcbmltcG9ydCB7IGNyZWF0ZU5ld1Rhc2tEaXNwbGF5IH0gZnJvbSBcIi4vY3JlYXRlVG9kb0VsZW1lbnRcIjtcbmltcG9ydCB7IHVwZGF0ZUhvbWVQYWdlTGlzdGVuZXIgfSBmcm9tIFwiLi9pbml0RXZlbnRMaXN0ZW5lcnNcIjtcbmltcG9ydCB7IGNyZWF0ZVRhc2tGb3JtLCBjcmVhdGVQcm9qZWN0Rm9ybSB9IGZyb20gXCIuL2R5YW5taWNGb3JtXCI7XG5cbmZ1bmN0aW9uIHVwZGF0ZVRvZG9QYWdlKCkge1xuICAgIGNvbnN0IHRvZG9EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1saXN0Jyk7XG5cblxuICAgIHRvZG9EaXYuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBjb25zdCBwcm9qZWN0U2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGlzdC1wcm9qZWN0LXNlbGVjdG9yJyk7XG4gICAgXG4gICAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0VGFza3MgPSBBcnJheS5mcm9tKHRhc2tMaXN0SW5zdGFuY2UuZ2V0VGFza3NPZlByb2plY3QocHJvamVjdFNlbGVjdG9yLnZhbHVlKSk7XG4gICAgZm9yKGxldCBpPTA7aTxzZWxlY3RlZFByb2plY3RUYXNrcy5sZW5ndGg7aSsrKSB7XG4gICAgICAgIGxldCBuZXdUYXNrID0gY3JlYXRlTmV3VGFza0Rpc3BsYXkoc2VsZWN0ZWRQcm9qZWN0VGFza3NbaV0pO1xuICAgICAgICB0b2RvRGl2LmFwcGVuZENoaWxkKG5ld1Rhc2spO1xuICAgIH1cbiAgICB1cGRhdGVIb21lUGFnZUxpc3RlbmVyKCk7XG59XG5cbmZ1bmN0aW9uIGluaXRUb3BEaXZGb3JtKCkge1xuICAgIGxldCB0b3BEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wLWRpdicpO1xuICAgIHRvcERpdi5pbm5lckhUTUwgPSBcIlwiOyAgXG4gICAgdG9wRGl2LmFwcGVuZENoaWxkKGNyZWF0ZVRhc2tGb3JtKCkpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVUb3BEaXZGb3JtKCkge1xuICAgIGxldCB0cmlnZ2VyID0gMDtcblxuICAgIGxldCB0b3BEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wLWRpdicpO1xuICAgIHRvcERpdi5pbm5lckhUTUwgPSBcIlwiOyAgXG4gICAgaWYodHJpZ2dlciA9PSAwKSB7XG4gICAgICAgIHRvcERpdi5hcHBlbmRDaGlsZChjcmVhdGVUYXNrRm9ybSgpKTtcbiAgICAgICAgdHJpZ2dlciA9IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdG9wRGl2LmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3RGb3JtKCkpO1xuICAgIH1cbn1cblxuZXhwb3J0IHt1cGRhdGVUb2RvUGFnZSwgdXBkYXRlVG9wRGl2Rm9ybSwgaW5pdFRvcERpdkZvcm19OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgY3JlYXRlTmV3VG9EbyB9IGZyb20gXCIuL3RvZG9cIjtcbmltcG9ydCB7IGNyZWF0ZU5ld1Byb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgeyB0YXNrTGlzdEluc3RhbmNlIH0gZnJvbSBcIi4vdG9kb0xpc3RcIjtcbmltcG9ydCB7IHByb2plY3RMaXN0SW5zdGFuY2UgfSBmcm9tIFwiLi9wcm9qZWN0TGlzdFwiO1xuaW1wb3J0IHsgaW5pdF9wYWdlIH0gZnJvbSBcIi4vaW5pdF9wYWdlXCI7XG5cblxuXG5cblxuY29uc3QgcDEgPSBjcmVhdGVOZXdQcm9qZWN0KHByb2plY3RMaXN0SW5zdGFuY2UuZ2V0Q3VycmVudFByb2plY3RDb3VudGVyKCksXCJDYXRzXCIsXCJCbHVlXCIpO1xucHJvamVjdExpc3RJbnN0YW5jZS5wcm9qZWN0TGlzdEFwcGVuZChwMSk7XG5cbmNvbnN0IHAyID0gY3JlYXRlTmV3UHJvamVjdChwcm9qZWN0TGlzdEluc3RhbmNlLmdldEN1cnJlbnRQcm9qZWN0Q291bnRlcigpLFwiUHJvamVjdCAyXCIsXCJHcmVlblwiKTtcbnByb2plY3RMaXN0SW5zdGFuY2UucHJvamVjdExpc3RBcHBlbmQocDIpO1xuY29uc29sZS5sb2cocHJvamVjdExpc3RJbnN0YW5jZS5nZXRQcm9qZWN0TGlzdCgpKTtcblxuXG5cblxuXG5jb25zdCB0MSA9IGNyZWF0ZU5ld1RvRG8ocDEuZ2V0UHJvamVjdE5hbWUoKSx0YXNrTGlzdEluc3RhbmNlLmdldEN1cnJlbnRDb3VudGVyKCksXCJUZXN0XCIsXCJUZXN0XCIsXCJUZXN0XCIsMiwgdHJ1ZSk7XG50YXNrTGlzdEluc3RhbmNlLnRhc2tMaXN0QXBwZW5kKHQxKTtcbmNvbnN0IHQyID0gY3JlYXRlTmV3VG9EbyhwMS5nZXRQcm9qZWN0TmFtZSgpLHRhc2tMaXN0SW5zdGFuY2UuZ2V0Q3VycmVudENvdW50ZXIoKSxcIk1pYXdcIixcIlRlc3RcIixcIlRlc3RcIiwxLCBmYWxzZSk7XG50YXNrTGlzdEluc3RhbmNlLnRhc2tMaXN0QXBwZW5kKHQyKTtcblxuY29uc29sZS5sb2codGFza0xpc3RJbnN0YW5jZS5nZXRUYXNrTGlzdCgpKTtcblxuY29uc29sZS5sb2codGFza0xpc3RJbnN0YW5jZS5nZXRUYXNrc09mUHJvamVjdChcIkNhdHNcIikpO1xuXG5pbml0X3BhZ2UoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==