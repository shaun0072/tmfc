var TMFC1 = '<select class="lineNumbers">';
	TMFC1  +=	'<option value="800">800 (Maganese Phosphate)</option>';
	TMFC1  +=	'<option value="900">900 (ChemFilm)</option>';
	TMFC1  +=	'<option value="1300">1300 (Chloride Zinc - Barrel)</option>';
	TMFC1  +=	'<option value="1700">1700 (Alkaline Zinc - Rack)</option>';
	TMFC1  +=	'<option value="2500">2500 (Zinc-Nickel)</option>';
	TMFC1  +='</select>';
var	TMFC2 = '<select class="lineNumbers">';
	TMFC2  +=	'<option value="oven">Oven</option>';
	TMFC2  +=	'<option value="customer_product">Customer Product</option>';
	TMFC2  +='</select>';
var	TP = '<select class="lineNumbers">';
	TP += '<option value="5700">5700</option>';
	TP += '<option value="5600">5600</option>';
	TP += '<option value="3200">3200</option>';
	TP += '</select>';
	
var AH = '<select class="lineNumbers">';
	AH += '<option value="3500">3500</option>';
	AH += '<option value="1600">1600</option>';
	AH += '<option value="1200">1200</option>';
	AH += '</select>';

$('.lineNumbersHolder').append(TMFC1);

$('.location').on('change', function () {
	
	var optionValue = $('.location option:selected').val();
	
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
	}
});

$('.load').on('click', function() {
	window.location.href = "1700Line.html";
});

	