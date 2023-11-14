import { createNewToDo } from "./todo";
import { createNewProject } from "./project";

const p1 = createNewProject("Cats","Blue");

const t1 = createNewToDo(p1.getProjectName(),"Test","Test","Test",2);
console.log(t1.getTaskProject());