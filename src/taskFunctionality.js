import { taskListInstance } from "./todoList";
import { updateTodoPage } from "./updatePage";
import { createTaskFromInput } from "./createTaskFromInput";


function addNewTask() {
    const taskUID = taskListInstance.getCurrentCounter();
    const newTask = createTaskFromInput(taskUID);
    taskListInstance.taskListAppend(newTask);
    updateTodoPage();
}

function deleteTask(e) {
    taskListInstance.deleteTask(e.target.getAttribute('data-id'));
    updateTodoPage();
}

function taskComplete(e) {
    console.log(e.target);
    taskListInstance.setComplete(e.target.getAttribute('data-id'));
    updateTodoPage();
}

export {addNewTask,deleteTask, taskComplete}