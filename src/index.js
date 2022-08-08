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
project.arr.push(todo);
let todo2 = new Todo('zachs book', 'its a bad one', '3/5', '5', 'nothing noteworthy')

project.arr.push(todo2);

console.log(project.getArr);

if(storageAvailable('localStorage')){
    console.log('local storage available!')
} else {
    console.log('no locale storage :<')
}

