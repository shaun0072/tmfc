$('body').on('click', '.process_control h3' ,function() {
	var $targetList = $(this).siblings('ul'),
		$title = $(this);
	
	$('.process_control h3').each(function() {
		
		var $controlTitle = $(this)[0],
			$clickedTitle = $targetList.siblings('h3')[0];
			
			if( $controlTitle !== $clickedTitle ) {
				$(this).siblings('ul').slideUp(200);

			}
	})
	

	$targetList.slideToggle(200);

})