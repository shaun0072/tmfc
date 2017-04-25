var makeChart,
    thisArray,
    tableData,
    theDate,
	dateAndTestResultsArray,
    theTestResult,
    numberOfAnalysis,
    theUnit,
	applicationColor;
/*Insert Table Data*/
function insertTableData(date, testResult, unit, timeSpan) {
	//PUT DATES IN ORDER
	var allDates = []
	for(var i = 0; i < date.length; i++) {
		allDates.unshift({A : date[i], B : testResult[i]})
	}
	allDates.sort(function(a, b) {
		return a.A - b.A 
	})
	date = [];
	testResult = [];
	for(var i =0; i < allDates.length; i++) {
		date.unshift(allDates[i].A);
		testResult.unshift(allDates[i].B)
	}
	$('.table').children(':not(.header)').remove();
	for(var i=0; i < testResult.length; i++) { //Iterate over analysis
		var currentDate = date[0],
			desiredTime = currentDate - timeSpan;
		if(testResult[i] !== undefined && date[i] <= currentDate && date[i] >= desiredTime) { 
			tableData  =	'<div class="row">';
			tableData +=	  '<div class="cell">';
			tableData +=		moment(date[i]).format("l");
			tableData +=	  '</div>';
			tableData +=	  '<div class="cell">';
			tableData +=		testResult[i];
			tableData +=	  '</div>';
			tableData +=	'</div>';
			
			$('.table').append(tableData);				
		}
	}
}

