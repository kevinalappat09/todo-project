import { taskListInstance } from "./todoList";
import { updateTodoPage } from "./updatePage";


function addNewTask() {

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

export {deleteTask, taskComplete}