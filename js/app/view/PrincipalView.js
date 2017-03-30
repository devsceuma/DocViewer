class PrincipalView extends View{

    constructor(element){
        element.innerHTML = '<div></div>';
        super(element);

    }

    _template(model){
        return  `
        	<br><br><br><br>
        	<div class="row">
					<div class="col-lg-12">
						<h3 class="page-header"><i class="fa fa-laptop"></i>Projeto: ${model._name}</h3>
						<ol class="breadcrumb">
							<li><i class="fa fa-home"></i><a href="index.html">Home</a></li>
							<li><i class="fa fa-laptop"></i>Projeto: teste</li>						  	
						</ol>
					</div>
				</div>
                    ${this._generateClasses(model._classes)}
                </div>`;
    }

    
    _generateClasses(classes){
        let exibirConstrutor = true;
        let exibirMetodo = true;
		let i = 0;
        return `${classes.map(c=>
			  `		 
			  <p style="display:none">${i++}</p>
		        <!--CLASSES-->
				<div class="row">
		          <div class="col-lg-12">
		              <!--Project Activity start-->
		              <section class="panel">
		                  <div class="panel-body progress-panel">
		                    <div class="row">
		                      <div class="col-lg-8 task-progress pull-left">
		                          <h1>${c._name} - Classe</h1>                                  
		                      </div>
		                      <div class="col-lg-4"></div>
		                    </div>
		                  </div><!-- /.panel-body-->
						  
						
		                  <div class="panel-group m-bot20" id="accordion2">
			                  <!--METHODS -->
							  ${exibirConstrutor?this._generateConstructors(c,i):''}
							  ${exibirMetodo?this._generateMethods(c,i):''}
	                      </div><!-- /panel-group-->		                  
		              </section><!-- /SECTION - PANEL-->
		              <!--Project Activity end-->
		          </div><!-- /col-lg-12-->
		      </div><!-- /row-->
		      <br><br>
					 `
                ).join('')}`
    }


    _generateConstructors(classe,i){
		let j = 0;
        return `${classe._constructors.map(c=>
                    `
					<p style="display:none">${j++}</p>
					<div class="panel-group m-bot20" id="accordion">
                            <div class="panel panel-default">
                                  <div class="panel-heading">
                                      <h4 class="panel-title">
                                          <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseConstruct${"-"+i}${j}">
                                             <i class="glyphicon glyphicon-tasks"></i>
                                             <span class="badge bg-important"> Construct</span>
											 ${c._description}
                                          </a>
                                      </h4>
                                  </div>
                                  <div id="collapseConstruct${"-"+i}${j}" class="panel-collapse collapse">
                                      <div class="panel-body">
                                          <h2>Parameters <span class="badge">12</span></h2>

                                         <table class="table table-hover">
                                            <thead>
                                                <tr>
                                                      <th>Parameter</th>
                                                      <th>Description</th>
                                                      <th>Parameter Type</th>  
                                                      <th>Opcional</th>  
                                                  </tr>
                                            </thead>
                                              <tbody>                                             
                                              ${this._generateParameters(c)}                                              
                                              </tbody>
                                          </table>
                                      </div>
                                  </div>
                              </div>
					`
                ).join('')}`
    }

    _generateMethods(classe,j){
        let exibirParametros = true;
		let i = 0;
        return `${classe._methods.map(c=>
					`<p style="display:none">${i++}</p>
                    <div class="${this._getClassParameterByType(c._typesRequest)[0]}">
	                              <div class="panel-heading">
	                                  <h4 class="panel-title">
	                                      <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseFive${"-"+i}${j}">
	                                         <i class="${this._getClassParameterByType(c._typesRequest)[1]}"></i>
		                              <span class="badge bg-inverse"> / ${c._typesRequest}</span>
		                              <span class=""> ${c._name}</span>
	                                      </a>
	                                  </h4>
	                              </div> <!-- /panel-heading -->
	                              <div id="collapseFive${"-"+i}${j}" class="panel-collapse collapse">
	                                  <div class="panel-body">
									  <div class="list-group">
										  <a href="#" class="list-group-item">
										    <h4 class="list-group-item-heading"><i class="glyphicon glyphicon-link"></i> URL</h4>
										    <p class="list-group-item-text text-primary">${c._url}</p><br>
										    <h4 class="list-group-item-heading"><i class="glyphicon glyphicon-list-alt"></i> Description</h4>
										    <p class="list-group-item-text text-success">${c._description}</p><br>
											<h4 class="list-group-item-heading"><i class="glyphicon glyphicon-link"></i> URL Example</h4>
                                            <p class="list-group-item-text text-danger">${c._url}</p>
										  </a>
										</div><!-- /list-group-->
	                                  <h2>Parameters <span class="badge">${(c._parameters.length)}</span></h2>
	                                     <table class="table table-hover">
	                                     	<thead>
		                                     	<tr>
							                      	  <th>Nome</th>
							                          <th>Descrição</th>
							                          <th>Tipo</th>
													  <th>Opcional</th>  
							                    </tr>
	                                     	</thead>
						                      <tbody>		
												<!-- Parametros -->
						                      ${exibirParametros?this._generateParameters(c):''}
						                      <!-- /Parametros -->
						                      		                      
						                      </tbody>
						                  </table>
						                  <hr/>
										  <!-- RESPONSES -->
	                                  		<h2>Responses <span class="badge">12</span></h2>

		                                  		<div class="bs-callout bs-callout-success col-md-12">
												  <h4>Default Callout</h4>
												  This is a default callout.
												</div>

												<div class="bs-callout bs-callout-danger col-md-12">
												  <h4>Default Callout</h4>
												  {  
								                     "name":"nome",
								                     "description":"Nome do usuario teste para testar a funcao sobre quantidade maxima de caractere",
								                     "type":"java.lang.String",
								                     "optional":false
								                  }
												</div><!-- /.bs-callout-->
										 <!-- /RESPONSES -->
	                              </div><!-- /PANEL -BODY  -->
								</div><!-- /collapseFive -->
	                          </div><!-- /accordion-->`
                ).join('')}`
    }

    _generateParameters(methodOrConstructor){	
	
        return `${methodOrConstructor._parameters.map(p=>
                    `<tr>
						  <td>
							  <label class="label label-default">${p._name}</label>
						  </td>
						  <td>${p._description}</td>
						  <td>${p._type}</td>
						  <td>${p._optional}</td> 
					 </tr>`
                ).join('')}`
    }

    _getClassParameterByType(type){
    	let style=[];
        if(type === "GET"){
        	style.push("panel panel-danger");
        	style.push("glyphicon glyphicon-import");
        }else if(type === "POST"){
        	style.push("panel panel-info");
        	style.push("glyphicon glyphicon-export");
        }else if(type === "PUT"){
        	style.push("panel panel-success");
        	style.push("glyphicon glyphicon-repeat");
        }else if(type==="DELETE"){
        	style.push("panel panel-warning");
        	style.push("glyphicon glyphicon-remove");
        }

        return style;
    }
	

    _getClassMethodByType(type){
        if(type === "GET"){
            return "get";
        }else if(type === "POST"){
            return "post";
        }else if(type === "PUT"){
            return "put";
        }else if(type==="DELETE"){
            return "delete";
        }
    }

}