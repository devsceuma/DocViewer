import { Component } from '@angular/core';

@Component({
    selector:'page-login',
    templateUrl:`./login.html`,
    styleUrls:['./login.css']
})
export class LoginComponent{
    return={message:""}
    credentials = {user:"",pwd:""}

    constructor(){

    }


    logar(){
        console.log(this.credentials.user);
        console.log(this.credentials.pwd);
        console.log(this.return.message == "")
        this.return.message = "Chegou com sucesso !";
    }
}