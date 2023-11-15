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

function initHomePageListener() {
    addSelectEventListner();
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


function loadTaskInputForm() {
    let taskInputDiv = document.createElement('div');
    taskInputDiv.classList.add('task-input-container');
    taskInputDiv.innerHTML = "This is where the task input form will go";
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
/* harmony export */   deleteTask: () => (/* binding */ deleteTask),
/* harmony export */   taskComplete: () => (/* binding */ taskComplete)
/* harmony export */ });
/* harmony import */ var _todoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoList */ "./src/todoList.js");
/* harmony import */ var _updatePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updatePage */ "./src/updatePage.js");




function addNewTask() {

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
/* harmony import */ var _initEventListeners__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./initEventListeners */ "./src/initEventListeners.js");










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
(0,_initEventListeners__WEBPACK_IMPORTED_MODULE_5__.initHomePageListener)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7OztBQ051QztBQUNNO0FBQ0M7QUFDTTtBQUNaO0FBQ29COzs7OztBQUs1RCxXQUFXLDBEQUFnQixDQUFDLDZEQUFtQjtBQUMvQyw2REFBbUI7O0FBRW5CLFdBQVcsMERBQWdCLENBQUMsNkRBQW1CO0FBQy9DLDZEQUFtQjtBQUNuQixZQUFZLDZEQUFtQjs7Ozs7O0FBTS9CLFdBQVcsb0RBQWEscUJBQXFCLHVEQUFnQjtBQUM3RCx1REFBZ0I7QUFDaEIsV0FBVyxvREFBYSxxQkFBcUIsdURBQWdCO0FBQzdELHVEQUFnQjs7QUFFaEIsWUFBWSx1REFBZ0I7O0FBRTVCLFlBQVksdURBQWdCOztBQUU1QixxREFBUztBQUNULHlFQUFvQixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL2NyZWF0ZVByb2plY3RTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvY3JlYXRlVG9kb0VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL2Vycm9ySGFuZGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvaW5pdEV2ZW50TGlzdGVuZXJzLmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy9pbml0X3BhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL3Byb2plY3RMaXN0LmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy90YXNrRnVuY3Rpb25hbGl0eS5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvdG9kb0xpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL3VwZGF0ZVBhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHByb2plY3RMaXN0SW5zdGFuY2UgfSBmcm9tIFwiLi9wcm9qZWN0TGlzdFwiO1xuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0U2VsZWN0b3IoKSB7XG4gICAgbGV0IHByb2plY3RTZWxlY3RvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIHByb2plY3RTZWxlY3Rvci5jbGFzc0xpc3QuYWRkKCdzZWxlY3RvcicpO1xuICAgIHByb2plY3RTZWxlY3Rvci5uYW1lID0gXCJwcm9qZWN0LXNlbGVjdG9yXCI7XG5cbiAgICBjb25zdCBwcm9qZWN0cyA9IEFycmF5LmZyb20ocHJvamVjdExpc3RJbnN0YW5jZS5nZXRQcm9qZWN0TGlzdCgpKTtcbiAgICBmb3IobGV0IGk9MDsgaTxwcm9qZWN0cy5sZW5ndGg7aSsrKSB7XG4gICAgICAgIGxldCBwcm9qZWN0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIHByb2plY3RPcHRpb24udmFsdWUgPSBwcm9qZWN0c1tpXS5nZXRQcm9qZWN0TmFtZSgpO1xuICAgICAgICBwcm9qZWN0T3B0aW9uLmlubmVySFRNTCA9IHByb2plY3RzW2ldLmdldFByb2plY3ROYW1lKCk7XG4gICAgICAgIHByb2plY3RTZWxlY3Rvci5hcHBlbmRDaGlsZChwcm9qZWN0T3B0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvamVjdFNlbGVjdG9yO1xufVxuXG5leHBvcnQge2NyZWF0ZVByb2plY3RTZWxlY3Rvcn07IiwiZnVuY3Rpb24gY3JlYXRlVGFza1RpdGxlVUkodGFza1RpdGxlKSB7XG4gICAgbGV0IG5ld1Rhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld1Rhc2tUaXRsZS5pbm5lckhUTUwgPSB0YXNrVGl0bGU7XG4gICAgcmV0dXJuIG5ld1Rhc2tUaXRsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFza0R1ZVVJKHRhc2tEdWVEYXRlKSB7XG4gICAgbGV0IG5ld1Rhc2tEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmV3VGFza0R1ZURhdGUuaW5uZXJIVE1MID0gdGFza0R1ZURhdGU7XG4gICAgcmV0dXJuIG5ld1Rhc2tEdWVEYXRlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrRGVzY3JpcHRpb24odGFza0Rlc2NyaXB0aW9uKSB7XG4gICAgbGV0IG5ld1Rhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld1Rhc2tEZXNjcmlwdGlvbi5pbm5lckhUTUwgPSB0YXNrRGVzY3JpcHRpb247XG4gICAgcmV0dXJuIG5ld1Rhc2tEZXNjcmlwdGlvbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFza1ByaW9yaXR5KHRhc2tQcmlvcml0eSkge1xuICAgIGxldCBuZXdUYXNrUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpZih0YXNrUHJpb3JpdHkgPT0gMSkge1xuICAgICAgICBuZXdUYXNrUHJpb3JpdHkuaW5uZXJIVE1MID0gXCJIaWdoXCI7XG4gICAgfSBlbHNlIGlmKHRhc2tQcmlvcml0eSA9PSAyKSB7XG4gICAgICAgIG5ld1Rhc2tQcmlvcml0eS5pbm5lckhUTUwgPSBcIk1lZGl1bVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld1Rhc2tQcmlvcml0eS5pbm5lckhUTUwgPSBcIkxvd1wiO1xuICAgIH1cbiAgICByZXR1cm4gbmV3VGFza1ByaW9yaXR5O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrQnV0dG9uR3JvdXAodWlkKSB7XG4gICAgbGV0IG5ld1Rhc2tCdXR0b25Hcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIFxuICAgIGxldCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBkZWxldGVCdXR0b24uaWQgPSBcInRhc2stZGVsLWJ1dHRvblwiO1xuICAgIGRlbGV0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLHVpZCk7XG4gICAgZGVsZXRlQnV0dG9uLmlubmVySFRNTCA9IFwiRGVsZXRlXCI7XG4gICAgbmV3VGFza0J1dHRvbkdyb3VwLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG5cbiAgICBsZXQgY29tcGxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb21wbGV0ZUJ1dHRvbi5pbm5lckhUTUwgPSBcIkNvbXBsZXRlXCI7XG4gICAgY29tcGxldGVCdXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLWlkJyx1aWQpO1xuICAgIGNvbXBsZXRlQnV0dG9uLmlkID0gXCJ0YXNrLWNvbXAtYnV0dG9uXCI7XG4gICAgbmV3VGFza0J1dHRvbkdyb3VwLmFwcGVuZENoaWxkKGNvbXBsZXRlQnV0dG9uKTtcblxuICAgIHJldHVybiBuZXdUYXNrQnV0dG9uR3JvdXA7XG59XG5cblxuZnVuY3Rpb24gY3JlYXRlTmV3VGFza0Rpc3BsYXkodGFzaykge1xuICAgIGxldCBuZXdUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIFxuICAgIGNvbnN0IG5ld1Rhc2tUaXRsZSA9IGNyZWF0ZVRhc2tUaXRsZVVJKHRhc2suZ2V0VGl0bGUoKSk7XG4gICAgbmV3VGFzay5hcHBlbmRDaGlsZChuZXdUYXNrVGl0bGUpO1xuICAgIFxuICAgIGNvbnN0IG5ld1Rhc2tEdWVEYXRlID0gY3JlYXRlVGFza0R1ZVVJKHRhc2suZ2V0RHVlRGF0ZSgpKTtcbiAgICBuZXdUYXNrLmFwcGVuZENoaWxkKG5ld1Rhc2tEdWVEYXRlKTtcblxuICAgIGNvbnN0IG5ld1Rhc2tEZXNjcmlwdGlvbiA9IGNyZWF0ZVRhc2tEZXNjcmlwdGlvbih0YXNrLmdldERlc2NyaXB0aW9uKCkpO1xuICAgIG5ld1Rhc2suYXBwZW5kQ2hpbGQobmV3VGFza0Rlc2NyaXB0aW9uKTtcblxuICAgIGNvbnN0IG5ld1Rhc2tQcmlvcml0eSA9IGNyZWF0ZVRhc2tQcmlvcml0eSh0YXNrLmdldFByaW9yaXR5KCkpO1xuICAgIG5ld1Rhc2suYXBwZW5kQ2hpbGQobmV3VGFza1ByaW9yaXR5KTtcblxuICAgIGlmKHRhc2suZ2V0SXNDb21wbGV0ZSgpID09IHRydWUpIHtcbiAgICAgICAgbmV3VGFzay5zdHlsZS5jb2xvciA9IFwicmVkXCI7XG4gICAgfVxuXG4gICAgY29uc3QgYnV0dG9uR3JvdXAgPSBjcmVhdGVUYXNrQnV0dG9uR3JvdXAodGFzay5nZXRVSUQoKSk7XG4gICAgbmV3VGFzay5hcHBlbmRDaGlsZChidXR0b25Hcm91cCk7XG5cbiAgICByZXR1cm4gbmV3VGFzaztcbn1cblxuZXhwb3J0IHtjcmVhdGVOZXdUYXNrRGlzcGxheX07IiwiY2xhc3MgdGFza0Vycm9ycyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB9XG5cbiAgICBub3RUYXNrRXJyb3IoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVHJpZWQgaW5zZXJ0aW5nIGFuIGl0ZW0gdGhhdCB3YXMgbm90IGNsYXNzIHRvZG8gaW50byB0aGUgdGFzayBsaXN0XCIpO1xuICAgIH1cblxuICAgIHRhc2tOb3RGb3VuZCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0YXNrIHdpdGggdGhlIHJlcXVpcmVkIFVJRCBub3QgZm91bmRcIik7XG4gICAgfVxuXG4gICAgd3JvbmdJc0NvbXBsZXRlSUQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwid3JvbmcgZGF0YSB2YWx1ZSBoYXMgYmVlbiBwcm92aWRlZCB0byBzZXQgdGhlIGlzIGNvbXBsZXRlIGZvciBhIHRhc2tcIilcbiAgICB9XG59XG5cbmNsYXNzIHByb2plY3RFcnJvcnMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuXG4gICAgbm90UHJvamVjdEVycm9yKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlRyaWVkIGluc2VydGluZyBhbiBpdGVtIHRoYXQgd2FzIG5vdCBhIHByb2plY3QgaW50byBwcm9qZWN0IGxpc3RcIik7XG4gICAgfVxufVxuXG5jb25zdCB0YXNrRXJyb3JPYmplY3QgPSBuZXcgdGFza0Vycm9ycztcbmNvbnN0IHByb2plY3RFcnJvck9iamVjdCA9IG5ldyBwcm9qZWN0RXJyb3JzXG5cbmV4cG9ydCB7dGFza0Vycm9yT2JqZWN0LCBwcm9qZWN0RXJyb3JPYmplY3R9OyIsImltcG9ydCB7IHVwZGF0ZVRvZG9QYWdlIH0gZnJvbSBcIi4vdXBkYXRlUGFnZVwiO1xuaW1wb3J0IHsgZGVsZXRlVGFzaywgdGFza0NvbXBsZXRlIH0gZnJvbSBcIi4vdGFza0Z1bmN0aW9uYWxpdHlcIjtcblxuZnVuY3Rpb24gYWRkU2VsZWN0RXZlbnRMaXN0bmVyKCkge1xuICAgIGNvbnN0IGdldFRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VsZWN0b3ItYnV0dG9uJyk7XG4gICAgZ2V0VGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHVwZGF0ZVRvZG9QYWdlKTtcbn1cblxuZnVuY3Rpb24gYWRkRGVsZXRlVGFza0V2ZW50TGlzdGVuZXIoKSB7XG4gICAgY29uc3QgZGVsQnV0dG9ucyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3Rhc2stZGVsLWJ1dHRvbicpKTtcbiAgICBmb3IobGV0IGk9MDtpPGRlbEJ1dHRvbnMubGVuZ3RoO2krKykge1xuICAgICAgICBkZWxCdXR0b25zW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxkZWxldGVUYXNrKTtcbiAgICB9ICAgXG59XG5cbmZ1bmN0aW9uIGFkZENvbXBsZXRlVGFza0V2ZW50TGlzdGVuZXIoKSB7XG4gICAgY29uc3QgY29tcGxldGVCdXR0b25zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjdGFzay1jb21wLWJ1dHRvbicpKTtcbiAgICBmb3IobGV0IGk9MDtpPGNvbXBsZXRlQnV0dG9ucy5sZW5ndGg7aSsrKSB7XG4gICAgICAgIGNvbXBsZXRlQnV0dG9uc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsdGFza0NvbXBsZXRlKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGluaXRIb21lUGFnZUxpc3RlbmVyKCkge1xuICAgIGFkZFNlbGVjdEV2ZW50TGlzdG5lcigpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVIb21lUGFnZUxpc3RlbmVyKCkge1xuICAgIGFkZERlbGV0ZVRhc2tFdmVudExpc3RlbmVyKCk7XG4gICAgYWRkQ29tcGxldGVUYXNrRXZlbnRMaXN0ZW5lcigpO1xufVxuXG5leHBvcnQge2luaXRIb21lUGFnZUxpc3RlbmVyLCB1cGRhdGVIb21lUGFnZUxpc3RlbmVyfTsiLCJpbXBvcnQgeyBjcmVhdGVQcm9qZWN0U2VsZWN0b3IgfSBmcm9tIFwiLi9jcmVhdGVQcm9qZWN0U2VsZWN0b3JcIjtcblxuZnVuY3Rpb24gbG9hZFRhc2tJbnB1dEZvcm0oKSB7XG4gICAgbGV0IHRhc2tJbnB1dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tJbnB1dERpdi5jbGFzc0xpc3QuYWRkKCd0YXNrLWlucHV0LWNvbnRhaW5lcicpO1xuICAgIHRhc2tJbnB1dERpdi5pbm5lckhUTUwgPSBcIlRoaXMgaXMgd2hlcmUgdGhlIHRhc2sgaW5wdXQgZm9ybSB3aWxsIGdvXCI7XG4gICAgcmV0dXJuIHRhc2tJbnB1dERpdjtcbn1cblxuZnVuY3Rpb24gbG9hZFByb2plY3RTZWxlY3RvcigpIHtcbiAgICBsZXQgcHJvamVjdFNlbGVjdG9yRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdFNlbGVjdG9yRGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3Qtc2VsZWN0b3ItZGl2Jyk7XG4gICAgXG4gICAgbGV0IHByb2plY3RTZWxlY3RvciA9IGNyZWF0ZVByb2plY3RTZWxlY3RvcigpO1xuICAgIHByb2plY3RTZWxlY3Rvci5pZCA9IFwibGlzdC1wcm9qZWN0LXNlbGVjdG9yXCI7XG4gICAgcHJvamVjdFNlbGVjdG9yRGl2LmFwcGVuZENoaWxkKHByb2plY3RTZWxlY3Rvcik7XG5cbiAgICBsZXQgc2VsZWN0b3JCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzZWxlY3RvckJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b24nKTtcbiAgICBzZWxlY3RvckJ1dHRvbi5pZCA9IFwic2VsZWN0b3ItYnV0dG9uXCI7XG4gICAgc2VsZWN0b3JCdXR0b24uaW5uZXJIVE1MID0gXCJTZWxlY3RcIjtcbiAgICBwcm9qZWN0U2VsZWN0b3JEaXYuYXBwZW5kQ2hpbGQoc2VsZWN0b3JCdXR0b24pO1xuICAgIHJldHVybiBwcm9qZWN0U2VsZWN0b3JEaXY7XG59XG5cbmZ1bmN0aW9uIGluaXRUb2RvVUkoKSB7XG4gICAgbGV0IHRvZG9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvRGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG8tbGlzdCcpO1xuICAgIHRvZG9EaXYuaW5uZXJIVE1MID0gXCJObyBDaGFwdGVyIFNlbGVjdGVkXCI7XG4gICAgcmV0dXJuIHRvZG9EaXY7XG59XG5cbmZ1bmN0aW9uIGluaXRfcGFnZSgpIHtcbiAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGxvYWRUYXNrSW5wdXRGb3JtKCkpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobG9hZFByb2plY3RTZWxlY3RvcigpKTtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGluaXRUb2RvVUkoKSk7XG59XG5cbmV4cG9ydCB7aW5pdF9wYWdlfTsiLCJjbGFzcyBwcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3Rvcih1aWQsIHByb2plY3ROYW1lLCBwcm9qZWN0Q29sb3IpIHtcbiAgICAgICAgdGhpcy51aWQgPSB1aWQ7XG4gICAgICAgIHRoaXMucHJvamVjdE5hbWUgPSBwcm9qZWN0TmFtZTtcbiAgICAgICAgdGhpcy5wcm9qZWN0Q29sb3IgPSBwcm9qZWN0Q29sb3I7XG4gICAgfVxuXG4gICAgZ2V0UHJvamVjdE5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3ROYW1lO1xuICAgIH1cblxuICAgIGdldFByb2plY3RDb2xvcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdENvbG9yO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlTmV3UHJvamVjdCh1aWQscHJvamVjdE5hbWUsIHByb2plY3RDb2xvcikge1xuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgcHJvamVjdCh1aWQsIHByb2plY3ROYW1lLHByb2plY3RDb2xvcik7XG4gICAgcmV0dXJuIG5ld1Byb2plY3Q7XG59XG5cbmZ1bmN0aW9uIGNoZWNrSWZQcm9qZWN0KHApIHtcbiAgICBpZihwIGluc3RhbmNlb2YgcHJvamVjdCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQge2NyZWF0ZU5ld1Byb2plY3QsIGNoZWNrSWZQcm9qZWN0fTsiLCJpbXBvcnQgeyBjaGVja0lmUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7IHByb2plY3RFcnJvck9iamVjdCB9IGZyb20gXCIuL2Vycm9ySGFuZGxlclwiO1xuXG5jbGFzcyBwcm9qZWN0TGlzdCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucHJvamVjdExpc3QgPSBbXTtcbiAgICAgICAgdGhpcy5wcm9qZWN0Q291bnRlciA9IDA7XG4gICAgfVxuXG4gICAgcHJvamVjdExpc3RBcHBlbmQocHJvamVjdCkge1xuICAgICAgICBpZihjaGVja0lmUHJvamVjdChwcm9qZWN0KSkge1xuICAgICAgICAgICAgdGhpcy5wcm9qZWN0TGlzdC5wdXNoKHByb2plY3QpO1xuICAgICAgICAgICAgdGhpcy5wcm9qZWN0Q291bnRlcisrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvamVjdEVycm9yT2JqZWN0Lm5vdFByb2plY3RFcnJvcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0UHJvamVjdExpc3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RMaXN0XG4gICAgfVxuXG4gICAgZ2V0Q3VycmVudFByb2plY3RDb3VudGVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0Q291bnRlcjtcbiAgICB9XG59XG5cblxuLy9NYWtlIGRlbGV0ZSB0YXNrXG5cbmNvbnN0IHByb2plY3RMaXN0SW5zdGFuY2UgPSBuZXcgcHJvamVjdExpc3Q7XG5cbmV4cG9ydCB7cHJvamVjdExpc3RJbnN0YW5jZX07IiwiaW1wb3J0IHsgdGFza0xpc3RJbnN0YW5jZSB9IGZyb20gXCIuL3RvZG9MaXN0XCI7XG5pbXBvcnQgeyB1cGRhdGVUb2RvUGFnZSB9IGZyb20gXCIuL3VwZGF0ZVBhZ2VcIjtcblxuXG5mdW5jdGlvbiBhZGROZXdUYXNrKCkge1xuXG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVRhc2soZSkge1xuICAgIHRhc2tMaXN0SW5zdGFuY2UuZGVsZXRlVGFzayhlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7XG4gICAgdXBkYXRlVG9kb1BhZ2UoKTtcbn1cblxuZnVuY3Rpb24gdGFza0NvbXBsZXRlKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldCk7XG4gICAgdGFza0xpc3RJbnN0YW5jZS5zZXRDb21wbGV0ZShlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7XG4gICAgdXBkYXRlVG9kb1BhZ2UoKTtcbn1cblxuZXhwb3J0IHtkZWxldGVUYXNrLCB0YXNrQ29tcGxldGV9IiwiaW1wb3J0IHsgdGFza0Vycm9yT2JqZWN0IH0gZnJvbSBcIi4vZXJyb3JIYW5kbGVyXCI7XG5cbmNsYXNzIHRvZG8ge1xuICAgIGNvbnN0cnVjdG9yKHByb2plY3QsIHVpZCwgdGl0bGUsIGR1ZWRhdGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgaXNDb21wbGV0ZSkge1xuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgICAgICB0aGlzLnVpZCA9IHVpZDtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmR1ZWRhdGUgPSBkdWVkYXRlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5pc0NvbXBsZXRlID0gaXNDb21wbGV0ZVxuICAgIH1cblxuICAgIGdldFVJRCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudWlkO1xuICAgIH1cblxuICAgIGdldFRpdGxlICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGl0bGU7XG4gICAgfVxuXG4gICAgZ2V0RHVlRGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHVlZGF0ZTtcbiAgICB9XG5cbiAgICBnZXREZXNjcmlwdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgZ2V0UHJpb3JpdHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByaW9yaXR5O1xuICAgIH1cblxuICAgIGdldFRhc2tQcm9qZWN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0O1xuICAgIH1cblxuICAgIGdldElzQ29tcGxldGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzQ29tcGxldGU7XG4gICAgfVxuXG4gICAgc2V0SXNDb21wbGV0ZShpKSB7XG4gICAgICAgIGlmKGk9PXRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuaXNDb21wbGV0ZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZihpPT1mYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5pc0NvbXBsZXRlID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXNrRXJyb3JPYmplY3Qud3JvbmdJc0NvbXBsZXRlSUQoKTtcbiAgICAgICAgfVxuICAgIH1cblxufTtcblxuZnVuY3Rpb24gY3JlYXRlTmV3VG9Ebyhwcm9qZWN0LCB1aWQsIHRpdGxlLCBkdWVkYXRlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGlzQ29tcGxldGUpIHtcbiAgICBjb25zdCBuZXdUb0RvID0gbmV3IHRvZG8ocHJvamVjdCwgdWlkLCB0aXRsZSwgZHVlZGF0ZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBpc0NvbXBsZXRlKTtcbiAgICByZXR1cm4gbmV3VG9Ebztcbn1cblxuZnVuY3Rpb24gY2hlY2tJZlRhc2sodDEpIHtcbiAgICBpZih0MSBpbnN0YW5jZW9mIHRvZG8pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IHtjcmVhdGVOZXdUb0RvLCBjaGVja0lmVGFza307IiwiaW1wb3J0IHsgY2hlY2tJZlRhc2sgfSBmcm9tIFwiLi90b2RvXCI7XG5pbXBvcnQgeyB0YXNrRXJyb3JPYmplY3QgfSBmcm9tIFwiLi9lcnJvckhhbmRsZXJcIjtcblxuY2xhc3MgdGFza0xpc3Qge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnRhc2tMaXN0ID0gW107XG4gICAgICAgIHRoaXMuY291bnRlciA9IDA7XG4gICAgfVxuXG5cbiAgICB0YXNrTGlzdEFwcGVuZCh0YXNrKSB7XG4gICAgICAgIGlmKGNoZWNrSWZUYXNrKHRhc2spKSB7XG4gICAgICAgICAgICB0aGlzLnRhc2tMaXN0LnB1c2godGFzayk7XG4gICAgICAgICAgICB0aGlzLmNvdW50ZXIgKz0gMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRhc2tFcnJvck9iamVjdC5ub3RUYXNrRXJyb3IoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEN1cnJlbnRDb3VudGVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb3VudGVyO1xuICAgIH1cblxuICAgIGdldFRhc2tMaXN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy50YXNrTGlzdDtcbiAgICB9XG5cbiAgICBnZXRUYXNrc09mUHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgICAgICBsZXQgbmV3VGFza0xpc3QgPSBbXTtcbiAgICBcbiAgICAgICAgZm9yKGxldCBpPTA7aTx0aGlzLnRhc2tMaXN0Lmxlbmd0aDtpKyspIHtcbiAgICAgICAgICAgIGlmKHRoaXMudGFza0xpc3RbaV0uZ2V0VGFza1Byb2plY3QoKT09cHJvamVjdE5hbWUpIHtcbiAgICAgICAgICAgICAgICBuZXdUYXNrTGlzdC5wdXNoKHRoaXMudGFza0xpc3RbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXG4gICAgICAgIHJldHVybiBuZXdUYXNrTGlzdDtcbiAgICB9XG5cbiAgICBnZXRDb21wbGV0ZVRhc2tzT2ZQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgICAgIGxldCBuZXdUYXNrTGlzdCA9IFtdO1xuICAgICAgICBmb3IobGV0IGk9MDtpPHRoaXMudGFza0xpc3QubGVuZ3RoO2krKykge1xuICAgICAgICAgICAgaWYodGhpcy50YXNrTGlzdFtpXS5nZXRUYXNrUHJvamVjdCgpID09IHByb2plY3ROYW1lICYmIHRoaXMudGFza0xpc3RbaV0uZ2V0SXNDb21wbGV0ZSgpID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBuZXdUYXNrTGlzdC5wdXNoKHRoaXMudGFza0xpc3RbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdUYXNrTGlzdDtcbiAgICB9XG5cbiAgICBnZXRJbmNvbXBsZXRlVGFza3NPZlByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICAgICAgbGV0IG5ld1Rhc2tMaXN0ID0gW107XG4gICAgICAgIGZvcihsZXQgaT0wO2k8dGhpcy50YXNrTGlzdC5sZW5ndGg7aSsrKSB7XG4gICAgICAgICAgICBpZih0aGlzLnRhc2tMaXN0W2ldLmdldFRhc2tQcm9qZWN0KCkgPT0gcHJvamVjdE5hbWUgJiYgdGhpcy50YXNrTGlzdFtpXS5nZXRJc0NvbXBsZXRlKCkgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBuZXdUYXNrTGlzdC5wdXNoKHRoaXMudGFza0xpc3RbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdUYXNrTGlzdDtcbiAgICB9XG5cblxuICAgIGRlbGV0ZVRhc2sodGFza1VJRCkge1xuICAgICAgICBsZXQgaT0wO1xuICAgICAgICBsZXQgaXRlbVRvRGVsZXRlID0gLTE7XG4gICAgICAgIHdoaWxlKGk8dGhpcy50YXNrTGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmKHRoaXMudGFza0xpc3RbaV0uZ2V0VUlEKCkgPT0gdGFza1VJRCkge1xuICAgICAgICAgICAgICAgIGl0ZW1Ub0RlbGV0ZSA9IGk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpKys7XG4gICAgICAgIH1cbiAgICAgICAgaWYoaXRlbVRvRGVsZXRlID09IC0xKSB7XG4gICAgICAgICAgICB0YXNrRXJyb3JPYmplY3QudGFza05vdEZvdW5kKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRhc2tMaXN0LnNwbGljZShpLDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0Q29tcGxldGUodGFza1VJRCkge1xuICAgICAgICBsZXQgaT0wO1xuICAgICAgICBsZXQgaXRlbVRvU2V0ID0gLTE7XG4gICAgICAgIHdoaWxlKGk8dGhpcy50YXNrTGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmKHRoaXMudGFza0xpc3RbaV0uZ2V0VUlEKCkgPT0gdGFza1VJRCkge1xuICAgICAgICAgICAgICAgIGl0ZW1Ub1NldCA9IGk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpKys7XG4gICAgICAgIH1cbiAgICAgICAgaWYoaXRlbVRvU2V0ID09IC0xKSB7XG4gICAgICAgICAgICB0YXNrRXJyb3JPYmplY3QudGFza05vdEZvdW5kKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZih0aGlzLnRhc2tMaXN0W2ldLmdldElzQ29tcGxldGUoKSA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50YXNrTGlzdFtpXS5zZXRJc0NvbXBsZXRlKGZhbHNlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy50YXNrTGlzdFtpXS5zZXRJc0NvbXBsZXRlKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5jb25zdCB0YXNrTGlzdEluc3RhbmNlID0gbmV3IHRhc2tMaXN0O1xuXG5leHBvcnQge3Rhc2tMaXN0SW5zdGFuY2V9OyIsImltcG9ydCB7IHRhc2tMaXN0SW5zdGFuY2UgfSBmcm9tIFwiLi90b2RvTGlzdFwiO1xuaW1wb3J0IHsgY3JlYXRlTmV3VGFza0Rpc3BsYXkgfSBmcm9tIFwiLi9jcmVhdGVUb2RvRWxlbWVudFwiO1xuaW1wb3J0IHsgdXBkYXRlSG9tZVBhZ2VMaXN0ZW5lciB9IGZyb20gXCIuL2luaXRFdmVudExpc3RlbmVyc1wiO1xuXG5mdW5jdGlvbiB1cGRhdGVUb2RvUGFnZSgpIHtcbiAgICBjb25zdCB0b2RvRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tbGlzdCcpO1xuXG5cbiAgICB0b2RvRGl2LmlubmVySFRNTCA9IFwiXCI7XG4gICAgY29uc3QgcHJvamVjdFNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpc3QtcHJvamVjdC1zZWxlY3RvcicpO1xuICAgIFxuICAgIGNvbnN0IHNlbGVjdGVkUHJvamVjdFRhc2tzID0gQXJyYXkuZnJvbSh0YXNrTGlzdEluc3RhbmNlLmdldFRhc2tzT2ZQcm9qZWN0KHByb2plY3RTZWxlY3Rvci52YWx1ZSkpO1xuICAgIGZvcihsZXQgaT0wO2k8c2VsZWN0ZWRQcm9qZWN0VGFza3MubGVuZ3RoO2krKykge1xuICAgICAgICBsZXQgbmV3VGFzayA9IGNyZWF0ZU5ld1Rhc2tEaXNwbGF5KHNlbGVjdGVkUHJvamVjdFRhc2tzW2ldKTtcbiAgICAgICAgdG9kb0Rpdi5hcHBlbmRDaGlsZChuZXdUYXNrKTtcbiAgICB9XG4gICAgdXBkYXRlSG9tZVBhZ2VMaXN0ZW5lcigpO1xufVxuXG5leHBvcnQge3VwZGF0ZVRvZG9QYWdlfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGNyZWF0ZU5ld1RvRG8gfSBmcm9tIFwiLi90b2RvXCI7XG5pbXBvcnQgeyBjcmVhdGVOZXdQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHsgdGFza0xpc3RJbnN0YW5jZSB9IGZyb20gXCIuL3RvZG9MaXN0XCI7XG5pbXBvcnQgeyBwcm9qZWN0TGlzdEluc3RhbmNlIH0gZnJvbSBcIi4vcHJvamVjdExpc3RcIjtcbmltcG9ydCB7IGluaXRfcGFnZSB9IGZyb20gXCIuL2luaXRfcGFnZVwiO1xuaW1wb3J0IHsgaW5pdEhvbWVQYWdlTGlzdGVuZXIgfSBmcm9tIFwiLi9pbml0RXZlbnRMaXN0ZW5lcnNcIjtcblxuXG5cblxuY29uc3QgcDEgPSBjcmVhdGVOZXdQcm9qZWN0KHByb2plY3RMaXN0SW5zdGFuY2UuZ2V0Q3VycmVudFByb2plY3RDb3VudGVyKCksXCJDYXRzXCIsXCJCbHVlXCIpO1xucHJvamVjdExpc3RJbnN0YW5jZS5wcm9qZWN0TGlzdEFwcGVuZChwMSk7XG5cbmNvbnN0IHAyID0gY3JlYXRlTmV3UHJvamVjdChwcm9qZWN0TGlzdEluc3RhbmNlLmdldEN1cnJlbnRQcm9qZWN0Q291bnRlcigpLFwiUHJvamVjdCAyXCIsXCJHcmVlblwiKTtcbnByb2plY3RMaXN0SW5zdGFuY2UucHJvamVjdExpc3RBcHBlbmQocDIpO1xuY29uc29sZS5sb2cocHJvamVjdExpc3RJbnN0YW5jZS5nZXRQcm9qZWN0TGlzdCgpKTtcblxuXG5cblxuXG5jb25zdCB0MSA9IGNyZWF0ZU5ld1RvRG8ocDEuZ2V0UHJvamVjdE5hbWUoKSx0YXNrTGlzdEluc3RhbmNlLmdldEN1cnJlbnRDb3VudGVyKCksXCJUZXN0XCIsXCJUZXN0XCIsXCJUZXN0XCIsMiwgdHJ1ZSk7XG50YXNrTGlzdEluc3RhbmNlLnRhc2tMaXN0QXBwZW5kKHQxKTtcbmNvbnN0IHQyID0gY3JlYXRlTmV3VG9EbyhwMS5nZXRQcm9qZWN0TmFtZSgpLHRhc2tMaXN0SW5zdGFuY2UuZ2V0Q3VycmVudENvdW50ZXIoKSxcIk1pYXdcIixcIlRlc3RcIixcIlRlc3RcIiwxLCBmYWxzZSk7XG50YXNrTGlzdEluc3RhbmNlLnRhc2tMaXN0QXBwZW5kKHQyKTtcblxuY29uc29sZS5sb2codGFza0xpc3RJbnN0YW5jZS5nZXRUYXNrTGlzdCgpKTtcblxuY29uc29sZS5sb2codGFza0xpc3RJbnN0YW5jZS5nZXRUYXNrc09mUHJvamVjdChcIkNhdHNcIikpO1xuXG5pbml0X3BhZ2UoKTtcbmluaXRIb21lUGFnZUxpc3RlbmVyKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9