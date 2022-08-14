import {Todo} from './Todo.js';
import {Project} from './Project.js';
import {mainPage} from './generateMainPage';
import {storageAvailable} from './localStorage';
import {projectDivs} from './generateProjectDivs';
import {taskDivs} from './generateTaskDivs';

console.log("js connected"); //checking to make sure webpack properly connected
//grabbed the main container element from the DOM and load the mainPage with the mainPage function
const Container = document.getElementById('content');

Container.appendChild(mainPage());

const subProjBtn = document.getElementById('subBtn');
const newProjBtn = document.getElementById('projBtn');
    
const cancelProjBtn = document.getElementById('cancelModalBtn');
const projModalInput = document.getElementById('projModalInput');


newProjBtn.addEventListener('click', ()=>{
    console.log("clicked!");
    document.getElementById('projectModal').style.display = "grid";
    })
        

cancelProjBtn.addEventListener('click', ()=>{
    document.getElementById('projectModal').style.display = "none";
    projModalInput.value = "";
})


let index = 0;
const taskModal = document.getElementById('taskModal');
const titleInput = document.getElementById('titleInput');
const descriptInput = document.getElementById('descriptInput');
const dateInput = document.getElementById('dateInput');
const priorityInput = document.getElementById('priorityInput');
const notesInput = document.getElementById('notesInput');
let lastAddBtn;

subProjBtn.addEventListener('click', ()=>{

    let res = new Project(projModalInput.value, index);
    const projPage = document.getElementById('projContainer');
    projPage.appendChild(projectDivs(res));
    projModalInput.value = "";
    document.getElementById('projectModal').style.display = "none";
    
    let delBtn = document.getElementById('delBtn' + res.index);
    delBtn.addEventListener('click', ()=>{
        delBtn.parentElement.remove();
    })
    
    let addBtn = document.getElementById('addBtn' + res.index);
    addBtn.addEventListener('click', ()=>{
        taskModal.style.display = "grid";
        lastAddBtn = res.index
    })

    index+=1;  
})

const taskModalCancel = document.getElementById('taskDelBtn');
        taskModalCancel.addEventListener('click', ()=>{
        taskModal.style.display = "none";
        titleInput.value = "";
        descriptInput.value = "";
        dateInput.value = "";
        priorityInput.value = "";
        notesInput.value = "";
        })

let taskIndex = 0;

const taskSubBtn = document.getElementById('taskSubBtn');
        taskSubBtn.addEventListener('click', ()=>{
            
            let currAddBtn = document.getElementById('addBtn' + lastAddBtn);
            let newTask = new Todo(titleInput.value, descriptInput.value, dateInput.value, priorityInput.value, notesInput.value, taskIndex);
            taskIndex+=1;
            currAddBtn.parentElement.appendChild(taskDivs(newTask));

            let seeThisTask = document.getElementById('seeMore' + newTask.index);
            let seeInfo = document.getElementById('task' + newTask.index);
            let displayCounter = 0;
            seeThisTask.addEventListener('click', ()=>{
                console.log("clicked!")
                if(displayCounter == 0){
                    seeInfo.style.display = "block";
                    seeThisTask.innerHTML = "See Less";
                    displayCounter+=1;
                } else {
                    seeInfo.style.display = "none";
                    seeThisTask.innerHTML = "See More";
                    displayCounter-=1;
                }

            })
            taskModal.style.display = "none";
            titleInput.value = "";
            descriptInput.value = "";
            dateInput.value = "";
            priorityInput.value = "";
            notesInput.value = "";
        })











    








let todo = new Todo('title','descript','duedate','priority','notes');
let project = new Project('First Project');
project.arr.push(todo);
let todo2 = new Todo('zachs book', 'its a bad one', '3/5', '5', 'nothing noteworthy')

project.arr.push(todo2);

console.log(project.getArr);

if(storageAvailable('localStorage')){
    console.log('local storage available!')
} else {
    console.log('no locale storage :<')
}

