export class Project{

    id:string;
    name:string;
    url:string;

    constructor(obj:any){
        this.name = obj.name;
        this.url = obj.url;
        this.id = obj.id;
    }

}