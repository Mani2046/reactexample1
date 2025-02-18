class sample{
    constructor(id,name);
    {
        this.id = id;
        this.name = name;
        
    }   
    displayinfo(){
        console.log(this.id+" "+this.name);
}
}
let s1 = new sample( 101, "mani");
s1.displayinfo();
