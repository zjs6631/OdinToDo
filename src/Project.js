//class to create project objects.
//should have a name attribute and an array to hold todo objects

export class Project {
    
    constructor(name, index, arr = []){
        this.name = name;
        this.arr = arr;
        this.index = index;
    }

    
    
    get getName(){
        return this.name;
    }

    get getArr(){
        return this.arr;
    }

    get getIndex(){
        return this.index;
    }

    set setName(a){
        this.name = a
    }
    
    set setIndex(a){
        this.index = a;
    }


}