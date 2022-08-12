const projectDivs = (project) => {
    const projDiv = document.createElement('div');
    projDiv.setAttribute('class', 'projDiv');
    projDiv.setAttribute('id', 'projDiv' + project.index);
    const projName = document.createElement('h5');
    projName.setAttribute('class', 'projName');
    projName.innerHTML = project.name;
    projDiv.appendChild(projName);
    const projDelBtn = document.createElement('button');
    projDelBtn.setAttribute('class', 'delBtn');
    projDelBtn.setAttribute('id', 'delBtn' + project.index);
    projDelBtn.innerHTML = "X";
    projDiv.appendChild(projDelBtn);
    const taskAddBtn = document.createElement('button');
    taskAddBtn.setAttribute('class', 'taskAddBtn');
    taskAddBtn.setAttribute('id', 'addBtn' + project.index);
    taskAddBtn.innerHTML = "+";
    projDiv.appendChild(taskAddBtn);

    
    
    return projDiv;
}

const taskModal = (project) => {

    
}

export {projectDivs};