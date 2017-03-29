class LoaderController {



    constructor() {
        let $ = document.querySelector.bind(document);
        this._project = new Project();
        this._principalView = new PrincipalView($("#docViewerPrincipal"));
        this._inputFiltro = $("#filtro");
        this._service = new Service();
        //Object.freeze(this);
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

    filterProjects(){
        let filterValue = this._inputFiltro.value;
        let tempProject = this._project;

        let p = this._project._classes.filter(f=>{
            return (f["_name"].toLowerCase().indexOf(filterValue.toLowerCase()) > -1);
        });
        let np = new Project(tempProject._name, tempProject._description, tempProject._url, p);
        console.log(p);
        this._renderizeView(np);
    }


}