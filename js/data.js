var t1701 = {
	
	makeup : {
		date : new Date("September 30, 2016"),
		components: [
			{
			component  : "SSP-140",
			unit       : "oz/gal",
			makeupAt   : "11",
			amount     : "310 pounds"
			}
		]
	},
	tmfcParameters : {
		lineNumber     : 1701,
		applicationType: "Cleaner",
		temp           : "130 - 160°F",
		conc           : "8 - 12 oz/gal",
		immersion      : "> 3 min",
		tankSize       : {
			height     : "41\"",
			width      : "28\"",
			depth      : "32\" (sol level)",
			capacity   : "450 gallons"
		
		},
		tankMaterial   : "Steel",
		heatMethod     : "Steam Boiler",
		heatMaterial   : "Carbon Steel",
		coilType       : "Serpentine",
		agitationLevel : "Mild - ",
		agitationType  : "Compressed Air",
		TDS            : "Cleaner SSP-140 TDS.png"
	},
	analysis : [
		{
			date : new Date("2016-11-03"),
			conc : 10.26,
			activity : 87 + '%',
			saturation : 20 + '%'
		},
		{
			date : new Date("2016-10-27"),
			conc : 10.51, 
			activity : 88,
			saturation : 15 + '%'
		},
		{
			date : new Date("2016-10-20"),
			ssp140 : 10.72, 
			activity : 90,
			saturation : 9 + '%'
		},
		{
			date : new Date("2016-10-14"),
			conc : 11.02, 
			activity : 95,
			saturation : 5 + '%'
		},
		{
			date : new Date("2016-10-05"),
			conc : 9.08, 
			activity : 97,
			saturation : 0 + '%'
		},
				{
			date : new Date("2016-09-26"),
			conc : 9.55, 
			activity : 85,
			saturation : 33 + '%'
		},
				{
			date : new Date("2016-09-21"),
			conc : 9.82, 
			activity : 85,
			saturation : 30 + '%'
		},
				{
			date : new Date("2016-09-14"),
			conc : 9.95, 
			activity : 83,
			saturation : 31 + '%'
		},
				{
			date : new Date("2016-09-06"),
			conc : 10.56, 
			activity : 84,
			saturation : 29 + '%'
		},
				{
			date : new Date("2016-09-01"),
			conc : 10.32, 
			activity : 85,
			saturation : 28 + '%'
		},
				{
			date : new Date("2016-08-22"),
			conc : 11.02, 
			activity : 86,
			saturation : 25 + '%'
		},
				{
			date : new Date("2016-08-16"),
			conc : 10.02, 
			activity : 87,
			saturation : 22 + '%'
		},
				{
			date : new Date("2016-08-11"),
			conc : 10.62, 
			activity : 88,
			saturation : 20 + '%'
		},
	],
	additions : [
		{
			date : new Date("2016-10-05"),
			component : [
				{	
					ssp140 : 50,
					unit   : "lbs"
				}
			]
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
};

var t1702 = {
	
	makeup : {
		date : new Date("September 30, 2016"),
		components: [
			{
			component  : "Anokleen #2-S",
			unit       : "oz/gal",
			makeupAt   : "11",
			amount     : "155 pounds"
			}
		]
	},
	tmfcParameters : {
		lineNumber     : 1702,
		applicationType: "Electro-Cleaner",
		temp           : "130 - 160°F",
		conc           : "8 - 12 oz/gal",
		immersion      : "1 - 5 min",
		tankSize       : {
			height     : "21\"",
			width      : "28\"",
			depth      : "32\" (sol level)",
			capacity   : "225 gallons"
		
		},
		tankMaterial   : "Steel",
		heatMethod     : "Steam Boiler",
		heatMaterial   : "Carbon Steel",
		coilType       : "Serpentine",
		agitationLevel : "Mild - ",
		agitationType  : "Compressed Air",
		TDS            : "Anokleen2STDS.png"
	},
	analysis : [
		{
			date : "11/03/2016",
			conc : 9.1, 
			activity : 87 + '%',
			saturation : 15 + '%'
		},
		{
			date : "10/27/2016",
			conc : 9.75, 
			activity : 88,
			saturation : 14
		},
		{
			date : "10/20/2016",
			conc : 9.99, 
			activity : 89,
			saturation : 12
		},
		{
			date : "10/14/2016",
			conc : 10.52, 
			activity : 89,
			saturation : 11
		},
		{
			date : "10/05/2016",
			conc : 11.21, 
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
};
var t1706 = {
	
	makeup : {
		date : new Date("July 5, 2016"),
		components: [
			{
			component  : "Zinc Hyroxide",
			unit       : "oz/gal",
			makeupAt   : "1.3",
			amount     : "69 gallons"
			}
		]
	},
	tmfcParameters : {
		lineNumber     : 1706,
		applicationType: "Electro-Plating",
		temp           : "70 - 100°F",
		conc           : "1.0 - 1.5oz/gal",
		immersion      : "",
		tankSize       : {
			height     : "n/a",
			width      : "n/a",
			depth      : "n/a" + "(sol level)",
			capacity   : "1165 gallons"
		
		},
		tankMaterial   : "Steel w/Liner",
		heatMethod     : "Steam Boiler",
		heatMaterial   : "Stainless Steel",
		coilType       : "U",
		agitationLevel : "Low - ",
		agitationType  : "Pump",
		TDS            : "Havastar ZN Gleam AB TDS-1.png"
	},
	analysis : [
		{
			date : "11/03/2016",
			conc : 10.12, 
			activity : 87 + '%',
			saturation : 15 + '%'
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
};
var t1704 = {
	
	makeup : {
		date : new Date("November 04, 2016"),
		components: [
			{
			component  : "Hydrochloric Acid",
			unit       : "%",
			makeupAt   : "25",
			amount     : "110 gallons"
			}
		]
	},
	tmfcParameters : {
		lineNumber     : 1704,
		applicationType: "Acid Pickle",
		temp           : "Ambient",
		conc           : "25- 30%",
		immersion      : "1 - 5 min",
		tankSize       : {
			height     : "58\"",
			width      : "48\"",
			depth      : "32\" (sol level)",
			capacity   : "400 gallons"
		
		},
		tankMaterial   : "Steel w/Liner",
		heatMethod     : "Steam Boiler",
		heatMaterial   : "n/a",
		coilType       : "U",
		agitationLevel : "Mild - ",
		agitationType  : "Compressed Air",
		TDS            : ""
	},
	analysis : [
		{
			date : "11/03/2016",
			conc : 10.12, 
			activity : 87 + '%',
			saturation : 15 + '%'
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
};