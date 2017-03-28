class LoaderController {

    constructor() {
        let $ = document.querySelector.bind(document);
        this._project = new Project;
        this._principalView = new PrincipalView($("#docViewerPrincipal"));
        this._service = new Service();
        Object.freeze(this);
    }

    _renderizeView(project){
        this._principalView.update(project);
    }
    

    loadJsonByProject(event) {
        event.preventDefault();
        let url = 'js/app/controllers/json.json';
        this._service.getRequest((url),response =>{
            let promise = JSON.parse(response);
            let project = new Project(promise.name,promise.description,promise.url,promise.classes);
            this._renderizeView(project);
            this._project = project;
        });
    }

}