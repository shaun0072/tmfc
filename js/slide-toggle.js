$('.process_control h3').on('click', function() {
	
	var $targetList = $(this).siblings('ul'),
		$title = $(this);
	
	$('.process_control h3').each(function() {
		
		var $controlTitle = $(this)[0],
			$clickedTitle = $targetList.siblings('h3')[0];
			
			if( $controlTitle !== $clickedTitle ) {
				$(this).siblings('ul').slideUp();

			}
	})
	
	$('.process_control h3').css("font-weight", "400");
	$title.css("font-weight", "700");
	$targetList.slideToggle();

})