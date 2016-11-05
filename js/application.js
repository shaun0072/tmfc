var t1701 = {
	
	makeup : {
		date : "10/3/2016",
		component: {
			ssp140: "300 pounds"
		}
	},
	tmfcParameters : {
		temp         : "130 - 160°F",
		conc         : "8 - 12 oz/gal",
		immersion    : "> 3 min",
		tankSize     : "450 Gallons",
		tankMaterial : "Steel",
		heatMethod   : "Steel Coil",
		agitation    : "Compressed Air"
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

$('.t1701concRange').append(t1701.tmfcParameters.conc);
$('.t1701tempRange').append(t1701.tmfcParameters.temp);
$('.t1701conc').append(t1701.analysis[0].conc + " oz/gal");
$('.t1701activity').append(t1701.analysis[0].activity + "%");
$('.t1701saturation').append(t1701.analysis[0].saturation + "%");