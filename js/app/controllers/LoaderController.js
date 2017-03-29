class LoaderController {



    constructor() {
        let $ = document.querySelector.bind(document);
        this._project = new Project();
        this._principalView = new PrincipalView($("#docViewerPrincipal"));
        this._inputFiltro = $("#filtro");
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
            //this._project = project;
            this._filterProjects(project);
        });
    }

    _filterProjects(project){
        let filterValue = this._inputFiltro.value;

        console.log("teste"+project);
        /*
        let filtro = project.some(function(obj,i) {
            let classes = obj.classes.some(function(){
                return classes.name === "Sample";
            });

        });
        for(var i in project.classes){
            //if(classes[i] == )
            console.log("ACHEI::=>"+project.classes[i]);
        }*/

        project._classes.forEach(c=>{
            console.log(c);
        });

       // console.log("ACHEI::=>");
        
    }



}