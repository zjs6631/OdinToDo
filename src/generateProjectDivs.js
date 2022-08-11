const projectDivs = (project) => {
    const projDiv = document.createElement('div');
    projDiv.setAttribute('class', 'projDiv');
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
    projDiv.appendChild(taskAddBtn);

    
    
    return projDiv;
}

export {projectDivs};