import { projectListInstance } from "./projectList";

class UIGen {
    constructor() {

    }

    createButton(idName, text) {
        let newButton = document.createElement('button');
        newButton.classList.add('button');
        newButton.id = idName;
        newButton.innerHTML = text;
        return newButton;
    }
    
    createLinkButton(idName,text) {
        let newButton = document.createElement('button');
        newButton.classList.add('link-button');
        newButton.id = idName;
        newButton.innerHTML = text;
        return newButton;
    }

    createContainerDiv(idName) {
        let newContainerDiv = document.createElement('div');
        newContainerDiv.classList.add('container');
        newContainerDiv.id = idName;
        return newContainerDiv;
    }

    createGeneralDiv(className,idName) {
        let newGeneralDiv = document.createElement('div');
        newGeneralDiv.classList.add(className);
        newGeneralDiv.id = idName;
        return newGeneralDiv;
    }

    createInput(id,type,placeholder) {
        let newInput = document.createElement('input');
        newInput.classList.add('form-input');
        newInput.id = id;
        newInput.type = type;
        if(placeholder) {
            newInput.placeholder = placeholder;
        }
        return newInput;
    }

    createPrioritySelector() {
        let taskPriorityInput = document.createElement('select');
        taskPriorityInput.id = 'priority-input';
        taskPriorityInput.classList.add('form-input');

        let taskPriorityOption1 = document.createElement('option');
        taskPriorityOption1.value = 1;
        taskPriorityOption1.innerHTML = "High";
        taskPriorityInput.appendChild(taskPriorityOption1);

        let taskPriorityOption2 = document.createElement('option');
        taskPriorityOption2.value = 2;
        taskPriorityOption2.innerHTML = "Medium";
        taskPriorityInput.appendChild(taskPriorityOption2);

        let taskPriorityOption3 = document.createElement('option');
        taskPriorityOption3.value = 3;
        taskPriorityOption3.innerHTML = "Low";
        taskPriorityInput.appendChild(taskPriorityOption3);

        return taskPriorityInput;
    }

    createProjectSelector() {
        let projectSelector = document.createElement('select');
        projectSelector.classList.add('form-input');
        projectSelector.classList.add('selector');
        projectSelector.name = "project-selector";
        projectSelector.id = 'project-input';

        const projects = Array.from(projectListInstance.getProjectList());
        for(let i=0; i<projects.length;i++) {
            let projectOption = document.createElement('option');
            projectOption.value = projects[i].getProjectName();
            projectOption.innerHTML = projects[i].getProjectName();
            projectSelector.appendChild(projectOption);
        }

        return projectSelector;
    }

    createColorSelector() {
        let projectColorInput = document.createElement('select');
        projectColorInput.id = 'pColor-input';
        projectColorInput.classList.add('form-input');
        
        let pco1 = document.createElement('option');
        pco1.value = "blue";
        pco1.innerHTML = "Blue";
        projectColorInput.appendChild(pco1);

        let pco2 = document.createElement('option');
        pco2.value = "green";
        pco2.innerHTML = "Green";
        projectColorInput.appendChild(pco2);

        let pco3 = document.createElement('option');
        pco3.value = "red";
        pco3.innerHTML = "Red";
        projectColorInput.appendChild(pco3);

        return projectColorInput;
    }
}

const uiGenInstance = new UIGen;

class FormGen {
    constructor() {

    }

    createTaskForm() {
        let taskFormDiv = document.createElement('div');
        taskFormDiv.classList.add('form-div');
    
        let taskTitleInput = uiGenInstance.createInput('title-input','text',"Title");
        taskFormDiv.appendChild(taskTitleInput);
    
        let taskDueInput = uiGenInstance.createInput('due-input','date');
        taskFormDiv.appendChild(taskDueInput);
    
        let taskDescriptionInput = uiGenInstance.createInput('desc-input','text','Description');
        taskFormDiv.appendChild(taskDescriptionInput);
    
        
        taskFormDiv.appendChild(uiGenInstance.createPrioritySelector());
    
        let taskProjectInput = uiGenInstance.createProjectSelector();
        taskFormDiv.appendChild(taskProjectInput);
    
        let taskCreateButton = uiGenInstance.createButton('create-task-button',"Create");
        taskFormDiv.appendChild(taskCreateButton);
    
        return taskFormDiv;
    }

    createProjectForm() {
        let projectForm = document.createElement('div');
        projectForm.classList.add('form-div');
    
        let projectNameInput = uiGenInstance.createInput('pName-input','text','Project Name');
        projectForm.appendChild(projectNameInput);
    
        projectForm.appendChild(uiGenInstance.createColorSelector());
    
        let projectCreateButton = uiGenInstance.createButton('create-project-button','Create Project');
        projectForm.appendChild(projectCreateButton);
    
        return projectForm;
    }
}

const formGenInstance = new FormGen;
export {uiGenInstance, formGenInstance };