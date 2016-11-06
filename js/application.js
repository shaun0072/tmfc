var t1701 = {
	
	makeup : {
		date : new Date("September 30, 2016"),
		components: [
			{
			component  : "SSP-140",
			unit       : "oz/gal",
			makeupAt   : "11",
			amount     : "310 pounds"
			}
		]
	},
	tmfcParameters : {
		lineNumber     : 1701,
		applicationType: "Cleaner",
		temp           : "130 - 160°F",
		conc           : "8 - 12 oz/gal",
		immersion      : "> 3 min",
		tankSize       : {
			height     : "41\"",
			width      : "28\"",
			depth      : "32\" (sol level)",
			capacity   : "450 gallons"
		
		},
		tankMaterial   : "Steel",
		heatMethod     : "Steam Boiler",
		heatMaterial   : "Carbon Steel",
		coilType       : "Serpentine",
		agitationLevel : "Mild - ",
		agitationType  : "Compressed Air"
	},
	analysis : [
		{
			date : "11/03/2016",
			conc : 10.12, 
			activity : 87 + '%',
			saturation : 15 + '%'
		},
		{
			date : "10/27/2016",
			conc : 10.51, 
			activity : 88,
			saturation : 14
		},
		{
			date : "10/20/2016",
			conc : 10.72, 
			activity : 89,
			saturation : 12
		},
		{
			date : "10/14/2016",
			conc : 11.02, 
			activity : 89,
			saturation : 11
		},
		{
			date : "10/05/2016",
			conc : 9.08, 
			activity : 90,
			saturation : 10
		}
	],
	additions : [
		{
			date : "10/05/2016",
			component : {
				ssp140 : 50
			}
		},
		{
			date : "09/27/2016",
			component : {
				ssp140 : 50
			}
		},
		{
			date : "09/20/2016",
			component : {
				ssp140 : 50
			}
		}
	]	
};

