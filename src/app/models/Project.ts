export class Project{

    private name:string;
    private url:string;

    constructor(obj:any){
        this.name = obj.name;
        this.url = obj.url;
    }
}