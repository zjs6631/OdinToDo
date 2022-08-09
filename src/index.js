import {Todo} from './Todo.js';
import {Project} from './Project.js';
import {mainPage} from './generateMainPage';
import {storageAvailable} from './localStorage';
import {projectDivs} from './generateProjectDivs';

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


subProjBtn.addEventListener('click', ()=>{
    for(let i = 0; i < 1; i++){
    
    let res = new Project(projModalInput.value);
    const projPage = document.getElementById('projectPage');
    projPage.appendChild(projectDivs(res));
    projModalInput.value = "";
    document.getElementById('projectModal').style.display = "none";
    }
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

