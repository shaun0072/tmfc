var tankAnalysis,
	  tankAnalysisArray,
	  tank,
	  tableCounter = 0,
	  entriesHolder = [],
	  entry; 
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
function  loadDETableHolder() {
	tableCounter++;
	var TableHolderHTML = '<table class="DataEntryTable DataEntryTable' + tableCounter + '">' +
												'<tr class="headerRow"></tr>' +
												'<tr class="dataRow"></tr>' +
											'</table>';
	$('.selectionPage').append(TableHolderHTML);
	loadDataEntryTable();
}
function loadDataEntryTable() {
	//REMOVE PREVIOUS DATA
	$('.form_heading').html('');
	
	//FORM TITLE (TANK NUMBER)
	$('.form_heading').append(eval(tankAnalysis).tmfcParameters.lineNumber);
	
	//GENERATE TABLE BASED ON SELECTED VALUE
	//Date
	$('.DataEntryTable' + tableCounter + ' .headerRow').append('<th>Date</th>');
	$('.DataEntryTable' + tableCounter + ' .dataRow').append('<td><input type="date" name="Date"></td>');
	//Temps
	tempLoop1:  for(var i= 0; i < tankAnalysisArray.length; i++) {
		for(var key in tankAnalysisArray[i]) {
			if(key === "temp") {
				var th = '<th>Temps</th>';
				var td = '<td><table><tr><td><span class="tempLabel">8 : </span><input type="number" name="Temp8"></td></tr><tr><td><span class="tempLabel">11 : </span><input type="number" name="Temp11"></td></tr><tr><td><span class="tempLabel">3 : </span><input type="number" name="Temp3"></td></tr></table></td>';
				$('.DataEntryTable' + tableCounter + ' .headerRow').append(th);
				$('.DataEntryTable' + tableCounter + ' .dataRow').append(td);
				break tempLoop1;
			}
		}
	}
	//pH
	pHLoop1:  for(var i= 0; i < tankAnalysisArray.length; i++) {
		for(var key in tankAnalysisArray[i]) {
			if(key === "pH") {
				var th = '<th>pH</th>';
				var td = '<td><table><tr><td><span class="tempLabel">8 : </span><input type="number" name="pH8"></td></tr><tr><td><span class="tempLabel">11 : </span><input type="number" name="pH11"></td></tr><tr><td><span class="tempLabel">3 : </span><input type="number" name="pH3"></td></tr></table></td>';
				$('.DataEntryTable' + tableCounter + ' .headerRow').append(th);
				$('.DataEntryTable' + tableCounter + ' .dataRow').append(td);
				break pHLoop1;
			}
		}
	}
	//Additions
	(function () {
		var additionsComponents = getAdditionsComponents();
		if(additionsComponents.length > 0) { //Add Table Header Once
			$('.DataEntryTable' + tableCounter + ' .headerRow').append('<th>Additions</th>');
			td = '<td><table><tr class="additionsData"></tr></table></td>',
			$('.DataEntryTable' + tableCounter + ' .dataRow').append(td);
		}
		for(var i =0; i < additionsComponents.length; i++) { //Add Name and Input Field for each component
				var td, span, input;
				input = '<tr><td><span class="addComponent">' + additionsComponents[i][0] + '</span>' + '<input type="number" name="add' + additionsComponents[i][0] + '"><span class="addUnit">' + additionsComponents[i][1] + '</span></td></tr>';
				$('.DataEntryTable' + tableCounter + ' .additionsData').append(input);
		}
	})();
	//Analysis'
	(function () {
		var analyzedComponents = getAnalyizedComponents();
		for(var i=0; i < analyzedComponents.length; i++) {
			var th = '<th>' + analyzedComponents[i] + '</th>',
				  td,
				  analyzedUnit = tank.tmfcParameters.concentrations[analyzedComponents[i]][1];
			$('.DataEntryTable' + tableCounter + ' .headerRow').append(th);
			td = '<td><input type="number" name="' + analyzedComponents[i] + '"><span class="addUnit">' + analyzedUnit + '</span></td>';		
			$('.DataEntryTable' + tableCounter + ' .dataRow').append(td);
		}
	})();
}


