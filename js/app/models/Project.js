class Project {

    constructor(name, description, url, classes) {
        this._name = name;
        this._description = description;
        this._url = url;
        this._classes = [];

        if(typeof classes != 'undefined'){
            this._createClasses(classes);
        }
        
    }

    generateProject(project, classes){
        this._name = project._name;
        this._description = project._description;
        this._url = project._url;
        this._createClasses(classes);
        return this;
    }

    get name() { return this._name };
    get description() { return this._description };
    get url() { return this._url };
    get classes() { return this._classes };

    set name(name)                  {this._name = name};
    set description(description)    {this._description = description};
    set url(url)                    {this._url = url};
    set classes(classes)            {this._createClasses(classes)};

    _createClasses(classes) {
        classes.forEach(clazz => {
            this._classes.push(
                new Class(clazz.name,
                    clazz.origin, clazz.description,
                    this._getFields(clazz),
                    this._getConstructors(clazz),
                    this._getMethods(clazz)));
        })
    };

    _getFields(clazz) {
        let fields = [];
        clazz.fields.forEach(fd => {
            fields.push(new Field(fd.name, fd.description, fd.type, fd.modifier));
        });
        return fields;
    }

    _getConstructors(clazz) {
        let parameters = [];
        let constructors = [];

        clazz.constructors.forEach(constructor => {
            parameters = [];
            constructor.parameters.forEach(p => {
                parameters.push(new Parameter(p.name, p.description, p.type, p.optional));
            });
            constructors.push(new Constructor(constructor.description, parameters))
        });
        return constructors;
    }

    _getMethods(clazz) {
        let parameters = [];
        let methods = [];
        debugger;
        clazz.methods.forEach(method => {
            parameters = [];
            method.parameters.forEach(p => {
                parameters.push(new Parameter(p.name,p.description,p.type,p.optional))
            });
            methods.push(new Method(method.name,method.description,method.returnType,method.dateCreation,method.typesRequest,method.author,method.url,method.modifier,parameters));
        });
        return methods;
    }
}