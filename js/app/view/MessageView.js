class MessageView extends View{

	constructor(element){

        super(element);

    }

	_template(model){
		return  `
		<br>
		<br>
		<br>
		<br>
		<div class="row">
					<div class="col-lg-12">
						<div class="alert alert-info"><h3 class="text text-info text-center">${model._message}</h3></div>
					</div>
				</div>
                `;
    }

}