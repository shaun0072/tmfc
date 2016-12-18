function TempPhTable(tank, reading, unit) { //reading parameter = time or pH

	this.reading = reading;
	this.unit    = unit;
	
	var  tableHeader  = '<div class="wrapper">';
		  tableHeader +=  '<table class="table">',				
		  tableHeader +=	'<tr class="row header">',
		  tableHeader +=	  '<th class="cell">',
		  tableHeader +=		'Date',
		  tableHeader +=	  '</th>',
		  tableHeader +=	  '<th class="cell">',
		  tableHeader +=		'Time',
		  tableHeader +=	  '</th>',
		  tableHeader +=	  '<th class="cell">',
		  tableHeader +=		this.reading + ' (' + this.unit +')',
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
		
		for(var key in tank.analysis[i][this.reading]) { //Cycle through each key in the temp/pH object
			var tableData = '';	
			tableData +=	'<tr class="row">';
			tableData +=	  '<td class="cell">';

			if($('.table .row:last-of-type .cell:first-of-type').text() === moment(tank.analysis[i].date).format('l') || $('.table .row:nth-last-of-type(2) .cell:first-of-type').text() === moment(tank.analysis[i].date).format('l')) {
				tableData += '';
			} else {
				tableData += moment(tank.analysis[i].date).format('l');
			}
						
			tableData +=	  '</td>';
			tableData +=	  '<td class="cell">';
			tableData +=		key;
			tableData +=	  '</td>';
			tableData +=	  '<td class="cell">';
			tableData +=		tank.analysis[i][this.reading][key];
			tableData +=	  '</td>';
			tableData +=	'</tr>';
							
			$('.table').append(tableData);
		}
	}  

 
}	  
	  
function createtempPhTable(tankNumber, reading, unit) {
	new TempPhTable(tankNumber, reading, unit);
}