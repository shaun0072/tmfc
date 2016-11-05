$('.process_control h3').on('click', function() {
	
	var $targetList = $(this).siblings('ul');
	
	$('.process_control h3').each(function() {
		
		var $controlTitle = $(this)[0],
			$clickedTitle = $targetList.siblings('h3')[0];
			
			if( $controlTitle !== $clickedTitle ) {
				$(this).siblings('ul').slideUp();
				console.log($controlTitle);
				console.log($clickedTitle);
			}
	})
	
	
	$targetList.slideToggle();

})