//TURN TABLE VALUES INTO OBJECT
$('.submit').on('click', function() {
	entriesHolder = [];
	for(var x = 0; x < tableCounter; x++) {
		entry = {};
		var inputDate = moment($('.DataEntryTable' + (x + 1)  + ' input[name="Date"]').val()).format("L"),
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
			if($('.DataEntryTable' + (x + 1)  + ' input[name="' + inputAnalysis[i] + '"]').val() !== "") {
				entry[inputAnalysis[i]] = Number.parseInt($('.DataEntryTable' + (x + 1)  + ' input[name="' + inputAnalysis[i] + '"]').val());
			}	
		}
		if(hasInputValue($('.DataEntryTable' + (x + 1)  + ' input[name="Temp8"]').val())) {
			inputTemps['8:00AM'] = Number.parseInt($('.DataEntryTable' + (x + 1)  + ' input[name="Temp8"]').val());
		}
		if(hasInputValue($('.DataEntryTable' + (x + 1)  + ' input[name="Temp11"]').val())) {
			inputTemps['11:00AM'] = Number.parseInt($('.DataEntryTable' + (x + 1)  + ' input[name="Temp11"]').val());
		}
		if(hasInputValue($('.DataEntryTable' + (x + 1)  + ' input[name="Temp3"]').val())) {
			inputTemps['3:00PM'] = Number.parseInt($('.DataEntryTable' + (x + 1)  + ' input[name="Temp3"]').val());
		}
		if($('.DataEntryTable' + (x + 1)  + ' input[name="pH8"]').val() !== '') {
			if($('.DataEntryTable' + (x + 1)  + ' input[name="pH8"]').val() !== undefined) {
				inputpH['8:00AM'] = Number.parseInt($('.DataEntryTable' + (x + 1)  + ' input[name="pH8"]').val());
			}
		}
		if($('.DataEntryTable' + (x + 1)  + ' input[name="pH11"]').val() !== '') {
			if($('.DataEntryTable' + (x + 1)  + ' input[name="pH11"]').val() !== undefined) {
				inputpH['11:00AM'] = Number.parseInt($('.DataEntryTable' + (x + 1)  + ' input[name="pH11"]').val());
			}
		}
		if($('.DataEntryTable' + (x + 1)  + ' input[name="pH3"]').val() !== '') {
			if($('input[name="pH3"]').val() !== undefined) {
				inputpH['3:00PM'] = Number.parseInt($('.DataEntryTable' + (x + 1)  + ' input[name="pH3"]').val());
			}
		}
		entry.temp = inputTemps;
		entry.pH = inputpH;
		entry.additions = {};
		for(var i=0; i < inputAdditions.length; i++) {
			if($('.DataEntryTable' + (x + 1)  + ' input[name="add' + inputAdditions[i][0] + '"]').val() !== '') {
				entry.additions[inputAdditions[i][0]] = [Number.parseInt($('.DataEntryTable' + (x + 1)  + ' input[name="add' + inputAdditions[i][0] + '"]').val()), inputAdditions[i][1]];
			}
		}
		if($.isEmptyObject(entry.additions)) {
			delete entry.additions;
		}
		if($.isEmptyObject(entry.temp)) {
			delete entry.temp;
		}
		if($.isEmptyObject(entry.pH)) {
			delete entry.pH;
		}
		entriesHolder.push(entry);
	}
	console.log(entriesHolder);
})

//SELECT WHICH LINE TO LOAD WHEN LOAD IS CLICKED
$('.loader').on('click', function() {
	if('t' + $('input[name="tankEntry"]').val() !== tankAnalysis) {	
		entry = {};
		for(var i = 0; i < tableCounter; i++) {
			$('.DataEntryTable' + (i + 1)).remove()
		}
		tableCounter = 0;
	}
	tankAnalysis =  't' + $('input[name="tankEntry"]').val();
	tank = eval(tankAnalysis);
	tankAnalysisArray =  eval(tankAnalysis + '.analysis');
	loadDETableHolder(tankAnalysis);
});

//LOAD ANOTHER TABLE
$('.anotherTable').on('click', function() {
	loadDETableHolder();
})