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

export {createNewToDo, checkIfTask};