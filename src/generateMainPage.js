const mainPage = () => {
    const mainContainer = document.getElementById('content');

    const navBar = document.createElement('div')
    navBar.setAttribute('id', 'navBar');
    navBar.innerHTML = "nav bar";
    const projectPage = document.createElement('div');
    projectPage.setAttribute('id', 'projectPage');
    projectPage.innerHTML = "project page";
    mainContainer.appendChild(navBar);
    mainContainer.appendChild(projectPage);
    console.log("function called")
    return mainContainer;

};

export {mainPage};