function Tank(tid) {
	this.makeupDate        = tid.makeup.date;
	this.componentName     = tid.makeup.components[0].component;
	this.componentUnit     = tid.makeup.components[0].unit;
	this.makeupAt          = tid.makeup.components[0].makeupAt;
	this.componentAmount   = tid.makeup.components[0].amount;
	this.lineNumber        = tid.tmfcParameters.lineNumber;
	this.applicationType   = tid.tmfcParameters.applicationType;
	this.requiredTemp      = tid.tmfcParameters.temp;
	this.requiredConc      = tid.tmfcParameters.conc;
	this.requiredImmersion = tid.tmfcParameters.immersion;
	this.tankHeight        = tid.tmfcParameters.tankSize.height;
	this.tankWidth         = tid.tmfcParameters.tankSize.width;
	this.tankDepth         = tid.tmfcParameters.tankSize.depth;
	this.tankCapacity      = tid.tmfcParameters.tankSize.capacity;
	this.tankMaterial      = tid.tmfcParameters.tankMaterial;
	this.heatMethod        = tid.tmfcParameters.heatMethod;
	this.heatMaterial      = tid.tmfcParameters.heatMaterial;
	this.coilType          = tid.tmfcParameters.coilType;
	this.agitationLevel    = tid.tmfcParameters.agitationLevel;
	this.agitationType     = tid.tmfcParameters.agitationType;
	this.conc              = tid.analysis[0].conc;
	this.activity          = tid.analysis[0].activity;
	this.saturation        = tid.analysis[0].saturation;
	
	
	var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
	var firstDate = new Date();
	var secondDate = makeupDate;
	var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
	var html = '<svg xmlns="http://www.w3.org/2000/svg" style="display:none;">';
			html += '<symbol id="record-keeping-icon" viewBox="0 0 100 100">';
			html += '<title>record-keeping-icon</title>';
			html += '<path class="st0" d="M84.3,29.2c0-0.1,0-0.1-0.1-0.2c0-0.1,0-0.1-0.1-0.2c0-0.1-0.1-0.1-0.1-0.2c0-0.1-0.1-0.1-0.1-0.2';
			html += 'c0-0.1-0.1-0.1-0.2-0.2c0,0-0.1-0.1-0.1-0.1l0,0c0,0,0,0,0,0L64.4,8.4c-0.4-0.7-1-1.1-1.9-1.1c0,0,0,0-0.1,0c0,0,0,0-0.1,0H21.8';
			html += 'c-3.4,0-6.1,2.8-6.1,6.1v71.7c0,3.4,2.8,6.1,6.1,6.1h56.4c3.4,0,6.1-2.8,6.1-6.1V29.6C84.4,29.4,84.4,29.3,84.3,29.2z M64.6,14.7';
			html += 'l12.6,12.8H66.6c-1.1,0-1.9-0.9-1.9-1.9V14.7z M78.2,87.1H21.8c-1.1,0-1.9-0.9-1.9-1.9V13.4c0-1.1,0.9-1.9,1.9-1.9h38.6v14';
			html += 'c0,3.4,2.8,6.1,6.1,6.1h13.6v53.4C80.1,86.2,79.3,87.1,78.2,87.1z M68.5,49.3c0,1.2-0.9,2.1-2.1,2.1H33.6c-1.2,0-2.1-0.9-2.1-2.1';
			html += 's0.9-2.1,2.1-2.1h32.8C67.5,47.2,68.5,48.1,68.5,49.3z M68.5,59c0,1.2-0.9,2.1-2.1,2.1H33.6c-1.2,0-2.1-0.9-2.1-2.1';
			html += 'c0-1.2,0.9-2.1,2.1-2.1h32.8C67.5,56.9,68.5,57.9,68.5,59z M68.5,68.8c0,1.2-0.9,2.1-2.1,2.1H33.6c-1.2,0-2.1-0.9-2.1-2.1';
			html += 'c0-1.2,0.9-2.1,2.1-2.1h32.8C67.5,66.7,68.5,67.7,68.5,68.8z"/>';
		  html += '</symbol>';
		html += '</svg>';
		html += '<div class="tank">';
			html += '<div class="tank_id">';
				html += '<h1 class="application_type"><span class="tank_number"><a href="#modal-tank">'
				html += lineNumber;
				html += '</a></span><span>';
				html += applicationType;
				html += '</span></h1>';
				html += '<div class="last_made-up"><span class="number">';
				html += diffDays;
				html += '</span> days since <a href="#modal-makeup">makeup</a></div>';
			html += '</div>';
			html += '<ul class="tds_list">';
				html += '<li><a href="#modal-TDS">(SSP-140)</a></li>';
			html += '</ul>';
			html += '<div class="process_control">';
				html += '<div class="tmfc_control_parameters_cont">';
					html += '<h3 class="tmfc_control_parameters_title">TMFC Contorl Parameters</h3>';
					html += '<ul class="tmfc_control_parameters_list">';
						html += '<li>Concentration Range: <span>';
						html += requiredConc;
						html += '</span></li>';
						html += '<li>Temperature Range: <span>';
						html += requiredTemp;
						html += '</span></li>';
						html += '<li>Agitation: <span>';
						html += agitationLevel + agitationType;
						html += '</span></li>';
					html += '</ul>';
				html += '</div>';
				html += '<div class="current_state-cont">';
					html += '<h3 class="current_state_title">Latest Analysis</h3>';
					html += '<ul class="current_state_list">';
					html += '<li>';
					html += componentName;
					html += ' Concentration - <span>';
					html += conc + ' ' + componentUnit;
					html += '</span></li>';
						html += '<li>Activity - <span>';
						html += activity;
						html += '</span></li>';
						html += '<li>Saturation - <span>';
						html += saturation;
						html += '</span></li>';
					html += '</ul>';
				html += '</div>';
				html += '<div class="data_records_cont">';
					html += '<h3 class="data_records_title">Records</h3>';
					html += '<ul class="data_records_list">';
						html += '<li>';
						html += '<svg>';
							html += '<use xlink:href="#record-keeping-icon"></use>';
						html += '</svg>';
						html += 'Chemical Addition Records';
						html += '</li>';
						html += '<li>';
						html += '<svg>';
							html += '<use xlink:href="#record-keeping-icon"></use>';
						html += '</svg>';
						html += 'Concentration Records';
						html += '</li>';
						html += '<li>';
						html += '<svg>';
							html +='<use xlink:href="#record-keeping-icon"></use>';
						html += '</svg>';
						html += 'Temperature Records';
						html += '</li>';
					html += '</ul>';
				html += '</div>';
			html += '</div>';
		html += '</div>';

		html += '<div class="remodal-bg">';
			html += '<div class="remodal" data-remodal-id="modal-TDS">';
			  html += '<button data-remodal-action="close" class="remodal-close"></button>';
			  html += '<img src="assets/img/Cleaner SSP-140 TDS.png" alt="TDS"/>';
			  html += '<br>';
			  html += '<button data-remodal-action="confirm" class="remodal-confirm">OK</button>';
			html += '</div>';
		html += '</div>';

		html += '<div class="remodal-bg">';
			html += '<div class="remodal" data-remodal-id="modal-makeup">';
			  html += '<button data-remodal-action="close" class="remodal-close"></button>';
			  html += '<h1><span>';
			  html += applicationType;
			  html += '</span> Makeup</h1>';
			  html += '<p style="font-weight:bold">Components</p>';
			  html += '<p class="table"><span>';
			  html += componentName;
			  html += '<span class="data">';
			  html += '</span>(@ ';
			  html += makeupAt + componentUnit;
			  html += '</span>): <span class="data">';
			  html += componentAmount;
			  html += '</span></p>';
			  html += '<br>';
			  html += '<button data-remodal-action="confirm" class="remodal-confirm">OK</button>';
			html += '</div>';
		html += '</div>';

		html += '<div class="remodal-bg">';
			html += '<div class="remodal" data-remodal-id="modal-tank">';
			  html += '<button data-remodal-action="close" class="remodal-close"></button>';
			  html += '<h1>Container Specifications</h1>';
			  html += '<p class="table"><span class="data">Capacity: </span><span class="data">';
			  html += tankCapacity;
			  html += '</span></p>';
			  html += '<p class="table"><span class="data">Width: </span><span class="data">';
			  html += tankWidth;
			  html += '</span></p>';
			  html += '<p class="table"><span class="data">Height: </span><span class="data">';
			  html += tankHeight;
			  html += '</span></p>';
			  html += '<p class="table"><span class="data">Depth: </span><span class="data">';
			  html += tankWidth;
			  html += '</span></p>';
			  html += '<p class="table"><span class="data">Tank Material: </span><span class="data">';
			  html += tankMaterial;
			  html += '</span></p>';
			  html += '<p class="table"><span class="data">Heat Method: </span><span class="data">';
			  html += heatMethod;
			  html += '</span></p>';
			  html += '<p class="table"><span class="data">Coil Material: </span><span class="data">';
			  html += heatMaterial;
			  html += '</span></p>';
			  html += '<p class="table"><span class="data">Agitation: </span><span class="data">';
			  html += agitationType;
			  html += '</span></p>';
			  html += '<br>';
			  html += '<button data-remodal-action="confirm" class="remodal-confirm">OK</button>';
			html += '</div>';
		html += '</div>';
	$('body').append(html);
}

