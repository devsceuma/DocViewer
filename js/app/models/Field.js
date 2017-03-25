class Field{

    constructor(name, description, type, modifier){
        this._name = name;
        this._description = description;
        this._type = type;
        this._modifier = modifier;
        Object.freeze(this);
    }

    get name()          {return this._name};
    get description()   {return this._description};
    get type()          {return this._type};
    get modifier()      {return this._modifier};
}