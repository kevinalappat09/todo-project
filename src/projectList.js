import { checkIfProject } from "./project";
import { projectErrorObject } from "./errorHandler";

class projectList {
    constructor() {
        this.projectList = [];
        this.projectCounter = 0;
    }

    projectListAppend(project) {
        if(checkIfProject(project)) {
            this.projectList.push(project);
            this.projectCounter++;
        } else {
            projectErrorObject.notProjectError();
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

export {projectListInstance};