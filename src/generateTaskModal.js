        
const taskModalGenerator = (project) => {
        
        //create a task modal to take in task information when needed

        const taskModal = document.createElement('div');
        taskModal.setAttribute('id', 'taskModal' + project.index);
        taskModal.setAttribute('class', 'taskModal');
        const titleLbl = document.createElement('label');
        titleLbl.innerHTML = "Title: "
        const titleInput = document.createElement('input');
        titleInput.setAttribute('type', 'text');
        titleInput.setAttribute('id', 'titleInput' + project.index);
        const descriptLbl = document.createElement('label');
        descriptLbl.innerHTML = "Description: ";
        const descriptInput = document.createElement('input');
        descriptInput.setAttribute('type', 'text');
        descriptInput.setAttribute('id', 'descriptInput' + project.index);
        const dateLbl = document.createElement('label');
        dateLbl.innerHTML = "Date: ";
        const dateInput = document.createElement('input');
        dateInput.setAttribute('type', 'text');
        dateInput.setAttribute('id', 'dateInput' + project.index);
        const priorityLbl = document.createElement("label");
        priorityLbl.innerHTML = "Priority: ";
        const priorityInput = document.createElement('select');
        priorityInput.setAttribute('name', 'priority');
        priorityInput.setAttribute('id', 'priorityInput' + project.index);
        const high = document.createElement('option');
        high.setAttribute('text', 'High');
        high.setAttribute('value', 'High');
        const low = document.createElement('option');
        low.setAttribute('value', 'Low');
        low.setAttribute('text', 'Low');
        const medium = document.createElement('option');
        medium.setAttribute('value', 'Medium');
        medium.setAttribute('text', 'Medium');
        priorityInput.appendChild(high);
        priorityInput.appendChild(medium);
        priorityInput.appendChild(low);
        const notesLbl = document.createElement('label');
        notesLbl.innerHTML = "Notes: ";
        const notesInput = document.createElement('input');
        notesInput.setAttribute('type', 'text');
        notesInput.setAttribute('id', 'notesInput' + project.index);
    
        const taskBtnBar = document.createElement('div');
        taskBtnBar.setAttribute('id', 'taskBtnBar');
        const taskSubBtn = document.createElement('button');
        taskSubBtn.setAttribute('id', 'taskSubBtn' + project.index);
        taskSubBtn.innerHTML = "Submit";
        const taskDelBtn = document.createElement('button');
        taskDelBtn.setAttribute('id', 'taskDelBtn' + project.index);
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
    
        return taskModal;
}

export {taskModalGenerator};