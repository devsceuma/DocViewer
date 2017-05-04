import {Parameter} from  './Parameter';
export class Method{

        name:string; 
        description:string; 
        returnType:string; 
        dateCreation:string; 
        typesRequest:string;
        author:string;
        url:string;
        modifier:string;
        parameters:Parameter[] = [];
        onSucess:string;

    constructor(obj:any){
        this.name = obj.name;
        this.description = obj.description;
        this.returnType = obj.returnType;
        this.dateCreation = obj.dateCreation;
        this.typesRequest = obj.typesRequest;
        this.author = obj.author;
        this.url = obj.url;
        this.modifier = obj.modifier;
        this.onSucess = obj.onSuccess;
        if(typeof obj.parameters != 'undefined'){
            obj.parameters.forEach((parameter:any)=>this.parameters.push(new Parameter(parameter)));
        }
        Object.freeze(this);
    }
}