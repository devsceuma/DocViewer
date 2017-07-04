import {Injectable} from '@angular/core';
import {Router, CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router'

@Injectable()
export class AuthGuard implements CanActivate{

    public enableAuth:boolean = false;
    public userGenerated={id:"5904c8c2eedce401888056ce",
            name:"Marcus Vinicius Cartagenes",
            username:"marcus",
            email:"mvcartagenes@gmail.com",
            organization:"Universidade Ceuma",
            job:"Desenvolvedor de Sistemas",
            projects:[{"id":"59049fddeedce43b1645b591",
            url:"http://10.2.3.37:8080/ceumadashapi/documentation/getDocumentation",
            name:"ServicosOnline"}],
            profile:"AD"};

    constructor(private _router:Router){}

    canActivate(route: ActivatedRouteSnapshot, state:RouterStateSnapshot){
        if(this.enableAuth){
            if(localStorage.getItem('currentUser')){
                return true;
            }
            this._router.navigate([''], { queryParams: { returnUrl: state.url }});
            return false;
        }else{
            return true;
        }
    }
}