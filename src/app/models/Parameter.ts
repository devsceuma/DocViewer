export class Parameter{

    name:string;
    description:string;
    type:string;
    optional:boolean;


    constructor(obj:any){
        this.name = obj.name;
        if(obj.description == null){
            this.description = 'Descrição não documentada';
        }else{
            this.description = obj.description;
        }
        this.type = obj.type;
        this.optional = obj.optional;
        Object.freeze(this);
    }
}