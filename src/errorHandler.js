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

export {taskErrorObject, projectErrorObject};