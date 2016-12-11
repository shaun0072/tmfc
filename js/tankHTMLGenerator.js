//npm install gulp gulp-concat gulp-connect gulp-eslint gulp-eslint gulp-file gulp-html-validator gulp-insert gulp-replace gulp-size gulp-streamify gulp-uglify gulp-util gulp-zip child_process gulp-karma browserify vinyl-source-stream merge-stream bundle-collapser yargs --save-dev

function Tank(tid) {
	this.makeupDate        = tid.makeup.date;
	this.componentName     = tid.makeup.components[0].component;
	this.componentUnit     = tid.makeup.components[0].unit;
	this.makeupAt          = tid.makeup.components[0].makeupAt;
	this.componentAmount   = tid.makeup.components[0].amount;
	this.lineNumber        = tid.tmfcParameters.lineNumber;
	this.applicationType   = tid.tmfcParameters.applicationType;
	this.requiredTemp      = tid.tmfcParameters.temp;
	this.requiredImmersion = tid.tmfcParameters.immersion;
	this.tankLngth         = tid.tmfcParameters.tankSize.lngth;
	this.tankWidth         = tid.tmfcParameters.tankSize.width;
	this.tankDepth         = tid.tmfcParameters.tankSize.depth;
	this.tankCapacity      = tid.tmfcParameters.tankSize.capacity;
	this.tankMaterial      = tid.tmfcParameters.tankMaterial;
	this.heatMethod        = tid.tmfcParameters.heatMethod;
	this.heatMaterial      = tid.tmfcParameters.heatMaterial;
	this.coilType          = tid.tmfcParameters.coilType;
	this.agitationLevel    = tid.tmfcParameters.agitationLevel;
	this.agitationType     = tid.tmfcParameters.agitationType;
	this.TDS               = tid.tmfcParameters.TDS;
	
	
	var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
	var firstDate = new Date();
	var secondDate = this.makeupDate;
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
				html += '<h1 class="application_type"><span class="tank_number"><a data-remodal-target="modal-tank" href="#">'
				html += this.lineNumber;
				html += '</a></span><span class="applicationType">';
				html += this.applicationType;
				html += '</span></h1>';
				html += '<div class="last_made-up"><span class="number">';
				html += diffDays;
				html += '</span> days since <a data-remodal-target="modal-makeup" href="#">makeup</a></div>';
			html += '</div>';
			html += '<ul class="tds_list">';
				html += '<li><a data-remodal-target="modal-TDS" href="#">('+ this.componentName +')</a></li>';
			html += '</ul>';
			html += '<div class="process_control">';
				html += '<div class="tmfc_control_parameters_cont">';
					html += '<h3 class="tmfc_control_parameters_title">TMFC Contorl Parameters</h3>';
					html += '<ul class="tmfc_control_parameters_list">';
						html += '<li><span class="propName">Temperature: </span><span class="propValue">';
						html += this.requiredTemp;
						html += '</span></li>';
						html += '<li><span class="propName">Agitation: </span><span class="propValue">';
						html += this.agitationLevel + this.agitationType;
						html += '</span></li>';
					html += '</ul>';
				html += '</div>';
				
				if(tid.analysis !== undefined) {
					html += '<div class="current_state-cont">';
					html += '<h3 class="current_state_title">Latest Analysis</h3>';
					html += '<ul class="current_state_list">';
					html += '</ul>';
					html += '</div>';
				}
				
				html += '<div class="data_records_cont">';
					html += '<h3 class="data_records_title">Records</h3>';
					html += '<ul class="data_records_list">';
					
						if(tid.analysis !== undefined) {
							html += '<a href="'
							html += this.lineNumber;
							html += 'chart.html"><li>';
							html += '<svg>';
								html += '<use xlink:href="#record-keeping-icon"></use>';
							html += '</svg>';
							html += 'Lab Analysis';
							html += '</li></a>';
						}
						
						
						if(tid.additions !== undefined) {
							html += '<a href ="';
							html += this.lineNumber;
							html += 'add.html"><li>';
							html += '<svg>';
								html += '<use xlink:href="#record-keeping-icon"></use>';
							html += '</svg>';
							html += 'Chemical Additions Log';
							html += '</li></a>';	
						}
						
						html += '<li>';
						html += '<svg>';
							html +='<use xlink:href="#record-keeping-icon"></use>';
						html += '</svg>';
						html += 'Temp/pH Log';
						html += '</li>';
					html += '</ul>';
				html += '</div>';
			html += '</div>';
		html += '</div>';

		html += '<div class="remodal-bg">';
			html += '<div class="remodal" data-remodal-id="modal-TDS" data-remodal-options="hashTracking: false">';
			  html += '<button data-remodal-action="close" class="remodal-close"></button>';
			  html += '<img src="assets/img/';
			  html += this.TDS;
			  html += '" alt="TDS"/>';
			  html += '<br>';
			  html += '<button data-remodal-action="confirm" class="remodal-confirm">OK</button>';
			html += '</div>';
		html += '</div>';

		html += '<div class="remodal-bg">';
			html += '<div class="remodal" data-remodal-id="modal-makeup" data-remodal-options="hashTracking: false">';
			  html += '<button data-remodal-action="close" class="remodal-close"></button>';
			  html += '<h1><span>';
			  html += this.applicationType;
			  html += '</span> Makeup</h1>';
			  html += '<p style="font-weight:bold">Components</p>';
			  html += '<p class="tankTable"><span class="data">';
			  html += this.componentName;
			  html += '<span class="data">';
			  html += '</span>(@ ';
			  html += this.makeupAt + this.componentUnit;
			  html += '</span>): <span class="data">';
			  html += this.componentAmount;
			  html += '</span></p>';
			  html += '<br>';
			  html += '<button data-remodal-action="confirm" class="remodal-confirm">OK</button>';
			html += '</div>';
		html += '</div>';

		html += '<div class="remodal-bg">';
			html += '<div class="remodal" data-remodal-id="modal-tank" data-remodal-options="hashTracking: false">';
			  html += '<button data-remodal-action="close" class="remodal-close"></button>';
			  html += '<h1>Container Specifications</h1>';
			  html += '<p class="tankTable"><span class="data">Capacity: </span><span class="data">';
			  html += this.tankCapacity;
			  html += '</span></p>';
			  html += '<p class="tankTable"><span class="data">Width: </span><span class="data">';
			  html += this.tankWidth;
			  html += '</span></p>';
			  html += '<p class="tankTable"><span class="data">Length: </span><span class="data">';
			  html += this.tankLngth;
			  html += '</span></p>';
			  html += '<p class="tankTable"><span class="data">Depth: </span><span class="data">';
			  html += this.tankDepth;
			  html += '</span></p>';
			  html += '<p class="tankTable"><span class="data">Tank Material: </span><span class="data">';
			  html += this.tankMaterial;
			  html += '</span></p>';
			  html += '<p class="tankTable"><span class="data">Heat Method: </span><span class="data">';
			  html += this.heatMethod;
			  html += '</span></p>';
			  html += '<p class="tankTable"><span class="data">Coil Material: </span><span class="data">';
			  html += this.heatMaterial;
			  html += '</span></p>';
			  html += '<p class="tankTable"><span class="data">Agitation: </span><span class="data">';
			  html += this.agitationType;
			  html += '</span></p>';
			  html += '<br>';
			  html += '<button data-remodal-action="confirm" class="remodal-confirm">OK</button>';
			html += '</div>';
		html += '</div>';
		
	
	
	$('body').append(html);
	
	for(var key in tid.analysis[0]) {
		if(tid.analysis[0].hasOwnProperty(key) && key !== 'date') {
			var analysisList = '<li>';
				analysisList += key;
				analysisList += ' : <span class="propValue">';
				analysisList += tid.analysis[0][key];
				analysisList += '</span></li>'; 
			$('.current_state_list').append(analysisList);
		}
	};
	for(var key in tid.tmfcParameters.concentrations) {
		var propertyName = key;
		var	propertyValue = tid.tmfcParameters.concentrations[key];
		var	html = '<li><span class="propName">';
			html += propertyName;
			html += ': </span><span class="propValue">';
			html += propertyValue;
			html += '</span></li>';		
		$('.tmfc_control_parameters_list').append(html);
	};
}


