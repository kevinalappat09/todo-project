class project {
    constructor(projectName, projectColor) {
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

function createNewProject(projectName, projectColor) {
    const newProject = new project(projectName,projectColor);
    return newProject;
}

export {createNewProject};