class Method{

    constructor(name, description, returnType, dateCreation, typesRequest, author, url, modifier, parameters, onSuccess){
        this._name = name;
        this._description = description;
        this._returnType = returnType;
        this._dateCreation = dateCreation;
        this._typesRequest = typesRequest;
        this._author = author;
        this._url = url;
        this._modifier = modifier;
        this._parameters = parameters;
        this._onSuccess = onSuccess;
        //Object.freeze(this);
    }

    get name()              {return this._name};
    get description()       {return this._description};
    get returnType()        {return this._returnType};
    get dateCreation()      {return this._dateCreation};
    get typesRequest()      {return this._typesRequest};
    get author()            {return this._author};
    get url()               {return this._url};
    get modifier()          {return this._modifier};
    get parameters()        {return this._parameters};
    get onSuccess()         {return this._onSuccess};
}