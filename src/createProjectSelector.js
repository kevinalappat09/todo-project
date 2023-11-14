import { projectListInstance } from "./projectList";

function createProjectSelector() {
    let projectSelector = document.createElement('select');
    projectSelector.classList.add('selector');
    projectSelector.name = "project-selector";

    const projects = Array.from(projectListInstance.getProjectList());
    for(let i=0; i<projects.length;i++) {
        let projectOption = document.createElement('option');
        projectOption.value = projects[i].getProjectName();
        projectOption.innerHTML = projects[i].getProjectName();
        projectSelector.appendChild(projectOption);
    }

    return projectSelector;
}

export {createProjectSelector};