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
	
	if(tank.tmfcParameters.applicationType === "Electro-Plating") {
		applicationColor = "rgba(244,211,94, 0.8)";
		$('.row.header').css('background', applicationColor);
	} else if(tank.tmfcParameters.applicationType === "Cleaner") {
		applicationColor = "rgba(186, 63, 29, 0.8)";
		$('.row.header').css('background', applicationColor);
	} else if(tank.tmfcParameters.applicationType === "Acid Pickle") {
		applicationColor = "rgba(112, 163, 127, 0.8)";
		$('.row.header').css('background', applicationColor);
	} else if(tank.tmfcParameters.applicationType === "Rinse") {
		applicationColor = "rgba(39, 93, 173, 0.8)";
		$('.row.header').css('background', applicationColor);
	} else if(tank.tmfcParameters.applicationType === "Chromate") {
		applicationColor = "rgba(145,139,118, 0.8)";
		$('.row.header').css('background', applicationColor);
	} else if(tank.tmfcParameters.applicationType === "Seal") {
		applicationColor = "rgba(75,0,130, 0.8)";
		$('.row.header').css('background', applicationColor);
	} else if(tank.tmfcParameters.applicationType === "Sour Dip") {
		applicationColor = "rgba(238,235,208, 0.8)";
		$('.row.header').css('background', applicationColor);
	};  
	 
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