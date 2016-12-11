var numberOfAdds;
	  
function TempPhTable(tank, reading, unit) { //reading parameter = time or pH

	this.reading = reading;
	this.unit    = unit;
	
	var  tableHeader  = '<div class="wrapper">';
		  tableHeader +=  '<div class="table">',				
		  tableHeader +=	'<div class="row header">',
		  tableHeader +=	  '<div class="cell">',
		  tableHeader +=		'Date',
		  tableHeader +=	  '</div>',
		  tableHeader +=	  '<div class="cell">',
		  tableHeader +=		'Time',
		  tableHeader +=	  '</div>',
		  tableHeader +=	  '<div class="cell">',
		  tableHeader +=		this.reading + ' (' + this.unit +')',
		  tableHeader +=	  '</div>',
		  tableHeader +=	'</div>',
		  tableHeader +=	'</div>', //close table
		  tableHeader += '</div>'; //close wrapper	
	$('.wrapper').remove(); 
	$('body').append(tableHeader);
	  
	for(var i = 0; i < tank.analysis.length; i++) { //Cycle through each object in analysis array
		
		for(var key in tank.analysis[i][this.reading]) { //Cycle through each key in the temp/pH object
			var tableData = '';	
			tableData +=	'<div class="row">';
			tableData +=	  '<div class="cell">';
			
			console.log($('.table .row:last-of-type .cell:nth-last-of-type(2)').text() + 'nth');
			console.log(moment(tank.analysis[i].date).format('l'));
			if($('.table .row:last-of-type .cell:first-of-type').text() === moment(tank.analysis[i].date).format('l') || $('.table .row:nth-last-of-type(2) .cell:first-of-type').text() === moment(tank.analysis[i].date).format('l')) {
				tableData += '';
			} else {
				tableData += moment(tank.analysis[i].date).format('l');
			}
						
			tableData +=	  '</div>';
			tableData +=	  '<div class="cell">';
			tableData +=		key;
			tableData +=	  '</div>';
			tableData +=	  '<div class="cell">';
			tableData +=		tank.analysis[i][this.reading][key];
			tableData +=	  '</div>';
			tableData +=	'</div>';
							
			$('.table').append(tableData);
		}
	}  

 
}	  
	  
function createtempPhTable(tankNumber, reading, unit) {
	new TempPhTable(tankNumber, reading, unit);
}