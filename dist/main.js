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


function createTaskForm() {
    let taskFormDiv = document.createElement('div');

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

    return taskFormDiv;
}

function createProjectForm() {

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
/* harmony export */   initHomePageListener: () => (/* binding */ initHomePageListener),
/* harmony export */   updateHomePageListener: () => (/* binding */ updateHomePageListener)
/* harmony export */ });
/* harmony import */ var _updatePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updatePage */ "./src/updatePage.js");
/* harmony import */ var _taskFunctionality__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskFunctionality */ "./src/taskFunctionality.js");



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
}

function addTaskEventListener() {
    const createTaskButton = document.querySelector('#create-task-button');
    createTaskButton.addEventListener('click',_taskFunctionality__WEBPACK_IMPORTED_MODULE_1__.addNewTask);
}

function initHomePageListener() {
    addSelectEventListner();
    addTaskEventListener();
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




function loadTaskInputForm() {
    let taskInputDiv = (0,_dyanmicForm__WEBPACK_IMPORTED_MODULE_1__.createTaskForm)();
    return taskInputDiv;
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
/* harmony export */   updateTodoPage: () => (/* binding */ updateTodoPage)
/* harmony export */ });
/* harmony import */ var _todoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoList */ "./src/todoList.js");
/* harmony import */ var _createTodoElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTodoElement */ "./src/createTodoElement.js");
/* harmony import */ var _initEventListeners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./initEventListeners */ "./src/initEventListeners.js");




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBb0Q7O0FBRXBEO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdDQUFnQyw2REFBbUI7QUFDbkQsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJ1Qzs7QUFFdkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0Isb0RBQWE7QUFDakM7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEVnRTs7QUFFaEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSwyQkFBMkIsNkVBQXFCO0FBQ2hEO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5REE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCOEM7QUFDNkI7O0FBRTNFO0FBQ0E7QUFDQSw0Q0FBNEMsdURBQWM7QUFDMUQ7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQixvQkFBb0I7QUFDcEMsK0NBQStDLDBEQUFVO0FBQ3pEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQix5QkFBeUI7QUFDekMsb0RBQW9ELDREQUFZO0FBQ2hFO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOENBQThDLDBEQUFVO0FBQ3hEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENnRTtBQUNFO0FBQ047O0FBRTVEO0FBQ0EsdUJBQXVCLDREQUFjO0FBQ3JDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsNkVBQXFCO0FBQy9DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHlFQUFvQjtBQUN4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCMkM7QUFDUzs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVcsd0RBQWM7QUFDekI7QUFDQTtBQUNBLFVBQVU7QUFDVixZQUFZLDZEQUFrQjtBQUM5QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlCOEM7QUFDQTtBQUNjOzs7QUFHNUQ7QUFDQSxvQkFBb0IsdURBQWdCO0FBQ3BDLG9CQUFvQix5RUFBbUI7QUFDdkMsSUFBSSx1REFBZ0I7QUFDcEIsSUFBSSwyREFBYztBQUNsQjs7QUFFQTtBQUNBLElBQUksdURBQWdCO0FBQ3BCLElBQUksMkRBQWM7QUFDbEI7O0FBRUE7QUFDQTtBQUNBLElBQUksdURBQWdCO0FBQ3BCLElBQUksMkRBQWM7QUFDbEI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCaUQ7O0FBRWpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1YsWUFBWSwwREFBZTtBQUMzQjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0RxQztBQUNZOztBQUVqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLFdBQVcsa0RBQVc7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDBEQUFlO0FBQzNCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsdUJBQXVCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsdUJBQXVCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLHVCQUF1QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDBEQUFlO0FBQzNCLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksMERBQWU7QUFDM0I7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckc4QztBQUNhO0FBQ0c7O0FBRTlEO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0Qyx1REFBZ0I7QUFDNUQsZ0JBQWdCLDhCQUE4QjtBQUM5QyxzQkFBc0Isd0VBQW9CO0FBQzFDO0FBQ0E7QUFDQSxJQUFJLDJFQUFzQjtBQUMxQjs7Ozs7Ozs7VUNqQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOdUM7QUFDTTtBQUNDO0FBQ007QUFDWjs7Ozs7O0FBTXhDLFdBQVcsMERBQWdCLENBQUMsNkRBQW1CO0FBQy9DLDZEQUFtQjs7QUFFbkIsV0FBVywwREFBZ0IsQ0FBQyw2REFBbUI7QUFDL0MsNkRBQW1CO0FBQ25CLFlBQVksNkRBQW1COzs7Ozs7QUFNL0IsV0FBVyxvREFBYSxxQkFBcUIsdURBQWdCO0FBQzdELHVEQUFnQjtBQUNoQixXQUFXLG9EQUFhLHFCQUFxQix1REFBZ0I7QUFDN0QsdURBQWdCOztBQUVoQixZQUFZLHVEQUFnQjs7QUFFNUIsWUFBWSx1REFBZ0I7O0FBRTVCLHFEQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL2NyZWF0ZVByb2plY3RTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvY3JlYXRlVGFza0Zyb21JbnB1dC5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvY3JlYXRlVG9kb0VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL2R5YW5taWNGb3JtLmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy9lcnJvckhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL2luaXRFdmVudExpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvaW5pdF9wYWdlLmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy9wcm9qZWN0TGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvdGFza0Z1bmN0aW9uYWxpdHkuanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL3RvZG9MaXN0LmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy91cGRhdGVQYWdlLmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwcm9qZWN0TGlzdEluc3RhbmNlIH0gZnJvbSBcIi4vcHJvamVjdExpc3RcIjtcblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdFNlbGVjdG9yKCkge1xuICAgIGxldCBwcm9qZWN0U2VsZWN0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBwcm9qZWN0U2VsZWN0b3IuY2xhc3NMaXN0LmFkZCgnc2VsZWN0b3InKTtcbiAgICBwcm9qZWN0U2VsZWN0b3IubmFtZSA9IFwicHJvamVjdC1zZWxlY3RvclwiO1xuXG4gICAgY29uc3QgcHJvamVjdHMgPSBBcnJheS5mcm9tKHByb2plY3RMaXN0SW5zdGFuY2UuZ2V0UHJvamVjdExpc3QoKSk7XG4gICAgZm9yKGxldCBpPTA7IGk8cHJvamVjdHMubGVuZ3RoO2krKykge1xuICAgICAgICBsZXQgcHJvamVjdE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBwcm9qZWN0T3B0aW9uLnZhbHVlID0gcHJvamVjdHNbaV0uZ2V0UHJvamVjdE5hbWUoKTtcbiAgICAgICAgcHJvamVjdE9wdGlvbi5pbm5lckhUTUwgPSBwcm9qZWN0c1tpXS5nZXRQcm9qZWN0TmFtZSgpO1xuICAgICAgICBwcm9qZWN0U2VsZWN0b3IuYXBwZW5kQ2hpbGQocHJvamVjdE9wdGlvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb2plY3RTZWxlY3Rvcjtcbn1cblxuZXhwb3J0IHtjcmVhdGVQcm9qZWN0U2VsZWN0b3J9OyIsImltcG9ydCB7IGNyZWF0ZU5ld1RvRG8gfSBmcm9tIFwiLi90b2RvXCI7XG5cbmZ1bmN0aW9uIGdldFRpdGxlRnJvbUlucHV0KCkge1xuICAgIGNvbnN0IHRpdGxlVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUtaW5wdXQnKS52YWx1ZTtcbiAgICByZXR1cm4gdGl0bGVWYWx1ZTtcbn1cblxuZnVuY3Rpb24gZ2V0RHVlKCkge1xuICAgIGNvbnN0IGR1ZVZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZS1pbnB1dCcpLnZhbHVlO1xuICAgIHJldHVybiBkdWVWYWx1ZTtcbn1cblxuZnVuY3Rpb24gZ2V0RGVzYygpIHtcbiAgICBjb25zdCBkZXNjVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzYy1pbnB1dCcpLnZhbHVlO1xuICAgIHJldHVybiBkZXNjVmFsdWU7XG59XG5cbmZ1bmN0aW9uIGdldFByaW9yaXR5KCkge1xuICAgIGNvbnN0IHByaW9yaXR5VmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHktaW5wdXQnKS52YWx1ZTtcbiAgICByZXR1cm4gcHJpb3JpdHlWYWx1ZTtcbn1cblxuZnVuY3Rpb24gZ2V0UHJvamVjdCgpIHtcbiAgICBjb25zdCBwcm9qZWN0VmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1pbnB1dCcpLnZhbHVlO1xuICAgIHJldHVybiBwcm9qZWN0VmFsdWU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tGcm9tSW5wdXQodWlkKSB7XG4gICAgY29uc3QgbmV3VGFzayA9IGNyZWF0ZU5ld1RvRG8oZ2V0UHJvamVjdCgpLHVpZCxnZXRUaXRsZUZyb21JbnB1dCgpLGdldER1ZSgpLGdldERlc2MoKSxnZXRQcmlvcml0eSgpLGZhbHNlKTtcbiAgICByZXR1cm4gbmV3VGFzaztcbn1cblxuZXhwb3J0IHtjcmVhdGVUYXNrRnJvbUlucHV0fTsiLCJmdW5jdGlvbiBjcmVhdGVUYXNrVGl0bGVVSSh0YXNrVGl0bGUpIHtcbiAgICBsZXQgbmV3VGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmV3VGFza1RpdGxlLmlubmVySFRNTCA9IHRhc2tUaXRsZTtcbiAgICByZXR1cm4gbmV3VGFza1RpdGxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrRHVlVUkodGFza0R1ZURhdGUpIHtcbiAgICBsZXQgbmV3VGFza0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdUYXNrRHVlRGF0ZS5pbm5lckhUTUwgPSB0YXNrRHVlRGF0ZTtcbiAgICByZXR1cm4gbmV3VGFza0R1ZURhdGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tEZXNjcmlwdGlvbih0YXNrRGVzY3JpcHRpb24pIHtcbiAgICBsZXQgbmV3VGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmV3VGFza0Rlc2NyaXB0aW9uLmlubmVySFRNTCA9IHRhc2tEZXNjcmlwdGlvbjtcbiAgICByZXR1cm4gbmV3VGFza0Rlc2NyaXB0aW9uO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrUHJpb3JpdHkodGFza1ByaW9yaXR5KSB7XG4gICAgbGV0IG5ld1Rhc2tQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGlmKHRhc2tQcmlvcml0eSA9PSAxKSB7XG4gICAgICAgIG5ld1Rhc2tQcmlvcml0eS5pbm5lckhUTUwgPSBcIkhpZ2hcIjtcbiAgICB9IGVsc2UgaWYodGFza1ByaW9yaXR5ID09IDIpIHtcbiAgICAgICAgbmV3VGFza1ByaW9yaXR5LmlubmVySFRNTCA9IFwiTWVkaXVtXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbmV3VGFza1ByaW9yaXR5LmlubmVySFRNTCA9IFwiTG93XCI7XG4gICAgfVxuICAgIHJldHVybiBuZXdUYXNrUHJpb3JpdHk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tCdXR0b25Hcm91cCh1aWQpIHtcbiAgICBsZXQgbmV3VGFza0J1dHRvbkdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgXG4gICAgbGV0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGRlbGV0ZUJ1dHRvbi5pZCA9IFwidGFzay1kZWwtYnV0dG9uXCI7XG4gICAgZGVsZXRlQnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsdWlkKTtcbiAgICBkZWxldGVCdXR0b24uaW5uZXJIVE1MID0gXCJEZWxldGVcIjtcbiAgICBuZXdUYXNrQnV0dG9uR3JvdXAuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcblxuICAgIGxldCBjb21wbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbXBsZXRlQnV0dG9uLmlubmVySFRNTCA9IFwiQ29tcGxldGVcIjtcbiAgICBjb21wbGV0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLHVpZCk7XG4gICAgY29tcGxldGVCdXR0b24uaWQgPSBcInRhc2stY29tcC1idXR0b25cIjtcbiAgICBuZXdUYXNrQnV0dG9uR3JvdXAuYXBwZW5kQ2hpbGQoY29tcGxldGVCdXR0b24pO1xuXG4gICAgcmV0dXJuIG5ld1Rhc2tCdXR0b25Hcm91cDtcbn1cblxuXG5mdW5jdGlvbiBjcmVhdGVOZXdUYXNrRGlzcGxheSh0YXNrKSB7XG4gICAgbGV0IG5ld1Rhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgXG4gICAgY29uc3QgbmV3VGFza1RpdGxlID0gY3JlYXRlVGFza1RpdGxlVUkodGFzay5nZXRUaXRsZSgpKTtcbiAgICBuZXdUYXNrLmFwcGVuZENoaWxkKG5ld1Rhc2tUaXRsZSk7XG4gICAgXG4gICAgY29uc3QgbmV3VGFza0R1ZURhdGUgPSBjcmVhdGVUYXNrRHVlVUkodGFzay5nZXREdWVEYXRlKCkpO1xuICAgIG5ld1Rhc2suYXBwZW5kQ2hpbGQobmV3VGFza0R1ZURhdGUpO1xuXG4gICAgY29uc3QgbmV3VGFza0Rlc2NyaXB0aW9uID0gY3JlYXRlVGFza0Rlc2NyaXB0aW9uKHRhc2suZ2V0RGVzY3JpcHRpb24oKSk7XG4gICAgbmV3VGFzay5hcHBlbmRDaGlsZChuZXdUYXNrRGVzY3JpcHRpb24pO1xuXG4gICAgY29uc3QgbmV3VGFza1ByaW9yaXR5ID0gY3JlYXRlVGFza1ByaW9yaXR5KHRhc2suZ2V0UHJpb3JpdHkoKSk7XG4gICAgbmV3VGFzay5hcHBlbmRDaGlsZChuZXdUYXNrUHJpb3JpdHkpO1xuXG4gICAgaWYodGFzay5nZXRJc0NvbXBsZXRlKCkgPT0gdHJ1ZSkge1xuICAgICAgICBuZXdUYXNrLnN0eWxlLmNvbG9yID0gXCJyZWRcIjtcbiAgICB9XG5cbiAgICBjb25zdCBidXR0b25Hcm91cCA9IGNyZWF0ZVRhc2tCdXR0b25Hcm91cCh0YXNrLmdldFVJRCgpKTtcbiAgICBuZXdUYXNrLmFwcGVuZENoaWxkKGJ1dHRvbkdyb3VwKTtcblxuICAgIHJldHVybiBuZXdUYXNrO1xufVxuXG5leHBvcnQge2NyZWF0ZU5ld1Rhc2tEaXNwbGF5fTsiLCJpbXBvcnQgeyBjcmVhdGVQcm9qZWN0U2VsZWN0b3IgfSBmcm9tIFwiLi9jcmVhdGVQcm9qZWN0U2VsZWN0b3JcIjtcblxuZnVuY3Rpb24gY3JlYXRlVGFza0Zvcm0oKSB7XG4gICAgbGV0IHRhc2tGb3JtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBsZXQgdGFza1RpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRhc2tUaXRsZUlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0taW5wdXQnKTtcbiAgICB0YXNrVGl0bGVJbnB1dC5pZCA9ICd0aXRsZS1pbnB1dCc7XG4gICAgdGFza1RpdGxlSW5wdXQucGxhY2Vob2xkZXIgPSBcIlRpdGxlXCI7XG4gICAgdGFza1RpdGxlSW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICB0YXNrRm9ybURpdi5hcHBlbmRDaGlsZCh0YXNrVGl0bGVJbnB1dCk7XG5cbiAgICBsZXQgdGFza0R1ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0YXNrRHVlSW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1pbnB1dCcpO1xuICAgIHRhc2tEdWVJbnB1dC5pZCA9ICdkdWUtaW5wdXQnO1xuICAgIHRhc2tEdWVJbnB1dC50eXBlID0gJ2RhdGUnO1xuICAgIHRhc2tGb3JtRGl2LmFwcGVuZENoaWxkKHRhc2tEdWVJbnB1dCk7XG5cbiAgICBsZXQgdGFza0Rlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRhc2tEZXNjcmlwdGlvbklucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgdGFza0Rlc2NyaXB0aW9uSW5wdXQuaWQgPSAnZGVzYy1pbnB1dCc7XG4gICAgdGFza0Rlc2NyaXB0aW9uSW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1pbnB1dCcpO1xuICAgIHRhc2tEZXNjcmlwdGlvbklucHV0LnBsYWNlaG9sZGVyID0gXCJEZXNjcmlwdGlvblwiO1xuICAgIHRhc2tGb3JtRGl2LmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwdGlvbklucHV0KTtcblxuICAgIGxldCB0YXNrUHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIHRhc2tQcmlvcml0eUlucHV0LmlkID0gJ3ByaW9yaXR5LWlucHV0JztcbiAgICB0YXNrUHJpb3JpdHlJbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWlucHV0Jyk7XG4gICAgXG4gICAgbGV0IHRhc2tQcmlvcml0eU9wdGlvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICB0YXNrUHJpb3JpdHlPcHRpb24xLnZhbHVlID0gMTtcbiAgICB0YXNrUHJpb3JpdHlPcHRpb24xLmlubmVySFRNTCA9IFwiSGlnaFwiO1xuICAgIHRhc2tQcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eU9wdGlvbjEpO1xuXG4gICAgbGV0IHRhc2tQcmlvcml0eU9wdGlvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICB0YXNrUHJpb3JpdHlPcHRpb24yLnZhbHVlID0gMjtcbiAgICB0YXNrUHJpb3JpdHlPcHRpb24yLmlubmVySFRNTCA9IFwiTWVkaXVtXCI7XG4gICAgdGFza1ByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5T3B0aW9uMik7XG5cbiAgICBsZXQgdGFza1ByaW9yaXR5T3B0aW9uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIHRhc2tQcmlvcml0eU9wdGlvbjMudmFsdWUgPSAzO1xuICAgIHRhc2tQcmlvcml0eU9wdGlvbjMuaW5uZXJIVE1MID0gXCJMb3dcIjtcbiAgICB0YXNrUHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHlPcHRpb24zKTtcblxuICAgIHRhc2tGb3JtRGl2LmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eUlucHV0KTtcblxuICAgIGxldCB0YXNrUHJvamVjdElucHV0ID0gY3JlYXRlUHJvamVjdFNlbGVjdG9yKCk7XG4gICAgdGFza1Byb2plY3RJbnB1dC5pZCA9ICdwcm9qZWN0LWlucHV0JztcbiAgICB0YXNrRm9ybURpdi5hcHBlbmRDaGlsZCh0YXNrUHJvamVjdElucHV0KTtcblxuXG4gICAgbGV0IHRhc2tDcmVhdGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0YXNrQ3JlYXRlQnV0dG9uLmlubmVySFRNTCA9IFwiQ3JlYXRlXCI7XG4gICAgdGFza0NyZWF0ZUJ1dHRvbi5pZCA9IFwiY3JlYXRlLXRhc2stYnV0dG9uXCI7XG4gICAgdGFza0NyZWF0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uXCIpO1xuICAgIHRhc2tGb3JtRGl2LmFwcGVuZENoaWxkKHRhc2tDcmVhdGVCdXR0b24pO1xuXG4gICAgcmV0dXJuIHRhc2tGb3JtRGl2O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0Rm9ybSgpIHtcblxufVxuXG5leHBvcnQge2NyZWF0ZVRhc2tGb3JtLCBjcmVhdGVQcm9qZWN0Rm9ybX07IiwiY2xhc3MgdGFza0Vycm9ycyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB9XG5cbiAgICBub3RUYXNrRXJyb3IoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVHJpZWQgaW5zZXJ0aW5nIGFuIGl0ZW0gdGhhdCB3YXMgbm90IGNsYXNzIHRvZG8gaW50byB0aGUgdGFzayBsaXN0XCIpO1xuICAgIH1cblxuICAgIHRhc2tOb3RGb3VuZCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0YXNrIHdpdGggdGhlIHJlcXVpcmVkIFVJRCBub3QgZm91bmRcIik7XG4gICAgfVxuXG4gICAgd3JvbmdJc0NvbXBsZXRlSUQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwid3JvbmcgZGF0YSB2YWx1ZSBoYXMgYmVlbiBwcm92aWRlZCB0byBzZXQgdGhlIGlzIGNvbXBsZXRlIGZvciBhIHRhc2tcIilcbiAgICB9XG59XG5cbmNsYXNzIHByb2plY3RFcnJvcnMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuXG4gICAgbm90UHJvamVjdEVycm9yKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlRyaWVkIGluc2VydGluZyBhbiBpdGVtIHRoYXQgd2FzIG5vdCBhIHByb2plY3QgaW50byBwcm9qZWN0IGxpc3RcIik7XG4gICAgfVxufVxuXG5jb25zdCB0YXNrRXJyb3JPYmplY3QgPSBuZXcgdGFza0Vycm9ycztcbmNvbnN0IHByb2plY3RFcnJvck9iamVjdCA9IG5ldyBwcm9qZWN0RXJyb3JzXG5cbmV4cG9ydCB7dGFza0Vycm9yT2JqZWN0LCBwcm9qZWN0RXJyb3JPYmplY3R9OyIsImltcG9ydCB7IHVwZGF0ZVRvZG9QYWdlIH0gZnJvbSBcIi4vdXBkYXRlUGFnZVwiO1xuaW1wb3J0IHsgYWRkTmV3VGFzaywgZGVsZXRlVGFzaywgdGFza0NvbXBsZXRlIH0gZnJvbSBcIi4vdGFza0Z1bmN0aW9uYWxpdHlcIjtcblxuZnVuY3Rpb24gYWRkU2VsZWN0RXZlbnRMaXN0bmVyKCkge1xuICAgIGNvbnN0IGdldFRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VsZWN0b3ItYnV0dG9uJyk7XG4gICAgZ2V0VGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHVwZGF0ZVRvZG9QYWdlKTtcbn1cblxuZnVuY3Rpb24gYWRkRGVsZXRlVGFza0V2ZW50TGlzdGVuZXIoKSB7XG4gICAgY29uc3QgZGVsQnV0dG9ucyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3Rhc2stZGVsLWJ1dHRvbicpKTtcbiAgICBmb3IobGV0IGk9MDtpPGRlbEJ1dHRvbnMubGVuZ3RoO2krKykge1xuICAgICAgICBkZWxCdXR0b25zW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxkZWxldGVUYXNrKTtcbiAgICB9ICAgXG59XG5cbmZ1bmN0aW9uIGFkZENvbXBsZXRlVGFza0V2ZW50TGlzdGVuZXIoKSB7XG4gICAgY29uc3QgY29tcGxldGVCdXR0b25zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjdGFzay1jb21wLWJ1dHRvbicpKTtcbiAgICBmb3IobGV0IGk9MDtpPGNvbXBsZXRlQnV0dG9ucy5sZW5ndGg7aSsrKSB7XG4gICAgICAgIGNvbXBsZXRlQnV0dG9uc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsdGFza0NvbXBsZXRlKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGFkZFN3aXRjaFRvUHJvamVjdEZvcm0oKSB7XG59XG5cbmZ1bmN0aW9uIGFkZFRhc2tFdmVudExpc3RlbmVyKCkge1xuICAgIGNvbnN0IGNyZWF0ZVRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlLXRhc2stYnV0dG9uJyk7XG4gICAgY3JlYXRlVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsYWRkTmV3VGFzayk7XG59XG5cbmZ1bmN0aW9uIGluaXRIb21lUGFnZUxpc3RlbmVyKCkge1xuICAgIGFkZFNlbGVjdEV2ZW50TGlzdG5lcigpO1xuICAgIGFkZFRhc2tFdmVudExpc3RlbmVyKCk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUhvbWVQYWdlTGlzdGVuZXIoKSB7XG4gICAgYWRkRGVsZXRlVGFza0V2ZW50TGlzdGVuZXIoKTtcbiAgICBhZGRDb21wbGV0ZVRhc2tFdmVudExpc3RlbmVyKCk7XG59XG5cbmV4cG9ydCB7aW5pdEhvbWVQYWdlTGlzdGVuZXIsIHVwZGF0ZUhvbWVQYWdlTGlzdGVuZXJ9OyIsImltcG9ydCB7IGNyZWF0ZVByb2plY3RTZWxlY3RvciB9IGZyb20gXCIuL2NyZWF0ZVByb2plY3RTZWxlY3RvclwiO1xuaW1wb3J0IHsgY3JlYXRlVGFza0Zvcm0sIGNyZWF0ZVByb2plY3RGb3JtIH0gZnJvbSBcIi4vZHlhbm1pY0Zvcm1cIjtcbmltcG9ydCB7IGluaXRIb21lUGFnZUxpc3RlbmVyIH0gZnJvbSBcIi4vaW5pdEV2ZW50TGlzdGVuZXJzXCI7XG5cbmZ1bmN0aW9uIGxvYWRUYXNrSW5wdXRGb3JtKCkge1xuICAgIGxldCB0YXNrSW5wdXREaXYgPSBjcmVhdGVUYXNrRm9ybSgpO1xuICAgIHJldHVybiB0YXNrSW5wdXREaXY7XG59XG5cbmZ1bmN0aW9uIGxvYWRQcm9qZWN0U2VsZWN0b3IoKSB7XG4gICAgbGV0IHByb2plY3RTZWxlY3RvckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RTZWxlY3RvckRpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXNlbGVjdG9yLWRpdicpO1xuICAgIFxuICAgIGxldCBwcm9qZWN0U2VsZWN0b3IgPSBjcmVhdGVQcm9qZWN0U2VsZWN0b3IoKTtcbiAgICBwcm9qZWN0U2VsZWN0b3IuaWQgPSBcImxpc3QtcHJvamVjdC1zZWxlY3RvclwiO1xuICAgIHByb2plY3RTZWxlY3RvckRpdi5hcHBlbmRDaGlsZChwcm9qZWN0U2VsZWN0b3IpO1xuXG4gICAgbGV0IHNlbGVjdG9yQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc2VsZWN0b3JCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uJyk7XG4gICAgc2VsZWN0b3JCdXR0b24uaWQgPSBcInNlbGVjdG9yLWJ1dHRvblwiO1xuICAgIHNlbGVjdG9yQnV0dG9uLmlubmVySFRNTCA9IFwiU2VsZWN0XCI7XG4gICAgcHJvamVjdFNlbGVjdG9yRGl2LmFwcGVuZENoaWxkKHNlbGVjdG9yQnV0dG9uKTtcbiAgICByZXR1cm4gcHJvamVjdFNlbGVjdG9yRGl2O1xufVxuXG5mdW5jdGlvbiBpbml0VG9kb1VJKCkge1xuICAgIGxldCB0b2RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb0Rpdi5jbGFzc0xpc3QuYWRkKCd0b2RvLWxpc3QnKTtcbiAgICB0b2RvRGl2LmlubmVySFRNTCA9IFwiTm8gQ2hhcHRlciBTZWxlY3RlZFwiO1xuICAgIHJldHVybiB0b2RvRGl2O1xufVxuXG5mdW5jdGlvbiBpbml0X3BhZ2UoKSB7XG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChsb2FkVGFza0lucHV0Rm9ybSgpKTtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGxvYWRQcm9qZWN0U2VsZWN0b3IoKSk7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChpbml0VG9kb1VJKCkpO1xuICAgIGluaXRIb21lUGFnZUxpc3RlbmVyKCk7XG59XG5cbmV4cG9ydCB7aW5pdF9wYWdlfTsiLCJjbGFzcyBwcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3Rvcih1aWQsIHByb2plY3ROYW1lLCBwcm9qZWN0Q29sb3IpIHtcbiAgICAgICAgdGhpcy51aWQgPSB1aWQ7XG4gICAgICAgIHRoaXMucHJvamVjdE5hbWUgPSBwcm9qZWN0TmFtZTtcbiAgICAgICAgdGhpcy5wcm9qZWN0Q29sb3IgPSBwcm9qZWN0Q29sb3I7XG4gICAgfVxuXG4gICAgZ2V0UHJvamVjdE5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3ROYW1lO1xuICAgIH1cblxuICAgIGdldFByb2plY3RDb2xvcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdENvbG9yO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlTmV3UHJvamVjdCh1aWQscHJvamVjdE5hbWUsIHByb2plY3RDb2xvcikge1xuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgcHJvamVjdCh1aWQsIHByb2plY3ROYW1lLHByb2plY3RDb2xvcik7XG4gICAgcmV0dXJuIG5ld1Byb2plY3Q7XG59XG5cbmZ1bmN0aW9uIGNoZWNrSWZQcm9qZWN0KHApIHtcbiAgICBpZihwIGluc3RhbmNlb2YgcHJvamVjdCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQge2NyZWF0ZU5ld1Byb2plY3QsIGNoZWNrSWZQcm9qZWN0fTsiLCJpbXBvcnQgeyBjaGVja0lmUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7IHByb2plY3RFcnJvck9iamVjdCB9IGZyb20gXCIuL2Vycm9ySGFuZGxlclwiO1xuXG5jbGFzcyBwcm9qZWN0TGlzdCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucHJvamVjdExpc3QgPSBbXTtcbiAgICAgICAgdGhpcy5wcm9qZWN0Q291bnRlciA9IDA7XG4gICAgfVxuXG4gICAgcHJvamVjdExpc3RBcHBlbmQocHJvamVjdCkge1xuICAgICAgICBpZihjaGVja0lmUHJvamVjdChwcm9qZWN0KSkge1xuICAgICAgICAgICAgdGhpcy5wcm9qZWN0TGlzdC5wdXNoKHByb2plY3QpO1xuICAgICAgICAgICAgdGhpcy5wcm9qZWN0Q291bnRlcisrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvamVjdEVycm9yT2JqZWN0Lm5vdFByb2plY3RFcnJvcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0UHJvamVjdExpc3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RMaXN0XG4gICAgfVxuXG4gICAgZ2V0Q3VycmVudFByb2plY3RDb3VudGVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0Q291bnRlcjtcbiAgICB9XG59XG5cblxuLy9NYWtlIGRlbGV0ZSB0YXNrXG5cbmNvbnN0IHByb2plY3RMaXN0SW5zdGFuY2UgPSBuZXcgcHJvamVjdExpc3Q7XG5cbmV4cG9ydCB7cHJvamVjdExpc3RJbnN0YW5jZX07IiwiaW1wb3J0IHsgdGFza0xpc3RJbnN0YW5jZSB9IGZyb20gXCIuL3RvZG9MaXN0XCI7XG5pbXBvcnQgeyB1cGRhdGVUb2RvUGFnZSB9IGZyb20gXCIuL3VwZGF0ZVBhZ2VcIjtcbmltcG9ydCB7IGNyZWF0ZVRhc2tGcm9tSW5wdXQgfSBmcm9tIFwiLi9jcmVhdGVUYXNrRnJvbUlucHV0XCI7XG5cblxuZnVuY3Rpb24gYWRkTmV3VGFzaygpIHtcbiAgICBjb25zdCB0YXNrVUlEID0gdGFza0xpc3RJbnN0YW5jZS5nZXRDdXJyZW50Q291bnRlcigpO1xuICAgIGNvbnN0IG5ld1Rhc2sgPSBjcmVhdGVUYXNrRnJvbUlucHV0KHRhc2tVSUQpO1xuICAgIHRhc2tMaXN0SW5zdGFuY2UudGFza0xpc3RBcHBlbmQobmV3VGFzayk7XG4gICAgdXBkYXRlVG9kb1BhZ2UoKTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlVGFzayhlKSB7XG4gICAgdGFza0xpc3RJbnN0YW5jZS5kZWxldGVUYXNrKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKTtcbiAgICB1cGRhdGVUb2RvUGFnZSgpO1xufVxuXG5mdW5jdGlvbiB0YXNrQ29tcGxldGUoZSkge1xuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0KTtcbiAgICB0YXNrTGlzdEluc3RhbmNlLnNldENvbXBsZXRlKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKTtcbiAgICB1cGRhdGVUb2RvUGFnZSgpO1xufVxuXG5leHBvcnQge2FkZE5ld1Rhc2ssZGVsZXRlVGFzaywgdGFza0NvbXBsZXRlfSIsImltcG9ydCB7IHRhc2tFcnJvck9iamVjdCB9IGZyb20gXCIuL2Vycm9ySGFuZGxlclwiO1xuXG5jbGFzcyB0b2RvIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9qZWN0LCB1aWQsIHRpdGxlLCBkdWVkYXRlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGlzQ29tcGxldGUpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICAgICAgdGhpcy51aWQgPSB1aWQ7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kdWVkYXRlID0gZHVlZGF0ZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMuaXNDb21wbGV0ZSA9IGlzQ29tcGxldGVcbiAgICB9XG5cbiAgICBnZXRVSUQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVpZDtcbiAgICB9XG5cbiAgICBnZXRUaXRsZSAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRpdGxlO1xuICAgIH1cblxuICAgIGdldER1ZURhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmR1ZWRhdGU7XG4gICAgfVxuXG4gICAgZ2V0RGVzY3JpcHRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIGdldFByaW9yaXR5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcmlvcml0eTtcbiAgICB9XG5cbiAgICBnZXRUYXNrUHJvamVjdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdDtcbiAgICB9XG5cbiAgICBnZXRJc0NvbXBsZXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc0NvbXBsZXRlO1xuICAgIH1cblxuICAgIHNldElzQ29tcGxldGUoaSkge1xuICAgICAgICBpZihpPT10cnVlKSB7XG4gICAgICAgICAgICB0aGlzLmlzQ29tcGxldGUgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYoaT09ZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMuaXNDb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFza0Vycm9yT2JqZWN0Lndyb25nSXNDb21wbGV0ZUlEKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld1RvRG8ocHJvamVjdCwgdWlkLCB0aXRsZSwgZHVlZGF0ZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBpc0NvbXBsZXRlKSB7XG4gICAgY29uc3QgbmV3VG9EbyA9IG5ldyB0b2RvKHByb2plY3QsIHVpZCwgdGl0bGUsIGR1ZWRhdGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgaXNDb21wbGV0ZSk7XG4gICAgcmV0dXJuIG5ld1RvRG87XG59XG5cbmZ1bmN0aW9uIGNoZWNrSWZUYXNrKHQxKSB7XG4gICAgaWYodDEgaW5zdGFuY2VvZiB0b2RvKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCB7Y3JlYXRlTmV3VG9EbywgY2hlY2tJZlRhc2t9OyIsImltcG9ydCB7IGNoZWNrSWZUYXNrIH0gZnJvbSBcIi4vdG9kb1wiO1xuaW1wb3J0IHsgdGFza0Vycm9yT2JqZWN0IH0gZnJvbSBcIi4vZXJyb3JIYW5kbGVyXCI7XG5cbmNsYXNzIHRhc2tMaXN0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy50YXNrTGlzdCA9IFtdO1xuICAgICAgICB0aGlzLmNvdW50ZXIgPSAwO1xuICAgIH1cblxuXG4gICAgdGFza0xpc3RBcHBlbmQodGFzaykge1xuICAgICAgICBpZihjaGVja0lmVGFzayh0YXNrKSkge1xuICAgICAgICAgICAgdGhpcy50YXNrTGlzdC5wdXNoKHRhc2spO1xuICAgICAgICAgICAgdGhpcy5jb3VudGVyICs9IDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0YXNrRXJyb3JPYmplY3Qubm90VGFza0Vycm9yKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRDdXJyZW50Q291bnRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY291bnRlcjtcbiAgICB9XG5cbiAgICBnZXRUYXNrTGlzdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFza0xpc3Q7XG4gICAgfVxuXG4gICAgZ2V0VGFza3NPZlByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICAgICAgbGV0IG5ld1Rhc2tMaXN0ID0gW107XG4gICAgXG4gICAgICAgIGZvcihsZXQgaT0wO2k8dGhpcy50YXNrTGlzdC5sZW5ndGg7aSsrKSB7XG4gICAgICAgICAgICBpZih0aGlzLnRhc2tMaXN0W2ldLmdldFRhc2tQcm9qZWN0KCk9PXByb2plY3ROYW1lKSB7XG4gICAgICAgICAgICAgICAgbmV3VGFza0xpc3QucHVzaCh0aGlzLnRhc2tMaXN0W2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIFxuICAgICAgICByZXR1cm4gbmV3VGFza0xpc3Q7XG4gICAgfVxuXG4gICAgZ2V0Q29tcGxldGVUYXNrc09mUHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgICAgICBsZXQgbmV3VGFza0xpc3QgPSBbXTtcbiAgICAgICAgZm9yKGxldCBpPTA7aTx0aGlzLnRhc2tMaXN0Lmxlbmd0aDtpKyspIHtcbiAgICAgICAgICAgIGlmKHRoaXMudGFza0xpc3RbaV0uZ2V0VGFza1Byb2plY3QoKSA9PSBwcm9qZWN0TmFtZSAmJiB0aGlzLnRhc2tMaXN0W2ldLmdldElzQ29tcGxldGUoKSA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgbmV3VGFza0xpc3QucHVzaCh0aGlzLnRhc2tMaXN0W2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3VGFza0xpc3Q7XG4gICAgfVxuXG4gICAgZ2V0SW5jb21wbGV0ZVRhc2tzT2ZQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgICAgIGxldCBuZXdUYXNrTGlzdCA9IFtdO1xuICAgICAgICBmb3IobGV0IGk9MDtpPHRoaXMudGFza0xpc3QubGVuZ3RoO2krKykge1xuICAgICAgICAgICAgaWYodGhpcy50YXNrTGlzdFtpXS5nZXRUYXNrUHJvamVjdCgpID09IHByb2plY3ROYW1lICYmIHRoaXMudGFza0xpc3RbaV0uZ2V0SXNDb21wbGV0ZSgpID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgbmV3VGFza0xpc3QucHVzaCh0aGlzLnRhc2tMaXN0W2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3VGFza0xpc3Q7XG4gICAgfVxuXG5cbiAgICBkZWxldGVUYXNrKHRhc2tVSUQpIHtcbiAgICAgICAgbGV0IGk9MDtcbiAgICAgICAgbGV0IGl0ZW1Ub0RlbGV0ZSA9IC0xO1xuICAgICAgICB3aGlsZShpPHRoaXMudGFza0xpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZih0aGlzLnRhc2tMaXN0W2ldLmdldFVJRCgpID09IHRhc2tVSUQpIHtcbiAgICAgICAgICAgICAgICBpdGVtVG9EZWxldGUgPSBpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgICAgIGlmKGl0ZW1Ub0RlbGV0ZSA9PSAtMSkge1xuICAgICAgICAgICAgdGFza0Vycm9yT2JqZWN0LnRhc2tOb3RGb3VuZCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50YXNrTGlzdC5zcGxpY2UoaSwxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldENvbXBsZXRlKHRhc2tVSUQpIHtcbiAgICAgICAgbGV0IGk9MDtcbiAgICAgICAgbGV0IGl0ZW1Ub1NldCA9IC0xO1xuICAgICAgICB3aGlsZShpPHRoaXMudGFza0xpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZih0aGlzLnRhc2tMaXN0W2ldLmdldFVJRCgpID09IHRhc2tVSUQpIHtcbiAgICAgICAgICAgICAgICBpdGVtVG9TZXQgPSBpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgICAgIGlmKGl0ZW1Ub1NldCA9PSAtMSkge1xuICAgICAgICAgICAgdGFza0Vycm9yT2JqZWN0LnRhc2tOb3RGb3VuZCgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGFza1VJRCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZih0aGlzLnRhc2tMaXN0W2ldLmdldElzQ29tcGxldGUoKSA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50YXNrTGlzdFtpXS5zZXRJc0NvbXBsZXRlKGZhbHNlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy50YXNrTGlzdFtpXS5zZXRJc0NvbXBsZXRlKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5jb25zdCB0YXNrTGlzdEluc3RhbmNlID0gbmV3IHRhc2tMaXN0O1xuXG5leHBvcnQge3Rhc2tMaXN0SW5zdGFuY2V9OyIsImltcG9ydCB7IHRhc2tMaXN0SW5zdGFuY2UgfSBmcm9tIFwiLi90b2RvTGlzdFwiO1xuaW1wb3J0IHsgY3JlYXRlTmV3VGFza0Rpc3BsYXkgfSBmcm9tIFwiLi9jcmVhdGVUb2RvRWxlbWVudFwiO1xuaW1wb3J0IHsgdXBkYXRlSG9tZVBhZ2VMaXN0ZW5lciB9IGZyb20gXCIuL2luaXRFdmVudExpc3RlbmVyc1wiO1xuXG5mdW5jdGlvbiB1cGRhdGVUb2RvUGFnZSgpIHtcbiAgICBjb25zdCB0b2RvRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tbGlzdCcpO1xuXG5cbiAgICB0b2RvRGl2LmlubmVySFRNTCA9IFwiXCI7XG4gICAgY29uc3QgcHJvamVjdFNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpc3QtcHJvamVjdC1zZWxlY3RvcicpO1xuICAgIFxuICAgIGNvbnN0IHNlbGVjdGVkUHJvamVjdFRhc2tzID0gQXJyYXkuZnJvbSh0YXNrTGlzdEluc3RhbmNlLmdldFRhc2tzT2ZQcm9qZWN0KHByb2plY3RTZWxlY3Rvci52YWx1ZSkpO1xuICAgIGZvcihsZXQgaT0wO2k8c2VsZWN0ZWRQcm9qZWN0VGFza3MubGVuZ3RoO2krKykge1xuICAgICAgICBsZXQgbmV3VGFzayA9IGNyZWF0ZU5ld1Rhc2tEaXNwbGF5KHNlbGVjdGVkUHJvamVjdFRhc2tzW2ldKTtcbiAgICAgICAgdG9kb0Rpdi5hcHBlbmRDaGlsZChuZXdUYXNrKTtcbiAgICB9XG4gICAgdXBkYXRlSG9tZVBhZ2VMaXN0ZW5lcigpO1xufVxuXG5leHBvcnQge3VwZGF0ZVRvZG9QYWdlfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGNyZWF0ZU5ld1RvRG8gfSBmcm9tIFwiLi90b2RvXCI7XG5pbXBvcnQgeyBjcmVhdGVOZXdQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHsgdGFza0xpc3RJbnN0YW5jZSB9IGZyb20gXCIuL3RvZG9MaXN0XCI7XG5pbXBvcnQgeyBwcm9qZWN0TGlzdEluc3RhbmNlIH0gZnJvbSBcIi4vcHJvamVjdExpc3RcIjtcbmltcG9ydCB7IGluaXRfcGFnZSB9IGZyb20gXCIuL2luaXRfcGFnZVwiO1xuXG5cblxuXG5cbmNvbnN0IHAxID0gY3JlYXRlTmV3UHJvamVjdChwcm9qZWN0TGlzdEluc3RhbmNlLmdldEN1cnJlbnRQcm9qZWN0Q291bnRlcigpLFwiQ2F0c1wiLFwiQmx1ZVwiKTtcbnByb2plY3RMaXN0SW5zdGFuY2UucHJvamVjdExpc3RBcHBlbmQocDEpO1xuXG5jb25zdCBwMiA9IGNyZWF0ZU5ld1Byb2plY3QocHJvamVjdExpc3RJbnN0YW5jZS5nZXRDdXJyZW50UHJvamVjdENvdW50ZXIoKSxcIlByb2plY3QgMlwiLFwiR3JlZW5cIik7XG5wcm9qZWN0TGlzdEluc3RhbmNlLnByb2plY3RMaXN0QXBwZW5kKHAyKTtcbmNvbnNvbGUubG9nKHByb2plY3RMaXN0SW5zdGFuY2UuZ2V0UHJvamVjdExpc3QoKSk7XG5cblxuXG5cblxuY29uc3QgdDEgPSBjcmVhdGVOZXdUb0RvKHAxLmdldFByb2plY3ROYW1lKCksdGFza0xpc3RJbnN0YW5jZS5nZXRDdXJyZW50Q291bnRlcigpLFwiVGVzdFwiLFwiVGVzdFwiLFwiVGVzdFwiLDIsIHRydWUpO1xudGFza0xpc3RJbnN0YW5jZS50YXNrTGlzdEFwcGVuZCh0MSk7XG5jb25zdCB0MiA9IGNyZWF0ZU5ld1RvRG8ocDEuZ2V0UHJvamVjdE5hbWUoKSx0YXNrTGlzdEluc3RhbmNlLmdldEN1cnJlbnRDb3VudGVyKCksXCJNaWF3XCIsXCJUZXN0XCIsXCJUZXN0XCIsMSwgZmFsc2UpO1xudGFza0xpc3RJbnN0YW5jZS50YXNrTGlzdEFwcGVuZCh0Mik7XG5cbmNvbnNvbGUubG9nKHRhc2tMaXN0SW5zdGFuY2UuZ2V0VGFza0xpc3QoKSk7XG5cbmNvbnNvbGUubG9nKHRhc2tMaXN0SW5zdGFuY2UuZ2V0VGFza3NPZlByb2plY3QoXCJDYXRzXCIpKTtcblxuaW5pdF9wYWdlKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=