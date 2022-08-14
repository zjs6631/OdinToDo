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
    const projectPageTitle = document.createElement('h3');
    projectPageTitle.setAttribute('id', 'projectPageTitle');
    projectPageTitle.innerHTML = "Current Projects: ";
    projectPage.appendChild(projectPageTitle);

    const projContainer = document.createElement('div');
    projContainer.setAttribute('id', 'projContainer');
    projectPage.appendChild(projContainer);

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
    

    projContainer.appendChild(projectModal);


    //create a task modal to take in task information when needed

    const taskModal = document.createElement('div');
    taskModal.setAttribute('id', 'taskModal');
    const titleLbl = document.createElement('label');
    titleLbl.innerHTML = "Title: "
    const titleInput = document.createElement('input');
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('id', 'titleInput');
    const descriptLbl = document.createElement('label');
    descriptLbl.innerHTML = "Description: ";
    const descriptInput = document.createElement('input');
    descriptInput.setAttribute('type', 'text');
    descriptInput.setAttribute('id', 'descriptInput');
    const dateLbl = document.createElement('label');
    dateLbl.innerHTML = "Date: ";
    const dateInput = document.createElement('input');
    dateInput.setAttribute('type', 'text');
    dateInput.setAttribute('id', 'dateInput');

    const priorityLbl = document.createElement("label");
    priorityLbl.innerHTML = "Priority: ";
    const priorityInput = document.createElement("select");
    priorityInput.setAttribute('name', 'priority');
    priorityInput.setAttribute('id', 'priorityInput');
    const high = document.createElement("option");
    high.innerHTML = "High";
    high.setAttribute('value', 'High');
    const low = document.createElement("option");
    low.setAttribute('value', 'Low');
    low.innerHTML = "Low";
    const medium = document.createElement("option");
    medium.setAttribute('value', 'Medium');
    medium.innerHTML = "Medium";
    priorityInput.appendChild(high);
    priorityInput.appendChild(medium);
    priorityInput.appendChild(low);

    const notesLbl = document.createElement('label');
    notesLbl.innerHTML = "Notes: ";
    const notesInput = document.createElement('input');
    notesInput.setAttribute('type', 'text');
    notesInput.setAttribute('id', 'notesInput');

    const taskBtnBar = document.createElement('div');
    taskBtnBar.setAttribute('id', 'taskBtnBar');
    const taskSubBtn = document.createElement('button');
    taskSubBtn.setAttribute('id', 'taskSubBtn');
    taskSubBtn.innerHTML = "Submit";
    const taskDelBtn = document.createElement('button');
    taskDelBtn.setAttribute('id', 'taskDelBtn');
    taskDelBtn.innerHTML = "Cancel";
    taskBtnBar.appendChild(taskSubBtn);
    taskBtnBar.appendChild(taskDelBtn);
    
    taskModal.appendChild(titleLbl);
    taskModal.appendChild(titleInput);
    taskModal.appendChild(descriptLbl);
    taskModal.appendChild(descriptInput);
    taskModal.appendChild(dateLbl);
    taskModal.appendChild(dateInput);
    taskModal.appendChild(priorityLbl);
    taskModal.appendChild(priorityInput);
    taskModal.appendChild(notesLbl);
    taskModal.appendChild(notesInput);
    taskModal.appendChild(taskBtnBar);

    projContainer.appendChild(taskModal);
    //append the results to the mainContainer
    mainContainer.appendChild(navBar);
    mainContainer.appendChild(projectPage);
    
    return mainContainer;

};

export {mainPage};