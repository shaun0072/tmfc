var numberOfAdds;
	  
function AdditionsTable(tank, component, unit) {
$('.tank').css('display', 'none')
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
	$('body').append(tableHeader).hide().fadeIn();
	
	/*ASSIGN BG COLOR TO TABLE HEADER*/
	if(tank.tmfcParameters.applicationType === "Electro-Plating") {
			$('.row.header, .test_btns_container button').addClass('electroPlating');
		} else if(tank.tmfcParameters.applicationType.indexOf("Cleaner") !== -1) {
			$('.row.header, .test_btns_container button').addClass('cleaner');
		} else if(tank.tmfcParameters.applicationType === "Acid Pickle") {
			$('.row.header, .test_btns_container button').addClass('acid');
		} else if(tank.tmfcParameters.applicationType === "Rinse") {
			$('.row.header, .test_btns_container button').addClass('rinse');
		} else if(tank.tmfcParameters.applicationType.indexOf("Chromate") !== -1) {
			$('.row.header, .test_btns_container button').addClass('chromate');
		} else if(tank.tmfcParameters.applicationType === "Seal") {
			$('.row.header, .test_btns_container button').addClass('seal');
		} else if(tank.tmfcParameters.applicationType === "Sour Dip") {
			$('.row.header, .test_btns_container button').addClass('sourDip');
		} else if(tank.tmfcParameters.applicationType === "Electro-Cleaner") {
			$('.row.header, .test_btns_container button').addClass('cleaner');
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
	$('.wrapper').append( '<div class="backToTank">Tank</div>');
}//End AdditionsTable()  
	  
function createAddTable(tankNumber, component, unit) {
	new AdditionsTable(tankNumber, component, unit);
}