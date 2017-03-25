class Parameter{

    constructor(name, description, type, optional){
        this._name = name;
        this._description = description;
        this._type = type;
        this._optional = optional;
        Object.freeze(this);
    }

    get name()          {return this._name;}
    get description()   {return this._description;}
    get type()          {return this._type;}
    get optional()      {return this._optional;}
}