import {Method} from './Method';
import {Constructor} from './Constructor';
import {Field} from './Field';
export class Class{

    name:string;
    origin:string;
    description:string;
    constructors:Constructor[]=[];
    fields:Field[] = []
    methods:Method[]=[];
    url:string;
    constructor(obj:any){
        this.name = obj.name;
        this.origin = obj.origin;
        this.description = obj.description
        this.url = obj.url;
        if(typeof obj.constructor != 'undefined'){
            obj.constructors.forEach((constructor:any)=>this.constructors.push(new Constructor(constructor)));
        }
        
        if(typeof obj.fields != 'undefined'){
            obj.fields.forEach((field:any)=>this.fields.push(new Field(field)));
        }
        
        if(typeof obj.methods != 'undefined'){
            obj.methods.forEach((method:any)=>this.methods.push(new Method(method)));
        }
    }
}