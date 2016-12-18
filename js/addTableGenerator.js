var numberOfAdds;
	  
function AdditionsTable(tank, component, unit) {

	this.component = component;
	this.unit      = unit;
	
	var  tableHeader  = '<div class="wrapper">';
		  tableHeader +=  '<table class="table">',				
		  tableHeader +=	'<tr class="row header">',
		  tableHeader +=	  '<th class="cell">',
		  tableHeader +=		'Date',
		  tableHeader +=	  '</th>',
		  tableHeader +=	  '<th class="cell">',
		  tableHeader +=		this.component,
		  tableHeader +=	  '</th>',
		  tableHeader +=	'</tr>',
		  tableHeader +=	'</table>', //close table
		  tableHeader += '</div>'; //close wrapper	
	$('.wrapper').remove(); 
	$('body').append(tableHeader);
	
	if(tank.tmfcParameters.applicationType === "Electro-Plating") {
		applicationColor = "rgba(244,211,94, 0.8)";
		$('.row.header, .test_btns_container button').css('background', applicationColor);
	} else if(tank.tmfcParameters.applicationType === "Cleaner") {
		applicationColor = "rgba(186, 63, 29, 0.8)";
		$('.row.header, .test_btns_container button').css('background', applicationColor);
	} else if(tank.tmfcParameters.applicationType === "Acid Pickle") {
		applicationColor = "rgba(112, 163, 127, 0.8)";
		$('.row.header, .test_btns_container button').css('background', applicationColor);
	} else if(tank.tmfcParameters.applicationType === "Rinse") {
		applicationColor = "rgba(39, 93, 173, 0.8)";
		$('.row.header, .test_btns_container button').css('background', applicationColor);
	} else if(tank.tmfcParameters.applicationType === "Chromate") {
		applicationColor = "rgba(145,139,118, 0.8)";
		$('.row.header, .test_btns_container button').css('background', applicationColor);
	} else if(tank.tmfcParameters.applicationType === "Seal") {
		applicationColor = "rgba(75,0,130, 0.8)";
		$('.row.header, .test_btns_container button').css('background', applicationColor);
	} else if(tank.tmfcParameters.applicationType === "Sour Dip") {
		applicationColor = "rgba(238,235,208, 0.8)";
		$('.row.header, .test_btns_container button').css('background', applicationColor);
	} else if(tank.tmfcParameters.applicationType === "Electro-Cleaner") {
		applicationColor = "rgba(186, 63, 29, 0.8)";
		$('.row.header, .test_btns_container button').css('background', applicationColor);  
	}

	
	for(var i = 0; i < tank.analysis.length; i++) { //Cycle through each object in analysis array
		var tableData = '';
		if(tank.analysis[i].additions) { //If object has additions key 
			var date = moment(tank.analysis[i].date).format('ll'); //Assign tank.anaysis[i].date to variable for date	
			for(var key in tank.analysis[i].additions) { //Cycle through each key
				if(key === this.component) {
					var propertyValue = tank.analysis[i].additions[key][0]; //Assign tank.anaysis[i].additions[key] to variable for propertyValue
					var unit = this.unit;
					tableData +=	'<tr class="row">';
					tableData +=	  '<td class="cell">';
					tableData +=		date;
					tableData +=	  '</td>';
					tableData +=	  '<td class="cell">';
					tableData +=		propertyValue + ' ' + unit;
					tableData +=	  '</td>';
					tableData +=	'</tr>';
						
					$('.table').append(tableData); //Append to .table
				}
			}		
		}	
	}
	
}//End AdditonsTable()  
	  
function createAddTable(tankNumber, component, unit) {
	new AdditionsTable(tankNumber, component, unit);
}