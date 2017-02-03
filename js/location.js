var TMFC1 = '<select class="lineNumbers">';
	TMFC1  +=	'<option value="">Select Line</option>';
	TMFC1  +=	'<option value="800">800 (Maganese/Zinc Phosphate)</option>';
	TMFC1  +=	'<option value="900">900 (ChemFilm)</option>';
	TMFC1  +=	'<option value="1300">1300 (Chloride Zinc - Barrel)</option>';
	TMFC1  +=	'<option value="1700">1700 (Alkaline Zinc - Rack)</option>';
	TMFC1  +=	'<option value="2500">2500 (Zinc-Nickel/Passivate)</option>';
	TMFC1  +='</select>';
	
var	TMFC2   = '<select class="lineNumbers">';
	TMFC2  +=	'<option value="">Select Line</option>';
	TMFC2  +=	'<option value="oven">Oven</option>';
	TMFC2  +=	'<option value="customer_product">Customer Product</option>';
	TMFC2  += '</select>';
	
var	TP = '<select class="lineNumbers">';
	TP += '<option value="">Select Line</option>';
	TP += '<option value="5700">5700</option>';
	TP += '<option value="5600">5600</option>';
	TP += '<option value="3200">3200</option>';
	TP += '</select>';
	
var AH = '<select class="lineNumbers">';
	AH += '<option value="">Select Line</option>';
	AH += '<option value="3500">3500</option>';
	AH += '<option value="1600">1600</option>';
	AH += '<option value="1200">1200</option>';
	AH += '</select>';
	
var sel = getCookie('.location');	

//Cookie functions for setting and retrieving, the duration I set is 24hrs only.	
function setCookie(key, value) {
    var expires = new Date();
    expires.setTime(expires.getTime() + (1 * 24 * 60 * 60 * 1000));
    document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
}

function getCookie(key) {
    var key = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');

    return key ? key[2] : null;
}

//When building is selected
$('.location').on('change', function () {
	
	var optionValue = $(this).val();
	
	if( optionValue === "tmfcBuidling1") {//If optionValue is tmfcBuidling1
		$('.lineNumbers').remove();//remove .lineNumbers
		$('.lineNumbersHolder').append(TMFC1).hide().fadeIn();//append TMFC1 to .lineNumbersHolder
	} else if(optionValue === "tmfcBuidling2") {
		$('.lineNumbers').remove();//remove .lineNumbers
		$('.lineNumbersHolder').append(TMFC2).hide().fadeIn();//append TMFC1 to .lineNumbersHolder
	} else if(optionValue === "aluminumHardcoat") {
		$('.lineNumbers').remove();//remove .lineNumbers
		$('.lineNumbersHolder').append(AH).hide().fadeIn();//append TMFC1 to .lineNumbersHolder
	} else if(optionValue === "tulsaPlating") {
		$('.lineNumbers').remove();//remove .lineNumbers
		$('.lineNumbersHolder').append(TP).hide().fadeIn();//append TMFC1 to .lineNumbersHolder
	} else {
		$('.lineNumbers').fadeOut().remove();//remove .lineNumbers
		$('.lineNumbersHolder').append("");
		$('.load').css('background', 'rgba(211,211,211,0.5)');
	}
	setCookie('.location', optionValue);
});

if (sel) {
    /* if cookie key 'select' is set change the '.location' selected value 
      and trigger the change() event.*/
    $('.location').val(sel).trigger('change');
}

//When line number is selected
$('.lineNumbersHolder').on('change', '.lineNumbers', function() {
	var optionValue = $(this).val(); 

	if( optionValue !== "" ) {
		$('.load').css('background', 'rgba(50,205,50, 0.5)');
	} else {
		$('.load').css('background', 'rgba(211,211,211,0.5)');
	}
	
})

//When 'Load Line' button is clicked
$('.load').on('click', function() {
	var optionValue = $('.lineNumbers option:selected').val();
	if(optionValue !== "") {
		window.location.href = optionValue + "Line.html";
	}
});

	