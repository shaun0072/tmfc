var t1701 = {
	tmfcParameters : {
		concentrations     : {
			"SSP-140" : ["8 - 11", ' oz/gal'],
		},
		lineNumber     : 1701,
		applicationType: "Cleaner",
		temp           : "120 - 160°F",
		immersion      : "3 - 10 min",
		tankSize       : {
			lngth      : "72\"",
			width      : "56\"",
			depth      : "25\" (sol. level)",
			capacity   : "440 gallons"
		
		},
		tankMaterial   : "Steel",
		heatMethod     : "Steam Boiler",
		heatMaterial   : "Carbon Steel",
		coilType       : "Serpentine",
		agitationLevel : "Mild - ",
		agitationType  : "Compressed Air",
		TDS            : "Cleaner SSP-140 TDS.png"
	},
	makeup : {
		date : new Date("October 1, 2016"),
		components: [
			{
			component  : "Cleaner SSP-140",
			unit       : " oz/gal",
			makeupAt   : "10",
			amount     : "275 lbs"
			}
		]
	},
	analysis : [
		{
			date : new Date("12/7/2016"),
			"SSP-140"  : 9.81
		},
		{
			date : new Date("11/21/2016"),
			"SSP-140"  : 10.01
		},
		{
			date : new Date("11/08/2016"),
			"SSP-140"  : 10.64
		},
		{
			date : new Date("10/24/2016"),
			"SSP-140": 9.2
		},
		{
			date : new Date("10/11/2016"),
			"SSP-140": 8.13
		},
		{
			date : new Date("10/3/2016"),
			"SSP-140": 6.61
		},
		{
			date : new Date("9/1/2016"),
			"SSP-140": 8.36
		},
		{
			date : new Date("8/17/2016"),
			"SSP-140": 9.5
		},
		{
			date : new Date("8/9/2016"),
			"SSP-140": 9.5
		},
		{
			date : new Date("7/21/2016"),
			"SSP-140": 10.41
		},
		{
			date : new Date("7/5/2016"),
			"SSP-140": 8.22
		},
	],
	additions : [
		{
			date : new Date("10/24/2016"),
			component : {
				"SSP-140" : [25, " lbs"],
			}
		},
		{
			date : new Date("10/17/2016"),
			component : {
				"SSP-140" : [25, " lbs"],
			}
		},
		{
			date : new Date("10/11/2016"),
			component : {
				"SSP-140" : [100, " lbs"],
			}
		},
		{
			date : new Date("10/24/2016"),
			component : {
				"SSP-140" : [25, " lbs"],
			}
		},
		{
			date : new Date("8/9/2016"),
			component : {
				"SSP-140" : [15, " lbs"],
			}
		},
		{
			date : new Date("7/5/2016"),
			component : {
				"SSP-140" : [50, " lbs"],
			}
		},
	]	
};
var t1704 = {
	tmfcParameters : {
		concentrations     : {
			"HCL" : ["25 - 30", '%']
		},
		lineNumber     : 1704,
		applicationType: "Acid Pickle",
		temp           : "Ambient",
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
	makeup : {
		date : new Date("December 9, 2016"),
		components: [
			{
			component  : "Hydrochloric Acid",
			unit       : "%",
			makeupAt   : "25",
			amount     : "110 gallons"
			}
		]
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
	tmfcParameters : {
		concentrations     : {
			"Zinc"             : ["1.0 - 1.5", " oz/gal"],
			"NaOH"             : ["15 - 18", " oz/gal"],
			"Carbonates"       : ["<10", " oz/gal"],
			"Iron"             : ["<10", " ppm"],
			"Chromium"         : ["<10", " ppm"],

		},
		lineNumber         : 1706,
		applicationType    : "Electro-Plating",
		temp               : "70 - 100°F",
		immersion          : "",
		tankSize           : {
			lngth          : '142\"',
			width          : '54.5"',
			depth          : '26"' + ' (sol. level)',
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
	makeup : {
		date : new Date("July 5, 2016"),
		components: [
			{
			component  : "Zinc Sol 2272",
			unit       : " oz/gal",
			makeupAt   : "1.3",
			amount     : "69 gallons"
			},
			{
			component  : "Sodium Hydroxide",
			unit       : " oz/gal",
			makeupAt   : "16.0",
			amount     : "1,165 lbs"
			},
			{
			component  : "Havastar ZN Gleam A",
			unit       : "%",
			makeupAt   : "1",
			amount     : "11.5 gal"
			},
			{
			component  : "Havastar ZN Gleam B",
			unit       : "%",
			makeupAt   : "0.75",
			amount     : "8.5 gal"
			},
			{
			component  : "Havtech ZN Purifier",
			unit       : "%",
			makeupAt   : "0.1",
			amount     : "4500 mls"
			},
			{
			component  : "NCZ Conditioner",
			unit       : " lbs",
			makeupAt   : "",
			amount     : "50 lbs"
			},
			{
			component  : "Iron",
			unit       : " ppm",
			},
		]
	},
	analysis : [
		{
			date   : new Date("12/01/2016"),
			Zinc   : 1.46, 
			NaOH   : 15.48,
			temp   : {
				"8:00AM" : 72,
				"11:30AM": 77,
				"3:00PM" : 81
			}
		},
		{
			date   : new Date("11/28/2016"),
			Zinc   : 1.74, 
			NaOH   : 16.43,
			temp   : {
				"8:00AM" : 61,
				"11:30AM": 70,
				"3:00PM" : 75
			}
		},
		{
			date   : new Date("11/23/2016"),
			Zinc   : 1.31, 
			NaOH   : 16.32,
			temp   : {
				"8:00AM" : 68,
				"11:30AM": 72,
				"3:00PM" : 73
			}
		},	
		{
			date   : new Date("11/21/2016"),
			Zinc   : 1.34, 
			NaOH   : 16.43,
			temp   : {
				"8:00AM" : 70,
				"11:30AM": 77,
				"3:00PM" : 80
			}
		},	
		{
			date   : new Date("11/17/2016"),
			Zinc   : 1.39, 
			NaOH   : 16.43,
			temp   : {
				"8:00AM" : 72,
				"11:30AM": 77,
			}
		},	
		{
			date   : new Date("11/14/2016"),
			Zinc   : 1.48, 
			NaOH   : 16.64,
			temp   : {
				"8:00AM" : 72,
			}
		},
		{
			date   : new Date("11/10/2016"),
			Zinc   : 1.39, 
			NaOH   : 16.54,
			temp   : {
				"8:00AM" : 75,
				"11:30AM": 79,
				"3:00PM" : 85
			}
		},	
		{
			date   : new Date("11/09/2016"),
			Zinc   : 1.46, 
			temp   : {
				"8:00AM" : 76,
				"11:30AM": 81,
				"3:00PM" : 81
			}
		},	
		{
			date   : new Date("11/07/2016"),
			Zinc   : 1.50, 
			NaOH   : 17.07,
			temp   : {
				"8:00AM" : 73,
				"11:30AM": 76,
				"3:00PM" : 82
			}
		},
		{
			date   : new Date("11/03/2016"),
			Zinc   : 1.39, 
			NaOH   : 16.96,
			temp   : {
				"8:00AM" : 80,
				"11:30AM": 77,
				"3:00PM" : 81
			}
		},
		{
			date   : new Date("11/02/2016"),
			Zinc   : 1.34, 
			temp   : {
				"8:00AM" : 72,
				"11:30AM": 77,
				"3:00PM" : 81
			}
		},
		{
			date   : new Date("10/31/2016"),
			Zinc   : 1.77, 
			NaOH   : 16.11,
			temp   : {
				"8:00AM" : 72,
				"11:30AM": 77,
				"3:00PM" : 81
			}
		},
		{
			date   : new Date("10/27/2016"),
			Zinc   : 1.39, 
			NaOH   : 16.43,
			temp   : {
				"8:00AM" : 72,
				"11:30AM": 77,
				"3:00PM" : 81
			}
		},
		{
			date   : new Date("10/26/2016"),
			Zinc   : 1.43, 
			temp   : {
				"8:00AM" : 72,
				"11:30AM": 77,
				"3:00PM" : 81
			}
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
			date       : new Date("09/22/2016"),
			Zinc       : 1.4, 
			NaOH       : 16.8,
			Carbonates : 4.9,
			Iron       : 2.1,
			Chromium   : 1.4,
			Copper     : 1.6,
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
			date : new Date("12/03/2016"),
			component : {
				"Zinc Hydroxide" : [10, "gal"],
				"NaOH"           : [100, "lbs"]
			}
		},
		{
			date : new Date("10/31/2016"),
			component : {
				"NaOH"           : [50, "lbs"]
			}
		},
		{
			date : new Date("10/12/2016"),
			component : {
				"Zinc Hydroxide" : [10, "gal"],
			}
		},
		{
			date : new Date("09/26/2016"),
			component : {
				"NaOH"           : [50, "lbs"]
			}
		},
		{
			date : new Date("09/12/2016"),
			component : {
				"NaOH"           : [50, "lbs"]
			}
		},
		{
			date : new Date("08/25/2016"),
			component : {
				"NaOH"           : [50, "lbs"]
			}
		},
		{
			date : new Date("08/18/2016"),
			component : {
				"NaOH"           : [50, "lbs"]
			}
		},
		{
			date : new Date("08/10/2016"),
			component : {
				"Zinc Hydroxide" : [10, "gal"],
			}
		},
		{
			date : new Date("08/04/2016"),
			component : {
				"NaOH"           : [50, "lbs"]
			}
		},
		{
			date : new Date("08/01/2016"),
			component : {
				"NaOH"           : [50, "lbs"]
			}
		},
		{
			date : new Date("07/25/2016"),
			component : {
				"NaOH"           : [100, "lbs"]
			}
		},
		{
			date : new Date("07/12/2016"),
			component : {
				"Zinc Hydroxide" : [10, "gal"],
			}
		},
		
	],
	
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
