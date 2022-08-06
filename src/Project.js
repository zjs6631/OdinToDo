//class to create project objects.
//should have a name attribute and an array to hold todo objects

export class Project {

    constructor(name){
        this.name = name;
        
    }
    
    get getName(){
        return this.name;
    }

    get getArr(){
        return arr;
    }

    set setName(a){
        this.name = a
    }

    
    
    push(a) {
        arr.push(a);
    }

}