const taskDivs = (task) => {
    const taskDiv = document.createElement('div');
    taskDiv.setAttribute('class', 'taskDiv');
    const taskName = document.createElement('h5');
    taskName.setAttribute('class', 'taskName');
    taskName.innerHTML = task.title;
    taskDiv.appendChild(taskName);
    const taskCompletedBtn = document.createElement('button');
    taskCompletedBtn.setAttribute('class', 'completedBtn');
    //taskCompletedBtn.setAttribute('id', 'completedBtn' + num);
    taskCompletedBtn.innerHTML = "Completed";
    taskDiv.appendChild(taskCompletedBtn);
    const taskAddBtn = document.createElement('button');
    taskAddBtn.setAttribute('class', 'taskAddBtn');
    //taskAddBtn.setAttribute('id', 'addBtn' + num);
    taskAddBtn.innerHTML = "See More";
    taskDiv.appendChild(taskAddBtn);

    
    
    return taskDiv;
}

export {taskDivs};