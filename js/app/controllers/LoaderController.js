class LoaderController {

    constructor() {
        this._project = new Project;
    }

    processJson(){
        console.log(this._project);
    }

    printarJson(event) {
        event.preventDefault();
        this.loadJSON(response => {
            let obj = JSON.parse(response);
            this._project.name = obj.name;
            this._project.description = obj.description;
            this._project.url = obj.url;
            this._project.classes = obj.classes;
        });

        this.processJson();
    }


    loadJSON(callback) {
        let xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('GET', 'js/app/controllers/json.json', true);
        xobj.onreadystatechange = function () {
            this._valuesJson = [];
            if (xobj.readyState == 4 && xobj.status == "200") {
                callback(xobj.responseText);
            }
        };
        xobj.send(this);
    }
}