(()=>{"use strict";class e{constructor(e,t,n,i,d){this.title=e,this.description=t,this.dueDate=n,this.priority=i,this.notes=d}get getTitle(){return this.title}get getDescription(){return this.description}get getDueDate(){return this.dueDate}get getPriority(){return this.priority}get getNotes(){return this.notes}set setTitle(e){this.title=e}set setDescription(e){this.description=e}set setDueDate(e){this.dueDate=e}set setPriority(e){this.priority=e}set setNotes(e){this.notes=e}}class t{constructor(e,t,n=[]){this.name=e,this.arr=n,this.index=t}get getName(){return this.name}get getArr(){return this.arr}get getIndex(){return this.index}set setName(e){this.name=e}set setIndex(e){this.index=e}}console.log("js connected"),document.getElementById("content").appendChild((()=>{const e=document.createElement("div");e.setAttribute("id","mainContainer");const t=document.createElement("div");t.setAttribute("id","navBar");const n=document.createElement("h1");n.setAttribute("id","navTitle"),n.innerHTML="To Do <br> List",t.appendChild(n);const i=document.createElement("button");i.setAttribute("id","projBtn"),i.setAttribute("class","button"),i.innerHTML="New Project",t.appendChild(i);const d=document.createElement("div");d.setAttribute("id","projectPage");const r=document.createElement("h3");r.setAttribute("id","projectPageTitle"),r.innerHTML="Current Projects: ",d.appendChild(r);const o=document.createElement("div");o.setAttribute("id","projContainer"),d.appendChild(o);const s=document.createElement("div");s.setAttribute("id","projectModal");const l=document.createElement("label");l.innerHTML="Project Name: ";const c=document.createElement("input");c.setAttribute("type","text"),c.setAttribute("id","projModalInput");const a=document.createElement("div"),u=document.createElement("button");u.setAttribute("id","subBtn"),u.setAttribute("class","button"),u.innerHTML="Submit";const p=document.createElement("button");p.setAttribute("id","cancelModalBtn"),p.setAttribute("class","button"),p.innerHTML="Cancel",a.appendChild(u),a.appendChild(p),a.setAttribute("id","projBtnBar"),s.appendChild(l),s.appendChild(c),s.appendChild(a),o.appendChild(s);const m=document.createElement("div");m.setAttribute("id","taskModal");const b=document.createElement("label");b.innerHTML="Title: ";const E=document.createElement("input");E.setAttribute("type","text"),E.setAttribute("id","titleInput");const h=document.createElement("label");h.innerHTML="Description: ";const g=document.createElement("input");g.setAttribute("type","text"),g.setAttribute("id","descriptInput");const y=document.createElement("label");y.innerHTML="Date: ";const A=document.createElement("input");A.setAttribute("type","text"),A.setAttribute("id","dateInput");const C=document.createElement("label");C.innerHTML="Priority: ";const v=document.createElement("input");v.setAttribute("type","text"),v.setAttribute("id","priorityInput");const B=document.createElement("label");B.innerHTML="Notes: ";const M=document.createElement("input");M.setAttribute("type","text"),M.setAttribute("id","notesInput");const I=document.createElement("div");I.setAttribute("id","taskBtnBar");const L=document.createElement("button");L.setAttribute("id","taskSubBtn"),L.innerHTML="Submit";const T=document.createElement("button");return T.setAttribute("id","taskDelBtn"),T.innerHTML="Cancel",I.appendChild(L),I.appendChild(T),m.appendChild(b),m.appendChild(E),m.appendChild(h),m.appendChild(g),m.appendChild(y),m.appendChild(A),m.appendChild(C),m.appendChild(v),m.appendChild(B),m.appendChild(M),m.appendChild(I),o.appendChild(m),e.appendChild(t),e.appendChild(d),e})());const n=document.getElementById("subBtn"),i=document.getElementById("projBtn"),d=document.getElementById("cancelModalBtn"),r=document.getElementById("projModalInput");i.addEventListener("click",(()=>{console.log("clicked!"),document.getElementById("projectModal").style.display="grid"})),d.addEventListener("click",(()=>{document.getElementById("projectModal").style.display="none",r.value=""}));let o=0;const s=document.getElementById("taskModal"),l=document.getElementById("titleInput"),c=document.getElementById("descriptInput"),a=document.getElementById("dateInput"),u=document.getElementById("priorityInput"),p=document.getElementById("notesInput");let m;n.addEventListener("click",(()=>{let e=new t(r.value,o);document.getElementById("projContainer").appendChild((e=>{const t=document.createElement("div");t.setAttribute("class","projDiv"),t.setAttribute("id","projDiv"+e.index);const n=document.createElement("h5");n.setAttribute("class","projName"),n.innerHTML=e.name,t.appendChild(n);const i=document.createElement("button");i.setAttribute("class","delBtn"),i.setAttribute("id","delBtn"+e.index),i.innerHTML="X",t.appendChild(i);const d=document.createElement("button");return d.setAttribute("class","taskAddBtn"),d.setAttribute("id","addBtn"+e.index),d.innerHTML="+",t.appendChild(d),t})(e)),r.value="",document.getElementById("projectModal").style.display="none";let n=document.getElementById("delBtn"+e.index);n.addEventListener("click",(()=>{n.parentElement.remove()})),document.getElementById("addBtn"+e.index).addEventListener("click",(()=>{s.style.display="grid",m=e.index})),o+=1})),document.getElementById("taskDelBtn").addEventListener("click",(()=>{s.style.display="none",l.value="",c.value="",a.value="",u.value="",p.value=""})),document.getElementById("taskSubBtn").addEventListener("click",(()=>{let t=document.getElementById("addBtn"+m),n=new e(l.value,c.value,a.value,u.value,p.value);t.parentElement.appendChild((e=>{const t=document.createElement("div");t.setAttribute("class","taskDiv");const n=document.createElement("h5");n.setAttribute("class","taskName"),n.innerHTML=e.title,t.appendChild(n);const i=document.createElement("button");i.setAttribute("class","completedBtn"),i.innerHTML="Completed",t.appendChild(i);const d=document.createElement("button");d.setAttribute("class","seeMoreBtn"),d.innerHTML="See More",t.appendChild(d);const r=document.createElement("div");return r.setAttribute("class","infoCard"),r.innerHTML="description:"+e.description+"<br>",r.innerHTML+="Due Date: "+e.dueDate+"<br>",r.innerHTML+="Priority(1-5): "+e.priority+"<br>",r.innerHTML+="Notes: "+e.notes,t.appendChild(r),t})(n)),s.style.display="none",l.value="",c.value="",a.value="",u.value="",p.value=""}));let b=new e("title","descript","duedate","priority","notes"),E=new t("First Project");E.arr.push(b);let h=new e("zachs book","its a bad one","3/5","5","nothing noteworthy");E.arr.push(h),console.log(E.getArr),function(e){let t;try{t=window.localStorage;const e="__storage_test__";return t.setItem(e,e),t.removeItem(e),!0}catch(e){return e instanceof DOMException&&(22===e.code||1014===e.code||"QuotaExceededError"===e.name||"NS_ERROR_DOM_QUOTA_REACHED"===e.name)&&t&&0!==t.length}}()?console.log("local storage available!"):console.log("no locale storage :<")})();