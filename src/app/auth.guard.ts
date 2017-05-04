import {Injectable} from '@angular/core';
import {Router, CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router'

@Injectable()
export class AuthGuard implements CanActivate{

    public enableAuth:boolean = true;
    public userGenerated={id:"5904c8c2eedce401888056ce",
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