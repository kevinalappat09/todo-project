import { checkIfTask } from "./todo";
import { taskErrorObject } from "./errorHandler";

class taskList {
    constructor() {
        this.taskList = [];
        this.counter = 0;
    }


    taskListAppend(task) {
        if(checkIfTask(task)) {
            this.taskList.push(task);
            this.counter += 1;
        }
        else {
            taskErrorObject.notTaskError();
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

export {taskListInstance};