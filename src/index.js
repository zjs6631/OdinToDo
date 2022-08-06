import {Todo} from './Todo.js';
import {Project} from './Project.js';
import {mainPage} from './generateMainPage';
import {storageAvailable} from './localStorage';

console.log("js connected"); //checking to make sure webpack properly connected
//grabbed the main container element from the DOM and load the mainPage with the mainPage function
const Container = document.getElementById('content');
Container.appendChild(mainPage());

let todo = new Todo('title','descript','duedate','priority','notes');
let project = new Project('First Project');
project.push(todo);

console.log(project.getArr());

if(storageAvailable('localStorage')){
    console.log('local storage available!')
} else {
    console.log('no locale storage :<')
}

