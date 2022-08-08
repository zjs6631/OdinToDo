//class to create project objects.
//should have a name attribute and an array to hold todo objects

export class Project {
    
    constructor(name, arr = []){
        this.name = name;
        this.arr = arr;
        
    }

    
    
    get getName(){
        return this.name;
    }

    get getArr(){
        return this.arr;
    }

    set setName(a){
        this.name = a
    }


}