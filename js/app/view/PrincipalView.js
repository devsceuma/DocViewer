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
        return `${classes.map(c=>
                    `<div class="class">
                        <span class="spanClass"> | More Info </span>
                        <span class="spanClass"> More Info </span>
                        <p>${c._name} - Classe</p>
                        ${this._generateConstructors(c)}
                        ${this._generateMethods(c)}
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
        return `${classe._methods.map(c=>
                    `<div class="methods">
                        <p> Método: ${c._description}</p>
                        ${this._generateParameters(c)}
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