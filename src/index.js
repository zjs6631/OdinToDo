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

//grab the project button 
const newProjBtn = document.getElementById('projBtn');

//grab the buttons and input on the project modal
const subProjBtn = document.getElementById('subBtn');
const cancelProjBtn = document.getElementById('cancelModalBtn');
const projModalInput = document.getElementById('projModalInput');

//add eventlistener to project button that displays the modal
newProjBtn.addEventListener('click', ()=>{
    document.getElementById('projectModal').style.display = "grid";
    })
        
//add eventlitener to the cancel button that hides the modal and resets input value
cancelProjBtn.addEventListener('click', ()=>{
    document.getElementById('projectModal').style.display = "none";
    projModalInput.value = "";
})


//set index variable used to set id value for projects
let index = 0;
//grab the task modal input values 
const taskModal = document.getElementById('taskModal');
const titleInput = document.getElementById('titleInput');
const descriptInput = document.getElementById('descriptInput');
const dateInput = document.getElementById('dateInput');
const priorityInput = document.getElementById('priorityInput');
const notesInput = document.getElementById('notesInput');

//create variable to track the last addTask button that was clicked
let lastAddBtn;

//eventListener to take in new project information
subProjBtn.addEventListener('click', ()=>{

    //create the new project using Project class
    let res = new Project(projModalInput.value, index);
    //grab the projcontainer and append the new Project to the container
    const projPage = document.getElementById('projContainer');
    projPage.appendChild(projectDivs(res));
    //reset the modal value and hide the modal
    projModalInput.value = "";
    document.getElementById('projectModal').style.display = "none";
    
    //grab the proj del button and allow it to remove the project
    let delBtn = document.getElementById('delBtn' + res.index);
    delBtn.addEventListener('click', ()=>{
        delBtn.parentElement.remove();
    })

    //grab the addition button and allow it to display the task modal and set lastAddBtn to be the index of the project
    //that the task will be added to
    let addBtn = document.getElementById('addBtn' + res.index);
    addBtn.addEventListener('click', ()=>{
        taskModal.style.display = "grid";
        lastAddBtn = res.index
    })
    
    //increase the index by one
    index+=1;  
})

//grab the task cancel button and make it reset task modal values and hide the modal
const taskModalCancel = document.getElementById('taskDelBtn');
        taskModalCancel.addEventListener('click', ()=>{
        taskModal.style.display = "none";
        titleInput.value = "";
        descriptInput.value = "";
        dateInput.value = "";
        priorityInput.value = "";
        notesInput.value = "";
        })

//task index value used to apply id values to different task buttons
let taskIndex = 0;

//grab task modal submit button and create its listener
const taskSubBtn = document.getElementById('taskSubBtn');
        
taskSubBtn.addEventListener('click', ()=>{
        //grab the currAddBtn using the lastAddBtn variable
        let currAddBtn = document.getElementById('addBtn' + lastAddBtn);
        //create new task and use the taskIndex variable
        let newTask = new Todo(titleInput.value, descriptInput.value, dateInput.value, priorityInput.value, notesInput.value, taskIndex);
        //increment taskIndex
        taskIndex+=1;
        //append the new task which is generated using the taskDivs function
        currAddBtn.parentElement.appendChild(taskDivs(newTask));

        //grab seeMore button
        let seeThisTask = document.getElementById('seeMore' + newTask.index);
        let seeInfo = document.getElementById('task' + newTask.index);
        let displayCounter = 0; //used to see infocard or hide card
        
        //add eventlistener to show infocard and increment the counter
        //or hide infocard and decrement the counter
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

        //grab completed button and icon
        let taskCompletedBtn = document.getElementById('completedBtn' + newTask.index);
        let completedIcon = document.getElementById('icon' + newTask.index);
        let completed = false; //set flag variable to judge task completion

        //add eventListener
        taskCompletedBtn.addEventListener('click', ()=>{
            if(completed == false){
                completedIcon.style.backgroundColor = "Green";
                completed = true;
            } else {
                completedIcon.style.backgroundColor = "red";
                completed = false;
            }
        })

        //reset modal and modal values
        taskModal.style.display = "none";
        titleInput.value = "";
        descriptInput.value = "";
        dateInput.value = "";
        priorityInput.value = "";
        notesInput.value = "";
})

if(storageAvailable('localStorage')){
    console.log('local storage available!')
} else {
    console.log('no locale storage :<')
}

