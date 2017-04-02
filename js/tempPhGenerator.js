var temppH;
var headerUnit;
function TempPhTable(tank, reading, unit) { //reading parameter = time or pH
	$('.tank').css('display', 'none')
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
		  tableHeader +=	  '</th>';
		  tableHeader +=	  '<th class="cell reading">';
		  tableHeader +=	  '</th>';
		  tableHeader +=	'</tr>';
		  tableHeader +=	'</table>'; //close table
		  tableHeader += '</div>'; //close wrapper	
		  
	$('.wrapper').remove(); 
	$('body').append(tableHeader);
	/*ASSIGN BG COLOR TO TABLE HEADER*/
	if(tank.tmfcParameters.applicationType === "Electro-Plating") {
			$('.row.header, .test_btns_container button').addClass('electroPlating');
		} else if(tank.tmfcParameters.applicationType.indexOf('Cleaner') !== -1) {
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

	if(reading === "temp") {
		headerUnit = "Temperature (°F)";
	} else {
		console.log("other");	
		headerUnit = 'pH';
	}
	$('.reading').append(headerUnit);
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
	$('.wrapper').append( '<div class="backToTank">Tank</div>');
}	  
	  
function createtempPhTable(tankNumber, reading, unit) {
	tableHeader = '';
	temppH = '';
	temppH = new TempPhTable(tankNumber, reading, unit);
}