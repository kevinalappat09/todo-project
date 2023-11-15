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

export {taskErrorObject, projectErrorObject};