Tank(t1701);

/* 
var html = '<svg xmlns="http://www.w3.org/2000/svg" style="display:none;">';
    html += '<symbol id="record-keeping-icon" viewBox="0 0 100 100">';
	html += '<title>record-keeping-icon</title>';
	html += '<path class="st0" d="M84.3,29.2c0-0.1,0-0.1-0.1-0.2c0-0.1,0-0.1-0.1-0.2c0-0.1-0.1-0.1-0.1-0.2c0-0.1-0.1-0.1-0.1-0.2';
	html += 'c0-0.1-0.1-0.1-0.2-0.2c0,0-0.1-0.1-0.1-0.1l0,0c0,0,0,0,0,0L64.4,8.4c-0.4-0.7-1-1.1-1.9-1.1c0,0,0,0-0.1,0c0,0,0,0-0.1,0H21.8';
	html += 'c-3.4,0-6.1,2.8-6.1,6.1v71.7c0,3.4,2.8,6.1,6.1,6.1h56.4c3.4,0,6.1-2.8,6.1-6.1V29.6C84.4,29.4,84.4,29.3,84.3,29.2z M64.6,14.7';
	html += 'l12.6,12.8H66.6c-1.1,0-1.9-0.9-1.9-1.9V14.7z M78.2,87.1H21.8c-1.1,0-1.9-0.9-1.9-1.9V13.4c0-1.1,0.9-1.9,1.9-1.9h38.6v14';
	html += 'c0,3.4,2.8,6.1,6.1,6.1h13.6v53.4C80.1,86.2,79.3,87.1,78.2,87.1z M68.5,49.3c0,1.2-0.9,2.1-2.1,2.1H33.6c-1.2,0-2.1-0.9-2.1-2.1';
	html += 's0.9-2.1,2.1-2.1h32.8C67.5,47.2,68.5,48.1,68.5,49.3z M68.5,59c0,1.2-0.9,2.1-2.1,2.1H33.6c-1.2,0-2.1-0.9-2.1-2.1';
	html += 'c0-1.2,0.9-2.1,2.1-2.1h32.8C67.5,56.9,68.5,57.9,68.5,59z M68.5,68.8c0,1.2-0.9,2.1-2.1,2.1H33.6c-1.2,0-2.1-0.9-2.1-2.1';
	html += 'c0-1.2,0.9-2.1,2.1-2.1h32.8C67.5,66.7,68.5,67.7,68.5,68.8z"/>';
  html += '</symbol>';
html += '</svg>'	;
html += '<div class="tank">';
	html += '<div class="tank_id">';
		html += '<h1 class="application_type"><span class="tank_number"><a href="#modal-tank">'
		html += tid.tmfcParameters.lineNumber;
		html+= '</a></span><span class="t1701applicationType"></span></h1>';
		html += '<div class="last_made-up"><span class="number"></span> days since <a href="#modal-makeup">makeup</a></div>';
	html += '</div>';
	html += '<ul class="tds_list">';
		html += '<li><a href="#modal-TDS">(SSP-140)</a></li>';
	html += '</ul>';
	html += '<div class="process_control">';
		html += '<div class="tmfc_control_parameters_cont">';
			html += '<h3 class="tmfc_control_parameters_title">TMFC Contorl Parameters</h3>';
			html += '<ul class="tmfc_control_parameters_list">';
				html += '<li>Concentration Range: <span class="t1701concRange"></span></li>'
				html += '<li>Temperature Range: <span class="t1701tempRange"></span></li>';
				html += '<li>Agitation: <span class="t1701agitationLevel"></span></li>';
			html += '</ul>';
		html += '</div>'
		html += '<div class="current_state-cont">';
			html += '<h3 class="current_state_title">Latest Analysis</h3>';
			html += '<ul class="current_state_list">';
			html += '	<li>Concentration - <span class="t1701conc"></span></li>';
				html += '<li>Activity - <span class="t1701activity"></span></li>';
			    html += '<li>Saturation - <span class="t1701saturation"></span></li>';
			html += '</ul>';
		html += '</div>';
		html += '<div class="data_records_cont">';
			html += '<h3 class="data_records_title">Records</h3>';
			html += '<ul class="data_records_list">';
				html += '<li>';
				html += '<svg>';
					html += '<use xlink:href="#record-keeping-icon"></use>';
				html += '</svg>';
				html += 'Chemical Addition Records';
				html += '</li>';
				html += '<li>';
				html += '<svg>';
					html += '<use xlink:href="#record-keeping-icon"></use>';
				html += '</svg>';
				html += 'Concentration Records';
				html += '</li>';
				html += '<li>';
				html += '<svg>';
					html +='<use xlink:href="#record-keeping-icon"></use>';
				html += '</svg>';
				html += 'Temperature Records';
				html += '</li>';
			html += '</ul>';
		html += '</div>';
	html += '</div>';
html += '</div>';





html += '<div class="remodal-bg">';
	html += '<div class="remodal" data-remodal-id="modal-TDS">';
	  html += '<button data-remodal-action="close" class="remodal-close"></button>';
	  html += '<img src="assets/img/Cleaner SSP-140 TDS.png" alt="TDS"/>';
	  html += '<br>';
	  html += '<button data-remodal-action="confirm" class="remodal-confirm">OK</button>';
	html += '</div>';
html += '</div>';

html += '<div class="remodal-bg">';
	html += '<div class="remodal" data-remodal-id="modal-makeup">';
	  html += '<button data-remodal-action="close" class="remodal-close"></button>';
	  html += '<h1><span class="t1701applicationType"></span> Makeup</h1>';
	  html += '<p style="font-weight:bold">Components</p>';
	  html += '<p class="table"><span class="t1701percent"><span class="t1701component data"></span>(@ </span>): <span class="t1701amount data"></span></p>';
	  html += '<br>';
	  html += '<button data-remodal-action="confirm" class="remodal-confirm">OK</button>';
	html += '</div>';
html += '</div>';

html += '<div class="remodal-bg">';
	html += '<div class="remodal" data-remodal-id="modal-tank">';
	  html += '<button data-remodal-action="close" class="remodal-close"></button>';
	  html += '<h1>Container Specifications</h1>';
	  html += '<p class="table"><span class="data">Capacity: </span><span class="t1701size data"></span></p>';
	  html += '<p class="table"><span class="data">Width: </span><span class="t1701width data"></span></p>';
	  html += '<p class="table"><span class="data">Height: </span><span class="t1701height data"></span></p>';
	  html += '<p class="table"><span class="data">Depth: </span><span class="t1701depth data"></span></p>';
	  html += '<p class="table"><span class="data">Tank Material: </span><span class="t1701tankMaterial data"></span></p>';
	  html += '<p class="table"><span class="data">Heat Method: </span><span class="t1701heatMethod data"></span></p>';
	  html += '<p class="table"><span class="data">Coil Material: </span><span class="t1701heatMaterial data"></span></p>';
	  html += '<p class="table"><span class="data">Agitation: </span><span class="t1701agitation data"></span></p>';
	  html += '<br>';
	  html += '<button data-remodal-action="confirm" class="remodal-confirm">OK</button>';
	html += '</div>';
html += '</div>'; */



