import { taskListInstance } from "./todoList";
function updateTodoPage() {
    const todoDiv = document.querySelector('.todo-list');
    const projectSelector = document.querySelector('#list-project-selector');
    
    const selectedProjectTasks = Array.from(taskListInstance.getTasksOfProject(projectSelector.value));
    for(let i=0;i<selectedProjectTasks.length;i++) {
        console.log(selectedProjectTasks[i].getTitle());
    }
}

export {updateTodoPage};