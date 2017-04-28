import {Http,Response,URLSearchParams,Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class Service{

    private _urlMaster:string = "http://localhost:8080/";

    constructor(private _http:Http){

    }

    protected post(api:string,params:any):Observable<Response>{
        console.log("URL REQUESTED:"+this._urlMaster+api)
        return this._http.post(this._urlMaster+api,params, this._getHeaders('P')).catch(this._handleError);
    }

    protected get(api:string,query:string):Observable<Response>{
        return this._http.get(this._urlMaster+api+query).map(this._extractData).catch(this._handleError);
    }

    private _extractData(res:Response){
        let data = res.json();
        return data;
    }

    /**
     * HandlerError responsável por pegar os callbacks das minhas requisições GET E POST
     * @param error 
     */

    private _handleError (error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.message || JSON.stringify(body);
            errMsg = `${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        return Observable.throw(errMsg);
     }

    /**
     * HEADERS RESPONSÁVEIS PARA ENVIO DE FORMULARIO
     * @param type GET, POST
     */
    private _getHeaders(type:string): Headers{
        if(type ===  'G'){
            let headers = new Headers({ 'Content-Type': 'application/json','Access-Control-Allow-Origin': '*'});
            return headers;
        }else{
            let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
            return headers;
        }
    }

}