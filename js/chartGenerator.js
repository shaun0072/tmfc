


function MakeChart(tankNumber) {
	var date = [];
	var testResult = [];
	this.tank = tankNumber;
	var chartHeading = this.tank.makeup.components[0].component;
	var analysis = this.tank.analysis;

	for(var i=0; i < analysis.length; i++) {
		date.push(analysis[i].date); 
		testResult.push(analysis[i].conc);
	}
	
	var chartData = [];	
	var numberOfAnalysis = 3;
	for (var i=0; i < numberOfAnalysis ; i++) {
		var object = {};
		object.x = date[i];
		object.y = testResult[i];
		chartData.push(object);
	}
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
	scatterChartData.datasets[0].data.prototype
	window.onload = function() {
		var ctx = document.getElementById("canvas").getContext("2d");
		window.myScatter = Chart.Scatter(ctx, {
			data: scatterChartData,
			options: {
				legend  : {
					display: false
				},
				title: {
					display: true,
					text: chartHeading
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
                            labelString: 'oz/gal'
                        }
                    }]
				}
			}
		});
	};
	
	document.getElementById('randomizeData').addEventListener('click', function() {
		scatterChartData.datasets.forEach(function(dataset) {
			dataset.data = dataset.data.map(function() {
				return {
					x: randomScalingFactor(),
					y: randomScalingFactor()
				};
			});
		});
		window.myScatter.update();
	});
	
	document.getElementById('createChart').addEventListener('click', function() {
		console.log('yeah')
		window.myScatter.update();
	});
	
		var colorNames = Object.keys(window.chartColors);

	document.getElementById('addData').addEventListener('click', function() {

		if (scatterChartData.datasets[0].data.length < t1701.analysis.length) {

			numberOfAnalysis += 1;
			for (var i=numberOfAnalysis - 1; i < numberOfAnalysis ; i++) {
				var object = {};
				object.x = t1701.analysis[i].date;
				object.y = t1701.analysis[i].conc;
				chartData.push(object);
			}
			
		}
		window.myScatter.update();
	});


	document.getElementById('removeData').addEventListener('click', function() {
		if (scatterChartData.datasets[0].data.length > 1) {

			numberOfAnalysis -= 1;
			for (var i=numberOfAnalysis + 1; i > numberOfAnalysis ; i--) {
				var object = {};
				object.x = t1701.analysis[i].date;
				object.y = t1701.analysis[i].conc;
				chartData.pop(object);
			}
			
		}
		window.myScatter.update();
	});

}


new MakeChart(t1701);





