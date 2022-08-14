const taskDivs = (task) => {
    const taskDiv = document.createElement('div');
    taskDiv.setAttribute('class', 'taskDiv');
    const taskName = document.createElement('h5');
    taskName.setAttribute('class', 'taskName');
    taskName.innerHTML = task.title;
    taskDiv.appendChild(taskName);
    const taskCompletedBtn = document.createElement('button');
    taskCompletedBtn.setAttribute('class', 'completedBtn');
    taskCompletedBtn.setAttribute('id', 'completedBtn' + task.index);
    //taskCompletedBtn.setAttribute('id', 'completedBtn' + num);
    taskCompletedBtn.innerHTML = "Completed";
    taskDiv.appendChild(taskCompletedBtn);
    const taskAddBtn = document.createElement('button');
    taskAddBtn.setAttribute('class', 'seeMoreBtn');
    taskAddBtn.setAttribute('id', 'seeMore' + task.index);
    //taskAddBtn.setAttribute('id', 'addBtn' + num);
    taskAddBtn.innerHTML = "See More";
    taskDiv.appendChild(taskAddBtn);
    const completedIcon = document.createElement('div');
    completedIcon.setAttribute('class', 'completedIcon');
    completedIcon.setAttribute('id', 'icon' + task.index);
    
    taskDiv.appendChild(completedIcon);

    //create a taskInfoCard to display when see more button is pressed

    const infoCard = document.createElement('div');
    infoCard.setAttribute('class', 'infoCard');
    infoCard.setAttribute('id', 'task' + task.index);
    infoCard.innerHTML = 'description:' +task.description + '<br>';
    infoCard.innerHTML += 'Due Date: ' + task.dueDate + '<br>';
    infoCard.innerHTML += 'Priority(1-5): ' + task.priority + '<br>';
    infoCard.innerHTML += 'Notes: ' + task.notes;

    
    taskDiv.appendChild(infoCard);

    
    
    return taskDiv;
}

export {taskDivs};