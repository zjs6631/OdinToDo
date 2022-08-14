import { format, formatDistance, formatRelative, subDays } from 'date-fns'

//import format from date-fns to format the date properly

//creating a taskDiv which will be added to the project div
const taskDivs = (task) => {

    //create the task div
    const taskDiv = document.createElement('div');
    taskDiv.setAttribute('class', 'taskDiv');
    //add a name and append to task div
    const taskName = document.createElement('h5');
    taskName.setAttribute('class', 'taskName');
    taskName.innerHTML = task.title;
    taskDiv.appendChild(taskName);
    //add a completed button and a seeMore button
    //append both to the task div
    const taskCompletedBtn = document.createElement('button');
    taskCompletedBtn.setAttribute('class', 'completedBtn');
    taskCompletedBtn.setAttribute('id', 'completedBtn' + task.index);
    taskCompletedBtn.innerHTML = "Completed";
    taskDiv.appendChild(taskCompletedBtn);

    const taskAddBtn = document.createElement('button');
    taskAddBtn.setAttribute('class', 'seeMoreBtn');
    taskAddBtn.setAttribute('id', 'seeMore' + task.index);
    taskAddBtn.innerHTML = "See More";
    taskDiv.appendChild(taskAddBtn);

    //add an additional div to represent completion status of task and append it to the task div
    const completedIcon = document.createElement('div');
    completedIcon.setAttribute('class', 'completedIcon');
    completedIcon.setAttribute('id', 'icon' + task.index);
    
    taskDiv.appendChild(completedIcon);


    //create a taskInfoCard to display when see more button is pressed
    
    const infoCard = document.createElement('div');
    infoCard.setAttribute('class', 'infoCard');
    infoCard.setAttribute('id', 'task' + task.index);
    infoCard.innerHTML = 'Description: ' +task.description + '<br>';
    infoCard.innerHTML += 'Due Date: ' + format(new Date(task.dueDate), 'MM-dd-yyyy') + '<br>';
    infoCard.innerHTML += 'Priority: ' + task.priority + '<br>';
    infoCard.innerHTML += 'Notes: ' + task.notes;

    
    taskDiv.appendChild(infoCard);

    
    
    return taskDiv;
}

export {taskDivs};