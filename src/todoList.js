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
            taskErrorObject.taskNotFound();
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
            taskErrorObject.taskNotFound();
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

export {taskListInstance};