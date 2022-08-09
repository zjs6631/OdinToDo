const mainPage = () => {
    //main container created
    const mainContainer = document.createElement('div');
    mainContainer.setAttribute('id', 'mainContainer');

    //navBar created along with title and button
    const navBar = document.createElement('div')
    navBar.setAttribute('id', 'navBar');
    const navTitle = document.createElement('h1');
    navTitle.setAttribute('id', 'navTitle');
    navTitle.innerHTML = "To Do <br> List";
    navBar.appendChild(navTitle);
    const projButton = document.createElement('button');
    projButton.setAttribute('id', 'projBtn');
    projButton.setAttribute('class', 'button');
    projButton.innerHTML = "New Project";
    navBar.appendChild(projButton);

    //project page created
    const projectPage = document.createElement('div');
    projectPage.setAttribute('id', 'projectPage');
    projectPage.innerHTML = "Current Projects: ";

    //create a modal form to take in new project information
    const projectModal = document.createElement('div');
    projectModal.setAttribute('id', 'projectModal');
    const projModalLabel = document.createElement('label');
    projModalLabel.innerHTML = "Project Name: ";
    const projModalInput = document.createElement('input');
    projModalInput.setAttribute('type', 'text');
    projModalInput.setAttribute('id', 'projModalInput')

    const projBtnBar = document.createElement('div');
    const projSubModalBtn = document.createElement('button');
    projSubModalBtn.setAttribute('id', 'subBtn');
    projSubModalBtn.setAttribute('class', 'button');
    projSubModalBtn.innerHTML = "Submit";
    const projCancelModalBtn = document.createElement('button');
    projCancelModalBtn.setAttribute('id', 'cancelModalBtn');
    projCancelModalBtn.setAttribute('class', 'button');
    projCancelModalBtn.innerHTML = "Cancel";
    projBtnBar.appendChild(projSubModalBtn);
    projBtnBar.appendChild(projCancelModalBtn);
    projBtnBar.setAttribute('id', 'projBtnBar');


    projectModal.appendChild(projModalLabel);
    projectModal.appendChild(projModalInput);
    projectModal.appendChild(projBtnBar);
    

    projectPage.appendChild(projectModal);

    //append the results to the mainContainer
    mainContainer.appendChild(navBar);
    mainContainer.appendChild(projectPage);
    
    return mainContainer;

};

export {mainPage};