/* $("body").append(html);
$('.t1701applicationType').append(t1701.tmfcParameters.applicationType);
$('.t1701concRange').append(t1701.tmfcParameters.conc);
$('.t1701tempRange').append(t1701.tmfcParameters.temp);
$('.t1701conc').append(t1701.analysis[0].conc + " oz/gal");
$('.t1701activity').append(t1701.analysis[0].activity + "%");
$('.t1701saturation').append(t1701.analysis[0].saturation + "%");
$('.t1701size').append(t1701.tmfcParameters.tankSize.gallons);
$('.t1701width').append(t1701.tmfcParameters.tankSize.width);
$('.t1701height').append(t1701.tmfcParameters.tankSize.height);
$('.t1701depth').append(t1701.tmfcParameters.tankSize.depth);
$('.last_made-up .number').append(diffDays);
$('.t1701agitationLevel').append(t1701.tmfcParameters.agitationLevel + t1701.tmfcParameters.agitation);
$('.t1701agitation').append(t1701.tmfcParameters.agitation);
$('.t1701tankMaterial').append(t1701.tmfcParameters.tankMaterial);
$('.t1701heatMethod').append(t1701.tmfcParameters.heatMethod);
$('.t1701heatMaterial').append(t1701.tmfcParameters.heatMaterial);
$('.t1701component').append(t1701.makeup.components[0].component);
$('.t1701percent').append(t1701.makeup.components[0].percent);
$('.t1701amount').append(t1701.makeup.components[0].amount); */
