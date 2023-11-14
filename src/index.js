import { createNewToDo } from "./todo";
import { createNewProject } from "./project";
import { taskListInstance } from "./todoList";
import { projectListInstance } from "./projectList";



const p1 = createNewProject(projectListInstance.getCurrentProjectCounter(),"Cats","Blue");
projectListInstance.projectListAppend(p1);
console.log(projectListInstance.getProjectList());



const t1 = createNewToDo(p1.getProjectName(),taskListInstance.getCurrentCounter(),"Test","Test","Test",2);
taskListInstance.taskListAppend(t1);
const t2 = createNewToDo("Test Project",taskListInstance.getCurrentCounter(),"Miaw","Test","Test",1);
taskListInstance.taskListAppend(t2);

console.log(taskListInstance.getTaskList());

console.log(taskListInstance.getTasksOfProject("Cats"));
