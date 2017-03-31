class Class{


    constructor(name, origin, description, fields, constructors, methods){
        this._name = name;
        this._origin = origin;
        this._description = description;
        this._fields = fields;
        this._constructors = constructors;
        this._methods = methods;
        //Object.freeze(this);
    }

    generateNewClass(classe){
        this._name = classe._name;
        this._origin = classe._origin;
        this._description = classe._description;
        this._fields = classe._fields;
        this._constructors = classe._constructors;
        this._methods = [];

        return this;
    }

    get name()          {return this._name};
    get origin()        {return this._origin};
    get description()   {return this._description};
    get fields()        {return this._fields};
    get constructors()  {return this._constructors};
    get methods()       {return this._methods};

    addFilteredMethods(methods){
        methods.forEach(m=>{
            this._methods.push(m);
        });
       
    }
}