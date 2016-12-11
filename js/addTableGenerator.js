var numberOfAdds;
	  
function AdditionsTable(tank, component, unit) {

	this.component = component;
	this.unit      = unit;
	
	var  tableHeader  = '<div class="wrapper">';
		  tableHeader +=  '<div class="table">',				
		  tableHeader +=	'<div class="row header">',
		  tableHeader +=	  '<div class="cell">',
		  tableHeader +=		'Date',
		  tableHeader +=	  '</div>',
		  tableHeader +=	  '<div class="cell">',
		  tableHeader +=		this.component + ' (' + this.unit +')',
		  tableHeader +=	  '</div>',
		  tableHeader +=	'</div>',
		  tableHeader +=	'</div>', //close table
		  tableHeader += '</div>'; //close wrapper	
	$('.wrapper').remove(); 
	$('body').append(tableHeader);
	  
	for(var i = 0; i < tank.additions.length; i++) { //Cycle through each object in additions array
		var tableData = '';	
		for(var key in tank.additions[i].component) { //Cycle through each key in the component object			
			if(key === this.component) {							
				tableData +=	'<div class="row">';
				tableData +=	  '<div class="cell">';
				tableData +=		moment(tank.additions[i].date).format('l');
				tableData +=	  '</div>';
				tableData +=	  '<div class="cell">';
				tableData +=		tank.additions[i].component[key][0];
				tableData +=	  '</div>';
				tableData +=	'</div>';
								
				$('.table').append(tableData);
			}	
		}
	}  

 
}	  
	  
function createAddTable(tankNumber, component, unit) {
	new AdditionsTable(tankNumber, component, unit);
}