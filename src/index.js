import { createNewToDo } from "./todo";
import { createNewProject } from "./project";
import { taskListInstance } from "./todoList";
import { projectListInstance } from "./projectList";
import { init_page } from "./init_page";
import { updateTodoPage } from "./updatePage";




const p1 = createNewProject(projectListInstance.getCurrentProjectCounter(),"Cats","Blue");
projectListInstance.projectListAppend(p1);

const p2 = createNewProject(projectListInstance.getCurrentProjectCounter(),"Project 2","Green");
projectListInstance.projectListAppend(p2);
console.log(projectListInstance.getProjectList());





const t1 = createNewToDo(p1.getProjectName(),taskListInstance.getCurrentCounter(),"Test","Test","Test",2, true);
taskListInstance.taskListAppend(t1);
const t2 = createNewToDo("Test Project",taskListInstance.getCurrentCounter(),"Miaw","Test","Test",1, false);
taskListInstance.taskListAppend(t2);

console.log(taskListInstance.getTaskList());

console.log(taskListInstance.getTasksOfProject("Cats"));

init_page();

const getTaskButton = document.querySelector('#selector-button');
getTaskButton.addEventListener('click', updateTodoPage);


updateTodoPage();