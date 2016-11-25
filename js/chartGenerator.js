


function MakeChart(tankNumber, testName, unit) {
	

	this.date = [];
	this.testResult = [];
	this.tank = tankNumber;
	this.unit = unit;
	this.chartHeading = testName;
	this.analysis = tankNumber.analysis;
	
	var chartData = [];	
	var numberOfAnalysis = 5;
	var color = Chart.helpers.color;
	var scatterChartData = {
		datasets: [{
			fill: false,
			label: "My First dataset",
			borderColor: window.chartColors.red,
			backgroundColor: color(window.chartColors.red).alpha(0.2).rgbString(),
			data : chartData
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

	for(var i=0; i < this.analysis.length; i++) { // Add analysis data to date/testResults
		this.date.push(this.analysis[i].date);         
		this.testResult.push(this.analysis[i][testName]);
		if(this.testResult[i] === undefined) {
			this.date.splice(i , 1);
			this.testResult.splice(i , 1);
		}
	}
	
	for (var i=0; i < numberOfAnalysis ; i++) { //Add values from date/testResults variables to chartData variable
		var axisData = {};
		axisData.x = this.date[i];
		axisData.y = this.testResult[i];
		chartData.push(axisData);
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
	new MakeChart(tankName, componentName, unit);
}



/* var makeChart = new MakeChart(theTank, 'SSP-140', 'oz/gal'); */





