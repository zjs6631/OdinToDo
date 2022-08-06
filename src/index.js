import {Todo} from './Todo.js';
import {mainPage} from './generateMainPage';

console.log("js connected");
const mainContainer = document.getElementById('content');
let obj = new Todo("title", "lame", "now", "high", "notes")

console.log(obj)
console.log("updating")

mainContainer[0].appendChild(mainPage());