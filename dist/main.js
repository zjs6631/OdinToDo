(()=>{"use strict";class t{constructor(t,e,n,o,r){this.title=t,this.description=e,this.dueDate=n,this.priority=o,this.notes=r}get getTitle(){return this.title}get getDescription(){return this.description}get getDueDate(){return this.dueDate}get getPriority(){return this.priority}get getNotes(){return this.notes}set setTitle(t){this.title=t}set setDescription(t){this.description=t}set setDueDate(t){this.dueDate=t}set setPriority(t){this.priority=t}set setNotes(t){this.notes=t}}class e{constructor(t,e=[]){this.name=t,this.arr=e}get getName(){return this.name}get getArr(){return this.arr}set setName(t){this.name=t}}console.log("js connected"),document.getElementById("content").appendChild((()=>{const t=document.createElement("div");t.setAttribute("id","mainContainer");const e=document.createElement("div");e.setAttribute("id","navBar");const n=document.createElement("h1");n.setAttribute("id","navTitle"),n.innerHTML="To Do <br> List",e.appendChild(n);const o=document.createElement("button");o.setAttribute("id","projBtn"),o.setAttribute("class","button"),o.innerHTML="New Project",e.appendChild(o);const r=document.createElement("div");r.setAttribute("id","projectPage"),r.innerHTML="Current Projects: ";const i=document.createElement("div");i.setAttribute("id","projectModal");const s=document.createElement("label");s.innerHTML="Project Name: ";const c=document.createElement("input");c.setAttribute("type","text"),c.setAttribute("id","projModalInput");const d=document.createElement("div"),l=document.createElement("button");l.setAttribute("id","subBtn"),l.setAttribute("class","button"),l.innerHTML="Submit";const a=document.createElement("button");return a.setAttribute("id","cancelModalBtn"),a.setAttribute("class","button"),a.innerHTML="Cancel",d.appendChild(l),d.appendChild(a),d.setAttribute("id","projBtnBar"),i.appendChild(s),i.appendChild(c),i.appendChild(d),r.appendChild(i),t.appendChild(e),t.appendChild(r),t})());const n=document.getElementById("subBtn"),o=document.getElementById("projBtn"),r=document.getElementById("cancelModalBtn"),i=document.getElementById("projModalInput");o.addEventListener("click",(()=>{console.log("clicked!"),document.getElementById("projectModal").style.display="grid"})),r.addEventListener("click",(()=>{document.getElementById("projectModal").style.display="none",i.value=""})),n.addEventListener("click",(()=>{let t=new e(i.value);document.getElementById("projectPage").appendChild((t=>{const e=document.createElement("div");return e.setAttribute("class","projDiv"),e.innerHTML=t.name,e})(t)),i.value="",document.getElementById("projectModal").style.display="none"}));let s=new t("title","descript","duedate","priority","notes"),c=new e("First Project");c.arr.push(s);let d=new t("zachs book","its a bad one","3/5","5","nothing noteworthy");c.arr.push(d),console.log(c.getArr),function(t){let e;try{e=window.localStorage;const t="__storage_test__";return e.setItem(t,t),e.removeItem(t),!0}catch(t){return t instanceof DOMException&&(22===t.code||1014===t.code||"QuotaExceededError"===t.name||"NS_ERROR_DOM_QUOTA_REACHED"===t.name)&&e&&0!==e.length}}()?console.log("local storage available!"):console.log("no locale storage :<")})();