class Person{
    constructor(hname){
        this.name=hname;
    }
    canwalk(){
        return "I can walk";
    }
    sayname(){
        return this.name;
    }
}

export default Person;