export class Project{

    id:number;
    name:string;
    url:string;

    constructor(obj:any){
        this.name = obj.name;
        this.url = obj.url;
        this.id = obj.id;
    }

}