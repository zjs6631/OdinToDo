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
    projButton.innerHTML = "New Project";
    navBar.appendChild(projButton);

    //project page created
    const projectPage = document.createElement('div');
    projectPage.setAttribute('id', 'projectPage');
    projectPage.innerHTML = "Current Projects: ";
    //append the results to the mainContainer
    mainContainer.appendChild(navBar);
    mainContainer.appendChild(projectPage);
    
    return mainContainer;

};

export {mainPage};