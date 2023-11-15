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

function createTaskButtonGroup() {
    let newTaskButtonGroup = document.createElement('div');
    
    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = "Delete";
    newTaskButtonGroup.appendChild(deleteButton);

    let completeButton = document.createElement('button');
    completeButton.innerHTML = "Complete";
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

    const buttonGroup = createTaskButtonGroup();
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

    deleteTask(taskName) {

    }
}

//Make delete task

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


function updateTodoPage() {
    const todoDiv = document.querySelector('.todo-list');


    todoDiv.innerHTML = "";
    const projectSelector = document.querySelector('#list-project-selector');
    
    const selectedProjectTasks = Array.from(_todoList__WEBPACK_IMPORTED_MODULE_0__.taskListInstance.getTasksOfProject(projectSelector.value));
    for(let i=0;i<selectedProjectTasks.length;i++) {
        let newTask = (0,_createTodoElement__WEBPACK_IMPORTED_MODULE_1__.createNewTaskDisplay)(selectedProjectTasks[i]);
        todoDiv.appendChild(newTask);
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
/* harmony import */ var _updatePage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./updatePage */ "./src/updatePage.js");










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

const getTaskButton = document.querySelector('#selector-button');
getTaskButton.addEventListener('click', _updatePage__WEBPACK_IMPORTED_MODULE_5__.updateTodoPage);


(0,_updatePage__WEBPACK_IMPORTED_MODULE_5__.updateTodoPage)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7OztBQ051QztBQUNNO0FBQ0M7QUFDTTtBQUNaO0FBQ007Ozs7O0FBSzlDLFdBQVcsMERBQWdCLENBQUMsNkRBQW1CO0FBQy9DLDZEQUFtQjs7QUFFbkIsV0FBVywwREFBZ0IsQ0FBQyw2REFBbUI7QUFDL0MsNkRBQW1CO0FBQ25CLFlBQVksNkRBQW1COzs7Ozs7QUFNL0IsV0FBVyxvREFBYSxxQkFBcUIsdURBQWdCO0FBQzdELHVEQUFnQjtBQUNoQixXQUFXLG9EQUFhLHFCQUFxQix1REFBZ0I7QUFDN0QsdURBQWdCOztBQUVoQixZQUFZLHVEQUFnQjs7QUFFNUIsWUFBWSx1REFBZ0I7O0FBRTVCLHFEQUFTOztBQUVUO0FBQ0Esd0NBQXdDLHVEQUFjOzs7QUFHdEQsMkRBQWMsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy9jcmVhdGVQcm9qZWN0U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL2NyZWF0ZVRvZG9FbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy9lcnJvckhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL2luaXRfcGFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvcHJvamVjdExpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL3RvZG9MaXN0LmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy91cGRhdGVQYWdlLmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwcm9qZWN0TGlzdEluc3RhbmNlIH0gZnJvbSBcIi4vcHJvamVjdExpc3RcIjtcblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdFNlbGVjdG9yKCkge1xuICAgIGxldCBwcm9qZWN0U2VsZWN0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBwcm9qZWN0U2VsZWN0b3IuY2xhc3NMaXN0LmFkZCgnc2VsZWN0b3InKTtcbiAgICBwcm9qZWN0U2VsZWN0b3IubmFtZSA9IFwicHJvamVjdC1zZWxlY3RvclwiO1xuXG4gICAgY29uc3QgcHJvamVjdHMgPSBBcnJheS5mcm9tKHByb2plY3RMaXN0SW5zdGFuY2UuZ2V0UHJvamVjdExpc3QoKSk7XG4gICAgZm9yKGxldCBpPTA7IGk8cHJvamVjdHMubGVuZ3RoO2krKykge1xuICAgICAgICBsZXQgcHJvamVjdE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBwcm9qZWN0T3B0aW9uLnZhbHVlID0gcHJvamVjdHNbaV0uZ2V0UHJvamVjdE5hbWUoKTtcbiAgICAgICAgcHJvamVjdE9wdGlvbi5pbm5lckhUTUwgPSBwcm9qZWN0c1tpXS5nZXRQcm9qZWN0TmFtZSgpO1xuICAgICAgICBwcm9qZWN0U2VsZWN0b3IuYXBwZW5kQ2hpbGQocHJvamVjdE9wdGlvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb2plY3RTZWxlY3Rvcjtcbn1cblxuZXhwb3J0IHtjcmVhdGVQcm9qZWN0U2VsZWN0b3J9OyIsImZ1bmN0aW9uIGNyZWF0ZVRhc2tUaXRsZVVJKHRhc2tUaXRsZSkge1xuICAgIGxldCBuZXdUYXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdUYXNrVGl0bGUuaW5uZXJIVE1MID0gdGFza1RpdGxlO1xuICAgIHJldHVybiBuZXdUYXNrVGl0bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tEdWVVSSh0YXNrRHVlRGF0ZSkge1xuICAgIGxldCBuZXdUYXNrRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld1Rhc2tEdWVEYXRlLmlubmVySFRNTCA9IHRhc2tEdWVEYXRlO1xuICAgIHJldHVybiBuZXdUYXNrRHVlRGF0ZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFza0Rlc2NyaXB0aW9uKHRhc2tEZXNjcmlwdGlvbikge1xuICAgIGxldCBuZXdUYXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdUYXNrRGVzY3JpcHRpb24uaW5uZXJIVE1MID0gdGFza0Rlc2NyaXB0aW9uO1xuICAgIHJldHVybiBuZXdUYXNrRGVzY3JpcHRpb247XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tQcmlvcml0eSh0YXNrUHJpb3JpdHkpIHtcbiAgICBsZXQgbmV3VGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaWYodGFza1ByaW9yaXR5ID09IDEpIHtcbiAgICAgICAgbmV3VGFza1ByaW9yaXR5LmlubmVySFRNTCA9IFwiSGlnaFwiO1xuICAgIH0gZWxzZSBpZih0YXNrUHJpb3JpdHkgPT0gMikge1xuICAgICAgICBuZXdUYXNrUHJpb3JpdHkuaW5uZXJIVE1MID0gXCJNZWRpdW1cIjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBuZXdUYXNrUHJpb3JpdHkuaW5uZXJIVE1MID0gXCJMb3dcIjtcbiAgICB9XG4gICAgcmV0dXJuIG5ld1Rhc2tQcmlvcml0eTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFza0J1dHRvbkdyb3VwKCkge1xuICAgIGxldCBuZXdUYXNrQnV0dG9uR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBcbiAgICBsZXQgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZGVsZXRlQnV0dG9uLmlubmVySFRNTCA9IFwiRGVsZXRlXCI7XG4gICAgbmV3VGFza0J1dHRvbkdyb3VwLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG5cbiAgICBsZXQgY29tcGxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb21wbGV0ZUJ1dHRvbi5pbm5lckhUTUwgPSBcIkNvbXBsZXRlXCI7XG4gICAgbmV3VGFza0J1dHRvbkdyb3VwLmFwcGVuZENoaWxkKGNvbXBsZXRlQnV0dG9uKTtcblxuICAgIHJldHVybiBuZXdUYXNrQnV0dG9uR3JvdXA7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld1Rhc2tEaXNwbGF5KHRhc2spIHtcbiAgICBsZXQgbmV3VGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBcbiAgICBjb25zdCBuZXdUYXNrVGl0bGUgPSBjcmVhdGVUYXNrVGl0bGVVSSh0YXNrLmdldFRpdGxlKCkpO1xuICAgIG5ld1Rhc2suYXBwZW5kQ2hpbGQobmV3VGFza1RpdGxlKTtcbiAgICBcbiAgICBjb25zdCBuZXdUYXNrRHVlRGF0ZSA9IGNyZWF0ZVRhc2tEdWVVSSh0YXNrLmdldER1ZURhdGUoKSk7XG4gICAgbmV3VGFzay5hcHBlbmRDaGlsZChuZXdUYXNrRHVlRGF0ZSk7XG5cbiAgICBjb25zdCBuZXdUYXNrRGVzY3JpcHRpb24gPSBjcmVhdGVUYXNrRGVzY3JpcHRpb24odGFzay5nZXREZXNjcmlwdGlvbigpKTtcbiAgICBuZXdUYXNrLmFwcGVuZENoaWxkKG5ld1Rhc2tEZXNjcmlwdGlvbik7XG5cbiAgICBjb25zdCBuZXdUYXNrUHJpb3JpdHkgPSBjcmVhdGVUYXNrUHJpb3JpdHkodGFzay5nZXRQcmlvcml0eSgpKTtcbiAgICBuZXdUYXNrLmFwcGVuZENoaWxkKG5ld1Rhc2tQcmlvcml0eSk7XG5cbiAgICBjb25zdCBidXR0b25Hcm91cCA9IGNyZWF0ZVRhc2tCdXR0b25Hcm91cCgpO1xuICAgIG5ld1Rhc2suYXBwZW5kQ2hpbGQoYnV0dG9uR3JvdXApO1xuXG4gICAgcmV0dXJuIG5ld1Rhc2s7XG59XG5cbmV4cG9ydCB7Y3JlYXRlTmV3VGFza0Rpc3BsYXl9OyIsImNsYXNzIHRhc2tFcnJvcnMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuXG4gICAgbm90VGFza0Vycm9yKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlRyaWVkIGluc2VydGluZyBhbiBpdGVtIHRoYXQgd2FzIG5vdCBjbGFzcyB0b2RvIGludG8gdGhlIHRhc2sgbGlzdFwiKTtcbiAgICB9XG59XG5cbmNsYXNzIHByb2plY3RFcnJvcnMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuXG4gICAgbm90UHJvamVjdEVycm9yKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlRyaWVkIGluc2VydGluZyBhbiBpdGVtIHRoYXQgd2FzIG5vdCBhIHByb2plY3QgaW50byBwcm9qZWN0IGxpc3RcIik7XG4gICAgfVxufVxuXG5jb25zdCB0YXNrRXJyb3JPYmplY3QgPSBuZXcgdGFza0Vycm9ycztcbmNvbnN0IHByb2plY3RFcnJvck9iamVjdCA9IG5ldyBwcm9qZWN0RXJyb3JzXG5cbmV4cG9ydCB7dGFza0Vycm9yT2JqZWN0LCBwcm9qZWN0RXJyb3JPYmplY3R9OyIsImltcG9ydCB7IGNyZWF0ZVByb2plY3RTZWxlY3RvciB9IGZyb20gXCIuL2NyZWF0ZVByb2plY3RTZWxlY3RvclwiO1xuXG5mdW5jdGlvbiBsb2FkVGFza0lucHV0Rm9ybSgpIHtcbiAgICBsZXQgdGFza0lucHV0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza0lucHV0RGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2staW5wdXQtY29udGFpbmVyJyk7XG4gICAgdGFza0lucHV0RGl2LmlubmVySFRNTCA9IFwiVGhpcyBpcyB3aGVyZSB0aGUgdGFzayBpbnB1dCBmb3JtIHdpbGwgZ29cIjtcbiAgICByZXR1cm4gdGFza0lucHV0RGl2O1xufVxuXG5mdW5jdGlvbiBsb2FkUHJvamVjdFNlbGVjdG9yKCkge1xuICAgIGxldCBwcm9qZWN0U2VsZWN0b3JEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0U2VsZWN0b3JEaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1zZWxlY3Rvci1kaXYnKTtcbiAgICBcbiAgICBsZXQgcHJvamVjdFNlbGVjdG9yID0gY3JlYXRlUHJvamVjdFNlbGVjdG9yKCk7XG4gICAgcHJvamVjdFNlbGVjdG9yLmlkID0gXCJsaXN0LXByb2plY3Qtc2VsZWN0b3JcIjtcbiAgICBwcm9qZWN0U2VsZWN0b3JEaXYuYXBwZW5kQ2hpbGQocHJvamVjdFNlbGVjdG9yKTtcblxuICAgIGxldCBzZWxlY3RvckJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHNlbGVjdG9yQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicpO1xuICAgIHNlbGVjdG9yQnV0dG9uLmlkID0gXCJzZWxlY3Rvci1idXR0b25cIjtcbiAgICBzZWxlY3RvckJ1dHRvbi5pbm5lckhUTUwgPSBcIlNlbGVjdFwiO1xuICAgIHByb2plY3RTZWxlY3RvckRpdi5hcHBlbmRDaGlsZChzZWxlY3RvckJ1dHRvbik7XG4gICAgcmV0dXJuIHByb2plY3RTZWxlY3RvckRpdjtcbn1cblxuZnVuY3Rpb24gaW5pdFRvZG9VSSgpIHtcbiAgICBsZXQgdG9kb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9EaXYuY2xhc3NMaXN0LmFkZCgndG9kby1saXN0Jyk7XG4gICAgdG9kb0Rpdi5pbm5lckhUTUwgPSBcIk5vIENoYXB0ZXIgU2VsZWN0ZWRcIjtcbiAgICByZXR1cm4gdG9kb0Rpdjtcbn1cblxuZnVuY3Rpb24gaW5pdF9wYWdlKCkge1xuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobG9hZFRhc2tJbnB1dEZvcm0oKSk7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChsb2FkUHJvamVjdFNlbGVjdG9yKCkpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoaW5pdFRvZG9VSSgpKTtcbn1cblxuZXhwb3J0IHtpbml0X3BhZ2V9OyIsImNsYXNzIHByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKHVpZCwgcHJvamVjdE5hbWUsIHByb2plY3RDb2xvcikge1xuICAgICAgICB0aGlzLnVpZCA9IHVpZDtcbiAgICAgICAgdGhpcy5wcm9qZWN0TmFtZSA9IHByb2plY3ROYW1lO1xuICAgICAgICB0aGlzLnByb2plY3RDb2xvciA9IHByb2plY3RDb2xvcjtcbiAgICB9XG5cbiAgICBnZXRQcm9qZWN0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdE5hbWU7XG4gICAgfVxuXG4gICAgZ2V0UHJvamVjdENvbG9yKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0Q29sb3I7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVOZXdQcm9qZWN0KHVpZCxwcm9qZWN0TmFtZSwgcHJvamVjdENvbG9yKSB7XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBwcm9qZWN0KHVpZCwgcHJvamVjdE5hbWUscHJvamVjdENvbG9yKTtcbiAgICByZXR1cm4gbmV3UHJvamVjdDtcbn1cblxuZnVuY3Rpb24gY2hlY2tJZlByb2plY3QocCkge1xuICAgIGlmKHAgaW5zdGFuY2VvZiBwcm9qZWN0KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCB7Y3JlYXRlTmV3UHJvamVjdCwgY2hlY2tJZlByb2plY3R9OyIsImltcG9ydCB7IGNoZWNrSWZQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHsgcHJvamVjdEVycm9yT2JqZWN0IH0gZnJvbSBcIi4vZXJyb3JIYW5kbGVyXCI7XG5cbmNsYXNzIHByb2plY3RMaXN0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0TGlzdCA9IFtdO1xuICAgICAgICB0aGlzLnByb2plY3RDb3VudGVyID0gMDtcbiAgICB9XG5cbiAgICBwcm9qZWN0TGlzdEFwcGVuZChwcm9qZWN0KSB7XG4gICAgICAgIGlmKGNoZWNrSWZQcm9qZWN0KHByb2plY3QpKSB7XG4gICAgICAgICAgICB0aGlzLnByb2plY3RMaXN0LnB1c2gocHJvamVjdCk7XG4gICAgICAgICAgICB0aGlzLnByb2plY3RDb3VudGVyKys7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9qZWN0RXJyb3JPYmplY3Qubm90UHJvamVjdEVycm9yKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRQcm9qZWN0TGlzdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdExpc3RcbiAgICB9XG5cbiAgICBnZXRDdXJyZW50UHJvamVjdENvdW50ZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RDb3VudGVyO1xuICAgIH1cbn1cblxuXG4vL01ha2UgZGVsZXRlIHRhc2tcblxuY29uc3QgcHJvamVjdExpc3RJbnN0YW5jZSA9IG5ldyBwcm9qZWN0TGlzdDtcblxuZXhwb3J0IHtwcm9qZWN0TGlzdEluc3RhbmNlfTsiLCJjbGFzcyB0b2RvIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9qZWN0LCB1aWQsIHRpdGxlLCBkdWVkYXRlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGlzQ29tcGxldGUpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICAgICAgdGhpcy51aWQgPSB1aWQ7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kdWVkYXRlID0gZHVlZGF0ZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMuaXNDb21wbGV0ZSA9IGlzQ29tcGxldGVcbiAgICB9XG5cbiAgICBnZXRVSUQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVpZDtcbiAgICB9XG5cbiAgICBnZXRUaXRsZSAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRpdGxlO1xuICAgIH1cblxuICAgIGdldER1ZURhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmR1ZWRhdGU7XG4gICAgfVxuXG4gICAgZ2V0RGVzY3JpcHRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIGdldFByaW9yaXR5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcmlvcml0eTtcbiAgICB9XG5cbiAgICBnZXRUYXNrUHJvamVjdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdDtcbiAgICB9XG5cbiAgICBnZXRJc0NvbXBsZXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc0NvbXBsZXRlO1xuICAgIH1cblxufTtcblxuZnVuY3Rpb24gY3JlYXRlTmV3VG9Ebyhwcm9qZWN0LCB1aWQsIHRpdGxlLCBkdWVkYXRlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGlzQ29tcGxldGUpIHtcbiAgICBjb25zdCBuZXdUb0RvID0gbmV3IHRvZG8ocHJvamVjdCwgdWlkLCB0aXRsZSwgZHVlZGF0ZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBpc0NvbXBsZXRlKTtcbiAgICByZXR1cm4gbmV3VG9Ebztcbn1cblxuZnVuY3Rpb24gY2hlY2tJZlRhc2sodDEpIHtcbiAgICBpZih0MSBpbnN0YW5jZW9mIHRvZG8pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IHtjcmVhdGVOZXdUb0RvLCBjaGVja0lmVGFza307IiwiaW1wb3J0IHsgY2hlY2tJZlRhc2sgfSBmcm9tIFwiLi90b2RvXCI7XG5pbXBvcnQgeyB0YXNrRXJyb3JPYmplY3QgfSBmcm9tIFwiLi9lcnJvckhhbmRsZXJcIjtcblxuY2xhc3MgdGFza0xpc3Qge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnRhc2tMaXN0ID0gW107XG4gICAgICAgIHRoaXMuY291bnRlciA9IDA7XG4gICAgfVxuXG5cbiAgICB0YXNrTGlzdEFwcGVuZCh0YXNrKSB7XG4gICAgICAgIGlmKGNoZWNrSWZUYXNrKHRhc2spKSB7XG4gICAgICAgICAgICB0aGlzLnRhc2tMaXN0LnB1c2godGFzayk7XG4gICAgICAgICAgICB0aGlzLmNvdW50ZXIgKz0gMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRhc2tFcnJvck9iamVjdC5ub3RUYXNrRXJyb3IoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEN1cnJlbnRDb3VudGVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb3VudGVyO1xuICAgIH1cblxuICAgIGdldFRhc2tMaXN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy50YXNrTGlzdDtcbiAgICB9XG5cbiAgICBnZXRUYXNrc09mUHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgICAgICBsZXQgbmV3VGFza0xpc3QgPSBbXTtcbiAgICBcbiAgICAgICAgZm9yKGxldCBpPTA7aTx0aGlzLnRhc2tMaXN0Lmxlbmd0aDtpKyspIHtcbiAgICAgICAgICAgIGlmKHRoaXMudGFza0xpc3RbaV0uZ2V0VGFza1Byb2plY3QoKT09cHJvamVjdE5hbWUpIHtcbiAgICAgICAgICAgICAgICBuZXdUYXNrTGlzdC5wdXNoKHRoaXMudGFza0xpc3RbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXG4gICAgICAgIHJldHVybiBuZXdUYXNrTGlzdDtcbiAgICB9XG5cbiAgICBkZWxldGVUYXNrKHRhc2tOYW1lKSB7XG5cbiAgICB9XG59XG5cbi8vTWFrZSBkZWxldGUgdGFza1xuXG5jb25zdCB0YXNrTGlzdEluc3RhbmNlID0gbmV3IHRhc2tMaXN0O1xuXG5leHBvcnQge3Rhc2tMaXN0SW5zdGFuY2V9OyIsImltcG9ydCB7IHRhc2tMaXN0SW5zdGFuY2UgfSBmcm9tIFwiLi90b2RvTGlzdFwiO1xuaW1wb3J0IHsgY3JlYXRlTmV3VGFza0Rpc3BsYXkgfSBmcm9tIFwiLi9jcmVhdGVUb2RvRWxlbWVudFwiO1xuZnVuY3Rpb24gdXBkYXRlVG9kb1BhZ2UoKSB7XG4gICAgY29uc3QgdG9kb0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWxpc3QnKTtcblxuXG4gICAgdG9kb0Rpdi5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGNvbnN0IHByb2plY3RTZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsaXN0LXByb2plY3Qtc2VsZWN0b3InKTtcbiAgICBcbiAgICBjb25zdCBzZWxlY3RlZFByb2plY3RUYXNrcyA9IEFycmF5LmZyb20odGFza0xpc3RJbnN0YW5jZS5nZXRUYXNrc09mUHJvamVjdChwcm9qZWN0U2VsZWN0b3IudmFsdWUpKTtcbiAgICBmb3IobGV0IGk9MDtpPHNlbGVjdGVkUHJvamVjdFRhc2tzLmxlbmd0aDtpKyspIHtcbiAgICAgICAgbGV0IG5ld1Rhc2sgPSBjcmVhdGVOZXdUYXNrRGlzcGxheShzZWxlY3RlZFByb2plY3RUYXNrc1tpXSk7XG4gICAgICAgIHRvZG9EaXYuYXBwZW5kQ2hpbGQobmV3VGFzayk7XG4gICAgfVxuICAgIFxufVxuXG5leHBvcnQge3VwZGF0ZVRvZG9QYWdlfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGNyZWF0ZU5ld1RvRG8gfSBmcm9tIFwiLi90b2RvXCI7XG5pbXBvcnQgeyBjcmVhdGVOZXdQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHsgdGFza0xpc3RJbnN0YW5jZSB9IGZyb20gXCIuL3RvZG9MaXN0XCI7XG5pbXBvcnQgeyBwcm9qZWN0TGlzdEluc3RhbmNlIH0gZnJvbSBcIi4vcHJvamVjdExpc3RcIjtcbmltcG9ydCB7IGluaXRfcGFnZSB9IGZyb20gXCIuL2luaXRfcGFnZVwiO1xuaW1wb3J0IHsgdXBkYXRlVG9kb1BhZ2UgfSBmcm9tIFwiLi91cGRhdGVQYWdlXCI7XG5cblxuXG5cbmNvbnN0IHAxID0gY3JlYXRlTmV3UHJvamVjdChwcm9qZWN0TGlzdEluc3RhbmNlLmdldEN1cnJlbnRQcm9qZWN0Q291bnRlcigpLFwiQ2F0c1wiLFwiQmx1ZVwiKTtcbnByb2plY3RMaXN0SW5zdGFuY2UucHJvamVjdExpc3RBcHBlbmQocDEpO1xuXG5jb25zdCBwMiA9IGNyZWF0ZU5ld1Byb2plY3QocHJvamVjdExpc3RJbnN0YW5jZS5nZXRDdXJyZW50UHJvamVjdENvdW50ZXIoKSxcIlByb2plY3QgMlwiLFwiR3JlZW5cIik7XG5wcm9qZWN0TGlzdEluc3RhbmNlLnByb2plY3RMaXN0QXBwZW5kKHAyKTtcbmNvbnNvbGUubG9nKHByb2plY3RMaXN0SW5zdGFuY2UuZ2V0UHJvamVjdExpc3QoKSk7XG5cblxuXG5cblxuY29uc3QgdDEgPSBjcmVhdGVOZXdUb0RvKHAxLmdldFByb2plY3ROYW1lKCksdGFza0xpc3RJbnN0YW5jZS5nZXRDdXJyZW50Q291bnRlcigpLFwiVGVzdFwiLFwiVGVzdFwiLFwiVGVzdFwiLDIsIHRydWUpO1xudGFza0xpc3RJbnN0YW5jZS50YXNrTGlzdEFwcGVuZCh0MSk7XG5jb25zdCB0MiA9IGNyZWF0ZU5ld1RvRG8ocDEuZ2V0UHJvamVjdE5hbWUoKSx0YXNrTGlzdEluc3RhbmNlLmdldEN1cnJlbnRDb3VudGVyKCksXCJNaWF3XCIsXCJUZXN0XCIsXCJUZXN0XCIsMSwgZmFsc2UpO1xudGFza0xpc3RJbnN0YW5jZS50YXNrTGlzdEFwcGVuZCh0Mik7XG5cbmNvbnNvbGUubG9nKHRhc2tMaXN0SW5zdGFuY2UuZ2V0VGFza0xpc3QoKSk7XG5cbmNvbnNvbGUubG9nKHRhc2tMaXN0SW5zdGFuY2UuZ2V0VGFza3NPZlByb2plY3QoXCJDYXRzXCIpKTtcblxuaW5pdF9wYWdlKCk7XG5cbmNvbnN0IGdldFRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VsZWN0b3ItYnV0dG9uJyk7XG5nZXRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdXBkYXRlVG9kb1BhZ2UpO1xuXG5cbnVwZGF0ZVRvZG9QYWdlKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9