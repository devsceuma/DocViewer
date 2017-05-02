export class Field{

    name:string; description:string; type:string; modifier:string;
    constructor(obj:any){
        this.name = obj.name;
        this.description = obj.description;
        this.type = obj.type;
        this.modifier = obj.modifier;
    }

}