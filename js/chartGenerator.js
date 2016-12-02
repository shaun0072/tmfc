var makeChart,
    thisArray,
    tableData,
    theDate,
    theTestResult,
    numberOfAnalysis,
    theUnit;

function addData(date, testResult, unit) {
	for (var i = numberOfAnalysis; i < numberOfAnalysis + 1; i++) {
		if(i < date.length) {
			tableData  =	'<div class="row">';
			tableData +=	  '<div class="cell">';
			tableData +=		moment(date[i]).format("MMMM D" + ", " + "YYYY");
			tableData +=	  '</div>';
			tableData +=	  '<div class="cell">';
			tableData +=		testResult[i] + ' ' + unit;
			tableData +=	  '</div>';
			tableData +=	'</div>';
						
			$('.table').append(tableData);	
		}
	}
		
}
function removeData() {
	if($('.table .row').length > 2) {
		$('.table .row').remove('.row:last-of-type');
	}		
}

function MakeChart(tankNumber, testName, unit) {
		
	this.date = [];
	this.testResult = [];
	this.tankNumber = tankNumber;
	this.unit = unit;
	this.chartHeading = testName;
	this.analysis = tankNumber.analysis;
		
	var addbtnHTML = '<button class="button tick" id="addData" onclick="addData(theDate, theTestResult, theUnit)">+</button>',
		removebtnHTML = '<button class="button tick" id="removeData" onclick="removeData()">-</button>',
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
			tableHeader +=		this.chartHeading,
			tableHeader +=	  '</div>',
			tableHeader +=	'</div>',
			tableHeader +=	'</div>', //close table
			tableHeader += '</div>', //close wrapper	
	    scatterChartData = {
			datasets: [{
				fill: false,
				label: "My First dataset",
				borderColor: window.chartColors.red,
				backgroundColor: color(window.chartColors.red).alpha(0.2).rgbString(),
				data : chartData,
				spanGaps: true
			}]
		},
		chartOptions = {
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
							unit : 'week',
							displayFormats: {
								week: 'MMM D'
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
		
	numberOfAnalysis = 5;
	theDate = this.date;
	theTestResult  = this.testResult;
	theUnit = this.unit;
	
	$('#addData').remove();
	$('#removeData').remove();	
	$('.add_remove_btns_container').append(addbtnHTML);
	$('.add_remove_btns_container').append(removebtnHTML);
	$('.wrapper').remove();
	$('body').append(tableHeader);

	for(var i=0; i < this.analysis.length; i++) { // Add analysis data to date/testResults
		this.date.push(this.analysis[i].date);         
		this.testResult.push(this.analysis[i][testName]);
	};		
		
	for (var i=0; i < numberOfAnalysis ; i++) { //Add values from date/testResults variables to chartData variable
		var axisData = {};
		axisData.x = this.date[i];
		axisData.y = this.testResult[i];				
			tableData  =	'<div class="row">';
			tableData +=	  '<div class="cell">';
			tableData +=		moment(this.date[i]).format("MMMM D" + ", " + "YYYY");
			tableData +=	  '</div>';
			tableData +=	  '<div class="cell">';
			tableData +=		this.testResult[i] + ' ' + this.unit;
			tableData +=	  '</div>';
			tableData +=	'</div>';
					
		chartData.push(axisData);		
		$('.table').append(tableData);
	}
		
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
			for (var i = numberOfAnalysis; i > numberOfAnalysis - 1; i--) {
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

function createChart(tankName, componentName, unit) {
	makeChart = new MakeChart(tankName, componentName, unit);
}