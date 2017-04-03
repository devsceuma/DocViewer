class LoaderController {



    constructor() {
        let $ = document.querySelector.bind(document);
        this._project = new Project();
        this._principalView = new PrincipalView($("#docViewerPrincipal"));
        this._messageView = new MessageView($("#messages"));
        this._inputFiltro = $("#filtro");
        this._select = $("#selectClassMeth");
        this._service = new Service();

    }

    _renderizeView(project){
        if(project._classes.length <= 0){
            this._principalView.update(project);
            this._messageView.update(new Message("Nada foi encontrado para essa consulta. Por favor, tente novamente."));
        }
        else this._principalView.update(project);
    }
    
    loadJsonByProject(event) {
        event.preventDefault();
        let url = 'js/app/controllers/json.json';
        //let url = 'http://localhost:8080/ServicosOnline/servicosUra/ola?token=25231f2bd30c3c3d490e1e9a03729f94';
        this._service.getRequest((url),response =>{
            let promise = JSON.parse(response);
            promise = promise.project;
            let project = new Project(promise.name,promise.description,promise.url,promise.classes);
            this._renderizeView(project);
            this._project = project;
        });
    }

    filterProjects(){
        let filterValue = this._inputFiltro.value;
        let tempProject = this._project;
        let filterSelect = this._select.value;
        let np;

        //debugger;
        if(filterValue == ""){
            np = this._project;
        }else{
            if(filterSelect.includes("Classe")){
                np = this._filterProjectsByClass(tempProject, filterValue);
            }else if(filterSelect.includes("Método")){
                np = this._filterProjectsByMethod(tempProject,filterValue);
            }else{
                np = this._project;
            }
        }
       
        this._renderizeView(np);
    }

    _filterProjectsByClass(tempProject, filterValue){
        let p = tempProject._classes.filter(f=>{
            return (f["_name"].toLowerCase().indexOf(filterValue.toLowerCase()) > -1);
        });
        return new Project(tempProject._name, tempProject._description, tempProject._url, p);
    }

    _filterProjectsByMethod(tempProject, filterValue){
        let classTemp = [];
        tempProject._classes.forEach(c=>{
            let method = c._methods.filter(m=>{
                 return (m["_name"].toLowerCase().indexOf(filterValue.toLowerCase()) > -1);
            });
            let myClass = new Class().generateNewClass(c);
            myClass.addFilteredMethods(method);
            classTemp.push(myClass);
        });
        return new Project(tempProject._name, tempProject._description, tempProject._url, classTemp);

    }

}