import { createNewProject } from "./project";

function getProjectName() {
    const projectNameInputValue = document.querySelector('#pName-input').value;
    return projectNameInputValue;
}

function getProjectColor() {
    const projectColorValue = document.querySelector('#pColor-input').value;
    return projectColorValue;
}

function createProjectFromInput(uid) {
    const newProject = createNewProject(uid,getProjectName(),getProjectColor());
    return newProject;
}

export {createProjectFromInput};