import Person from "./person.js";


class Hero extends Person{
    title="default title";
    firstname="default firstname";
    lastname="default lastname";
    _mission="my secret mission";
    static version=1001;
    constructor(htitle,hfname,hlname,hname){
        super(hname);
        this.title=htitle;
        this.firstname=hfname;
        this.lastname=hlname;
    }
    fullname(){
        return this.firstname+""+this.lastname;
    }
    static saypower(){
       return 7
    }

    get mission(){
        return this._mission;
    }
    set mission(nmission){
        this._mission=nmission;
    }
};

export default Hero;