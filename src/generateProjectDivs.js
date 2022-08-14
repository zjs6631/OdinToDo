//code used to generate each project div to be displayed on project page

const projectDivs = (project) => {
    //create a div and add an add button and a delete button
    //append them to the div and return the results
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



export {projectDivs};