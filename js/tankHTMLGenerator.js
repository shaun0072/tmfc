//npm install gulp gulp-concat gulp-connect gulp-eslint gulp-eslint gulp-file gulp-html-validator gulp-insert gulp-replace gulp-size gulp-streamify gulp-uglify gulp-util gulp-zip child_process gulp-karma browserify vinyl-source-stream merge-stream bundle-collapser yargs --save-dev

function Tank(tid) {
	
	if(tid.makeup) {
		this.makeupDate = tid.makeup.date;
	}
	if(tid.tmfcParameters.pH) {
		this.pH = tid.tmfcParameters.pH;
	}		
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


	/*DATA GENERATED WITHIN MAKE-UP MODAL*/
	function addMakeupHTML() {
		for(var i = 0; i < tid.makeup.components.length; i++) { //Cycle over each object in components array
			var component = '';
			var unit = '';
			var amount = '';
			var makeupAt = '';
			var html = '';			
			if(tid.makeup.components[i].makeupAt) { //If components object has makeupAt property			
				component = tid.makeup.components[i].component; //set component key, unit key and amount key
				unit = tid.makeup.components[i].unit;
				amount = tid.makeup.components[i].amount;
				makeupAt = tid.makeup.components[i].makeupAt;
				html = '<p class="tankTable"><span class="data">';
				  html += component;
				  html += ': </span><span class="data">'
				  html += amount;
				  html += ' <span class="data parenthesis">(';
				  html += makeupAt + unit;
				  html += ')</span></span></p>';
				$('div[data-remodal-id="modal-makeup"]').append(html); //Append HTML to data-remodal-id="modal-makeup"
			}
		}
		$('div[data-remodal-id="modal-makeup"]').append('<br><button data-remodal-action="confirm" class="remodal-confirm">OK</button>');
	}
	var oneDay; // hours*minutes*seconds*milliseconds
	var firstDate;
	var secondDate;
	var diffDays;
	if(tid.makeup) {
		oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
		firstDate = new Date();
		secondDate = this.makeupDate;
		diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
	}
	/*SVG*/
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
		
		/*TANK NUMBER AND APPLICATION TYPE*/
		html += '<div class="tank">';
			html += '<div class="tank_id">';
				html += '<h1 class="application_type"><span class="tank_number"><a data-remodal-target="modal-tank" href="#">'
				html += this.lineNumber;
				html += '</a></span><span class="applicationType">';
				html += this.applicationType;
				html += '</span></h1>';
				
		/*DAYS SINCE MAKEUP*/
				if(tid.makeup) {
					html += '<div class="last_made-up"><span class="number">';
					html += diffDays;
					html += '</span> days since <a data-remodal-target="modal-makeup" href="#">makeup</a></div>';
				}				
		/*TDS LINK*/
			html += '</div>';
			html += '<ul class="tds_list">';
			if(this.TDS !== '') {
				html += '<li><a data-remodal-target="modal-TDS" href="#">';
				html += '<img src="assets/img/datasheet-icon.jpg">';
				html += '</a></li>';
			}			
			html += '</ul>';
			
		/*PROCESS CONTROL SECTION*/
			html += '<div class="process_control">';
			
			/*TMFC CONTROL PARAMETERS*/
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
				
			/*LATEST ANALYSIS*/
				if(tid.analysis) {
					var quit;
					for(var i = 0; i < tid.analysis.length; i++) { //Cycle through each object in analysis array 
						for(var key in tid.analysis[i]) {  //Cycle through each key in analysis object
							if(tid.analysis[i].hasOwnProperty(key) && key !== 'date' && key !== "temp" && key !== "additions" && key !== "pH" && quit !== "quit") {
								html += '<div class="current_state-cont">';
								html += '<h3 class="current_state_title">Latest Analysis</h3>';
								html += '<ul class="current_state_list">';
								html += '</ul>';
								html += '</div>';
								quit = "quit";
							}
						}
					}
				}	
			/*RECORDS*/
				if(tid.analysis) {
					html += '<div class="data_records_cont">';
					html += '<h3 class="data_records_title">Records</h3>';
					html += '<ul class="data_records_list">';
				
				
					var stop;
					/*LAB ANALYSIS BUTTON*/
						for(var i = 0; i < tid.analysis.length; i++) { //Cycle through each object in analysis array 
							for(var key in tid.analysis[i]) {  //Cycle through each key in analysis object
								if(tid.analysis[i].hasOwnProperty(key) && key !== 'date' && key !== "temp" && key !== "additions" && key !== "pH" && stop !== "stop") {
									html += '<a href="'
									html += this.lineNumber;
									html += 'chart.html"><li>';
									html += '<svg>';
									html += '<use xlink:href="#record-keeping-icon"></use>';
									html += '</svg>';
									html += 'Lab Analysis';
									html += '</li></a>';
									stop = "stop";
									/* i = tid.analysis.length; */
								}
							}
						}
						/* for(i = 0; i < tid.analysis.length; i++) { //Cycle through analysis objects
							if(tid.analysis[i] !== undefined) {
								html += '<a href="'
								html += this.lineNumber;
								html += 'chart.html"><li>';
								html += '<svg>';
									html += '<use xlink:href="#record-keeping-icon"></use>';
								html += '</svg>';
								html += 'Lab Analysis';
								html += '</li></a>';
								break;
							}
						} */
						
					/*CHEMICAL ADDITIONS*/	
						for(i = 0; i < tid.analysis.length; i++) { //Cycle through analysis objects
							if(tid.analysis[i].additions) { 
								html += '<a href ="';
								html += this.lineNumber;
								html += 'add.html"><li>';
								html += '<svg>';
									html += '<use xlink:href="#record-keeping-icon"></use>';
								html += '</svg>';
								html += 'Chemical Additions Log';
								html += '</li></a>';	
								break;
							}
						}
						
					
					/*TEMP/PH LOG*/
						for(i = 0; i < tid.analysis.length; i++) {
							if(tid.analysis[i].temp || tid.analysis[i].pH) {
								html += '<a href="';
								html += this.lineNumber;
								html += 'tempph.html"><li>';
								html += '<svg>';
								html += '<use xlink:href="#record-keeping-icon"></use>';
								html += '</svg>';
								html += 'Temp/pH Log';
								html += '</li></a>';
								html += '</ul>';
								html += '</div>';
								html += '</div>';
								html += '</div>';
								break;
							}
						}
				}	

		/*TDS MODAL*/
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
		
		/*MAKE-UP MODAL*/
		html += '<div class="remodal-bg">';
			html += '<div class="remodal" data-remodal-id="modal-makeup" data-remodal-options="hashTracking: false">';
			  html += '<button data-remodal-action="close" class="remodal-close"></button>';
			  html += '<h1 class="remodal_heading"><span>';
			  html += this.applicationType;
			  html += '</span> Makeup</h1>';
			html += '</div>';
		html += '</div>';
		
		
		/*TANK SPECIFICATIONS MODAL*/
		html += '<div class="remodal-bg">';
			html += '<div class="remodal" data-remodal-id="modal-tank" data-remodal-options="hashTracking: false">';
			  html += '<button data-remodal-action="close" class="remodal-close"></button>';
			  html += '<h1 class="remodal_heading">Container Specifications</h1>';
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
	
	
	var nameHolder = [];
	
	/*LATEST ANALYSIS*/
	if(tid.analysis) {
		for(var i = 0; i < tid.analysis.length; i++) { //Cycle through each object in analysis array 
			for(var key in tid.analysis[i]) {  //Cycle through each key in analysis object
				if(tid.analysis[i].hasOwnProperty(key) && key !== 'date' && key !== "temp" && key !== "additions" && key !== "pH") { //If analysis has property equal to key, and is not date,pH,additions or temp
					
					var propertyName = key;
					var propertyValue = tid.analysis[i][key];
					var unit;
					if(tid.tmfcParameters.concentrations[key]) {
						unit = tid.tmfcParameters.concentrations[key][1];
					} else {
						unit = '';
					}
					var date = moment(tid.analysis[i].date, 'DD').fromNow();
					var analysisList = '<li>';
						analysisList += propertyName;
						analysisList += ' : <span class="propValue">';
						analysisList += propertyValue + unit + ' ';
						analysisList += '<span class="taken">---  ' + date + '</span>';
						analysisList += '</span></li>'; 
						
						if($.inArray(propertyName, nameHolder) === -1) { 
							nameHolder.push(propertyName);
							$('.current_state_list').append(analysisList);
						}				
				}
			}
		}
	}
	
	/*TMFC PARAMETERS*/
	for(var key in tid.tmfcParameters.concentrations) {
		var propertyName = key;
		var	propertyValue = tid.tmfcParameters.concentrations[key][0];
		var unit = tid.tmfcParameters.concentrations[key][1];
		var	html = '<li><span class="propName">';
			html += propertyName;
			html += ': </span><span class="propValue">';
			html += propertyValue + '' + unit;
			html += '</span></li>';		
		$('.tmfc_control_parameters_list').append(html);
	};
	
	if(tid.makeup) {
		 addMakeupHTML();
	}
	var style;
	/*SET BORDER COLORS WITH APPLICATION TYPE*/
	if(tid.tmfcParameters.applicationType === "Electro-Plating") {
		style = "5px solid rgba(244,211,94, 0.8)";
		$('.tank').css({'border-top' : style,
						'border-bottom' : style
		});
	} else if(tid.tmfcParameters.applicationType === "Cleaner") {
		console.log('we have a winner');
		style = "5px solid rgba(186, 63, 29, 0.8)";
		$('.tank').css({'border-top' : style,
						'border-bottom' : style
		});
	} else if(tid.tmfcParameters.applicationType === "Acid Pickle") {
		style = "5px solid rgba(112, 163, 127, 0.8)";
		$('.tank').css({'border-top' : style,
						'border-bottom' : style
		});
	} else if(tid.tmfcParameters.applicationType === "Rinse") {
		style = "5px solid rgba(39, 93, 173, 0.8)";
		$('.tank').css({'border-top' : style,
						'border-bottom' : style
		});
	} else if(tid.tmfcParameters.applicationType === "Chromate") {
		style = "5px solid rgba(145,139,118, 0.8)";
		$('.tank').css({'border-top' : style,
						'border-bottom' : style
		});
	} else if(tid.tmfcParameters.applicationType === "Seal") {
		style = "5px solid rgba(75,0,130, 0.8)";
		$('.tank').css({'border-top' : style,
						'border-bottom' : style
		});
	} else if(tid.tmfcParameters.applicationType === "Sour Dip") {
		style = "5px solid rgba(238,235,208, 0.8)";
		$('.tank').css({'border-top' : style,
						'border-bottom' : style
		});
	} else if(tid.tmfcParameters.applicationType === "Electro-Cleaner") {
		style = "5px solid rgba(186, 63, 29, 0.8)";
		$('.tank').css({'border-top' : style,
						'border-bottom' : style
		});
	}
}


