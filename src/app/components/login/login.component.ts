import { Component } from '@angular/core';

@Component({
    selector:'page-login',
    templateUrl:`./login.html`,
    styleUrls:['./login.css']
})
export class LoginComponent{
    return={message:"",class:""}
    credentials = {user:"",pwd:""}

    constructor(){

    }


    logar(){
        if(this.credentials.user == "" || this.credentials.pwd == ""){
            this.return.message = `Digite os campos de usuário e senha`;
            this.return.class="alert-danger";
        }else{
            this.return.message="";
            this.return.class="";
        }
    }

}