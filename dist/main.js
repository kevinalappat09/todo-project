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
    const projectSelector = document.querySelector('#list-project-selector');
    
    const selectedProjectTasks = Array.from(_todoList__WEBPACK_IMPORTED_MODULE_0__.taskListInstance.getTasksOfProject(projectSelector.value));
    for(let i=0;i<selectedProjectTasks.length;i++) {
        console.log(selectedProjectTasks[i].getTitle());
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
const t2 = (0,_todo__WEBPACK_IMPORTED_MODULE_0__.createNewToDo)("Test Project",_todoList__WEBPACK_IMPORTED_MODULE_2__.taskListInstance.getCurrentCounter(),"Miaw","Test","Test",1, false);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LHFCQUFxQix1REFBZ0I7QUFDN0QsdURBQWdCO0FBQ2hCLFdBQVcsb0RBQWEsZ0JBQWdCLHVEQUFnQjtBQUN4RCx1REFBZ0I7O0FBRWhCLFlBQVksdURBQWdCOztBQUU1QixZQUFZLHVEQUFnQjs7QUFFNUIscURBQVM7O0FBRVQ7QUFDQSx3Q0FBd0MsdURBQWM7OztBQUd0RCwyREFBYyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL2NyZWF0ZVByb2plY3RTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvZXJyb3JIYW5kbGVyLmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy9pbml0X3BhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL3Byb2plY3RMaXN0LmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy90b2RvTGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvdXBkYXRlUGFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHJvamVjdExpc3RJbnN0YW5jZSB9IGZyb20gXCIuL3Byb2plY3RMaXN0XCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RTZWxlY3RvcigpIHtcbiAgICBsZXQgcHJvamVjdFNlbGVjdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgcHJvamVjdFNlbGVjdG9yLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdG9yJyk7XG4gICAgcHJvamVjdFNlbGVjdG9yLm5hbWUgPSBcInByb2plY3Qtc2VsZWN0b3JcIjtcblxuICAgIGNvbnN0IHByb2plY3RzID0gQXJyYXkuZnJvbShwcm9qZWN0TGlzdEluc3RhbmNlLmdldFByb2plY3RMaXN0KCkpO1xuICAgIGZvcihsZXQgaT0wOyBpPHByb2plY3RzLmxlbmd0aDtpKyspIHtcbiAgICAgICAgbGV0IHByb2plY3RPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgcHJvamVjdE9wdGlvbi52YWx1ZSA9IHByb2plY3RzW2ldLmdldFByb2plY3ROYW1lKCk7XG4gICAgICAgIHByb2plY3RPcHRpb24uaW5uZXJIVE1MID0gcHJvamVjdHNbaV0uZ2V0UHJvamVjdE5hbWUoKTtcbiAgICAgICAgcHJvamVjdFNlbGVjdG9yLmFwcGVuZENoaWxkKHByb2plY3RPcHRpb24pO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9qZWN0U2VsZWN0b3I7XG59XG5cbmV4cG9ydCB7Y3JlYXRlUHJvamVjdFNlbGVjdG9yfTsiLCJjbGFzcyB0YXNrRXJyb3JzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIH1cblxuICAgIG5vdFRhc2tFcnJvcigpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJUcmllZCBpbnNlcnRpbmcgYW4gaXRlbSB0aGF0IHdhcyBub3QgY2xhc3MgdG9kbyBpbnRvIHRoZSB0YXNrIGxpc3RcIik7XG4gICAgfVxufVxuXG5jbGFzcyBwcm9qZWN0RXJyb3JzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIH1cblxuICAgIG5vdFByb2plY3RFcnJvcigpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJUcmllZCBpbnNlcnRpbmcgYW4gaXRlbSB0aGF0IHdhcyBub3QgYSBwcm9qZWN0IGludG8gcHJvamVjdCBsaXN0XCIpO1xuICAgIH1cbn1cblxuY29uc3QgdGFza0Vycm9yT2JqZWN0ID0gbmV3IHRhc2tFcnJvcnM7XG5jb25zdCBwcm9qZWN0RXJyb3JPYmplY3QgPSBuZXcgcHJvamVjdEVycm9yc1xuXG5leHBvcnQge3Rhc2tFcnJvck9iamVjdCwgcHJvamVjdEVycm9yT2JqZWN0fTsiLCJpbXBvcnQgeyBjcmVhdGVQcm9qZWN0U2VsZWN0b3IgfSBmcm9tIFwiLi9jcmVhdGVQcm9qZWN0U2VsZWN0b3JcIjtcblxuZnVuY3Rpb24gbG9hZFRhc2tJbnB1dEZvcm0oKSB7XG4gICAgbGV0IHRhc2tJbnB1dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tJbnB1dERpdi5jbGFzc0xpc3QuYWRkKCd0YXNrLWlucHV0LWNvbnRhaW5lcicpO1xuICAgIHRhc2tJbnB1dERpdi5pbm5lckhUTUwgPSBcIlRoaXMgaXMgd2hlcmUgdGhlIHRhc2sgaW5wdXQgZm9ybSB3aWxsIGdvXCI7XG4gICAgcmV0dXJuIHRhc2tJbnB1dERpdjtcbn1cblxuZnVuY3Rpb24gbG9hZFByb2plY3RTZWxlY3RvcigpIHtcbiAgICBsZXQgcHJvamVjdFNlbGVjdG9yRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdFNlbGVjdG9yRGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3Qtc2VsZWN0b3ItZGl2Jyk7XG4gICAgXG4gICAgbGV0IHByb2plY3RTZWxlY3RvciA9IGNyZWF0ZVByb2plY3RTZWxlY3RvcigpO1xuICAgIHByb2plY3RTZWxlY3Rvci5pZCA9IFwibGlzdC1wcm9qZWN0LXNlbGVjdG9yXCI7XG4gICAgcHJvamVjdFNlbGVjdG9yRGl2LmFwcGVuZENoaWxkKHByb2plY3RTZWxlY3Rvcik7XG5cbiAgICBsZXQgc2VsZWN0b3JCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzZWxlY3RvckJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b24nKTtcbiAgICBzZWxlY3RvckJ1dHRvbi5pZCA9IFwic2VsZWN0b3ItYnV0dG9uXCI7XG4gICAgc2VsZWN0b3JCdXR0b24uaW5uZXJIVE1MID0gXCJTZWxlY3RcIjtcbiAgICBwcm9qZWN0U2VsZWN0b3JEaXYuYXBwZW5kQ2hpbGQoc2VsZWN0b3JCdXR0b24pO1xuICAgIHJldHVybiBwcm9qZWN0U2VsZWN0b3JEaXY7XG59XG5cbmZ1bmN0aW9uIGluaXRUb2RvVUkoKSB7XG4gICAgbGV0IHRvZG9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvRGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG8tbGlzdCcpO1xuICAgIHRvZG9EaXYuaW5uZXJIVE1MID0gXCJObyBDaGFwdGVyIFNlbGVjdGVkXCI7XG4gICAgcmV0dXJuIHRvZG9EaXY7XG59XG5cbmZ1bmN0aW9uIGluaXRfcGFnZSgpIHtcbiAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGxvYWRUYXNrSW5wdXRGb3JtKCkpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobG9hZFByb2plY3RTZWxlY3RvcigpKTtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGluaXRUb2RvVUkoKSk7XG59XG5cbmV4cG9ydCB7aW5pdF9wYWdlfTsiLCJjbGFzcyBwcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3Rvcih1aWQsIHByb2plY3ROYW1lLCBwcm9qZWN0Q29sb3IpIHtcbiAgICAgICAgdGhpcy51aWQgPSB1aWQ7XG4gICAgICAgIHRoaXMucHJvamVjdE5hbWUgPSBwcm9qZWN0TmFtZTtcbiAgICAgICAgdGhpcy5wcm9qZWN0Q29sb3IgPSBwcm9qZWN0Q29sb3I7XG4gICAgfVxuXG4gICAgZ2V0UHJvamVjdE5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3ROYW1lO1xuICAgIH1cblxuICAgIGdldFByb2plY3RDb2xvcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdENvbG9yO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlTmV3UHJvamVjdCh1aWQscHJvamVjdE5hbWUsIHByb2plY3RDb2xvcikge1xuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgcHJvamVjdCh1aWQsIHByb2plY3ROYW1lLHByb2plY3RDb2xvcik7XG4gICAgcmV0dXJuIG5ld1Byb2plY3Q7XG59XG5cbmZ1bmN0aW9uIGNoZWNrSWZQcm9qZWN0KHApIHtcbiAgICBpZihwIGluc3RhbmNlb2YgcHJvamVjdCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQge2NyZWF0ZU5ld1Byb2plY3QsIGNoZWNrSWZQcm9qZWN0fTsiLCJpbXBvcnQgeyBjaGVja0lmUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7IHByb2plY3RFcnJvck9iamVjdCB9IGZyb20gXCIuL2Vycm9ySGFuZGxlclwiO1xuXG5jbGFzcyBwcm9qZWN0TGlzdCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucHJvamVjdExpc3QgPSBbXTtcbiAgICAgICAgdGhpcy5wcm9qZWN0Q291bnRlciA9IDA7XG4gICAgfVxuXG4gICAgcHJvamVjdExpc3RBcHBlbmQocHJvamVjdCkge1xuICAgICAgICBpZihjaGVja0lmUHJvamVjdChwcm9qZWN0KSkge1xuICAgICAgICAgICAgdGhpcy5wcm9qZWN0TGlzdC5wdXNoKHByb2plY3QpO1xuICAgICAgICAgICAgdGhpcy5wcm9qZWN0Q291bnRlcisrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvamVjdEVycm9yT2JqZWN0Lm5vdFByb2plY3RFcnJvcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0UHJvamVjdExpc3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RMaXN0XG4gICAgfVxuXG4gICAgZ2V0Q3VycmVudFByb2plY3RDb3VudGVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0Q291bnRlcjtcbiAgICB9XG59XG5cblxuLy9NYWtlIGRlbGV0ZSB0YXNrXG5cbmNvbnN0IHByb2plY3RMaXN0SW5zdGFuY2UgPSBuZXcgcHJvamVjdExpc3Q7XG5cbmV4cG9ydCB7cHJvamVjdExpc3RJbnN0YW5jZX07IiwiY2xhc3MgdG9kbyB7XG4gICAgY29uc3RydWN0b3IocHJvamVjdCwgdWlkLCB0aXRsZSwgZHVlZGF0ZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBpc0NvbXBsZXRlKSB7XG4gICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgICAgIHRoaXMudWlkID0gdWlkO1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZHVlZGF0ZSA9IGR1ZWRhdGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLmlzQ29tcGxldGUgPSBpc0NvbXBsZXRlXG4gICAgfVxuXG4gICAgZ2V0VUlEKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51aWQ7XG4gICAgfVxuXG4gICAgZ2V0VGl0bGUgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50aXRsZTtcbiAgICB9XG5cbiAgICBnZXREdWVEYXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kdWVkYXRlO1xuICAgIH1cblxuICAgIGdldERlc2NyaXB0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICBnZXRQcmlvcml0eSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJpb3JpdHk7XG4gICAgfVxuXG4gICAgZ2V0VGFza1Byb2plY3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3Q7XG4gICAgfVxuXG4gICAgZ2V0SXNDb21wbGV0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNDb21wbGV0ZTtcbiAgICB9XG5cbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld1RvRG8ocHJvamVjdCwgdWlkLCB0aXRsZSwgZHVlZGF0ZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBpc0NvbXBsZXRlKSB7XG4gICAgY29uc3QgbmV3VG9EbyA9IG5ldyB0b2RvKHByb2plY3QsIHVpZCwgdGl0bGUsIGR1ZWRhdGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgaXNDb21wbGV0ZSk7XG4gICAgcmV0dXJuIG5ld1RvRG87XG59XG5cbmZ1bmN0aW9uIGNoZWNrSWZUYXNrKHQxKSB7XG4gICAgaWYodDEgaW5zdGFuY2VvZiB0b2RvKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCB7Y3JlYXRlTmV3VG9EbywgY2hlY2tJZlRhc2t9OyIsImltcG9ydCB7IGNoZWNrSWZUYXNrIH0gZnJvbSBcIi4vdG9kb1wiO1xuaW1wb3J0IHsgdGFza0Vycm9yT2JqZWN0IH0gZnJvbSBcIi4vZXJyb3JIYW5kbGVyXCI7XG5cbmNsYXNzIHRhc2tMaXN0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy50YXNrTGlzdCA9IFtdO1xuICAgICAgICB0aGlzLmNvdW50ZXIgPSAwO1xuICAgIH1cblxuXG4gICAgdGFza0xpc3RBcHBlbmQodGFzaykge1xuICAgICAgICBpZihjaGVja0lmVGFzayh0YXNrKSkge1xuICAgICAgICAgICAgdGhpcy50YXNrTGlzdC5wdXNoKHRhc2spO1xuICAgICAgICAgICAgdGhpcy5jb3VudGVyICs9IDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0YXNrRXJyb3JPYmplY3Qubm90VGFza0Vycm9yKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRDdXJyZW50Q291bnRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY291bnRlcjtcbiAgICB9XG5cbiAgICBnZXRUYXNrTGlzdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFza0xpc3Q7XG4gICAgfVxuXG4gICAgZ2V0VGFza3NPZlByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICAgICAgbGV0IG5ld1Rhc2tMaXN0ID0gW107XG4gICAgXG4gICAgICAgIGZvcihsZXQgaT0wO2k8dGhpcy50YXNrTGlzdC5sZW5ndGg7aSsrKSB7XG4gICAgICAgICAgICBpZih0aGlzLnRhc2tMaXN0W2ldLmdldFRhc2tQcm9qZWN0KCk9PXByb2plY3ROYW1lKSB7XG4gICAgICAgICAgICAgICAgbmV3VGFza0xpc3QucHVzaCh0aGlzLnRhc2tMaXN0W2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIFxuICAgICAgICByZXR1cm4gbmV3VGFza0xpc3Q7XG4gICAgfVxuXG4gICAgZGVsZXRlVGFzayh0YXNrTmFtZSkge1xuXG4gICAgfVxufVxuXG4vL01ha2UgZGVsZXRlIHRhc2tcblxuY29uc3QgdGFza0xpc3RJbnN0YW5jZSA9IG5ldyB0YXNrTGlzdDtcblxuZXhwb3J0IHt0YXNrTGlzdEluc3RhbmNlfTsiLCJpbXBvcnQgeyB0YXNrTGlzdEluc3RhbmNlIH0gZnJvbSBcIi4vdG9kb0xpc3RcIjtcbmZ1bmN0aW9uIHVwZGF0ZVRvZG9QYWdlKCkge1xuICAgIGNvbnN0IHRvZG9EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1saXN0Jyk7XG4gICAgY29uc3QgcHJvamVjdFNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpc3QtcHJvamVjdC1zZWxlY3RvcicpO1xuICAgIFxuICAgIGNvbnN0IHNlbGVjdGVkUHJvamVjdFRhc2tzID0gQXJyYXkuZnJvbSh0YXNrTGlzdEluc3RhbmNlLmdldFRhc2tzT2ZQcm9qZWN0KHByb2plY3RTZWxlY3Rvci52YWx1ZSkpO1xuICAgIGZvcihsZXQgaT0wO2k8c2VsZWN0ZWRQcm9qZWN0VGFza3MubGVuZ3RoO2krKykge1xuICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZFByb2plY3RUYXNrc1tpXS5nZXRUaXRsZSgpKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7dXBkYXRlVG9kb1BhZ2V9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgY3JlYXRlTmV3VG9EbyB9IGZyb20gXCIuL3RvZG9cIjtcbmltcG9ydCB7IGNyZWF0ZU5ld1Byb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgeyB0YXNrTGlzdEluc3RhbmNlIH0gZnJvbSBcIi4vdG9kb0xpc3RcIjtcbmltcG9ydCB7IHByb2plY3RMaXN0SW5zdGFuY2UgfSBmcm9tIFwiLi9wcm9qZWN0TGlzdFwiO1xuaW1wb3J0IHsgaW5pdF9wYWdlIH0gZnJvbSBcIi4vaW5pdF9wYWdlXCI7XG5pbXBvcnQgeyB1cGRhdGVUb2RvUGFnZSB9IGZyb20gXCIuL3VwZGF0ZVBhZ2VcIjtcblxuXG5cblxuY29uc3QgcDEgPSBjcmVhdGVOZXdQcm9qZWN0KHByb2plY3RMaXN0SW5zdGFuY2UuZ2V0Q3VycmVudFByb2plY3RDb3VudGVyKCksXCJDYXRzXCIsXCJCbHVlXCIpO1xucHJvamVjdExpc3RJbnN0YW5jZS5wcm9qZWN0TGlzdEFwcGVuZChwMSk7XG5cbmNvbnN0IHAyID0gY3JlYXRlTmV3UHJvamVjdChwcm9qZWN0TGlzdEluc3RhbmNlLmdldEN1cnJlbnRQcm9qZWN0Q291bnRlcigpLFwiUHJvamVjdCAyXCIsXCJHcmVlblwiKTtcbnByb2plY3RMaXN0SW5zdGFuY2UucHJvamVjdExpc3RBcHBlbmQocDIpO1xuY29uc29sZS5sb2cocHJvamVjdExpc3RJbnN0YW5jZS5nZXRQcm9qZWN0TGlzdCgpKTtcblxuXG5cblxuXG5jb25zdCB0MSA9IGNyZWF0ZU5ld1RvRG8ocDEuZ2V0UHJvamVjdE5hbWUoKSx0YXNrTGlzdEluc3RhbmNlLmdldEN1cnJlbnRDb3VudGVyKCksXCJUZXN0XCIsXCJUZXN0XCIsXCJUZXN0XCIsMiwgdHJ1ZSk7XG50YXNrTGlzdEluc3RhbmNlLnRhc2tMaXN0QXBwZW5kKHQxKTtcbmNvbnN0IHQyID0gY3JlYXRlTmV3VG9EbyhcIlRlc3QgUHJvamVjdFwiLHRhc2tMaXN0SW5zdGFuY2UuZ2V0Q3VycmVudENvdW50ZXIoKSxcIk1pYXdcIixcIlRlc3RcIixcIlRlc3RcIiwxLCBmYWxzZSk7XG50YXNrTGlzdEluc3RhbmNlLnRhc2tMaXN0QXBwZW5kKHQyKTtcblxuY29uc29sZS5sb2codGFza0xpc3RJbnN0YW5jZS5nZXRUYXNrTGlzdCgpKTtcblxuY29uc29sZS5sb2codGFza0xpc3RJbnN0YW5jZS5nZXRUYXNrc09mUHJvamVjdChcIkNhdHNcIikpO1xuXG5pbml0X3BhZ2UoKTtcblxuY29uc3QgZ2V0VGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWxlY3Rvci1idXR0b24nKTtcbmdldFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB1cGRhdGVUb2RvUGFnZSk7XG5cblxudXBkYXRlVG9kb1BhZ2UoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=