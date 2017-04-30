import {Component, OnInit,trigger,state,style,transition,animate,keyframes} from '@angular/core'
import {Router, ActivatedRoute } from '@angular/router';
import {LoginService} from './../../service/LoginService';
import {User} from './../../models/User';
import {Project} from './../../models/Project';
import {DocumentationService} from '../../service/DocumentationService';


@Component({
    selector: 'doc',
    templateUrl: './doc.html',
    styleUrls:['./style_layout.css'],
    providers:[LoginService,DocumentationService]
})
export class DocComponent implements OnInit{

    user:User;
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
        this._documentationService.getDoc(new Project(obj.projeto));
    }

    deslogar(){
        this._loginService.signout();
    }
}