/*GENERATE CHART OBJECT CONSTRUCTOR*/
function MakeChart(tankNumber, testName, unit) {
$('.tank').css('display', 'none')
	
	this.date = [];
	this.testResult = [];
	this.tankNumber = tankNumber;
	this.unit = unit;
	this.chartHeading = testName;
	this.analysis = tankNumber.analysis;
	
	/*ASSIGN APPLICATION COLOR TO TABLES AND CHART*/
	function assignColor() {
		if(tankNumber.tmfcParameters.applicationType === "Electro-Plating") {
			$('.row.header, .test_btns_container button').addClass('electroPlating');
			applicationColor = $('.row.header').css('background-color');
			return applicationColor;
		} else if(tankNumber.tmfcParameters.applicationType.indexOf("Cleaner") !== -1) {		
			$('.row.header, .test_btns_container button').addClass('cleaner');
			applicationColor = $('.row.header').css('background-color');
			return applicationColor;
		} else if(tankNumber.tmfcParameters.applicationType === "Acid Pickle") {
			$('.row.header, .test_btns_container button').addClass('acid');
			applicationColor = $('.row.header').css('background-color');
			return applicationColor;
		} else if(tankNumber.tmfcParameters.applicationType === "Rinse") {
			$('.row.header, .test_btns_container button').addClass('rinse');
			applicationColor = $('.row.header').css('background-color');
			return applicationColor;
		} else if(tankNumber.tmfcParameters.applicationType.indexOf("Chromate") !== -1) {
			$('.row.header, .test_btns_container button').addClass('chromate');
			applicationColor = $('.row.header').css('background-color');
			return applicationColor;
		} else if(tankNumber.tmfcParameters.applicationType === "Seal") {
			$('.row.header, .test_btns_container button').addClass('seal');
			applicationColor = $('.row.header').css('background-color');
			return applicationColor;
		} else if(tankNumber.tmfcParameters.applicationType === "Sour Dip") {
			$('.row.header, .test_btns_container button').addClass('sourDip');
			applicationColor = $('.row.header').css('background-color');
			return applicationColor;
		} else if(tankNumber.tmfcParameters.applicationType === "Electro-Cleaner") {
			$('.row.header, .test_btns_container button').addClass('cleaner');
			applicationColor = $('.row.header').css('background-color');
			return applicationColor;
		}
	}
	/*ADD TANK NUMBER TO TOP*/
	$('.chartTankNumber').remove();
	var chartTankNumber = '<div class="chartTankNumber">';
		chartTankNumber += tankNumber.tmfcParameters.lineNumber + ' - ' + tankNumber.tmfcParameters.applicationType;
		chartTankNumber += '</div>';
	$('.chartWrapper').prepend(chartTankNumber);
	/*VARIABLES*/
	var moBtn = '<button class="button plus" id="moBtn" onclick="insertTableData(theDate, theTestResult, theUnit, 2628336213)">mo</button>',
		qtrBtn = '<button class="button plus" id="qtrBtn" onclick="insertTableData(theDate, theTestResult, theUnit, 7884000000)">qtr</button>',
		yrBtn = '<button class="button minus" id="yrBtn" onclick="insertTableData(theDate, theTestResult, theUnit, 31540000000)">yr</button>',
		chartData = [];	
		colorNames = Object.keys(window.chartColors),
		color = Chart.helpers.color,
		tableHeader  = '<div class="wrapper">',
			tableHeader +=  '<div class="table">',				
			tableHeader +=	'<div class="row header">',
			tableHeader +=	  '<div class="cell">',
			tableHeader +=		'Date',
			tableHeader +=	  '</div>',
			tableHeader +=	  '<div class="cell">',
			tableHeader +=		this.chartHeading + ' (' + this.unit +')',
			tableHeader +=	  '</div>',
			tableHeader +=	'</div>',
			tableHeader +=	'</div>', //close table
			tableHeader += '</div>'; //close wrapper	
	
	numberOfAnalysis = 5;
	theDate = this.date;
	theTestResult  = this.testResult;
	theUnit = this.unit;
	
	
	$('#moBtn, #qtrBtn, #yrBtn' ).remove();	//Remove existing buttons when new btn is selected
	$('.add_remove_btns_container').append(moBtn, qtrBtn, yrBtn); //Add new btns
	$('.wrapper').remove();
	$('body').append(tableHeader).hide().fadeIn();
	var lineChartData = {
			datasets: [{
				fill: false,
				label: "My First dataset",
				borderColor: assignColor(),
				backgroundColor: color(window.chartColors.red).alpha(0.2).rgbString(),
				data : chartData,
				spanGaps: true
			}]
		},
		chartOptions = {
			data: lineChartData,
			options: {
				tooltips : {
					enabled:  false
				},
				legend  : {
					display: false
				},
				title: {
					display: true,
					text: this.chartHeading
				},
				scales: { 
					xAxes: [{
						gridLines : {
							display: false
						},
						type: 'time',
						time: {
							unit : 'week',
							displayFormats: {
								week: 'MMM D',
								month: 'MMM YY'
							}
						},
						ticks: {
							fontSize: 9,
							maxRotation: 45,
							minRotation: 45
						}		
					}],
					yAxes: [{
                        display: true,
						gridLines : {
							display: false
						},
                        scaleLabel: {
                            display: false,
                            labelString: this.unit,
							fontSize: 9,
                        },
						ticks: {
							fontSize: 9,
						}
                    }]
				}
			}
		};

	/*ASSIGN TANK DATA TO DATE/TESTRESULT ARRAYS*/
	for(var i=0; i < this.analysis.length; i++) { // Add analysis data to date/testResults
		this.date.push(new Date(this.analysis[i].date));         
		this.testResult.push(this.analysis[i][testName]);
	};		
	
	//PUT DATES IN ORDER
	var allDates = []
	for(var i = 0; i < this.date.length; i++) {
		allDates.unshift({A : this.date[i], B : this.testResult[i]})
	}
	allDates.sort(function(a, b) {
		return a.A - b.A 
	})
	this.date = [];
	this.testResult = [];
	for(var i =0; i < allDates.length; i++) {
		this.date.unshift(allDates[i].A);
		this.testResult.unshift(allDates[i].B)
	}
	/*ASSIGN DATE/TESTRESULT ARRAY VALUES TO CHART OBJECT*/	
	for (var i=0; i < numberOfAnalysis ; i++) { //Add values from date/testResults variables to chartData variable
		if(i < numberOfAnalysis && this.testResult[i] !== undefined) {

			var axisData = {};

			axisData.x = this.date[i];
			axisData.y = this.testResult[i];
			
			tableData  =	'<div class="row">';
			tableData +=	  '<div class="cell">';
			tableData +=		moment(this.date[i]).format("l");
			tableData +=	  '</div>';
			tableData +=	  '<div class="cell">';
			tableData +=		this.testResult[i];
			tableData +=	  '</div>';
			tableData +=	'</div>';
					
			chartData.push(axisData);		
			$('.table').append(tableData);
		} else if(numberOfAnalysis < 100){
			numberOfAnalysis += 1;
		}
	}
	
	
	assignColor();
	
	function insertChartData(timeSpan) {
		//Determine X axis date scaling
		if(timeSpan === 31540000000) {
		 chartOptions.options.scales.xAxes[0].time.unit = 'month';
		} else {
			chartOptions.options.scales.xAxes[0].time.unit = 'week';
		}
		//Empty Existing Data
		lineChartData.datasets[0].data = [];		
		
		var currentDate = new Date(tankNumber.analysis[0].date),
			desiredTime = currentDate - timeSpan;		
		console.log(currentDate, timeSpan, desiredTime)
		for(var i=0; i < tankNumber.analysis.length; i++) { //Iterate over analysis
			if(new Date(tankNumber.analysis[i].date) <= currentDate && new Date(tankNumber.analysis[i].date) >= desiredTime && new Date(tankNumber.analysis[i][testName]) !== undefined) {
				var axisData = {};
				axisData.x = new Date(tankNumber.analysis[i].date);
				axisData.y = tankNumber.analysis[i][testName];				
				lineChartData.datasets[0].data.push(axisData);	
			}		
		}	
		//PUT DATES IN ORDER
		var dataArray = lineChartData.datasets[0].data;
		dataArray.sort(function(a, b) {
			return a.x - b.x 
		})
		window.myLineChart.update();
	}
	/*Set Data to MONTH*/	
	document.getElementById('moBtn').addEventListener('click', function() {
		insertChartData(2628336213);
	});
	/*Set Data to QTR*/	
	document.getElementById('qtrBtn').addEventListener('click', function() {
		insertChartData(7884000000);
	});
	/*Set Data to Year*/	
	document.getElementById('yrBtn').addEventListener('click', function() {
		insertChartData(31540000000);
	});
	
	/*LOAD CHART VALUE*/
	var loadChart = function() {
		var ctx = document.getElementById("canvas").getContext("2d");
		window.myLineChart = Chart.Line(ctx, chartOptions)
	};
	$('.wrapper').append( '<div class="backToTank">Tank</div>');
	loadChart();
} //End MakeChart()

/*ADD/REMOVE ACTIVE CLASS FOR TABLE TABS*/
$('body').on('click', '.test_btns_container button', function() {
	$('.test_btns_container button').removeClass('active');
	$(this).addClass('active');
})

/*CREATE VARIABLE TO HOLD INSTANCE CREATED BY MakeChart()*/
function createChart(tankName, componentName, unit) {
	makeChart = new MakeChart(tankName, componentName, unit);
}