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

function updateTodoPage() {
    const todoDiv = document.querySelector('.todo-list');


    todoDiv.innerHTML = "";
    const projectSelector = document.querySelector('#list-project-selector');
    
    const selectedProjectTasks = Array.from(_todoList__WEBPACK_IMPORTED_MODULE_0__.taskListInstance.getTasksOfProject(projectSelector.value));
    for(let i=0;i<selectedProjectTasks.length;i++) {
        let newTask = document.createElement('div');
        let newTaskTitle = document.createElement('div');
        newTaskTitle.innerHTML = selectedProjectTasks[i].getTitle();
        newTask.appendChild(newTaskTitle);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFlBQVksNkRBQW1COzs7Ozs7QUFNL0IsV0FBVyxvREFBYSxxQkFBcUIsdURBQWdCO0FBQzdELHVEQUFnQjtBQUNoQixXQUFXLG9EQUFhLHFCQUFxQix1REFBZ0I7QUFDN0QsdURBQWdCOztBQUVoQixZQUFZLHVEQUFnQjs7QUFFNUIsWUFBWSx1REFBZ0I7O0FBRTVCLHFEQUFTOztBQUVUO0FBQ0Esd0NBQXdDLHVEQUFjOzs7QUFHdEQsMkRBQWMsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy9jcmVhdGVQcm9qZWN0U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL2Vycm9ySGFuZGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvaW5pdF9wYWdlLmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy9wcm9qZWN0TGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvdG9kb0xpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL3VwZGF0ZVBhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHByb2plY3RMaXN0SW5zdGFuY2UgfSBmcm9tIFwiLi9wcm9qZWN0TGlzdFwiO1xuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0U2VsZWN0b3IoKSB7XG4gICAgbGV0IHByb2plY3RTZWxlY3RvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIHByb2plY3RTZWxlY3Rvci5jbGFzc0xpc3QuYWRkKCdzZWxlY3RvcicpO1xuICAgIHByb2plY3RTZWxlY3Rvci5uYW1lID0gXCJwcm9qZWN0LXNlbGVjdG9yXCI7XG5cbiAgICBjb25zdCBwcm9qZWN0cyA9IEFycmF5LmZyb20ocHJvamVjdExpc3RJbnN0YW5jZS5nZXRQcm9qZWN0TGlzdCgpKTtcbiAgICBmb3IobGV0IGk9MDsgaTxwcm9qZWN0cy5sZW5ndGg7aSsrKSB7XG4gICAgICAgIGxldCBwcm9qZWN0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIHByb2plY3RPcHRpb24udmFsdWUgPSBwcm9qZWN0c1tpXS5nZXRQcm9qZWN0TmFtZSgpO1xuICAgICAgICBwcm9qZWN0T3B0aW9uLmlubmVySFRNTCA9IHByb2plY3RzW2ldLmdldFByb2plY3ROYW1lKCk7XG4gICAgICAgIHByb2plY3RTZWxlY3Rvci5hcHBlbmRDaGlsZChwcm9qZWN0T3B0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvamVjdFNlbGVjdG9yO1xufVxuXG5leHBvcnQge2NyZWF0ZVByb2plY3RTZWxlY3Rvcn07IiwiY2xhc3MgdGFza0Vycm9ycyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB9XG5cbiAgICBub3RUYXNrRXJyb3IoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVHJpZWQgaW5zZXJ0aW5nIGFuIGl0ZW0gdGhhdCB3YXMgbm90IGNsYXNzIHRvZG8gaW50byB0aGUgdGFzayBsaXN0XCIpO1xuICAgIH1cbn1cblxuY2xhc3MgcHJvamVjdEVycm9ycyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB9XG5cbiAgICBub3RQcm9qZWN0RXJyb3IoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVHJpZWQgaW5zZXJ0aW5nIGFuIGl0ZW0gdGhhdCB3YXMgbm90IGEgcHJvamVjdCBpbnRvIHByb2plY3QgbGlzdFwiKTtcbiAgICB9XG59XG5cbmNvbnN0IHRhc2tFcnJvck9iamVjdCA9IG5ldyB0YXNrRXJyb3JzO1xuY29uc3QgcHJvamVjdEVycm9yT2JqZWN0ID0gbmV3IHByb2plY3RFcnJvcnNcblxuZXhwb3J0IHt0YXNrRXJyb3JPYmplY3QsIHByb2plY3RFcnJvck9iamVjdH07IiwiaW1wb3J0IHsgY3JlYXRlUHJvamVjdFNlbGVjdG9yIH0gZnJvbSBcIi4vY3JlYXRlUHJvamVjdFNlbGVjdG9yXCI7XG5cbmZ1bmN0aW9uIGxvYWRUYXNrSW5wdXRGb3JtKCkge1xuICAgIGxldCB0YXNrSW5wdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrSW5wdXREaXYuY2xhc3NMaXN0LmFkZCgndGFzay1pbnB1dC1jb250YWluZXInKTtcbiAgICB0YXNrSW5wdXREaXYuaW5uZXJIVE1MID0gXCJUaGlzIGlzIHdoZXJlIHRoZSB0YXNrIGlucHV0IGZvcm0gd2lsbCBnb1wiO1xuICAgIHJldHVybiB0YXNrSW5wdXREaXY7XG59XG5cbmZ1bmN0aW9uIGxvYWRQcm9qZWN0U2VsZWN0b3IoKSB7XG4gICAgbGV0IHByb2plY3RTZWxlY3RvckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RTZWxlY3RvckRpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXNlbGVjdG9yLWRpdicpO1xuICAgIFxuICAgIGxldCBwcm9qZWN0U2VsZWN0b3IgPSBjcmVhdGVQcm9qZWN0U2VsZWN0b3IoKTtcbiAgICBwcm9qZWN0U2VsZWN0b3IuaWQgPSBcImxpc3QtcHJvamVjdC1zZWxlY3RvclwiO1xuICAgIHByb2plY3RTZWxlY3RvckRpdi5hcHBlbmRDaGlsZChwcm9qZWN0U2VsZWN0b3IpO1xuXG4gICAgbGV0IHNlbGVjdG9yQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc2VsZWN0b3JCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uJyk7XG4gICAgc2VsZWN0b3JCdXR0b24uaWQgPSBcInNlbGVjdG9yLWJ1dHRvblwiO1xuICAgIHNlbGVjdG9yQnV0dG9uLmlubmVySFRNTCA9IFwiU2VsZWN0XCI7XG4gICAgcHJvamVjdFNlbGVjdG9yRGl2LmFwcGVuZENoaWxkKHNlbGVjdG9yQnV0dG9uKTtcbiAgICByZXR1cm4gcHJvamVjdFNlbGVjdG9yRGl2O1xufVxuXG5mdW5jdGlvbiBpbml0VG9kb1VJKCkge1xuICAgIGxldCB0b2RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb0Rpdi5jbGFzc0xpc3QuYWRkKCd0b2RvLWxpc3QnKTtcbiAgICB0b2RvRGl2LmlubmVySFRNTCA9IFwiTm8gQ2hhcHRlciBTZWxlY3RlZFwiO1xuICAgIHJldHVybiB0b2RvRGl2O1xufVxuXG5mdW5jdGlvbiBpbml0X3BhZ2UoKSB7XG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChsb2FkVGFza0lucHV0Rm9ybSgpKTtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGxvYWRQcm9qZWN0U2VsZWN0b3IoKSk7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChpbml0VG9kb1VJKCkpO1xufVxuXG5leHBvcnQge2luaXRfcGFnZX07IiwiY2xhc3MgcHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IodWlkLCBwcm9qZWN0TmFtZSwgcHJvamVjdENvbG9yKSB7XG4gICAgICAgIHRoaXMudWlkID0gdWlkO1xuICAgICAgICB0aGlzLnByb2plY3ROYW1lID0gcHJvamVjdE5hbWU7XG4gICAgICAgIHRoaXMucHJvamVjdENvbG9yID0gcHJvamVjdENvbG9yO1xuICAgIH1cblxuICAgIGdldFByb2plY3ROYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0TmFtZTtcbiAgICB9XG5cbiAgICBnZXRQcm9qZWN0Q29sb3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RDb2xvcjtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3QodWlkLHByb2plY3ROYW1lLCBwcm9qZWN0Q29sb3IpIHtcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IHByb2plY3QodWlkLCBwcm9qZWN0TmFtZSxwcm9qZWN0Q29sb3IpO1xuICAgIHJldHVybiBuZXdQcm9qZWN0O1xufVxuXG5mdW5jdGlvbiBjaGVja0lmUHJvamVjdChwKSB7XG4gICAgaWYocCBpbnN0YW5jZW9mIHByb2plY3QpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IHtjcmVhdGVOZXdQcm9qZWN0LCBjaGVja0lmUHJvamVjdH07IiwiaW1wb3J0IHsgY2hlY2tJZlByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgeyBwcm9qZWN0RXJyb3JPYmplY3QgfSBmcm9tIFwiLi9lcnJvckhhbmRsZXJcIjtcblxuY2xhc3MgcHJvamVjdExpc3Qge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnByb2plY3RMaXN0ID0gW107XG4gICAgICAgIHRoaXMucHJvamVjdENvdW50ZXIgPSAwO1xuICAgIH1cblxuICAgIHByb2plY3RMaXN0QXBwZW5kKHByb2plY3QpIHtcbiAgICAgICAgaWYoY2hlY2tJZlByb2plY3QocHJvamVjdCkpIHtcbiAgICAgICAgICAgIHRoaXMucHJvamVjdExpc3QucHVzaChwcm9qZWN0KTtcbiAgICAgICAgICAgIHRoaXMucHJvamVjdENvdW50ZXIrKztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb2plY3RFcnJvck9iamVjdC5ub3RQcm9qZWN0RXJyb3IoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFByb2plY3RMaXN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0TGlzdFxuICAgIH1cblxuICAgIGdldEN1cnJlbnRQcm9qZWN0Q291bnRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdENvdW50ZXI7XG4gICAgfVxufVxuXG5cbi8vTWFrZSBkZWxldGUgdGFza1xuXG5jb25zdCBwcm9qZWN0TGlzdEluc3RhbmNlID0gbmV3IHByb2plY3RMaXN0O1xuXG5leHBvcnQge3Byb2plY3RMaXN0SW5zdGFuY2V9OyIsImNsYXNzIHRvZG8ge1xuICAgIGNvbnN0cnVjdG9yKHByb2plY3QsIHVpZCwgdGl0bGUsIGR1ZWRhdGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgaXNDb21wbGV0ZSkge1xuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgICAgICB0aGlzLnVpZCA9IHVpZDtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmR1ZWRhdGUgPSBkdWVkYXRlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5pc0NvbXBsZXRlID0gaXNDb21wbGV0ZVxuICAgIH1cblxuICAgIGdldFVJRCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudWlkO1xuICAgIH1cblxuICAgIGdldFRpdGxlICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGl0bGU7XG4gICAgfVxuXG4gICAgZ2V0RHVlRGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHVlZGF0ZTtcbiAgICB9XG5cbiAgICBnZXREZXNjcmlwdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgZ2V0UHJpb3JpdHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByaW9yaXR5O1xuICAgIH1cblxuICAgIGdldFRhc2tQcm9qZWN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0O1xuICAgIH1cblxuICAgIGdldElzQ29tcGxldGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzQ29tcGxldGU7XG4gICAgfVxuXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVOZXdUb0RvKHByb2plY3QsIHVpZCwgdGl0bGUsIGR1ZWRhdGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgaXNDb21wbGV0ZSkge1xuICAgIGNvbnN0IG5ld1RvRG8gPSBuZXcgdG9kbyhwcm9qZWN0LCB1aWQsIHRpdGxlLCBkdWVkYXRlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGlzQ29tcGxldGUpO1xuICAgIHJldHVybiBuZXdUb0RvO1xufVxuXG5mdW5jdGlvbiBjaGVja0lmVGFzayh0MSkge1xuICAgIGlmKHQxIGluc3RhbmNlb2YgdG9kbykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQge2NyZWF0ZU5ld1RvRG8sIGNoZWNrSWZUYXNrfTsiLCJpbXBvcnQgeyBjaGVja0lmVGFzayB9IGZyb20gXCIuL3RvZG9cIjtcbmltcG9ydCB7IHRhc2tFcnJvck9iamVjdCB9IGZyb20gXCIuL2Vycm9ySGFuZGxlclwiO1xuXG5jbGFzcyB0YXNrTGlzdCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudGFza0xpc3QgPSBbXTtcbiAgICAgICAgdGhpcy5jb3VudGVyID0gMDtcbiAgICB9XG5cblxuICAgIHRhc2tMaXN0QXBwZW5kKHRhc2spIHtcbiAgICAgICAgaWYoY2hlY2tJZlRhc2sodGFzaykpIHtcbiAgICAgICAgICAgIHRoaXMudGFza0xpc3QucHVzaCh0YXNrKTtcbiAgICAgICAgICAgIHRoaXMuY291bnRlciArPSAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGFza0Vycm9yT2JqZWN0Lm5vdFRhc2tFcnJvcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0Q3VycmVudENvdW50ZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvdW50ZXI7XG4gICAgfVxuXG4gICAgZ2V0VGFza0xpc3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhc2tMaXN0O1xuICAgIH1cblxuICAgIGdldFRhc2tzT2ZQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgICAgIGxldCBuZXdUYXNrTGlzdCA9IFtdO1xuICAgIFxuICAgICAgICBmb3IobGV0IGk9MDtpPHRoaXMudGFza0xpc3QubGVuZ3RoO2krKykge1xuICAgICAgICAgICAgaWYodGhpcy50YXNrTGlzdFtpXS5nZXRUYXNrUHJvamVjdCgpPT1wcm9qZWN0TmFtZSkge1xuICAgICAgICAgICAgICAgIG5ld1Rhc2tMaXN0LnB1c2godGhpcy50YXNrTGlzdFtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgcmV0dXJuIG5ld1Rhc2tMaXN0O1xuICAgIH1cblxuICAgIGRlbGV0ZVRhc2sodGFza05hbWUpIHtcblxuICAgIH1cbn1cblxuLy9NYWtlIGRlbGV0ZSB0YXNrXG5cbmNvbnN0IHRhc2tMaXN0SW5zdGFuY2UgPSBuZXcgdGFza0xpc3Q7XG5cbmV4cG9ydCB7dGFza0xpc3RJbnN0YW5jZX07IiwiaW1wb3J0IHsgdGFza0xpc3RJbnN0YW5jZSB9IGZyb20gXCIuL3RvZG9MaXN0XCI7XG5mdW5jdGlvbiB1cGRhdGVUb2RvUGFnZSgpIHtcbiAgICBjb25zdCB0b2RvRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tbGlzdCcpO1xuXG5cbiAgICB0b2RvRGl2LmlubmVySFRNTCA9IFwiXCI7XG4gICAgY29uc3QgcHJvamVjdFNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpc3QtcHJvamVjdC1zZWxlY3RvcicpO1xuICAgIFxuICAgIGNvbnN0IHNlbGVjdGVkUHJvamVjdFRhc2tzID0gQXJyYXkuZnJvbSh0YXNrTGlzdEluc3RhbmNlLmdldFRhc2tzT2ZQcm9qZWN0KHByb2plY3RTZWxlY3Rvci52YWx1ZSkpO1xuICAgIGZvcihsZXQgaT0wO2k8c2VsZWN0ZWRQcm9qZWN0VGFza3MubGVuZ3RoO2krKykge1xuICAgICAgICBsZXQgbmV3VGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgbmV3VGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5ld1Rhc2tUaXRsZS5pbm5lckhUTUwgPSBzZWxlY3RlZFByb2plY3RUYXNrc1tpXS5nZXRUaXRsZSgpO1xuICAgICAgICBuZXdUYXNrLmFwcGVuZENoaWxkKG5ld1Rhc2tUaXRsZSk7XG5cbiAgICAgICAgdG9kb0Rpdi5hcHBlbmRDaGlsZChuZXdUYXNrKTtcbiAgICB9XG4gICAgXG59XG5cbmV4cG9ydCB7dXBkYXRlVG9kb1BhZ2V9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgY3JlYXRlTmV3VG9EbyB9IGZyb20gXCIuL3RvZG9cIjtcbmltcG9ydCB7IGNyZWF0ZU5ld1Byb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgeyB0YXNrTGlzdEluc3RhbmNlIH0gZnJvbSBcIi4vdG9kb0xpc3RcIjtcbmltcG9ydCB7IHByb2plY3RMaXN0SW5zdGFuY2UgfSBmcm9tIFwiLi9wcm9qZWN0TGlzdFwiO1xuaW1wb3J0IHsgaW5pdF9wYWdlIH0gZnJvbSBcIi4vaW5pdF9wYWdlXCI7XG5pbXBvcnQgeyB1cGRhdGVUb2RvUGFnZSB9IGZyb20gXCIuL3VwZGF0ZVBhZ2VcIjtcblxuXG5cblxuY29uc3QgcDEgPSBjcmVhdGVOZXdQcm9qZWN0KHByb2plY3RMaXN0SW5zdGFuY2UuZ2V0Q3VycmVudFByb2plY3RDb3VudGVyKCksXCJDYXRzXCIsXCJCbHVlXCIpO1xucHJvamVjdExpc3RJbnN0YW5jZS5wcm9qZWN0TGlzdEFwcGVuZChwMSk7XG5cbmNvbnN0IHAyID0gY3JlYXRlTmV3UHJvamVjdChwcm9qZWN0TGlzdEluc3RhbmNlLmdldEN1cnJlbnRQcm9qZWN0Q291bnRlcigpLFwiUHJvamVjdCAyXCIsXCJHcmVlblwiKTtcbnByb2plY3RMaXN0SW5zdGFuY2UucHJvamVjdExpc3RBcHBlbmQocDIpO1xuY29uc29sZS5sb2cocHJvamVjdExpc3RJbnN0YW5jZS5nZXRQcm9qZWN0TGlzdCgpKTtcblxuXG5cblxuXG5jb25zdCB0MSA9IGNyZWF0ZU5ld1RvRG8ocDEuZ2V0UHJvamVjdE5hbWUoKSx0YXNrTGlzdEluc3RhbmNlLmdldEN1cnJlbnRDb3VudGVyKCksXCJUZXN0XCIsXCJUZXN0XCIsXCJUZXN0XCIsMiwgdHJ1ZSk7XG50YXNrTGlzdEluc3RhbmNlLnRhc2tMaXN0QXBwZW5kKHQxKTtcbmNvbnN0IHQyID0gY3JlYXRlTmV3VG9EbyhwMS5nZXRQcm9qZWN0TmFtZSgpLHRhc2tMaXN0SW5zdGFuY2UuZ2V0Q3VycmVudENvdW50ZXIoKSxcIk1pYXdcIixcIlRlc3RcIixcIlRlc3RcIiwxLCBmYWxzZSk7XG50YXNrTGlzdEluc3RhbmNlLnRhc2tMaXN0QXBwZW5kKHQyKTtcblxuY29uc29sZS5sb2codGFza0xpc3RJbnN0YW5jZS5nZXRUYXNrTGlzdCgpKTtcblxuY29uc29sZS5sb2codGFza0xpc3RJbnN0YW5jZS5nZXRUYXNrc09mUHJvamVjdChcIkNhdHNcIikpO1xuXG5pbml0X3BhZ2UoKTtcblxuY29uc3QgZ2V0VGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWxlY3Rvci1idXR0b24nKTtcbmdldFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB1cGRhdGVUb2RvUGFnZSk7XG5cblxudXBkYXRlVG9kb1BhZ2UoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=