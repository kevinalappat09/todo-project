import { taskListInstance } from "./todoList";
import { createNewTaskDisplay } from "./createTodoElement";
import { updateHomePageListener } from "./initEventListeners";

function updateTodoPage() {
    const todoDiv = document.querySelector('.todo-list');


    todoDiv.innerHTML = "";
    const projectSelector = document.querySelector('#list-project-selector');
    
    const selectedProjectTasks = Array.from(taskListInstance.getTasksOfProject(projectSelector.value));
    for(let i=0;i<selectedProjectTasks.length;i++) {
        let newTask = createNewTaskDisplay(selectedProjectTasks[i]);
        todoDiv.appendChild(newTask);
    }
    updateHomePageListener();
}

export {updateTodoPage};