class PrincipalView extends View{

    constructor(element){
        element.innerHTML = '<div></div>';
        super(element);

    }

    _template(model){
        return  `<div>
                    <div class="projectConfiguration">
                        <p>Projeto: ${model._name}</p>
                    </div>
                    ${this._generateClasses(model._classes)}
                </div>`
    }

    _generateClasses(classes){
        let exibirConstrutor = false;
        let exibirMetodo = true;
        return `${classes.map(c=>
                    `<div class="class">
                        <span class="spanClass"> | Expand </span>
                        <span class="spanClass"> Class Info </span>
                        <p>${c._name} - Classe</p>
                        <hr/>
                        ${exibirConstrutor?this._generateConstructors(c):''}
                        ${exibirMetodo?this._generateMethods(c):''}
                     </div>`
                ).join('')}`
    }


    _generateConstructors(classe){
        return `${classe._constructors.map(c=>
                    `<div class="constructor">
                        <p> Construtor: ${c._description}</p>
                        ${this._generateParameters(c)}
                     </div>`
                ).join('')}`
    }

    _generateMethods(classe){
        let exibirParametros = false;
        return `${classe._methods.map(c=>
                    `<div class="methods">
                        <div class="row">
                            <div class="col-md-1">
                                <div class="${this._getClassParameterByType(c._typeRequest)}">${c._typeRequest}</div>
                            </div>
                            <div class="col-md-10 col-xs-10 col-ls-10 method ${this._getClassMethodByType(c._typeRequest)}">
                                <p>${c._url}<span class="methodSpan">${c._description}</span></p>
                            </div>
                        </div>
                        ${exibirParametros?this._generateParameters(c):''}
                     </div>`
                ).join('')}`
    }

    _generateParameters(methodOrConstructor){
        return `${methodOrConstructor._parameters.map(p=>
                    `<div class="parameters">
                        <p> Parameters: ${p._name}</p>
                     </div>`
                ).join('')}`
    }

    _getClassParameterByType(type){
        if(type === "GET"){
            return "typeRequest classGET";
        }else if(type === "POST"){
            return "typeRequest classPOST";
        }else if(type === "PUT"){
            return "typeRequest classPUT";
        }else if(type==="DELETE"){
            return "typeRequest classDELETE";
        }
    }

    _getClassMethodByType(type){
        if(type === "GET"){
            return "get";
        }else if(type === "POST"){
            return "post";
        }else if(type === "PUT"){
            return "put";
        }else if(type==="DELETE"){
            return "delete";
        }
    }


}