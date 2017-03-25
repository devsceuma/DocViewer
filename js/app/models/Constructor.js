class Constructor{

    constructor(description, parameters){
        this._description = description;
        this._parameters= parameters;
        Object.freeze(this);
    }

    get description()   {return this._description};
    get parameters()    {return this._parameters};
}