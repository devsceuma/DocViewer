class Method{

    constructor(name, description, returnType, dateCreation, typeRequest, author, url, modifier, parameters){
        this._name = name;
        this._description = description;
        this._returnType = returnType;
        this._dateCreation = dateCreation;
        this._typeRequest = typeRequest;
        this._author = author;
        this._url = url;
        this._modifier = modifier;
        this._parameters = parameters;
        Object.freeze(this);
    }

    get name()              {return this._name};
    get description()       {return this._description};
    get returnType()        {return this._returnType};
    get dateCreation()      {return this._dateCreation};
    get typeRequest()       {return this._typeRequest};
    get author()            {return this._author};
    get url()               {return this._url};
    get modifier()          {return this._modifier};
    get parameters()        {return this._parameters};
}