/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
    constructor(project, uid, title, duedate, description, priority) {
        this.project = project;
        this.uid = uid;
        this.title = title;
        this.duedate = duedate;
        this.description = description;
        this.priority = priority;
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

};

function createNewToDo(project, uid, title, duedate, description, priority) {
    const newToDo = new todo(project, uid, title, duedate, description, priority);
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







const p1 = (0,_project__WEBPACK_IMPORTED_MODULE_1__.createNewProject)(_projectList__WEBPACK_IMPORTED_MODULE_3__.projectListInstance.getCurrentProjectCounter(),"Cats","Blue");
_projectList__WEBPACK_IMPORTED_MODULE_3__.projectListInstance.projectListAppend(p1);
console.log(_projectList__WEBPACK_IMPORTED_MODULE_3__.projectListInstance.getProjectList());



const t1 = (0,_todo__WEBPACK_IMPORTED_MODULE_0__.createNewToDo)(p1.getProjectName(),_todoList__WEBPACK_IMPORTED_MODULE_2__.taskListInstance.getCurrentCounter(),"Test","Test","Test",2);
_todoList__WEBPACK_IMPORTED_MODULE_2__.taskListInstance.taskListAppend(t1);
const t2 = (0,_todo__WEBPACK_IMPORTED_MODULE_0__.createNewToDo)("Test Project",_todoList__WEBPACK_IMPORTED_MODULE_2__.taskListInstance.getCurrentCounter(),"Miaw","Test","Test",1);
_todoList__WEBPACK_IMPORTED_MODULE_2__.taskListInstance.taskListAppend(t2);

console.log(_todoList__WEBPACK_IMPORTED_MODULE_2__.taskListInstance.getTaskList());

console.log(_todoList__WEBPACK_IMPORTED_MODULE_2__.taskListInstance.getTasksOfProject("Cats"));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCMkM7QUFDUzs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVcsd0RBQWM7QUFDekI7QUFDQTtBQUNBLFVBQVU7QUFDVixZQUFZLDZEQUFrQjtBQUM5QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlDcUM7QUFDWTs7QUFFakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxXQUFXLGtEQUFXO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSwwREFBZTtBQUMzQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHVCQUF1QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOzs7Ozs7OztVQy9DQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTnVDO0FBQ007QUFDQztBQUNNOzs7O0FBSXBELFdBQVcsMERBQWdCLENBQUMsNkRBQW1CO0FBQy9DLDZEQUFtQjtBQUNuQixZQUFZLDZEQUFtQjs7OztBQUkvQixXQUFXLG9EQUFhLHFCQUFxQix1REFBZ0I7QUFDN0QsdURBQWdCO0FBQ2hCLFdBQVcsb0RBQWEsZ0JBQWdCLHVEQUFnQjtBQUN4RCx1REFBZ0I7O0FBRWhCLFlBQVksdURBQWdCOztBQUU1QixZQUFZLHVEQUFnQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy9lcnJvckhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL3Byb2plY3RMaXN0LmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy90b2RvTGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgdGFza0Vycm9ycyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB9XG5cbiAgICBub3RUYXNrRXJyb3IoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVHJpZWQgaW5zZXJ0aW5nIGFuIGl0ZW0gdGhhdCB3YXMgbm90IGNsYXNzIHRvZG8gaW50byB0aGUgdGFzayBsaXN0XCIpO1xuICAgIH1cbn1cblxuY2xhc3MgcHJvamVjdEVycm9ycyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB9XG5cbiAgICBub3RQcm9qZWN0RXJyb3IoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVHJpZWQgaW5zZXJ0aW5nIGFuIGl0ZW0gdGhhdCB3YXMgbm90IGEgcHJvamVjdCBpbnRvIHByb2plY3QgbGlzdFwiKTtcbiAgICB9XG59XG5cbmNvbnN0IHRhc2tFcnJvck9iamVjdCA9IG5ldyB0YXNrRXJyb3JzO1xuY29uc3QgcHJvamVjdEVycm9yT2JqZWN0ID0gbmV3IHByb2plY3RFcnJvcnNcblxuZXhwb3J0IHt0YXNrRXJyb3JPYmplY3QsIHByb2plY3RFcnJvck9iamVjdH07IiwiY2xhc3MgcHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IodWlkLCBwcm9qZWN0TmFtZSwgcHJvamVjdENvbG9yKSB7XG4gICAgICAgIHRoaXMudWlkID0gdWlkO1xuICAgICAgICB0aGlzLnByb2plY3ROYW1lID0gcHJvamVjdE5hbWU7XG4gICAgICAgIHRoaXMucHJvamVjdENvbG9yID0gcHJvamVjdENvbG9yO1xuICAgIH1cblxuICAgIGdldFByb2plY3ROYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0TmFtZTtcbiAgICB9XG5cbiAgICBnZXRQcm9qZWN0Q29sb3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RDb2xvcjtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3QodWlkLHByb2plY3ROYW1lLCBwcm9qZWN0Q29sb3IpIHtcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IHByb2plY3QodWlkLCBwcm9qZWN0TmFtZSxwcm9qZWN0Q29sb3IpO1xuICAgIHJldHVybiBuZXdQcm9qZWN0O1xufVxuXG5mdW5jdGlvbiBjaGVja0lmUHJvamVjdChwKSB7XG4gICAgaWYocCBpbnN0YW5jZW9mIHByb2plY3QpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IHtjcmVhdGVOZXdQcm9qZWN0LCBjaGVja0lmUHJvamVjdH07IiwiaW1wb3J0IHsgY2hlY2tJZlByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgeyBwcm9qZWN0RXJyb3JPYmplY3QgfSBmcm9tIFwiLi9lcnJvckhhbmRsZXJcIjtcblxuY2xhc3MgcHJvamVjdExpc3Qge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnByb2plY3RMaXN0ID0gW107XG4gICAgICAgIHRoaXMucHJvamVjdENvdW50ZXIgPSAwO1xuICAgIH1cblxuICAgIHByb2plY3RMaXN0QXBwZW5kKHByb2plY3QpIHtcbiAgICAgICAgaWYoY2hlY2tJZlByb2plY3QocHJvamVjdCkpIHtcbiAgICAgICAgICAgIHRoaXMucHJvamVjdExpc3QucHVzaChwcm9qZWN0KTtcbiAgICAgICAgICAgIHRoaXMucHJvamVjdENvdW50ZXIrKztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb2plY3RFcnJvck9iamVjdC5ub3RQcm9qZWN0RXJyb3IoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFByb2plY3RMaXN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0TGlzdFxuICAgIH1cblxuICAgIGdldEN1cnJlbnRQcm9qZWN0Q291bnRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdENvdW50ZXI7XG4gICAgfVxufVxuXG5cbi8vTWFrZSBkZWxldGUgdGFza1xuXG5jb25zdCBwcm9qZWN0TGlzdEluc3RhbmNlID0gbmV3IHByb2plY3RMaXN0O1xuXG5leHBvcnQge3Byb2plY3RMaXN0SW5zdGFuY2V9OyIsImNsYXNzIHRvZG8ge1xuICAgIGNvbnN0cnVjdG9yKHByb2plY3QsIHVpZCwgdGl0bGUsIGR1ZWRhdGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSkge1xuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgICAgICB0aGlzLnVpZCA9IHVpZDtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmR1ZWRhdGUgPSBkdWVkYXRlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB9XG5cbiAgICBnZXRVSUQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVpZDtcbiAgICB9XG5cbiAgICBnZXRUaXRsZSAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRpdGxlO1xuICAgIH1cblxuICAgIGdldER1ZURhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmR1ZWRhdGU7XG4gICAgfVxuXG4gICAgZ2V0RGVzY3JpcHRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIGdldFByaW9yaXR5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcmlvcml0eTtcbiAgICB9XG5cbiAgICBnZXRUYXNrUHJvamVjdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdDtcbiAgICB9XG5cbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld1RvRG8ocHJvamVjdCwgdWlkLCB0aXRsZSwgZHVlZGF0ZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5KSB7XG4gICAgY29uc3QgbmV3VG9EbyA9IG5ldyB0b2RvKHByb2plY3QsIHVpZCwgdGl0bGUsIGR1ZWRhdGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSk7XG4gICAgcmV0dXJuIG5ld1RvRG87XG59XG5cbmZ1bmN0aW9uIGNoZWNrSWZUYXNrKHQxKSB7XG4gICAgaWYodDEgaW5zdGFuY2VvZiB0b2RvKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCB7Y3JlYXRlTmV3VG9EbywgY2hlY2tJZlRhc2t9OyIsImltcG9ydCB7IGNoZWNrSWZUYXNrIH0gZnJvbSBcIi4vdG9kb1wiO1xuaW1wb3J0IHsgdGFza0Vycm9yT2JqZWN0IH0gZnJvbSBcIi4vZXJyb3JIYW5kbGVyXCI7XG5cbmNsYXNzIHRhc2tMaXN0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy50YXNrTGlzdCA9IFtdO1xuICAgICAgICB0aGlzLmNvdW50ZXIgPSAwO1xuICAgIH1cblxuXG4gICAgdGFza0xpc3RBcHBlbmQodGFzaykge1xuICAgICAgICBpZihjaGVja0lmVGFzayh0YXNrKSkge1xuICAgICAgICAgICAgdGhpcy50YXNrTGlzdC5wdXNoKHRhc2spO1xuICAgICAgICAgICAgdGhpcy5jb3VudGVyICs9IDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0YXNrRXJyb3JPYmplY3Qubm90VGFza0Vycm9yKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRDdXJyZW50Q291bnRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY291bnRlcjtcbiAgICB9XG5cbiAgICBnZXRUYXNrTGlzdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFza0xpc3Q7XG4gICAgfVxuXG4gICAgZ2V0VGFza3NPZlByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICAgICAgbGV0IG5ld1Rhc2tMaXN0ID0gW107XG4gICAgXG4gICAgICAgIGZvcihsZXQgaT0wO2k8dGhpcy50YXNrTGlzdC5sZW5ndGg7aSsrKSB7XG4gICAgICAgICAgICBpZih0aGlzLnRhc2tMaXN0W2ldLmdldFRhc2tQcm9qZWN0KCk9PXByb2plY3ROYW1lKSB7XG4gICAgICAgICAgICAgICAgbmV3VGFza0xpc3QucHVzaCh0aGlzLnRhc2tMaXN0W2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIFxuICAgICAgICByZXR1cm4gbmV3VGFza0xpc3Q7XG4gICAgfVxuXG4gICAgZGVsZXRlVGFzayh0YXNrTmFtZSkge1xuXG4gICAgfVxufVxuXG4vL01ha2UgZGVsZXRlIHRhc2tcblxuY29uc3QgdGFza0xpc3RJbnN0YW5jZSA9IG5ldyB0YXNrTGlzdDtcblxuZXhwb3J0IHt0YXNrTGlzdEluc3RhbmNlfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGNyZWF0ZU5ld1RvRG8gfSBmcm9tIFwiLi90b2RvXCI7XG5pbXBvcnQgeyBjcmVhdGVOZXdQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHsgdGFza0xpc3RJbnN0YW5jZSB9IGZyb20gXCIuL3RvZG9MaXN0XCI7XG5pbXBvcnQgeyBwcm9qZWN0TGlzdEluc3RhbmNlIH0gZnJvbSBcIi4vcHJvamVjdExpc3RcIjtcblxuXG5cbmNvbnN0IHAxID0gY3JlYXRlTmV3UHJvamVjdChwcm9qZWN0TGlzdEluc3RhbmNlLmdldEN1cnJlbnRQcm9qZWN0Q291bnRlcigpLFwiQ2F0c1wiLFwiQmx1ZVwiKTtcbnByb2plY3RMaXN0SW5zdGFuY2UucHJvamVjdExpc3RBcHBlbmQocDEpO1xuY29uc29sZS5sb2cocHJvamVjdExpc3RJbnN0YW5jZS5nZXRQcm9qZWN0TGlzdCgpKTtcblxuXG5cbmNvbnN0IHQxID0gY3JlYXRlTmV3VG9EbyhwMS5nZXRQcm9qZWN0TmFtZSgpLHRhc2tMaXN0SW5zdGFuY2UuZ2V0Q3VycmVudENvdW50ZXIoKSxcIlRlc3RcIixcIlRlc3RcIixcIlRlc3RcIiwyKTtcbnRhc2tMaXN0SW5zdGFuY2UudGFza0xpc3RBcHBlbmQodDEpO1xuY29uc3QgdDIgPSBjcmVhdGVOZXdUb0RvKFwiVGVzdCBQcm9qZWN0XCIsdGFza0xpc3RJbnN0YW5jZS5nZXRDdXJyZW50Q291bnRlcigpLFwiTWlhd1wiLFwiVGVzdFwiLFwiVGVzdFwiLDEpO1xudGFza0xpc3RJbnN0YW5jZS50YXNrTGlzdEFwcGVuZCh0Mik7XG5cbmNvbnNvbGUubG9nKHRhc2tMaXN0SW5zdGFuY2UuZ2V0VGFza0xpc3QoKSk7XG5cbmNvbnNvbGUubG9nKHRhc2tMaXN0SW5zdGFuY2UuZ2V0VGFza3NPZlByb2plY3QoXCJDYXRzXCIpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==