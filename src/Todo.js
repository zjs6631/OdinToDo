//class to create each todo

export class Todo {
    //constructor method to set each value put into form
    constructor(title, description, dueDate, priority,
        notes){
            this.title = title;
            this.description = description;
            this.dueDate = dueDate;
            this.priority = priority;
            this.notes = notes;
        }

    //getter methods for retreiving objs values
    get getTitle(){
        return this.title;
    }
    get getDescription(){
        return this.description;
    }
    get getDueDate(){
        return this.dueDate;
    }
    get getPriority(){
        return this.priority;
    }
    get getNotes(){
        return this.notes;
    }
    //setter methods for setting the objs values
    set setTitle(a){
        this.title = a;
    }
    set setDescription(a){
        this.description = a;
    }
    set setDueDate(a){
        this.dueDate = a;
    }
    set setPriority(a){
        this.priority = a;
    }
    set setNotes(a){
        this.notes = a;
    }


}

