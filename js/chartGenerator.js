var makeChart;
var thisArray;
var tableData;
var theDate;
var theTestResult;
var numberOfAnalysis;
function addData(date, testResult) {
	for (var i = numberOfAnalysis; i < numberOfAnalysis + 1; i++) {
		tableData  =	'<div class="row">';
		tableData +=	  '<div class="cell">';
		tableData +=		moment(date[i]).format("MMMM D" + ", " + "YYYY");
		tableData +=	  '</div>';
		tableData +=	  '<div class="cell">';
		tableData +=		testResult[i];
		tableData +=	  '</div>';
		tableData +=	'</div>';
					
		$('.table').append(tableData);	
	}
		
}
function removeData() {
		$('.table .row').remove('.row:last-of-type');		
}

function MakeChart(tankNumber, testName, unit) {
	numberOfAnalysis = 5
	$('#addData').remove();
	$('#removeData').remove();
	var addbtnHTML = '<button id="addData" onclick="addData(theDate, theTestResult)">Add Data</button>';
	var removebtnHTML = '<button id="removeData" onclick="removeData()">Remove Data</button>';
	$('body').append(addbtnHTML);
	$('body').append(removebtnHTML);
	
	makeChart = '';
	
	this.date = [];
	this.testResult = [];
	this.tankNumber = tankNumber;
	this.unit = unit;
	this.chartHeading = testName;
	this.analysis = tankNumber.analysis;
	
	theDate = this.date;
	theTestResult  = this.testResult;
	
	
	
	var chartData = [];	
	
	var color = Chart.helpers.color;
	var tableHeader  = '<div class="wrapper">'; 
			tableHeader +=  '<div class="table">';				
			tableHeader +=	'<div class="row header">';
			tableHeader +=	  '<div class="cell">';
			tableHeader +=		'Date';
			tableHeader +=	  '</div>';
			tableHeader +=	  '<div class="cell">';
			tableHeader +=		this.chartHeading;
			tableHeader +=	  '</div>';
			tableHeader +=	'</div>';
			tableHeader +=	'</div>'; //close table
			tableHeader += '</div>'; //close wrapper	
	var scatterChartData = {
		datasets: [{
			fill: false,
			label: "My First dataset",
			borderColor: window.chartColors.red,
			backgroundColor: color(window.chartColors.red).alpha(0.2).rgbString(),
			data : chartData,
			spanGaps: true
		}]
	};
	var chartOptions = {
			data: scatterChartData,
			options: {
				legend  : {
					display: false
				},
				title: {
					display: true,
					text: this.chartHeading
				},
				scales: {
					xAxes: [{
						type: 'time',
						time: {
							displayFormats: {
								quarter: 'MMM YYYY'
							}
						}
					}],
					yAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: this.unit
                        }
                    }]
				}
			}
		};
		
	$('.wrapper').remove();

	for(var i=0; i < this.analysis.length; i++) { // Add analysis data to date/testResults
		this.date.push(this.analysis[i].date);         
		this.testResult.push(this.analysis[i][testName]);
/* 		if(this.testResult[i] === undefined) {
			this.date.splice(i , 1);
			this.testResult.splice(i , 1);
		} */
	};		
	
	$('body').append(tableHeader);
	
	for (var i=0; i < numberOfAnalysis ; i++) { //Add values from date/testResults variables to chartData variable
		var axisData = {};
		axisData.x = this.date[i];
		axisData.y = this.testResult[i];				
			tableData  =	'<div class="row">';
			tableData +=	  '<div class="cell">';
			tableData +=		moment(this.date[i]).format("MMMM D" + ", " + "YYYY");
			tableData +=	  '</div>';
			tableData +=	  '<div class="cell">';
			tableData +=		this.testResult[i];
			tableData +=	  '</div>';
			tableData +=	'</div>';
					
		chartData.push(axisData);		
		$('.table').append(tableData);
	}
		
		var colorNames = Object.keys(window.chartColors);

	document.getElementById('addData').addEventListener('click', function() {
		
		if (scatterChartData.datasets[0].data.length < tankNumber.analysis.length) {

			numberOfAnalysis += 1;
			for (var i=numberOfAnalysis - 1; i < numberOfAnalysis ; i++) {
				var axisData = {};
				axisData.x = tankNumber.analysis[i].date;
				axisData.y = tankNumber.analysis[i][testName];									
				chartData.push(axisData);
			}			
		}
		window.myScatter.update();
	});


	document.getElementById('removeData').addEventListener('click', function() {
		if (scatterChartData.datasets[0].data.length > 1) {

			numberOfAnalysis -= 1;
			for (var i=numberOfAnalysis + 1; i > numberOfAnalysis ; i--) {
				var object = {};
				object.x = tankNumber.analysis[i].date;
				object.y = tankNumber.analysis[i][testName];
				chartData.pop(object);
			}
			
		}
		window.myScatter.update();
	});
	
	var loadChart = function() {
		var ctx = document.getElementById("canvas").getContext("2d");
		window.myScatter = Chart.Scatter(ctx, chartOptions)
	};
	
	loadChart();	
}

var theTank = t1701;

function createChart(tankName, componentName, unit) {
	makeChart = new MakeChart(tankName, componentName, unit);
}