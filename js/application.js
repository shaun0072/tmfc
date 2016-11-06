var t1701 = {
	
	makeup : {
		date : new Date("September 30, 2016"),
		components: [
			{
				component : "SSP-140",
				percent    : "11%",
				amount     : "310 pounds"
			}
		]
	},
	tmfcParameters : {
		lineNumber     : "1701",
		applicationType: "Cleaner",
		temp           : "130 - 160°F",
		conc           : "8 - 12 oz/gal",
		immersion      : "> 3 min",
		tankSize       : {
			height     : "41\"",
			width      : "28\"",
			depth      : "32\"",
			gallons    : "450 gallons"
		
		},
		tankMaterial   : "Steel",
		heatMethod     : "Steam Boiler",
		heatMaterial   : "Carbon Steel",
		coilType       : "Serpentine",
		agitationLevel : "Mild - ",
		agitation      : "Compressed Air"
	},
	analysis : [
		{
			date : "11/03/2016",
			conc : 10.12, 
			activity : 87,
			saturation : 15
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
	
}
var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
var firstDate = new Date();
var secondDate = t1701.makeup.date;
var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));

$('.t1701applicationType').append(t1701.tmfcParameters.applicationType);
$('.t1701lineNumber').append(t1701.tmfcParameters.lineNumber);
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
$('.t1701amount').append(t1701.makeup.components[0].amount);
