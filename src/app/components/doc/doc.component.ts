import {Component, OnInit,trigger,state,style,transition,animate,keyframes} from '@angular/core'
import {Router, ActivatedRoute } from '@angular/router';
import {LoginService} from './../../service/LoginService';
import {User} from './../../models/User';
import {Project} from './../../models/Project';
import {DocumentationService} from '../../service/DocumentationService';
import {ProjectDocumented} from './../../models/ProjectDocumented';

@Component({
    selector: 'doc',
    templateUrl: './doc.html',
    styleUrls:['./style_layout.css','./style_responsive.css','./style.css'],
    providers:[LoginService,DocumentationService]
})
export class DocComponent implements OnInit{

    private renderMethod:boolean = true;
    private renderConstructor:boolean = true;

    private filter={type:'',value:''}
    private currentProject:ProjectDocumented;
    private currentProjectSafety:any;

    private user:User;
    private autenticate:boolean = true;
    
    
    
    private userGenerated={id:"5904c8c2eedce401888056ce",
            name:"Marcus Vinicius Cartagenes",
            username:"marcus",
            password:"202cb962ac59075b964b07152d234b70",
            email:"mvcartagenes@gmail.com",
            organization:"Universidade Ceuma",
            job:"Desenvolvedor de Sistemas",
            projects:[{"id":"59049fddeedce43b1645b591",
            url:"www.ceuma.br/ServicosOnline",
            name:"ServicosOnline"}],
            profile:"AD"};


    constructor(private router: Router, private _loginService:LoginService, private _documentationService:DocumentationService) { }

    ngOnInit(){
        if(this.autenticate){
            if(localStorage.getItem("currentUser") != null){
                this.user = new User(JSON.parse(localStorage.getItem("currentUser")));
            }else{
                this.router.navigate(['']);
            }
        }else{
            this.user = new User(this.userGenerated);
        }
    }

    loadDocumentation(obj:any){
        this._documentationService.getDoc(new Project(obj.projeto))
        .subscribe(
        data=>{this.currentProject = new ProjectDocumented(data); this.currentProjectSafety = data},
        error=>{ /*TODO TRATAR ERROR */});
    }

    filterDocument(obj:any){
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

    deslogar(){
        this._loginService.signout();
    }
}