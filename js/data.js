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
		applicationType: "Cleaner", //options are "Cleaner","Inorganic Cleaner", ""
		temp           : "130 - 160°F",
		conc           : "8 - 12 oz/gal",
		immersion      : "> 3 min",
		tankSize       : {
			lngth      : "41\"",
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
			"SSP-140" : 10.26,
			Activity : 87,
			Saturation : 20
		},
		{
			date : new Date("2016-10-27"),
			"SSP-140" : 10.51, 
			Activity : 88,
			Saturation : 15
		},
		{
			date : new Date("2016-10-20"),
			"SSP-140" : 10.72, 
			Activity : 90,
			Saturation : 9
		},
		{
			date : new Date("2016-10-14"),
			"SSP-140" : 11.02, 
			Activity : 95,
			Saturation : 5
		},
		{
			date : new Date("2016-10-05"),
			"SSP-140" : 9.08, 
			Activity : 97,
			Saturation : 0
		},
				{
			date : new Date("2016-09-26"),
			"SSP-140" : 9.55, 
			Activity : 85,
			Saturation : 33
		},
				{
			date : new Date("2016-09-21"),
			"SSP-140" : 9.82, 
			Activity : 85,
			Saturation : 30
		},
				{
			date : new Date("2016-09-14"),
			"SSP-140" : 9.95, 
			Activity : 83,
			Saturation : 31
		},
				{
			date : new Date("2016-09-06"),
			"SSP-140" : 10.56, 
			Activity : 84,
			Saturation : 29
		},
				{
			date : new Date("2016-09-01"),
			"SSP-140" : 10.32, 
			Activity : 85,
			Saturation : 28
		},
				{
			date : new Date("2016-08-22"),
			"SSP-140" : 11.02, 
			Activity : 86,
			Saturation : 25
		},
				{
			date : new Date("2016-08-16"),
			"SSP-140" : 10.02, 
			Activity : 87,
			Saturation : 22
		},
				{
			date : new Date("2016-08-11"),
			"SSP-140" : 10.62, 
			Activity : 88,
			Saturation : 20
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
			lngth      : "21\"",
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
			activity : 87,
			saturation : 15
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
			lngth      : "58\"",
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
			date : new Date("11/03/2016"),
			HCL  : 29.2
		},
		{
			date : new Date("10/31/2016"),
			HCL: 30.5
		},
		{
			date : new Date("10/28/2016"),
			HCL: 31.3
		},
		{
			date : new Date("10/15/2016"),
			HCL: 28.5
		},
		{
			date : new Date("10/08/2016"),
			HCL: 30.6
		},
		{
			date : new Date("10/01/2016"),
			HCL: 29.0
		},
		{
			date : new Date("09/29/2016"),
			HCL: 33.2
		},
		{
			date : new Date("09/15/2016"),
			HCL: 32.0
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
			component  : "Zinc",
			unit       : "oz/gal",
			makeupAt   : "1.3",
			amount     : "69 gallons"
			}
		]
	},
	tmfcParameters : {
		concentrations     : {
			"Zinc"             : "1.0 - 1.5 oz/gal",
			"Sodium Hydroxide" : "15 - 18 oz/gal",
			"Carbonates"       : "< 10 oz/gal",
		},
		lineNumber         : 1706,
		applicationType    : "Electro-Plating",
		temp               : "70 - 100°F",
		immersion          : "",
		tankSize           : {
			lngth          : 142 + '"',
			width          : 54.5 + '"',
			depth          : 26 + '"' + ' (sol level)',
			capacity       : "1165 gallons"		
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
			date   : new Date("12/01/2016"),
			Zinc   : 1.46, 
			NaOH   : 15.48,
		},
		{
			date   : new Date("11/28/2016"),
			Zinc   : 1.74, 
			NaOH   : 16.43,
		},
		{
			date   : new Date("11/23/2016"),
			Zinc   : 1.31, 
			NaOH   : 16.32,
		},	
		{
			date   : new Date("11/21/2016"),
			Zinc   : 1.34, 
			NaOH   : 16.43,
		},	
		{
			date   : new Date("11/17/2016"),
			Zinc   : 1.39, 
			NaOH   : 16.43,
		},	
		{
			date   : new Date("11/14/2016"),
			Zinc   : 1.48, 
			NaOH   : 16.64,
		},
		{
			date   : new Date("11/10/2016"),
			Zinc   : 1.39, 
			NaOH   : 16.54,
		},	
		{
			date   : new Date("11/09/2016"),
			Zinc   : 1.46, 
		},	
		{
			date   : new Date("11/07/2016"),
			Zinc   : 1.50, 
			NaOH   : 17.07,
		},
		{
			date   : new Date("11/03/2016"),
			Zinc   : 1.39, 
			NaOH   : 16.96,
		},
		{
			date   : new Date("11/02/2016"),
			Zinc   : 1.34, 
		},
		{
			date   : new Date("10/31/2016"),
			Zinc   : 1.77, 
			NaOH   : 16.11,
		},
		{
			date   : new Date("10/27/2016"),
			Zinc   : 1.39, 
			NaOH   : 16.43,
		},
		{
			date   : new Date("10/26/2016"),
			Zinc   : 1.43, 
		},
		{
			date   : new Date("10/24/2016"),
			Zinc   : 1.48, 
			NaOH   : 16.43,
		},
		{
			date   : new Date("10/20/2016"),
			Zinc   : 1.34, 
			NaOH   : 17.38,
		},
		{
			date   : new Date("10/19/2016"),
			Zinc   : 1.50, 
		},
		{
			date   : new Date("10/17/2016"),
			Zinc   : 1.50, 
			NaOH   : 15.58,
		},
		{
			date   : new Date("10/13/2016"),
			Zinc   : 1.17, 
			NaOH   : 15.68,
		},
		{
			date   : new Date("10/12/2016"),
			Zinc   : 1.18, 
		},
		{
			date   : new Date("10/10/2016"),
			Zinc   : 1.57, 
			NaOH   : 16.11,
		},
		{
			date   : new Date("10/06/2016"),
			Zinc   : 1.22, 
			NaOH   : 15.90,
		},
		{
			date   : new Date("10/05/2016"),
			Zinc   : 1.31, 
		},
		{
			date   : new Date("10/03/2016"),
			Zinc   : 1.75, 
			NaOH   : 16.43,
		},
		{
			date   : new Date("09/29/2016"),
			Zinc   : 1.48, 
			NaOH   : 16.54,
		},
		{
			date   : new Date("09/28/2016"),
			Zinc   : 1.50, 
		},
		{
			date   : new Date("09/26/2016"),
			Zinc   : 1.53, 
			NaOH   : 15.58,
		},
		{
			date   : new Date("09/22/2016"),
			Zinc   : 1.41, 
			NaOH   : 16.01,
		},
		{
			date   : new Date("09/21/2016"),
			Zinc   : 1.32, 
		},
		{
			date   : new Date("09/19/2016"),
			Zinc   : 1.41, 
			NaOH   : 16.64,
		},
		{
			date   : new Date("09/14/2016"),
			Zinc   : 1.48, 
		},
		{
			date   : new Date("09/13/2016"),
			Zinc   : 1.58, 
		},
		{
			date   : new Date("09/12/2016"),
			Zinc   : 1.67, 
			NaOH   : 16.22,
		},
		{
			date   : new Date("09/08/2016"),
			Zinc   : 1.34, 
			NaOH   : 16.43,
		},
		{
			date   : new Date("09/07/2016"),
			Zinc   : 1.50, 
		},
		{
			date   : new Date("09/06/2016"),
			Zinc   : 1.65, 
			NaOH   : 16.32,
		},
		{
			date   : new Date("09/01/2016"),
			Zinc   : 1.31, 
			NaOH   : 16.22,
		},
		{
			date   : new Date("08/31/2016"),
			Zinc   : 1.31, 
		},
		{
			date   : new Date("08/25/2016"),
			Zinc   : 1.48, 
			NaOH   : 15.90,
		},
		{
			date   : new Date("08/24/2016"),
			Zinc   : 1.48, 
		},	
		{
			date   : new Date("08/22/2016"),
			Zinc   : 1.76, 
			NaOH   : 15.61,
		},	
		{
			date   : new Date("08/18/2016"),
			Zinc   : 1.32, 
			NaOH   : 15.05,
		},	
		{
			date   : new Date("08/17/2016"),
			Zinc   : 1.46, 
		},	
		{
			date   : new Date("08/15/2016"),
			Zinc   : 1.75, 
			NaOH   : 16.64,
		},	
		{
			date   : new Date("08/11/2016"),
			Zinc   : 1.48, 
			NaOH   : 16.43,
		},	
		{
			date   : new Date("08/10/2016"),
			Zinc   : 1.22, 
		},	
		{
			date   : new Date("08/08/2016"),
			Zinc   : 1.43, 
			NaOH   : 16.43,
		},	
		{
			date   : new Date("08/04/2016"),
			Zinc   : 1.25, 
			NaOH   : 15.90,
		},	
		{
			date   : new Date("08/03/2016"),
			Zinc   : 1.31, 
		},	
		{
			date   : new Date("08/01/2016"),
			Zinc   : 1.39, 
			NaOH   : 15.48,
		},	
		{
			date   : new Date("07/28/2016"),
			Zinc   : 1.22, 
			NaOH   : 15.79,
		},	
		{
			date   : new Date("07/27/2016"),
			Zinc   : 1.22, 
		},	
		{
			date   : new Date("07/26/2016"),
			Zinc   : 1.24, 
		},	
		{
			date   : new Date("07/25/2016"),
			Zinc   : 1.31, 
			NaOH   : 14.73,
		},	
		{
			date   : new Date("07/21/2016"),
			Zinc   : 1.37, 
			NaOH   : 15.68,
		},	
		{
			date   : new Date("07/20/2016"),
			Zinc   : 1.39, 
		},	
		{
			date   : new Date("07/19/2016"),
			Zinc   : 1.32, 
		},	
		{
			date   : new Date("07/18/2016"),
			Zinc   : 1.32, 
			NaOH   : 16.01,
		},	
		{
			date   : new Date("07/14/2016"),
			Zinc   : 1.31, 
			NaOH   : 16.32,
		},	
		{
			date   : new Date("07/13/2016"),
			Zinc   : 1.25, 
		},	
		{
			date   : new Date("07/12/2016"),
			Zinc   : 1.06, 
		},	
		{
			date   : new Date("07/11/2016"),
			Zinc   : 1.11, 
			NaOH   : 16.00,
		},			{
			date   : new Date("07/06/2016"),
			Zinc   : 1.32, 
		},	
		{
			date   : new Date("07/05/2016"),
			Zinc   : 1.36, 
			NaOH   : 16.96,
		},			{
			date   : new Date("06/27/2016"),
			Zinc   : 1.32, 
			NaOH   : 16.32,
		},	
		{
			date   : new Date("06/22/2016"),
			Zinc   : 1.4, 
		},
		{
			date   : new Date("06/20/2016"),
			Zinc   : 1.4, 
			NaOH   : 16.8,
		},	
		{
			date   : new Date("06/15/2016"),
			Zinc   : 1.4, 
			NaOH   : 16.1,
		},	
		{
			date   : new Date("06/13/2016"),
			Zinc   : 1.4, 
			NaOH   : 15.5,
		},
		{
			date   : new Date("06/09/2016"),
			Zinc   : 1.3, 
			NaOH   : 16.2,
		},	
		{
			date   : new Date("06/08/2016"),
			Zinc   : 1.4, 
			NaOH   : 16.3,
		},	
		{
			date   : new Date("06/06/2016"),
			Zinc   : 1.6, 
			NaOH   : 16.4,
		},	
		{
			date   : new Date("06/02/2016"),
			Zinc   : 1.5, 
			NaOH   : 16.9,
		},	
		{
			date   : new Date("05/31/2016"),
			Zinc   : 1.6, 
			NaOH   : 16.9,
		},	
		{
			date   : new Date("05/26/2016"),
			Zinc   : 1.4, 
			NaOH   : 16.5,
		},	
		{
			date   : new Date("05/25/2016"),
			Zinc   : 1.2, 
		},	
		{
			date   : new Date("05/24/2016"),
			Zinc   : 1.1, 
			NaOH   : 13.9,
		},
		{		
			date   : new Date("05/23/2016"),
			Zinc   : 1.5, 
			NaOH   : 17.0,
		},
		{		
			date   : new Date("05/16/2016"),
			Zinc   : 1.4, 
			NaOH   : 17.2,
		},	
		{
			date   : new Date("05/11/2016"),
			Zinc   : 1.3, 
			NaOH   : 15.6,
		},
		{		
			date   : new Date("05/10/2016"),
			Zinc   : 1.3, 
			NaOH   : 15.6,
		},	
		{
			date   : new Date("05/09/2016"),
			Zinc   : 1.3, 
			NaOH   : 14.8,
		},	
		{
			date   : new Date("05/02/2016"),
			Zinc   : 1.4, 
			NaOH   : 16.2,
		},	
		{
			date   : new Date("04/27/2016"),
			Zinc   : 1.5, 
			NaOH   : 16.3,
		},
		{		
			date   : new Date("04/25/2016"),
			Zinc   : 1.6, 
			NaOH   : 16.4,
		},
		{		
			date   : new Date("04/18/2016"),
			Zinc   : 1.3, 
			NaOH   : 16.1,
		},
		{		
			date   : new Date("04/14/2016"),
			Zinc   : 1.3, 
			NaOH   : 15.4,
		},	
		{
			date   : new Date("04/13/2016"),
			Zinc   : 1.3, 
		},	
		{
			date   : new Date("04/11/2016"),
			Zinc   : 1.4, 
			NaOH   : 16.0,
		},	
		{
			date   : new Date("04/06/2016"),
			Zinc   : 1.3, 
		},	
		{
			date   : new Date("04/04/2016"),
			Zinc   : 1.4, 
			NaOH   : 15.5,
		},	
		{
			date   : new Date("03/28/2016"),
			Zinc   : 1.4, 
			NaOH   : 15.6,
		},	
		{
			date   : new Date("03/23/2016"),
			Zinc   : 1.3, 
		},	
		{
			date   : new Date("03/21/2016"),
			Zinc   : 1.3, 
			NaOH   : 15.5,
		},
		{		
			date   : new Date("03/14/2016"),
			Zinc   : 1.3, 
			NaOH   : 15.3,
		},	
		{
			date   : new Date("03/07/2016"),
			Zinc   : 1.2, 
			NaOH   : 15.4,
		},
		{		
			date   : new Date("03/02/2016"),
			Zinc   : 1.4, 
		},
		{		
			date   : new Date("02/29/2016"),
			Zinc   : 1.5, 
			NaOH   : 15.8,
		},	
		{
			date   : new Date("02/25/2016"),
			Zinc   : 1.3, 
			NaOH   : 15.6,
		},
		{		
			date   : new Date("02/24/2016"),
			Zinc   : 1.3, 
		},
		{		
			date   : new Date("02/22/2016"),
			Zinc   : 1.4, 
			NaOH   : 14.3,
		},
		{		
			date   : new Date("02/18/2016"),
			Zinc   : 1.3, 
			NaOH   : 15.3,
		},
		{		
			date   : new Date("02/17/2016"),
			Zinc   : 1.1, 
		},
		{		
			date   : new Date("02/15/2016"),
			Zinc   : 1.4, 
			NaOH   : 16.9,
		},	
		{
			date   : new Date("02/11/2016"),
			Zinc   : 1.2, 
			NaOH   : 15.7,
		},	
		{
			date   : new Date("02/03/2016"),
			Zinc   : 1.2, 
			NaOH   : 15.9,
		},
		{		
			date   : new Date("02/01/2016"),
			Zinc   : 1.3, 
			NaOH   : 15.9,
		},	
		{
			date   : new Date("01/28/2016"),
			Zinc   : 1.1, 
			NaOH   : 16.1,
		},	
		{
			date   : new Date("01/27/2016"),
			Zinc   : 1.3,
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
var t1709 = {
	
	makeup : {
		date : new Date("November 28, 2016"),
		components: [
			{
			component  : "Nitric Acid",
			unit       : "%",
			makeupAt   : "0.25",
			amount     : "3000 mls"
			}
		]
	},
	tmfcParameters : {
		lineNumber     : 1709,
		applicationType: "Sour Dip",
		temp           : "60 - 90°F",
		conc           : "0.25- 0.75%",
		immersion      : "30 - 90sec",
		tankSize       : {
			lngth      : "58\"",
			width      : "48\"",
			depth      : "32\" (sol level)",
			capacity   : "160 gallons"
		
		},
		tankMaterial   : "Plastic",
		heatMethod     : "Steam Boiler",
		heatMaterial   : "n/a",
		coilType       : "Serpentine",
		agitationLevel : "Mild - ",
		agitationType  : "Compressed Air",
		TDS            : ""
	},	
};
