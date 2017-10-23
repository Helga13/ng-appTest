$(document).ready(function () {
  'use strict'
  $('a.scrollto').click(function (e) {
				e.preventDefault(); 
		var elementClick = $(this).data('href')
		var destination = $(elementClick).offset().top;
		$('html:not(:animated),body:not(:animated)').animate({scrollTop: destination}, 1100);
	});
  
})