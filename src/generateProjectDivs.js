const projectDivs = (project) => {
    const projDiv = document.createElement('div');
    projDiv.setAttribute('class', 'projDiv');
    projDiv.innerHTML = project.name;
    return projDiv;
}

export {projectDivs};