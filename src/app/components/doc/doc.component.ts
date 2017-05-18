import {Component, OnInit,trigger,state,style,transition,animate,keyframes, ViewEncapsulation} from '@angular/core'
import { PageScrollService, Ng2PageScrollModule } from 'ng2-page-scroll'
import {Router, ActivatedRoute } from '@angular/router';
import {LoginService} from './../../service/LoginService';
import {User} from './../../models/User';
import {Project} from './../../models/Project';
import {DocumentationService} from '../../service/DocumentationService';
import {ProjectDocumented} from './../../models/ProjectDocumented';
import {AuthGuard} from './../../auth.guard';

@Component({
    selector: 'doc',
    templateUrl:'./doc.html',
    styleUrls:['./style_layout.css','./style_responsive.css','./style.css'],
    providers:[LoginService,DocumentationService,PageScrollService],
    encapsulation: ViewEncapsulation.None
})
export class DocComponent implements OnInit{

    private renderMethod:boolean = true;
    private renderConstructor:boolean = true;

    private filter={type:'',value:''}
    private currentProject:ProjectDocumented;
    private currentProjectSafety:any;
    private user:User;


    constructor(private router: Router, private _loginService:LoginService, private _documentationService:DocumentationService, private _authGuard:AuthGuard) { }

    ngOnInit(){
        if(!this._authGuard.enableAuth){
            this.user = new User(this._authGuard.userGenerated);
        }else{
            this.user = new User(JSON.parse(localStorage.getItem("currentUser")));
        }
    }

    private loadDocumentation(obj:any){
        console.log(obj);
        this._documentationService.getDoc(new Project(obj.projeto))
        .subscribe(
        data=>{this.currentProject = new ProjectDocumented(data); this.currentProjectSafety = data;console.log(this.currentProject)},
        error=>{ /*TODO TRATAR ERROR */});
    }

    private filterDocument(obj:any){
        if(obj.value === "" || obj.type === ""){
            this.currentProject = new ProjectDocumented(this.currentProjectSafety);
        }
        if(obj.type === 'CLASSE' && obj.value != ""){
            this.currentProject.classes.forEach((unity:any)=>{
                if(unity.name.indexOf(obj.value) === -1){
                    console.log(unity.name+" Não contêm "+obj.value);
                    this.currentProject.classes.splice(this.currentProject.classes.indexOf(unity),1);
                }
            });
        }else if(obj.type === 'METHOD' && obj.value != ""){
            this.currentProject.classes.forEach((unity:any)=>{
                unity.methods.forEach((method:any)=>{
                    if(method.name.toUpperCase() != obj.value.toUpperCase()){
                       console.log("Método "+method.name+" precisa ser deletado");
                    }
                })
            })
        }else{
            this.currentProject = new ProjectDocumented(this.currentProjectSafety);
        }
    }

    private getSeverityByTypeRequest(typeRequest:string):string{

        if(typeRequest == 'GET'){
            return 'success';
        }else if(typeRequest == 'POST'){
            return 'warning';
        }else if(typeRequest == 'PUT'){
            return 'info';
        }else if (typeRequest == 'DELETE'){
            return 'danger';
        }
    }

    deslogar(){
        this._loginService.signout();
    }
}