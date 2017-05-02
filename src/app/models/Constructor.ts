import {Parameter} from './Parameter';
export class Constructor{


    description:string;
    parameters:Parameter[] = [];

    constructor(obj:any){
        this.description = obj.description;
        obj.parameters.forEach((parameter:any)=>this.parameters.push(new Parameter(parameter)));
        Object.freeze(this);
    }
}