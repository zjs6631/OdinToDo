import {Todo} from './Todo.js';
import {mainPage} from './generateMainPage';

console.log("js connected");
const Container = document.getElementById('content');
let obj = new Todo("title", "lame", "now", "high", "notes")

console.log(obj)
console.log("test this")

Container.appendChild(mainPage());