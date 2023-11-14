import { taskListInstance } from "./todoList";
function updateTodoPage() {
    const todoDiv = document.querySelector('.todo-list');


    todoDiv.innerHTML = "";
    const projectSelector = document.querySelector('#list-project-selector');
    
    const selectedProjectTasks = Array.from(taskListInstance.getTasksOfProject(projectSelector.value));
    for(let i=0;i<selectedProjectTasks.length;i++) {
        let newTask = document.createElement('div');
        let newTaskTitle = document.createElement('div');
        newTaskTitle.innerHTML = selectedProjectTasks[i].getTitle();
        newTask.appendChild(newTaskTitle);

        todoDiv.appendChild(newTask);
    }
    
}

export {updateTodoPage};