import {Class} from './Class';
export class ProjectDocumented{

    name:string;
    description:string;
    url:string;
    classes:Class[] = [];

    constructor(doc:any){
        this.name = doc.name;
        this.description = doc.description;
        this.url = doc.url;
        doc.classes.forEach((d:any)=>this.classes.push(new Class(d)));
    }

}