class PrincipalView extends View{

    constructor(element){
        element.innerHTML = '<div></div>';
        super(element);

    }

    _template(model){
        return  `<div>
                    <div class="projectConfiguration">
                        <p>${model._name}</p>
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
                        <div class="typeRequest">/${c._typeRequest}</div>
                        <div class="method">${c._url}
                        <span class="methodSpan">${c._description}</span>
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

}