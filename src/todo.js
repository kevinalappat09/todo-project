class todo {
    constructor(project, title, duedate, description, priority) {
        this.project = project;
        this.title = title;
        this.duedate = duedate;
        this.description = description;
        this.priority = priority;
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

function createNewToDo(project, title, duedate, description, priority) {
    const newToDo = new todo(project, title, duedate, description, priority);
    return newToDo;
}

export {createNewToDo};