class View{
    
    constructor(element){
        this._element = element;
    }

    update(model){
        this._element.innerHTML = '<div></div>';
        this._element.innerHTML = this._template(model);
    }

    collapse(element){
        console.log(element);
        alert("Oi");
    }
}