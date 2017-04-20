var tankAnalysis,
	  tankAnalysisArray,
	  tank,
	  entry = {}; //Create variable to hold object
function getAnalyizedComponents() {
	var analysisNameHolder = [];
	for(var i= 0; i < tankAnalysisArray.length; i++) {
		for(var key in tankAnalysisArray[i]) {
			if(key !== "additions" && key !== "temp" && key !== "pH" && key !== "date") {	
				if($.inArray(key, analysisNameHolder) === -1) {
					analysisNameHolder.push(key);
				}	
			}
		}
	}
	return analysisNameHolder;
}
function firstIndexOfEachArray(theArray) {
	var newArray = [];
	for(var i =0; i < theArray.length; i++) {
		newArray.push(theArray[i][0]);
	}
	return newArray;	
}
function getAdditionsComponents() {
	var additionsNameHolder = [];
	for(var i= 0; i < tankAnalysisArray.length; i++) {
		for(var key in tankAnalysisArray[i]) {
			if(key === "additions") {	
				for(var addkey in tankAnalysisArray[i].additions) {
					if($.inArray(addkey, firstIndexOfEachArray(additionsNameHolder)) === -1) {		
						componentAndUnitArray = [addkey, tankAnalysisArray[i].additions[addkey][1]];
						additionsNameHolder.push(componentAndUnitArray);
					}
				}
			}
		}
	}
	return additionsNameHolder;
}
function loadDataEntryTable() {
	
	//FORM TITLE (TANK NUMBER)
	entry = {};
	$('.headerRow, .dataRow').children().remove()
	$('.form_heading').html('');
	$('.form_heading').append(eval(tankAnalysis).tmfcParameters.lineNumber);
	//GENERATE TABLE BASED ON SELECTED VALUE
	//Date
	$('.headerRow').append('<th>Date</th>');
	$('.dataRow').append('<td><input type="text" name="Date"></td>');
	//Temps
	tempLoop1:  for(var i= 0; i < tankAnalysisArray.length; i++) {
		for(var key in tankAnalysisArray[i]) {
			if(key === "temp") {
				var th = '<th>Temps</th>';
				var td = '<td><table><tr><td><span class="tempLabel">8 : </span><input type="text" name="Temp8"></td></tr><tr><td><span class="tempLabel">11 : </span><input type="text" name="Temp11"></td></tr><tr><td><span class="tempLabel">3 : </span><input type="text" name="Temp3"></td></tr></table></td>';
				$('.headerRow').append(th);
				$('.dataRow').append(td);
				break tempLoop1;
			}
		}
	}
	//pH
	pHLoop1:  for(var i= 0; i < tankAnalysisArray.length; i++) {
		for(var key in tankAnalysisArray[i]) {
			if(key === "pH") {
				var th = '<th>pH</th>';
				var td = '<td><table><tr><td><span class="tempLabel">8 : </span><input type="text" name="pH8"></td></tr><tr><td><span class="tempLabel">11 : </span><input type="text" name="pH11"></td></tr><tr><td><span class="tempLabel">3 : </span><input type="text" name="pH3"></td></tr></table></td>';
				$('.headerRow').append(th);
				$('.dataRow').append(td);
				break pHLoop1;
			}
		}
	}
	//Additions
	(function () {
		var additionsComponents = getAdditionsComponents();
		if(additionsComponents.length > 0) { //Add Table Header Once
			$('.headerRow').append('<th>Additions</th>');
			td = '<td><table><tr class="additionsData"></tr></table></td>',
			$('.dataRow').append(td);
		}
		for(var i =0; i < additionsComponents.length; i++) { //Add Name and Input Field for each component
				var td, span, input;
				input = '<tr><td><span class="addComponent">' + additionsComponents[i][0] + '</span>' + '<input type="text" name="add' + additionsComponents[i][0] + '"><span class="addUnit">' + additionsComponents[i][1] + '</span></td></tr>';
				$('.additionsData').append(input);
		}
	})();
	//Analysis'
	(function () {
		var analyzedComponents = getAnalyizedComponents();
		for(var i=0; i < analyzedComponents.length; i++) {
			var th = '<th>' + analyzedComponents[i] + '</th>',
				  td,
				  analyzedUnit = tank.tmfcParameters.concentrations[analyzedComponents[i]][1];
			$('.headerRow').append(th);
			td = '<td><input type="number" name="' + analyzedComponents[i] + '"><span class="addUnit">' + analyzedUnit + '</span></td>';		
			$('.dataRow').append(td);
		}
	})();
}


//TURN TABLE VALUES INTO OBJECT
$('.submit').on('click', function() {
	var inputDate = new Date($('input[name="Date"]').val()),
		  inputTemps = {},
		  inputpH = {},
		  inputAnalysis = getAnalyizedComponents(),
		  inputAdditions = getAdditionsComponents();
	function hasInputValue(inputValue) {
		if(inputValue !== '') {
			if(inputValue !== undefined) {
				return true
			} else {
				return false
			}
		}
	}
	entry.date = inputDate;
	for(var i=0; i < inputAnalysis.length; i++) {
		if($('input[name="' + inputAnalysis[i] + '"]').val() !== "") {
			entry[inputAnalysis[i]] = $('input[name="' + inputAnalysis[i] + '"]').val();
		}	
	}
	if(hasInputValue($('input[name="Temp8"]').val())) {
		inputTemps['8:00AM'] = $('input[name="Temp8"]').val();
	}
	if(hasInputValue($('input[name="Temp11"]').val())) {
		inputTemps['11:00AM'] = $('input[name="Temp11"]').val();
	}
	if(hasInputValue($('input[name="Temp3"]').val())) {
		inputTemps['3:00PM'] = $('input[name="Temp3"]').val();
	}
	if($('input[name="pH8"]').val() !== '') {
		if($('input[name="pH8"]').val() !== undefined) {
			inputpH['8:00AM'] = $('input[name="pH8"]').val();
		}
	}
	if($('input[name="pH11"]').val() !== '') {
		if($('input[name="pH11"]').val() !== undefined) {
			inputpH['11:00AM'] = $('input[name="pH11"]').val();
		}
	}
	if($('input[name="pH3"]').val() !== '') {
		if($('input[name="pH3"]').val() !== undefined) {
			inputpH['3:00PM'] = $('input[name="pH3"]').val();
		}
	}
	entry.temps = inputTemps;
	entry.pH = inputpH;
	entry.additions = {};
	for(var i=0; i < inputAdditions.length; i++) {
		if($('input[name="add' + inputAdditions[i][0] + '"]').val() !== '') {
			entry.additions[inputAdditions[i][0]] = [$('input[name="add' + inputAdditions[i][0] + '"]').val(), inputAdditions[i][1]];
		}
	}
	if($.isEmptyObject(entry.additions)) {
		delete entry.additions;
	}
	if($.isEmptyObject(entry.temps)) {
		delete entry.temps;
	}
	if($.isEmptyObject(entry.pH)) {
		delete entry.pH;
	}
	console.log(entry);
})
$('.loader').on('click', function() {
	tankAnalysis =  't' + $('input[name="tankEntry"]').val();
	tank = eval(tankAnalysis);
	tankAnalysisArray =  eval(tankAnalysis + '.analysis');
	loadDataEntryTable();
});
