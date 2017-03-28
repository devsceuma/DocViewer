class LoaderController {

    constructor() {
        let $ = document.querySelector.bind(document);
        this._project = new Project;
        this._principalView = new PrincipalView($("#docViewerPrincipal"));
    }

    _renderizeView(project){
        this._principalView.update(project);
    }
    

    loadJsonByProject(event) {
        event.preventDefault();
        this._getAsyncRequest(response => {
            let promise = JSON.parse(response);
            let project = new Project(promise.name,promise.description,promise.url,promise.classes);
            this._renderizeView(project);
            this._project = project;
        });
    }


    _getAsyncRequest(callback) {
        let xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('GET', 'js/app/controllers/json.json', true);
        xobj.onreadystatechange = function () {
            if (xobj.readyState == 4 && xobj.status == "200") {
                callback(xobj.responseText);
            }
        };
        xobj.send(null);
    }

    _collapseEvent(target){
        alert("oi");
        console.log(target);
    }
}