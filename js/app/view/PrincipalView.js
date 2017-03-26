class PrincipalView extends View{

    constructor(element){
        element.innerHTML = '<div></div>';
        super(element);

    }

    _template(model){
        return  `<div>
                    ${model._classes.map(c=>
                        `<p>${c._name} - Classe</p>
                            ${c._constructors.map(con=>
                                `<p>${con._description} - Construtor</p>
                                    ${con._parameters.map(param=>
                                        `<p>${param._name} - Parametros do Construtor</p>`    
                                    ).join('')}`
                            ).join('')}
                            ${c._fields.map(f=>
                                `<p>${f._name} - Field da Classe</p>`
                            ).join('')}
                            ${c._methods.map(m=>
                                `<p>${m._name} - Método</p>
                                 ${m._parameters.map(p=>
                                    `<p>${p._name} - Parametro da Função</p>`
                                ).join('')}`
                            ).join('')}`
                    ).join('')}
                </div>`
    }
}