(()=>{"use strict";console.log("js connected");const t=document.getElementById("content");let e=new class{constructor(t,e,i,n,s){this.title=t,this.description=e,this.dueDate=i,this.priority=n,this.notes=s}get getTitle(){return this.title}get getDescription(){return this.description}get getDueDate(){return this.dueDate}get getPriority(){return this.priority}get getNotes(){return this.notes}set setTitle(t){this.title=t}set setDescription(t){this.description=t}set setDueDate(t){this.dueDate=t}set setPriority(t){this.priority=t}set setNotes(t){this.notes=t}}("title","lame","now","high","notes");console.log(e),console.log("test this"),t.appendChild((()=>{const t=document.createElement("div");t.setAttribute("id","mainContainer");const e=document.createElement("div");e.setAttribute("id","navBar");const i=document.createElement("h1");i.setAttribute("id","navTitle"),i.innerHTML="To Do <br> List",e.appendChild(i);const n=document.createElement("button");n.setAttribute("id","projBtn"),n.innerHTML="New Project",e.appendChild(n);const s=document.createElement("div");return s.setAttribute("id","projectPage"),s.innerHTML="Current Projects: ",t.appendChild(e),t.appendChild(s),t})())})();