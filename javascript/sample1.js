class Sample{
    constructor(id,name){
        this.id=id;
        this.name=name;
    }
    displaYinfo(){
        console.log(this.id+"  "+this.name)
    }}
let s=new Sample(111,"mani");
s.displaYinfo();